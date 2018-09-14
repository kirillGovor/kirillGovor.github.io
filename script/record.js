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
        // нам всё равно, что было прочитано - 
        // всё равно перезаписываем
        var info={
            name : Nick.value,
            score : hash.score
        };
        
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
    for (var i =1;i<=5;i++){
    table[i].innerHTML="<td>"+i+"</td><td>"+info.name+"</td><td>"+infor.score+"</td>";
}
}

function errorHandler(jqXHR,statusStr,errorStr) {
    alert(statusStr+' '+errorStr);
}

restoreInfo();
}