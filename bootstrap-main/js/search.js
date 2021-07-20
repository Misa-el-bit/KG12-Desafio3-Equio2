/*
    obtener el dom element del form 
    $(".search")

*/
$("#search-form").submit(function(event){
    console.log("form submited")
    event.preventDefault()
    let keyword = $(event.target).find(".search-keyword").first().val()
    console.log(keyword)
    window.location.href = window.location.origin + "/bootstrap-main/search.html" + "?keyword=" + keyword
    //let searchParams = new URLSearchParams(window.location.search)
    //Obtiene el valor pet key de la url.
    //const petKeyParam = searchParams.get('adoptKey')
})


