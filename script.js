let y;
let units = [];

class unit {
  constructor(nameIn){
    this.name = nameIn;
    this.type= "";
    this.pts_in= null;
    this.pts_reg=null;
    this.pts_vet=null;
    this.weapon="";
    this.armor="";
  }
}


let loadXMLDoc = () => {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xmlhttp.open("GET", "data.xml" , true);
    xmlhttp.send();
  }

  
function myFunction(xml) {
  var x, i, xmlDoc, table;
  xmlDoc = xml.responseXML;
  table = "<tr><th>Unit</th><th>Type</th><th>Index</th><th>Points Cost</th></tr>";

y = xmlDoc.getElementsByTagName("selectionEntry");



//1: Find all unit types
// Do this by querying type "unit" within selectionEntry objects

//Test
for(let i=0;i<y.length;i++){
    if(y[i].getAttribute("type") == "unit"){
      //i is not an accurate iterator!!
    units.push(new unit(y[i].getAttribute("name")));
    let iter = units.length-1;
   units[iter].type = "test";

   //Test if unit features a profile
   // If this passes, can grab target ID, query target, then grab target class type
   let typeId = y[i].getElementsByTagName("profile")
   if(typeId.length > 0){
    console.log(y[i].getAttribute("targetId"));
    console.log(typeId);
   }
  
   //.getAttribute("targetId");


    }
}

//2: Find unit types
//Use unit IDs to crossreference target id, grab category
/*
for(let i=0; i<3; i++){
    let target = units[i].getAttribute('id');
    let obj = xmlDoc.getElementById(target);
    let costs = obj.getElementsByTagName("cost");
    console.log(obj);
    console.log(target);
    console.log(costs);
    for(let m=0; m<costs.length-1;m++){
    console.log(costs[m].getAttribute("value") + "  " + costs[m].parentNode.parentNode.getAttribute("name"));
}
}*/

//Can get point values by selectionEntryGroups -> selectionEntry objects



//Find Unit Point Values
/*
for(let q=0; q<5; q++){
    //loop through every item. Dig down into selectionEntry -> selectionEntryGroups -> selectionEntryGroup -> selectionEntries -> selectionEntry -> costs -> cost
   // let c = units[q].getElementsByTagName("cost");
   // console.log("Point value for " + c[0].parentNode.parentNode.getAttribute("name") + " is " + c[0].getAttribute("value"))
   // console.log(c[0]);
    //units[q][0][0] = c[q].getAttribute("value")
}*/


for (let i = 0; i < units.length; i++){
  
    table += "<tr><td>" + 
       // units_stack[i].getAttribute("name") +
       units[i].name;
     "</td><td>" +
        //slectionEntry.selectionEntryGroups -> selectionEntryGroup with name = Rating
      //  y[i].childNodes[]
     +
      "</td><td>" + i
        +"</td><td>"+
      
            //units[i][0];
     +
    "</td></tr>";
    
}
document.getElementById("demo").innerHTML = table;

}

