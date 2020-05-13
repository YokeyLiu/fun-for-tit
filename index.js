/*
 * Add your JavaScript to this file to complete the assignment.
 */

//get text input 
var postText = document.getElementById('twit-text-input');
var postTextContent = '';
postText.addEventListener('change', function listener(event) {
	postTextContent   = event.currentTarget.value;
	postTextContent = postTextContent.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '').toLowerCase();
	console.log('== postTextContent: ', postTextContent);
	event.stopPropagation();
});
//get author's input
var author = document.getElementById('twit-attribution-input');
var postauthor = '';
author.addEventListener('change', function listener(event) {
	postauthor = event.currentTarget.value;
	postauthor = postauthor.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '').toLowerCase();
	console.log('== postTextContent: ', postTextContent);
	event.stopPropagation();
});

var modalBackdrop = document.getElementById('modal-backdrop');
var postNew = document.getElementById('twit-text-input');
var createTwit = document.getElementById('create-twit-button');
var twitModal = document.getElementById('create-twit-modal');

//the twit creat page appear
createTwit.addEventListener('click',  function addTwit(Event){
	twitModal.style.display = 'block';
	modalBackdrop.style.display = 'block';
})

//clear the last time research
function clearAll(){
	postText.value = '';
	author.value = '';
	postNew.checked = true;
	twitModal.style.display = 'none';
	modalBackdrop.style.display = 'none';
}

//modal cloase
var modalClose = document.getElementsByClassName('modal-close-button');
modalClose[0].addEventListener('click',  function addTwit(Event){
    clearAll();
	twitModal.style.display = 'none';
	modalBackdrop.style.display = 'none';
	//clearAll();
})
//modal cancel
var modalCancel = document.getElementsByClassName('modal-cancel-button');
modalCancel[0].addEventListener('click',  function addTwit(Event){
	clearAll();
	twitModal.style.display = 'none';
	modalBackdrop.style.display = 'none';
})




var searchInputBox = document.getElementById('navbar-search-input');
var searchInputContent = 0;
searchInputBox.addEventListener('change', function listener(event) {
	searchInputContent = event.currentTarget.value;
	searchInputContent = searchInputContent.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '').toLowerCase();
	console.log('== searchInputContent: ', searchInputContent);
	event.stopPropagation();
});

// search event
var searchButton = document.getElementById('navbar-search-button');
var messages = document.getElementsByClassName('twit-text');
var writers = document.getElementsByClassName('twit-author');
var twits = document.getElementsByClassName('twit');
console.log(writers);
searchButton.addEventListener('click',  function filterOn(Event){
	// if user click search button, this function will be triggered which will determine which is revelent to user's input
	for(var i = 0; i < messages.length; i++){
		var a_message = messages[i].textContent.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '').toLowerCase();
		var a_writer = writers[i].innerText.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '').toLowerCase();
		if(a_message.indexOf(searchInputContent) == -1 && a_writer.indexOf(searchInputContent) == -1){
			//extra credit: making twit disappers instead removing them from the DOM
			twits[i].style.display = 'none';
		}
		else{
			twits[i].style.display = 'flex';
		}
	}
});


// adding the a new twit
var mainSection =document.getElementsByClassName('twit-container');
var modalAccept = document.getElementsByClassName('modal-accept-button');

modalAccept[0].addEventListener('click',  function addTwit(Event){

	if(postTextContent == '' || postauthor == '' ){
		alert("Please filling all boxes!");
	}else{
		var newPost = document.createElement('article');
		newPost.classList.add('twit');

		var bar = document.createElement('div');
		bar.classList.add('twit-icon');

		var biubiubiu=document.createElement('i');
		biubiubiu.classList.add('fas');
		biubiubiu.classList.add('fa-bullhorn');
		console.log(biubiubiu);
		bar.appendChild(biubiubiu);

		var postInfoContainer = document.createElement('div');
		postInfoContainer.classList.add('twit-content');

		var p1=document.createElement('p');
		p1.classList.add('twit-author');

		var p2=document.createElement('p');
		p2.classList.add('twit-text');
		p2.textContent=postTextContent;
		console.log(postTextContent);

		var a =document.createElement('a');
		a.href ='#';
		a.textContent=postauthor;
		console.log(postauthor);
		
		p1.appendChild(a);
		postInfoContainer.appendChild(p2);
	    postInfoContainer.appendChild(p1);
	
		newPost.appendChild(bar);
		newPost.appendChild(postInfoContainer);

		mainSection[0].appendChild(newPost);
		
		console.log('==newpost', newPost);
		clearAll();
		twitModal.style.display = 'none';
	}
})


