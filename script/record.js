function myRecord() {
    var tableDivRecords = document.getElementById("tableDivRecords");
    tableDivRecords.style.display = "block";
}

function backTable() {
    var tableDivRecords = document.getElementById("tableDivRecords");
    tableDivRecords.style.display = "none";
}

function records() {
  
var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
var updatePassword;
var stringName='GOVOR_TEST_INFO';
var Nick = document.getElementById("Nick");

    updatePassword=Math.random();
    $.ajax( {
            url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
            data : { f : 'LOCKGET', n : stringName, p : updatePassword },
            success : lockGetReady, error : errorHandler
        }
    );


function lockGetReady(callresult) {
    if ( callresult.error!=undefined )
        alert(callresult.error); 
    else {

        var test = {
            rec:JSON.parse(callresult.result),
        }

        var info={
           name : test.rec.name + Nick.value+"$",
           score :test.rec.score + hash.score+"$",

        };
       
     
        var k="";
        $.ajax( {
                url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
                data : { f : 'UPDATE', n : stringName, v : JSON.stringify(info), p : updatePassword },
                success : updateReady, error : errorHandler
            }
        );
    }
}

function updateReady(callresult) {
    if ( callresult.error!=undefined )
        alert(callresult.error); 
}

function restoreInfo() {
    $.ajax(
        {
            url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
            data : { f : 'READ', n : stringName },
            success : readReady, error : errorHandler
        }
    );
}

function readReady(callresult) {
    var table=document.getElementsByTagName("tr");
    var test = {
        rec:JSON.parse(callresult.result),
    }
    var nameP=test.rec.name.split("$");
    var scoreP=test.rec.score.split("$");



    for (var a = 0, endI = scoreP.length - 1; a < endI; a++) { //сортировка пузырьком чисел
        for (var j = 0, endJ = endI - a; j < endJ; j++) {
            if (scoreP[j] < scoreP[j + 1]) {
                scoreP[j]=Number(scoreP[j]);
                scoreP[j+1]=Number(scoreP[j+1]);
                var swap = scoreP[j];
                var nameKey=nameP[j];
                nameP[j]=nameP[j+1];
                nameP[j+1]= nameKey;
                scoreP[j] = scoreP[j + 1];
                scoreP[j + 1] = swap;
            }
        }
    }




    for (var i =1;i<=5;i++){
    table[i].innerHTML="<td>"+i+"</td><td>"+nameP[i-1]+"</td><td>"+scoreP[i-1]+"</td>";
}








}

function errorHandler(jqXHR,statusStr,errorStr) {
    alert(statusStr+' '+errorStr);
}

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  }

restoreInfo();
}