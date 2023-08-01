//your JS code here. If required.
let body=document.getElementById("output");
let row=document.createElement("tr");
let col=document.createElement("td");
col.innerText="Loading..."
row.id="loading"
col.colSpan=2;
row.append(col);
body.append(row);

let proArr=[];
let pro1=new Promise((resolve)=>{setTimeout(()=>{resolve(1)},1000)})
let pro2=new Promise((resolve)=>{setTimeout(()=>{resolve(2)},3000)})
let pro3=new Promise((resolve)=>{setTimeout(()=>{resolve(4)},2000)})
let pro4=new Promise((resolve)=>{setTimeout(()=>{resolve(3)},2000)})

proArr.push(pro1);
proArr.push(pro2);
proArr.push(pro3);

pro1.then((con)=>{
	let body=document.getElementById("output");
	body.innerText="";
	let row=document.createElement("tr");
	let col1=document.createElement("td");
	let col2=document.createElement("td");
	col1.innerText=con
	col2.innerText=con
	row.append(col1);
	row.append(col2);
	body.append(row);	
});
pro2.then((con)=>{
	let body=document.getElementById("output");
	let row=document.createElement("tr");
	let col1=document.createElement("td");
	let col2=document.createElement("td");
	col1.innerText=con
	col2.innerText=con
	row.append(col1);
	row.append(col2);
	body.append(row);	
})
pro3.then((con)=>{
	let body=document.getElementById("output");
	let row=document.createElement("tr");
	let col1=document.createElement("td");
	let col2=document.createElement("td");
	col1.innerText=con
	col2.innerText=con
	row.append(col1);
	row.append(col2);
	body.append(row);	
});
pro4.then((con)=>{
	let body=document.getElementById("output");
	let row=document.createElement("tr");
	let col1=document.createElement("td");
	let col2=document.createElement("td");
	col1.innerText=con
	col2.innerText=con
	row.append(col1);
	row.append(col2);
	body.append(row);	
});
