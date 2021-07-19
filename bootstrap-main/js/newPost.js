let articleId = -1
let database = firebase.database()
const date = new Date()



// let postRef = database.ref(")

let articleRef = database.ref("/articles")

articleRef
    .orderByChild("dateAdded")
    .limitToLast(1)
    .on("child_added", snapshot => {
        console.log(snapshot.key)
        articleId = snapshot.key
        let value = snapshot.val()
        $("#container").html(value.textDetail)
    })



const savePost = postData => {

    $.ajax({
        method: "PUT",
        url: `https://kodemia-12g-firestore-default-rtdb.firebaseio.com/articles/${parseInt(articleId) + 1}.json`,
        data: JSON.stringify(postData),
        success: response => {
            console.log(response)
        },
        error: error => {
            console.log("hay un error ")
            console.log(error)
        },
        async: false
    })
}

const randomUsers = [
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

function getRandomUser(someArray) {

    let quantity = someArray.length
    let index = Math.floor(Math.random() * quantity);

    return someArray[index]
}

getRandomUser(randomUsers)



$("#publish-post").click(() => {
 
    let cover_image = ""
    let title = $("#post-title").val()
    let tags = $("#post-hash").val()
    let social_image = ""
    var text = $("#editor .ql-editor").html();
    let text_detail = text
    let tag_list = tags.split(" ")
    let readable_date = date.toDateString().split(" ").slice(1, 3).join(" ")
    let published_at = date.toISOString()
    let user = getRandomUser(randomUsers)
    //agregar user al objeto, sacar codigo de ejemplo del homepage.
    let postObject = { cover_image, title, tags, tag_list, social_image, text_detail, readable_date, published_at, user }

    uploadCoverImage(postObject)

    //savePost(postObject)

})


let postDiv = $("#post-div")
let tagDiv = $("#tag-div")
let contentDiv = $("#content-div")


$("#post-title").click(()=>{
    postDiv.removeClass("d-none").addClass("d-flex")
    tagDiv.removeClass("d-flex").addClass("d-none")
    contentDiv.removeClass("d-flex").addClass("d-none")
})

$("#post-hash").click(()=>{
    postDiv.removeClass("d-flex").addClass("d-none")
    tagDiv.removeClass("d-none").addClass("d-flex")
    contentDiv.removeClass("d-flex").addClass("d-none")
})

$("#editor").click(()=>{
    postDiv.removeClass("d-flex").addClass("d-none")
    tagDiv.removeClass("d-flex").addClass("d-none")
    contentDiv.removeClass("d-none").addClass("d-flex")
})

   /*

const printPost = (postData) =>{

 for (key in postData){ 

let {coverImage, postTitle, postHash, secondImage, textPost} = postObject[key]

 let postHtml = `
             <div class="card">
                 <img src="${coverImage}"
                     alt="React Libraries To Use In 2021: 15 Top Picks">
                 <div class="card-body">
                     <h1 class="card-text font-weight-bold">${postTitle}</h>
                 </div>
                 <div class="pl-4">
                     <button class="btn-card-2 text" type="button">#${postHash}</button>
                 	
                 </div>
                 <div class="card-format pt-3 pl-4">
                     <img class="${secondImage}"
                         alt="yash tiwari"><span>Alfredo Pizana <span class="date-txt">Jun 13 - 7 min read</span></span>
                     <div class="card-text">
                         <p class="card-txt-2 mt-3">${textPost}</p> `
 }

$(".container-xl").append(postHtml)

}
*/

const uploadCoverImage = (postObject) => {

    let converImageFile = $("#cover-image")[0].files[0]
    //apuntamos hacia la raíz del storage
    var storageRef = firebase.storage().ref();
    // Create the file metadata
    /*var metadata = {
        contentType: 'image/jpeg'
    };*/

    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = storageRef.child('articles/' + converImageFile.name).put(converImageFile);

    // Listen for state changes, errors, and completion of the upload.
    return uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;

                // ...

                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
        },
        () => {
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log('File available at', downloadURL);
                postObject.cover_image = downloadURL;
                UploadSocialImage(postObject)
            });
        }
    );


}

const UploadSocialImage = (postObject)=>{

    let converImageFile = $("#second-image")[0].files[0]
    //apuntamos hacia la raíz del storage
    var storageRef = firebase.storage().ref();
    // Create the file metadata
    /*var metadata = {
        contentType: 'image/jpeg'
    };*/

    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = storageRef.child('articles/' + converImageFile.name).put(converImageFile);

    // Listen for state changes, errors, and completion of the upload.
    return uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;

                // ...

                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
        },
        () => {
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log('File available at', downloadURL);
                postObject.social_image = downloadURL;
                savePost(postObject)
            });
        }
    );
}

