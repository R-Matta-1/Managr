var table = document.getElementById('table')

function ColorCode() {
   
    for (let i = 0; i <table.rows.length; i++) {
        var row = table.rows[i];
        for (let r = 0; r < row.cells.length; r++) {
            console.log(3)
            let content = table.rows[i].cells[r].innerHTML
            table.rows[i].cells[r].style.backgroundColor = 'white'
            table.rows[i].cells[r].style.backgroundColor  = argb(255-(parseInt(content)*25),255,255-(parseInt(content)*25))
        }
        dumbest = quip(false) 
     
        table.rows[dumbest].cells[0].style.backgroundColor  = argb(255,100,100)
       
    }
}
function dataOutput() {
    document.getElementById('data').value = table.innerHTML
}

function tableToMatrix( ){
mat = []
for (let i = 0; i <table.rows.length; i++) {
    var row = table.rows[i];
    mat.push([])
    for (let r = 0; r < row.cells.length; r++) {

        let content = table.rows[i].cells[r].innerHTML
        mat[i].push(content)
    
    }
}
return mat    }


function quip(mess) {

let mass = tableToMatrix()
  
let smallestSum = Infinity;
let smallestIndex = -1;
    for (let i = 1; i < mass.length; i++) {
      let currentSum = 0;

      for (let r = 1; r < mass[i].length; r++) {
        let cellValue =  mass[i][r]// Get cell content and trim whitespace
        let parsedValue = parseInt(cellValue);
  
        if (!isNaN(parsedValue)) {
            currentSum += parsedValue;
        } 
      }
      if (currentSum < smallestSum) {
        smallestSum = currentSum;
        smallestIndex = i;
      }
    }
  if (mess) {
      document.getElementById('qoute').textContent = `The most untrained employee is ${mass[smallestIndex][0]}, if there is extra time, train them in a new skill.`; // Use textContent for plain text output
  }
return smallestIndex
  }


function dataFind(){
table.innerHTML = document.getElementById('data').value
}
function createRow() {
    if (table.rows.length >= 8) {
        return;
    } 
    if (table.innerHTML == '') {
        table.innerHTML += '<tr><td></td>'+ multString('<td>JobName</td>',5) + "</tr>"
        return
    }
 table.innerHTML +="<tr><td>Name</td>"+multString('<td></td>', table.rows[0].cells.length-1)+"</tr>"
  
}
function UseDemo() {
 table.innerHTML ="<tr><th></th><th>Bagging</th><th>Register</th><th>Drive-thru</th><th>drinks</th><th>frier</th></tr><tr><td>tom</td><td>1</td><td>4</td><td>0</td><td>2</td><td>4</td></tr><tr><td>Amara</td><td>5</td><td>0</td><td>1</td><td>0</td><td>2</td></tr><tr><td>John</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td></tr><tr><td>Chelsea</td><td>0</td><td>0</td><td>1</td><td>1</td><td>2</td></tr><tr><td>Raph</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td></tr>"
}
function deliverHTML() {
   document.getElementById('Deliver').innerText =  tinymce.get('mytextarea').getContent()
}
function createColl() {
   let init = false;
    if (table.rows[0].cells.length == 0) {
        init = true
    }
    if (table.rows[0].cells.length == 8) {
       return;
    }
    for (let i = 0; i <table.rows.length; i++){
    if (init) {
          if(i==0) { table.rows[i].innerHTML += '<td></td>'}else{ table.rows[i].innerHTML += "<td>Name;</td>";}
        } else{ table.rows[i].innerHTML += '<td></td>'}

    }
     collTrack+=1    
}
var collTrack =1
function removeColl(){
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].deleteCell(table.rows[i].cells.length-1)
    collTrack+=1
    
  } 
}
function removeRow(){
 table.deleteRow(table.rows.length-1); // Remove a row

}
function multString(string,amount) {
    awns = ''
for (let i = 0; i < amount; i++) {
    awns += string
}
return awns
}

