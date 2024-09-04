/*-----------------------------------------*\
    "Copy to Clipboard" Button & Highlight
    Code Text in BBCode CODE blocks
    Created by Luna of Free Codes
    https://freecodes.jcink.net
    Designed for use on Jcink Forums
\*-----------------------------------------*/

$(document).ready(function () {
  $('[id="CODE-WRAP"]').each(function () {
    const codeWrap = $(this);

    //create copy button
    const copyBtn = $('<button>').text('COPY').addClass('button-small copy-button');

    //append to header
    const codeBlockHeader = codeWrap.find('tbody > tr:first-child > td');
    codeBlockHeader.append(copyBtn);

    //grab codeblock
    const codeBlock = codeWrap.find('#CODE');

    copyBtn.on('click', function () {
      // if Clipboard API is supported and codeBlock exists
      if (navigator.clipboard && codeBlock) {
        navigator.clipboard.writeText(codeBlock.text()).then(
          function () {
            copyBtn.text('✓ COPIED!');

            // highlight text inside the code block
            if (window.getSelection) {
              const selection = window.getSelection();
              const range = document.createRange();
              range.selectNodeContents(codeBlock.get(0));
              selection.removeAllRanges();
              selection.addRange(range);
            }

            // Revert button text back to "COPY" after 2.5 seconds
            setTimeout(function () {
              copyBtn.text('COPY');
            }, 2500);
          },
          function (err) {
            alert('Error in copying text: ' + err);
          },
        );
      } else {
        // Fallback for older browsers
        var textarea = $('<textarea>').val(codeBlock.text());
        $('body').append(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          copyBtn.text('✓ COPIED!');
        } catch (err) {
          alert('Fallback: Oops, unable to copy ' + err);
        }
        textarea.remove();
      }
    });
  });
});
