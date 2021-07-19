

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