function argb(r,g,b){
    if (r == NaN) { r = 255}
    if (g == NaN) { g = 255}
    if (b == NaN) { b = 255}
    return `rgb(${r},${g},${b})`

}
const emailPrompts = [
    // Subject Lines
    "Post-Shift Debrief: Key Takeaways and Opportunities for Improvement",
 "Team Performance Update: Exceeding Expectations in [Specific Area]",
 "Resource Optimization Inquiry: Streamlining Processes for Improved Efficiency",
 "Employee Development Opportunity: Identifying Potential for Advancement",
 "Customer Insight: Feedback Analysis and Proposed Action Plan",
 "Data-Driven Improvement: Analyzing Trends to Enhance Performance",
 "Collaborative Approach: Seeking Input on [Specific Project/Challenge]",
 "Safety and Compliance Update: Maintaining Standards and Addressing Concerns",
 "Shift Training Needs Assessment: Identifying Opportunities for Skill Development",
 "Continuous Improvement Initiative: Proposing Implementation of [New Practice]",

 // Openers
 "Following my shift, I'm pleased to report that [Team/Process] exceeded expectations in [Specific metric]. I'd like to discuss key factors contributing to this success.",
 "During my shift, I identified an opportunity to streamline [Process] with potential to improve [Efficiency/Cost/Metrics]. Would you be open to discussing this further?",
 "I'm writing to highlight the exceptional performance of [Employee name] in [Specific area]. Their dedication and skills demonstrate strong potential for advancement.",
 "Customer feedback during my shift revealed valuable insights regarding [Specific topic]. I've compiled an analysis and propose an action plan for addressing these concerns.",
 "I'm seeking your guidance on optimizing resource allocation for future shifts. Do you have any recommendations for [Specific resource] management?",

    "Shift Update: Smooth Sailing",
    "Shift Update: Smooth Sailing... Mostly",
    "Heads Up: Potential Hiccup on Tonight's Shift",
    "Quick Question: Clarification Needed for [Specific Task]",
    "Team Kudos: Highlighting Employee Excellence",
    "Following Up: Requesting Feedback on [Previous Project/Decision]",
   
    // Openers
    "Good morning [Boss's name], just wrapping up my shift and wanted to give you a quick update on how things went tonight.",
    "Hi [Boss's name], hoping you're having a productive morning. I wanted to touch base about a situation that arose during my shift...",
    "Hi [Boss's name], I'm following up on our conversation about [Previous topic]. I have a question regarding...",
    "Overall, the shift ran smoothly! All teams met their targets, and there were no major incidents.",
    "We encountered a minor issue with [Specific topic] but were able to resolve it quickly. I've attached a brief report for your reference.",
    "One of our team members, [Employee name], went above and beyond tonight. I wanted to bring their outstanding work to your attention.",
    "I'm seeking your guidance on [Specific issue]. What options do you recommend for moving forward?",
    "I'd appreciate your feedback on the decision we made regarding [Previous project]. Are there any adjustments you'd suggest?",
    "I'm looking for your input on how we can optimize [Specific process] for future shifts. Does anything come to mind?",
        // Subject Lines
        "Post-Shift Debrief: Key Takeaways and Opportunities for Improvement",
        "Team Performance Update: Exceeding Expectations in [Specific Area]",
        "Resource Optimization Inquiry: Streamlining Processes for Improved Efficiency",
        "Employee Development Opportunity: Identifying Potential for Advancement",
        "Customer Insight: Feedback Analysis and Proposed Action Plan",
        "Data-Driven Improvement: Analyzing Trends to Enhance Performance",
        "Collaborative Approach: Seeking Input on [Specific Project/Challenge]",
        "Safety and Compliance Update: Maintaining Standards and Addressing Concerns",
        "Shift Training Needs Assessment: Identifying Opportunities for Skill Development",
        "Continuous Improvement Initiative: Proposing Implementation of [New Practice]",
        "Shift Morale Assessment: Addressing Team Concerns and Boosting Motivation",
        "Inventory Management Update: Potential Stock Fluctuations and Recommendations",
        "Proactive Risk Mitigation: Identifying and Addressing Potential Issues",
        "Cross-Team Collaboration Opportunity: Leveraging Synergies for Enhanced Outcomes",
        "Shift Performance Metrics: Detailed Overview and Analysis",
        "Shift Recognition Proposal: Implementing a System for Employee Appreciation",
        "Shift Feedback Survey: Soliciting Team Input on Improvement Opportunities",
        "Technology Implementation Inquiry: Exploring Potential Benefits of [New Tech]",
        "Sustainability Initiative: Proposing Eco-Friendly Practices for the Shift",
        "Shift Budget Overview: Detailed Breakdown of Expenditures and Savings",
      
        // Openers
        "Following my shift, I'm pleased to report that [Team/Process] exceeded expectations in [Specific metric]. I'd like to discuss key factors contributing to this success.",
        "During my shift, I identified an opportunity to streamline [Process] with potential to improve [Efficiency/Cost/Metrics]. Would you be open to discussing this further?",
        "I'm writing to highlight the exceptional performance of [Employee name] in [Specific area]. Their dedication and skills demonstrate strong potential for advancement.",
        "Customer feedback during my shift revealed valuable insights regarding [Specific topic]. I've compiled an analysis and propose an action plan for addressing these concerns.",
        "I'm seeking your guidance on optimizing resource allocation for future shifts. Do you have any recommendations for [Specific resource] management?",
        "I've observed a slight shift in team morale. To ensure sustained performance, I recommend addressing these concerns...",
        "Inventory levels for [Specific product] may fluctuate due to [Reason]. I've drafted a plan to address potential stock shortages.",
        "I've identified a potential risk factor: [Specific issue]. Proactive mitigation could benefit us in the long run. Would you like to discuss solutions?",
        "Collaboration between [Team A] and [Team B] could lead to improved efficiency in [Specific process]. I'd like to explore this possibility with you.",
        "Following my shift, I've compiled a detailed analysis of performance metrics. Key takeaways include [Highlight main points].",
        "To foster improved engagement and recognition, I propose implementing a system for [Type of recognition] within the team.",
        "By soliciting feedback through a brief survey, we can identify areas for improvement and prioritize future initiatives based on team input.",
        "Exploring the potential implementation of [New technology] could lead to substantial benefits in [Specific area]. I'd like to discuss its feasibility and potential impact.",
       "Following my shift, I've attached a detailed breakdown of expenditures and savings. Key points include [Highlight financial trends]."
      
      ];
   
function IdeaGen(){
    let awns = ''
  
    awns = emailPrompts[Math.floor(Math.random()*emailPrompts.length)]
document.getElementById("ideaHolder").innerHTML = awns
}
