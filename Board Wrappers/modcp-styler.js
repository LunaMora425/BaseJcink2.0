/*-----------------------------------------*\
    MODCP Styler
    Created by Luna of Free Codes
    https://freecodes.jcink.net
    Designed for use on Jcink Forums
    to add targetable and stylable classes
    to the tables in the Mod CP
\*-----------------------------------------*/

$(document).ready(function () {
  // If the window.location.href contains "modcp" then the script will run
  if (window.location.href.indexOf('modcp') > -1) {
    // Grab all the tables on the page that are within a .tableborder class and for each table
    $('#modcp-content .tableborder > table').each(function () {
      // create an empty array called headers
      const headers = [];
      // grab all the <tr> in the table
      const trs = $(this).find('tr');

      // if there are only 2 <tr> in the table, skip the table
      // this means the table is empty because the second tr is always the table headers,
      // so we can skip it
      if (trs.length < 2) {
        return;
      }

      // add a class to the table so we can style it
      $(this).addClass('modcp-table');

      // the second <tr> of the table will always contain the table headers
      // we want to start from the 2nd <tr> and grab the headers for the columns
      $(trs[1])
        .find('td')
        .each(function () {
          // if the <td> contains a lol="lol" attribute, grab the text
          // and add it to the headers array from above
          if ($(this).attr('lol') === 'lol') {
            const headerText = $(this).text();
            headers.push(headerText);
          }
        });

      // starting from the 3rd <tr> (which is the rest of the table), loop through each <td>
      for (var i = 2; i < trs.length; i++) {
        const tds = $(trs[i]).find('td');
        // again, this means the table is empty, so skip it
        if (tds.length < 2) {
          return;
        }
        // for everything else:
        $(tds).each(function (index) {
          // the index of the header array will always match the index of the <td> in the <tr>
          if (headers[index]) {
            // make a sanitized version of the header text to be used as a class
            const sanitizedHeader = headers[index].replace(/[\s?:]+/g, '').toLowerCase();
            // add the class to the <td>
            $(this).addClass(sanitizedHeader);
            // then add the header text to the <td> as a span
            const originalHeaderText = headers[index];
            $(this).prepend(`<span class="header-name">${originalHeaderText}:</span>`);
          }
        });
      }
    });
  }
});
