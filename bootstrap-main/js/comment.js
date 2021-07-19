//https://kodemia-12g-firestore-default-rtdb.firebaseio.com/

/*estructura del comment
-creator
-Contenido
-date
-post al que pertenece
*/


document.getElementById("create-comment").addEventListener("click",()=>{
    let date = new Date()
    let dd = date.getDate() < 10 ? `0${date.getDate()}`: date.getDate
    let mm = date.getMonth() < 10 ? `0${date.getMonth()+1}`: date.getMonth +1
    let commentDay = date   
    let value = $("#comment").val()
    let commentObject= { creator: "", commentDay, comment: value, articleId:0}

    saveComment(commentObject )
})

const saveComment = (commentData) =>{
    let response;
    let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
       response = xhttp.responseText;
    }
};
xhttp.open("POST", "https://kodemia-12g-firestore-default-rtdb.firebaseio.com/coments.json", true);
xhttp.send(JSON.stringify(commentData));
}


function getRandomName(){
    const names =[
        "Ángel Reséndiz",
        "Héctor Alcaráz",
        "Xóchitl Moreno",
        "Alfredo Pizaña",
        "Wendy Ortega",
    ]
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex]
    
}


/*const getComment = (commentData) =>{
    let response;
    let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
       response = xhttp.responseText;
    }
};
xhttp.open("GET", "https://kodemia-12g-firestore-default-rtdb.firebaseio.com/coments.json", true);
xhttp.send(JSON.stringify(commentData));
}
*/

// Search

let searchParams = new URLSearchParams(window.location.search)
