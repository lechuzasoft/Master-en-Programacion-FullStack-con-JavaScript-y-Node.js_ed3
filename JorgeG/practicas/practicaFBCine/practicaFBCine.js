// Api key 2b9308db

function peticionAjax (url, cb) {
	  var xmlHttp = new XMLHttpRequest();
	
	            xmlHttp.onreadystatechange = function () {
	
	                if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
	                    var datos = (JSON.parse(xmlHttp.responseText));
                        console.log(datos)
                        cb(datos)
                                   } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
	                    console.error("ERROR! 404");
	                    console.info(JSON.parse(xmlHttp.responseText));
	                }
	            };
	
	            xmlHttp.open( "GET", url, true );
	            xmlHttp.send();
              
    }
    
//Main Program
console.log("Hola!");
peticionAjax("http://www.omdbapi.com/?apikey=baf4c27c&t=banana", function(data){
    console.log("Los datos son: "+ data);
});
