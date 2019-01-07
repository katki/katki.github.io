var visibleTable;

/**
 * Pull data from google sheets and create table
 */
function init() {
    var keyWishlist = 'https://docs.google.com/spreadsheets/d/1nEMknanCiKdqTTl9uXsYeVR13mFNwaZdhkMAj2rveHI/edit?usp=sharing';

    wishListTable = Tabletop({
        key: keyWishlist,
        callback: function(data) { 
            visibleTable = data;
            updateTable(visibleTable); 
        },
        simpleSheet: true
    });
}
window.addEventListener('DOMContentLoaded', init)