const quoteSection = document.getElementById('quoteSection');
const btn = document.getElementById('btn');



window.addEventListener('load', async function(){
    btn.addEventListener('click', async function () {
  const data = await fetch('https://api.kanye.rest').then(function (response) {
    return response.json();
  });
  quoteSection.innerHTML = JSON.stringify(data.quote);
});
});




// deneme değişikliği


/* 
fetch('https://api.kanye.rest', {
	method: 'GET'
}).then(function (response) {
		return response.json();
}).then(function (data) {
	    btn.addEventListener('click', function(){
        return quoteSection.innerHTML = JSON.stringify(data.quote);})

}).catch(function (err) {
	console.warn('Something went wrong.', err);
});

 */