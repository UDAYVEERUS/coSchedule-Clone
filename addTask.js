document.querySelector("form").addEventListener("submit", allTasksCoSchedule);
var allTasksCoSchedule = JSON.parse(localStorage.getItem("allTasksCoSchedule")) || [];

function allTasksCoSchedule() {
  event.preventDefault();
  var obj = {
    date: document.querySelector("#date").value,
    type : document.querySelector("#type").value,
    task : document.querySelector("#task").value,
  };
  if(document.querySelector("#date").value==''||document.querySelector("#type").value==''||document.querySelector("#task").value==''){
      alert('Provide All Input')
  }
  else{
    allTasksCoSchedule.push(obj);
    localStorage.setItem("allTasksCoSchedule", JSON.stringify(allTasksCoSchedule));
    alert("Added Successfully");

    document.querySelector("#date").value='';
    document.querySelector("#type").value='';
    document.querySelector("#task").value='';
  }
  displayData(allTasksCoSchedule);
}

function displayData(allTasksCoSchedule){
    document.querySelector('#allTaskGrid').innerHTML='';
    allTasksCoSchedule.forEach(function (element,elementIndex){
        var div=document.createElement('div');
        div.setAttribute('class','gridDiv');

        var date=document.createElement('h4');
        date.style.marginTop='-7%'
        date.innerText='Date : '+element.date;

        var type=document.createElement('p');
        type.innerText='Type : '+element.type;

        var task=document.createElement('p');
        task.innerText='Task : '+element.task;

        var remove=document.createElement('h4');
        remove.innerText='X';
        remove.style.color='white';
        remove.style.borderRadius='10px'
        remove.style.backgroundColor='#f37e5d'
        remove.style.textAlign='center'
        // remove.style.border='1px solid red'
        remove.style.width='30px'
        remove.style.margin='auto';
        remove.style.marginRight='0';
        remove.style.cursor='pointer';

        remove.addEventListener('click',function(){
            allTasksCoSchedule.splice(elementIndex,1);
            localStorage.setItem('allTasksCoSchedule',JSON.stringify(allTasksCoSchedule));
            alert('Removed Successfully');
            window.location.reload();
        })

        div.append(remove, date, type, task);
        document.querySelector('#allTaskGrid').append(div);
    });
}
window.addEventListener("load", function () {
  displayData(allTasksCoSchedule);
});


function filterDate() {
    var value=document.querySelector('#searchDate').value;
  if (value == "") {
    displayData(allTasksCoSchedule);
  } else {
    var filteredTasks = allTasksCoSchedule.filter(function (task) {
      if (task.date == value) {
        return true;
      }
      return false;
    });
    displayData(filteredTasks);
  }
}

function filterType() {
    var value=document.querySelector('#searchType').value;
  if (value == "") {
    displayData(allTasksCoSchedule);
  } else {
    var filteredTasks = allTasksCoSchedule.filter(function (task) {
      if (task.type == value) {
        return true;
      }
      return false;
    });
    displayData(filteredTasks);
  }
}


// footer js start 
      function MarketingCalendar() {
        window.location.href = "MarketingCalendar.html";
      }
      function MarketingSuite() {
        window.location.href = "MarketingSuite.html";
      }
      function HeadlineStudio() {
        window.location.href = "HeadlineStudio.html";
      }
      function ActionableMarketingInstitute() {
        window.location.href = "ActionableMarketingInstitute.html";
      }
      function CustomerStories() {
        window.location.href = "CustomerStories.html";
      }
      function BuildYourCaseForCoSchedule() {
        window.location.href = "BuildYourCaseForCoSchedule.html";
      }
      function CoScheduleBlog() {
        window.location.href = "CoScheduleBlog.html";
      }
      function CoScheduleGuide() {
        window.location.href = "CoScheduleGuide.html";
      }
      function MarketingIdeasHub() {
        window.location.href = "MarketingIdeasHub.html";
      }
      function HeadlineAnalyzer() {
        window.location.href = "HeadlineAnalyzer.html";
      }
      function SocialMessageOptimizer() {
        window.location.href = "SocialMessageOptimizer.html";
      }
      function EmailSubjectLineTester() {
        window.location.href = "EmailSubjectLineTester.html";
      }
      function tenxMarketingFormula() {
        window.location.href = "10xMarketingFormula.html";
      }
      function GetStartedwithAgileMarketing() {
        window.location.href = "GetStartedwithAgileMarketing.html";
      }
      function AgileMarketingGuide() {
        window.location.href = "AgileMarketingGuide.html";
      }
      function MarketingStrategyGuide() {
        window.location.href = "MarketingStrategyGuide.html";
      }
      function ContentMarketingGuide() {
        window.location.href = "ContentMarketingGuide.html";
      }
      function ActionableMarketingPodcast() {
        window.location.href = "ActionableMarketingPodcast.html";
      }
// footer js end