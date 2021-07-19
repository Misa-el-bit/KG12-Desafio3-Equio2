//https://kodemia-12g-firestore-default-rtdb.firebaseio.com/

/*estructura del comment
-creator
-Contenido
-date
-post al que pertenece
*/

let searchParams = new URLSearchParams(window.location.search)
//Obtiene el valor pet key de la url.
const articleId = searchParams.get('articleId') 

document.getElementById("create-comment").addEventListener("click",()=>{
    let date = new Date()
    let dd = date.getDate() < 10 ? `0${date.getDate()}`: date.getDate
    let mm = date.getMonth() < 10 ? `0${date.getMonth()+1}`: date.getMonth +1
    let commentDay = date   
    let value = $("#comment").val()
    let commentObject= { user: getRandomName(), commentDay, comment: value, articleId:articleId}

    saveComment(commentObject )
})

const saveComment = (commentData) =>{
    let response;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        
        response = xhttp.responseText;
        $("#comment").val("")
        }
};
xhttp.open("POST", "https://kodemia-12g-firestore-default-rtdb.firebaseio.com/coments.json", true);
xhttp.send(JSON.stringify(commentData));
}


function getRandomName(){
    const names =[
            {
                "github_username": "cassidoo",
                "name": "Cassidy Williams",
                "profile_image": "https://res.cloudinary.com/practicaldev/image/fetch/s--X6yB_pWq--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/6401/db5b0ab6-93a1-4168-9f97-af8d363c1153.png",
                "profile_image_90": "https://res.cloudinary.com/practicaldev/image/fetch/s--P4HnHvGk--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/6401/db5b0ab6-93a1-4168-9f97-af8d363c1153.png",
                "twitter_username": "cassidoo",
                "username": "cassidoo",
                "website_url": "http://cassidoo.co"
            },
            {
                "name": "The DEV Team",
                "profile_image": "https://res.cloudinary.com/practicaldev/image/fetch/s---MR9BSbR--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/342975/98b7a8ed-aa91-48a3-bcc0-ebe2c13b5893.png.",
                "profile_image_90": "https://res.cloudinary.com/practicaldev/image/fetch/s--YTDghB6M--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/342975/98b7a8ed-aa91-48a3-bcc0-ebe2c13b5893.png",
                "slug": "devteam",
                "username": "devteam"
        
        
            },
            {
                "name": "SGGregory",
                "profile_image": "https://res.cloudinary.com/practicaldev/image/fetch/s---MR9BSbR--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/342975/98b7a8ed-aa91-48a3-bcc0-ebe2c13b5893.png",
                "profile_image_90": "https://res.cloudinary.com/practicaldev/image/fetch/s--YTDghB6M--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/342975/98b7a8ed-aa91-48a3-bcc0-ebe2c13b5893.png",
                "username": "graciegregory"
            },
            {
                "github_username": "kgilpin",
                "name": "Kevin Gilpin",
                "profile_image": "https://res.cloudinary.com/practicaldev/image/fetch/s--IRMQRbkN--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/555587/2be89914-0dee-4f3f-a4f0-2102df256d7d.jpeg",
                "profile_image_90": "https://res.cloudinary.com/practicaldev/image/fetch/s--3sMQUeQo--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/555587/2be89914-0dee-4f3f-a4f0-2102df256d7d.jpeg",
                "twitter_username": "kegilpin",
                "username": "kgilpin",
                "website_url": "https://appland.com"
        
            },
            {
                "github_username": "elianbecali",
                "name": "Elian Becali",
                "profile_image": "https://res.cloudinary.com/practicaldev/image/fetch/s--sh4ROlfS--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/517890/90d70b73-d2af-487b-84bc-26a2d860f841.jpeg",
                "profile_image_90": "https://res.cloudinary.com/practicaldev/image/fetch/s--8n3ZcTwJ--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/517890/90d70b73-d2af-487b-84bc-26a2d860f841.jpeg",
                "username": "elianbecali"
            }
        
        ]
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex]
    
}



/*const getComments = (commentData) =>{
    let response;
    let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
       response = xhttp.responseText;
       //call printAllComments()
    }
};
xhttp.open("GET", `https://kodemia-12g-firestore-default-rtdb.firebaseio.com/coments?articleId=${articleId}.json`, true);
xhttp.send(JSON.stringify(commentData));
}
*/

// Search

getComments()

