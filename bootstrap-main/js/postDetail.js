

/*
Crear Metodo GET que obtenga la informacion del articulo de firebase
el articleId se obtendra desde la url 

GET
https://kodemia-12g-firestore-default-rtdb.firebaseio.com/articles/5.json

Despues de obtener la informacion desde firebase, sacar el id del objecto article y hacer un segundo request al dev.to

GET
https://dev.to/api/articles/648960

De la respues del API obtener el paremetro body_html para inyectarlo en el detalle del post.
*/


const getArticleDetailById = (param_id) => {
    $.ajax({
        method:"GET",
        url:`https://kodemia-12g-firestore-default-rtdb.firebaseio.com/articles/${param_id}.json`,
       // data: JSON.stringify(postData),
        success: response => {
             console.log( response)
            console.log( {param_id})
            $(".cover-image").append(`<img src="${response.cover_image}" class="card-img-top"
            alt="${response.title}">`)
            $("#card-main").append(`<h1 class="card-text font-weight-bold">${response.title}</h1>`)
            if (response.tag_list !==  undefined){
                response.tag_list.forEach( (item, index) =>{
                    $(".card-tags").append(`<button class="btn-card-${index + 2} mr-2 text" type="button">#${item}</button>`)
                })
            }
            if(response.id !== undefined && response.id >= 0){
            getPostDetailsFromDevTo(response.id)
            } else {
                $(".card-format").append(response.text_detail)
            }
            $(".card-header").append(`<img class="img-size" src="${response.user.profile_image}"
            alt="${response.user.name}">
            <h5 class="card-title">${response.user.name}</h5>`)
            $(".card-description").append(response.description)
        },
        error: error => {
            console.log( "hay un error ")
            console.log( error )
        },
        async:true
    })
} 

getArticleDetailById(articleId)


const getPostDetailsFromDevTo = devToId => {
    $.ajax({
        method:"GET",
        url:`https://dev.to/api/articles/${devToId}`,
       // data: JSON.stringify(postData),
        success: response => {
           // console.log( response.cover_image )
            $(".card-format").prepend(response.body_html)
            
        },
        error: error => {
            console.log( "hay un error ")
            console.log( error )
        },
        async:true
    })
}



