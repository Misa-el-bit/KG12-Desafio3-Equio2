const postSample = () =>{
 
$.ajax({
    method:"POST",
    url:"https://kodemia-12g-firestore-default-rtdb.firebaseio.com/.json",
    data: JSON.stringify({}),
    success: response =>{
        console.log(response)
    },
    error: error =>{
        console.log(error)
    },
    async: true
})
}

const getSample = () =>{
 
    $.ajax({
        method:"GET",
        url:"https://kodemia-12g-firestore-default-rtdb.firebaseio.com/.json",
        data: JSON.stringify({}),
        success: response =>{
            console.log(response)
        },
        error: error =>{
            console.log(error)
        },
        async: true
    })
    }


const printCard = () =>{


    let postHtml = `
    <div class="card-body">
    <div class="d-flex c-header">
        <img src="images/pics/hacker.jpg" alt="" class="br-100">
        <div class="d-flex c-name">
            <h6 class="nickname mb-0">Maya Diaz</h6>
            <p>Jun 12</p>
        </div>
    </div>
    <div class="card-content pl-5 pt-2">
        <a href="index2.html" class="post-list">
            <h4 class="card-title">Data visualization: Creating charts using REST API's in React.js</h4>
        </a>
        <div class="d-flex h-order">
            <nav class="card-post-tags">
                <a class="custom-a">#showdev</a>
                <a>#python</a>
                <a>#serverless</a>
                <a>#twitter</a>
            </nav>
        </div>
        <div class=" d-flex read">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" role="img"
                    aria-labelledby="aavwx5vmqdgx8wvzfg593jo469ge3dnz"
                    class="crayons-icon mb-1">
                    <title id="aavwx5vmqdgx8wvzfg593jo469ge3dnz">
                        Comments</title>
                    <path
                        d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z">
                    </path>
                </svg>
                <button class="comment">Add comment</button>
            </div>
            <div class="d-flex">
                <p class="card-text mb-0"><small class="text-muted">7
                        min read</small></p>
                <button class="save">Save</button>
            </div>
        </div>
    </div>
</div> `

$("#publish-post").click( event =>{
    console.log(event)

})

}