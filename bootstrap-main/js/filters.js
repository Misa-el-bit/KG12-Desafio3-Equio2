

//creamos una referencia que apunte hacia la colección de artículos de nuestra BD
let articlesRef = database.ref("/articles")

//Creamos un listener que este al pendiente de cualquier cambio en la referencia "articlesRef"
articlesRef.on('value', snapshot =>{
    let artsCollection = snapshot.val();
    let tagsList = ['news','react','javascript']
    for(let index = 0; index < tagsList.length; index++){
        let tag = tagsList[index]

        let filteredArticles = artsCollection.filter((article)=>{
            let tag_list = article.tag_list || [];
            return tag_list.includes(tag);
        });
    
        for(art in filteredArticles){
            let { title, comments_count, readable_publish_date } = artsCollection[art]
            //<button type="button bg-primary" class="btn-new">New</button>
            //${fechaReciente(artsCollection[art]) ? "Aqui Meted el boton" : ""}
            $(`.data-wrapper-${index}`).append(`
            
                <li class="list-group-item">${title}
                    <div>
                        <p class="text-muted l-text">Comments: ${comments_count}</p>
                        <p class="text-muted l-text">${readable_publish_date}</p>
                    </div>
                    <div></div>
                </li>
            `)
        }
    }
})
    
    