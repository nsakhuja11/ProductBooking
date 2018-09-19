function CreateForm(ProductType){
	displayform.innerHTML = "";
	var Name = document.createElement("input");
	Name.setAttribute("type","input");
	Name.setAttribute("placeholder","Name");
	Name.setAttribute("class","name");
	document.getElementById("displayform").appendChild(Name);
	var br = document.createElement("br");
	document.getElementById("displayform").appendChild(br);
	document.getElementById("displayform").appendChild(br);
	var IsSaved = document.createElement("input");
	IsSaved.setAttribute("type","input");
	IsSaved.setAttribute("placeholder","IsSaved");
	IsSaved.setAttribute("class","isSaved");
	document.getElementById("displayform").appendChild(IsSaved);
	var br = document.createElement("br");
	document.getElementById("displayform").appendChild(br);
	document.getElementById("displayform").appendChild(br);
	var IsBooked = document.createElement("input");
	IsBooked.setAttribute("type","input");
	IsBooked.setAttribute("placeholder","IsBooked");
	IsBooked.setAttribute("class","isBooked");
	document.getElementById("displayform").appendChild(IsBooked);
	var br = document.createElement("br");
	document.getElementById("displayform").appendChild(br);
	document.getElementById("displayform").appendChild(br);
	var Price = document.createElement("input");
	Price.setAttribute("type","input");
	Price.setAttribute("placeholder","Price");
	Price.setAttribute("class","price");
	document.getElementById("displayform").appendChild(Price);
	var br = document.createElement("br");
	document.getElementById("displayform").appendChild(br);
	document.getElementById("displayform").appendChild(br);
	var sub = document.createElement("input");
	sub.setAttribute("type","submit");
	sub.setAttribute("id","sub");
	document.getElementById("displayform").appendChild(sub);
	console.log(Name.value);
	document.getElementById("sub").addEventListener("click", function(){
		json = {
			"Name":document.getElementsByClassName("name")[0].value,
			"IsSaved":document.getElementsByClassName("isSaved")[0].value,
			"IsBooked":document.getElementsByClassName("isBooked")[0].value,
			"Price":document.getElementsByClassName("price")[0].value
		}
		json =JSON.stringify(json);
		var server = new XMLHttpRequest();
		server.open("POST","http://localhost:63796/api/" + ProductType, true);
		server.setRequestHeader("Content-Type", "application/json; charset=utf-8");
		server.send(json);
		alert(ProductType + " Posted Successfully");
	});
}