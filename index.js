'use strict';

let ol = document.getElementById('issue-list');
let pagTitle = document.getElementById('page_heading');

let page = 1;
function github_issuse(pageNo){
    let URL = `https://api.github.com/repositories/1296269/issues?page=${pageNo}&per_page=5`
    fetch(URL)
    .then(res=>res.json())
    .then(data=>{
        ol.innerHTML = ''
        data.forEach(element => {
            // console.log(element)
            let li = document.createElement('li');
            li.textContent = element.title;
            ol.appendChild(li)
            pagTitle.innerHTML = `Page Number ${pageNo}`
        });
    })
    .catch(err=>console.error(err));
}
github_issuse(page)

function loadPrev(){
    if(page>1){
        page--
        github_issuse(page)
    }
}

function loadNext(){
    page++
    github_issuse(page)
}


// document.addEventListener('click',function(){
//     let pageHeading = document.getElementById('page_heading');
//     let issueList = document.getElementById('issue-list');
//     let pagePriv = document.getElementById('load_prev');
//     let pageNext = document.getElementById('load_next');

//     let currentPage = 1;
//     let issuesPerPage =5;

//     fetch('https://api.github.com/repositories/1296269/issues?page=$%7BpageNumberHere%7D&per_page=5')
//     .then(res=>res.json())
//     .then(data=>{
//         function displayPage(data){
//             const startIndex  = (currentPage-1)*issuesPerPage;
//             const endIndex = startIndex + issuesPerPage;
//             const currentIssues = data.slice(startIndex,endIndex);

//             issueList.innerHTML="";
//             currentIssues.forEach(element => {
                
//             });
//         }
//     })
//     .catch(error=>{
//         console.error('error fetching data '+error);
//     })
// })




