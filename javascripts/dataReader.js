var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1afj4Hpn-YytvBKlId-e0Htre0zPRS3rnsw1OIe8MhQc/edit?usp=sharing';
var x = 0;
var x1;
var cont = true;
var prior = "";

function init() {
    
    Tabletop.init({
        key: publicSpreadsheetUrl,
        callback: showInfo,
        reverse: true
    })
    document.getElementById("comment").innerHTML = "";
   
}

function showInfo(data, tabletop) {
    x1 = data.Form_Responses_1.elements.reverse();
    
    x1.forEach(element => {
        
        if(element.SignMyShirt == "REMOVED" || element.SignMyShirt.toUpperCase() == prior.toUpperCase()){
            return;
        }

        prior = element.SignMyShirt;

        var div = document.createElement("div");
        div.className = "commentDivs";
        // time span
        var timeSpan = document.createElement("span");
        timeSpan.className = "timeStamps";
        timeSpan.innerText = element.Timestamp + "-";
        div.appendChild(timeSpan);

        // message span
        var messageSpan = document.createElement("span");
        messageSpan.className = "messages"
        messageSpan.innerText = element.SignMyShirt;
        div.appendChild(messageSpan);

        document.getElementById("comment").appendChild(div);
    });

}



window.addEventListener('DOMContentLoaded', init)