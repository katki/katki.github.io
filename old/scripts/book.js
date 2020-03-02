var visibleTable;

/**
 * Pull data from google sheets and create table
 */
function init() {
    var keybooks = 'https://docs.google.com/spreadsheets/d/14O4xQZfwI4gsruKS0ttkBsvLn2mKpGmZMUz0zlZyFvI/edit?usp=sharing';

    myBooksTable = Tabletop({
        key: keybooks,
        callback: function(data){
            visibleTable = data;
            updateTable(visibleTable); 
        },
        simpleSheet: true
    });
}
window.addEventListener('DOMContentLoaded', init)