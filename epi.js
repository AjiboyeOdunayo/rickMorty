 // console.log("patience Big")
 var content = document.getElementById("content");
 fetch("https://rickandmortyapi.com/api/episode").then(response=>{
 	return response.json()
}).then(data=>{
 	console.log(data.results)
 	var html = "";
 	data.results.forEach(item=>{
 		const div = `
 <div class="col-md-3">
 	<div class="card mb-4 shadow-sm">
 		<img id="image" src="episde.jpg" class="bd-placeholder-img card-img-top" width="100%" height="auto"/>   
    </div>

    <div class="card-body">
        <div class="card-title">
         <strong>name: ${item.name}</strong>
         </div>

    </div>

    <div class="card-body">
        <div class="card-title">
         <strong>created: ${item.created}</strong>
         </div>

    </div>
    <div class="card-body">
        <div class="card-title">
         <strong>episode ${item.episode}</strong>
         </div>

    </div>
    <div class="card-body">
        <div class="card-title">
         <strong>origin: ${item.origin}</strong>
         </div>

    </div>
    <div class="card-body">
        <div class="card-title">
         <strong>location: ${item.location}</strong>
         </div>

    </div>
    </div>
 		`

 		html += div;

          
 	})
 	content.innerHTML= html;

 		
})

