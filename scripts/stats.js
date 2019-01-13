var myBooksTable;
var bcgColor = [
    "#845EC2",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#FFC75F",
    "#F9F871",
    "#00A4DE",
    "#00DBAD",
    "#D169A3",
    "#9A67A5",
    "#5DAF6F",
    "#D7FADB",
    "#FFDE82",
    "#F9F871",
    "#257A3E",
    "#8BEB9B",
    "#006F5F",
    "#FF8BC9",
    "#00B2FF",
    "#94003B"
]

function init() {
    var keybooks = 'https://docs.google.com/spreadsheets/d/14O4xQZfwI4gsruKS0ttkBsvLn2mKpGmZMUz0zlZyFvI/edit?usp=sharing';
    myBooksTable = Tabletop({
        key: keybooks,
        callback: function(data){
            myBooksTable = data;
          
            var res = 0;
            
            var zanerAcc = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
            var zanerLabels = ["Román","Sci-fi","Fantasy","Historický román","Detektívka","Humor, satira","Young adult","Informatika","Veda, technika","Politika","Motvačná literatúra","História","Ezoterika","Rozprávka","Filozofia","Encyklopédia","Poézia","Kuchárka","Iné"];
            
            var vydavatelstvaAcc = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
            var vydavatelstvaLabels = ["Albatros","Anch Books","Aktuel","Apetit","BizBooks","Computer Press","CooBoo Bux","Fortuna Litera","Fragment","Grada","Ikar","Motýľ","Motto","Noxi","Premedia","Slovart","TedX","Yoli","Neviem"];
            
            for(var i = 0; i < myBooksTable.length; i++){
                res = res + Number(myBooksTable[i].pocetStran);
                zanerAcc = chartData(zanerAcc, myBooksTable[i].zaner, zanerLabels);
                vydavatelstvaAcc = chartData(vydavatelstvaAcc, myBooksTable[i].vydavatelstvo, vydavatelstvaLabels);
            }
              
            var numAnim1 = new CountUp('pages', 0, res);
            var numAnim2 = new CountUp("pagesThisYear", 0, 0);
            var numAnim3 = new CountUp("books", 0, myBooksTable.length);
            
            var money = getMoney();
            console.log(money)
            numAnim1.start();
            numAnim2.start();
            numAnim3.start();

            createChart("myChart", "pie", zanerLabels, zanerAcc);
            createChart("vydavatelstvoChart", "pie", vydavatelstvaLabels, vydavatelstvaAcc);
        },
        simpleSheet: true
    });
}
window.addEventListener('DOMContentLoaded', init);



function createChart(sId, sType, aLabels, aData){
    console.log(aData)
    for(var i = 0; i < aData.length; i++){
        for(var j = 0; j < aData.length; j++){
            if(aData[j] < aData[j+1]){
                var swap = aData[j];
                aData[j] = aData[j+1];
                aData[j+1] = swap;

                swap = aLabels[j];
                aLabels[j] = aLabels[j+1];
                aLabels[j+1] = swap;
            }
        }
    }
    var myLabels = [aLabels[0], aLabels[1], aLabels[2], aLabels[3], aLabels[4]];
    var myData = [aData[0], aData[1], aData[2], aData[3], aData[4]];

    var ctx = document.getElementById(sId).getContext('2d');
    var myChart = new Chart(ctx, {
        type: sType,
        data: {
            labels: myLabels,
            datasets: [{
                label: '# of Votes',
                data: myData,
                backgroundColor: bcgColor,
            borderColor: bcgColor,
            borderWidth: 1
        }]
        }
    });
}

function chartData(acc, item, label){
    switch(item){
        case label[0]: acc[0]++; break;
        case label[1]: acc[1]++; break;
        case label[2]: acc[2]++; break;
        case label[3]: acc[3]++; break;
        case label[4]: acc[4]++; break;
        case label[5]: acc[5]++; break;
        case label[6]: acc[6]++; break;
        case label[7]: acc[7]++; break;
        case label[8]: acc[8]++; break;
        case label[9]: acc[9]++; break;
        case label[10]: acc[10]++; break;
        case label[11]: acc[11]++; break;
        case label[12]: acc[12]++; break;
        case label[13]: acc[13]++; break;
        case label[14]: acc[14]++; break;
        case label[15]: acc[15]++; break;
        case label[16]: acc[16]++; break;
        case label[17]: acc[17]++; break;
        case label[18]: acc[18]++; break;
        default: acc[18]++; break;
    }
    return acc;
}

function getMoney(){
    var money = 0;
    for(var i = 0; i < myBooksTable.length; i++){
        var date = new Date(myBooksTable[i].kupene);
        var actualDate = new Date();
        if(date.getFullYear() === actualDate.getFullYear()){
            money = money + myBooksTable[i].cena;
        }
    }
    return money;
}



