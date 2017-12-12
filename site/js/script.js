function getClothing(isCold){
	var freezing, hot;
	if (isCold){
		freezing = "Grab a jacket!";
	}
	else
	{
		hot = 'No jacket needed!'
	}
	console.log(freezing);
}

function getClothing2(isCold){
	if (isCold){
		const freezing = "Grab a jacket!";
	}
	else
	{
		const hot = 'No jacket needed!'
	}
	console.log(freezing);
}

function instructor(){
	let instructor = 'James';
	instructor = 'Richard';
	console.log(instructor);
}