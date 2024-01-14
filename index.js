var table = document.getElementById('table')

function ColorCode() {
   
    for (let i = 0; i <table.rows.length; i++) {
        var row = table.rows[i];
        for (let r = 0; r < row.cells.length; r++) {
            console.log(row.cells[r].style.backgroundColor )
           let content = table.rows[i].cells[r].innerHTML
         table.rows[i].cells[r].style.backgroundColor  = argb(255-(parseInt(content)*25),255,255-(parseInt(content)*25))
        
        }
    }
}
function dataOutput() {
    document.getElementById('data').value = table.innerHTML
}

function quip() {
    let untrained = Infinity; // Use Infinity for a more robust initial value
    let chosen = ''; // Initialize chosen as an empty string

  
    for (let i = 1; i < table.rows.length; i++) {
      const row = table.rows[i];
      let stat = 0;
  
      for (let r = 1; r < row.cells.length; r++) {
        const cellValue = row.cells[r].textContent.trim(); // Get cell content and trim whitespace
        const parsedValue = parseInt(cellValue);
  
        if (!isNaN(parsedValue)) {
          stat += parsedValue;
        } else {
          console.warn(`Invalid value in row ${i + 1}, cell ${r + 1}: ${cellValue}`); // Warn for invalid values
        }
      }
  
      if (stat < untrained) { // Use '<' to ensure only the lowest stat is chosen
        untrained = stat;
        chosen = row.cells[0].textContent.trim(); // Access name from the first cell and trim whitespace
      }
    }
  
    document.getElementById('qoute').textContent = `The most untrained employee is ${chosen}, if there is extra time, teach them something.`; // Use textContent for plain text output
  }
function dataFind(){
table.innerHTML = document.getElementById('data').value
}
function createRow() {
    if (table.innerHTML == 0) {
        table.innerHTML += '<tr><td></td>'+ multString('<td>JobName</td>',5) + "</tr>"
        return
    }
 table.innerHTML +="<tr><td>Name</td>"+multString('<td></td>', table.rows[0].cells.length-1)+"</tr>"
  
}
function UseDemo() {
 table.innerHTML ="<tr><th></th><th>Bagging</th><th>Register</th><th>Drive-thru</th><th>drinks</th><th>frier</th></tr><tr><td>tom</td><td>1</td><td>4</td><td>0</td><td>2</td><td>4</td></tr><tr><td>Amara</td><td>5</td><td>0</td><td>1</td><td>0</td><td>2</td></tr><tr><td>John</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td></tr><tr><td>Chelsea</td><td>0</td><td>0</td><td>1</td><td>1</td><td>2</td></tr><tr><td>Raph</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td></tr>"
}

function createColl() {
   let init = false;
    if (table.rows.length == 0) {
        init = true
    }
    for (let i = 0; i <table.rows.length; i++){
    if (init) {
          if(i==0) { table.rows[i].innerHTML += '<td></td>'}else{ table.rows[i].innerHTML += "<td>Name;</td>";}
        } else{ table.rows[i].innerHTML += '<td></td>'}

    }
         
}

function multString(string,amount) {
    awns = ''
for (let i = 0; i < amount; i++) {
    awns += string
}
return awns
}

function argb(r,g,b){
    if (r == NaN) { r = 200}
    if (g == NaN) { g = 200}
    if (b == NaN) { b = 200}
    return `rgb(${r},${g},${b})`

}

