// document.addEventListener('click', function (event) {
// 	var btn1 = document.getElementById('btn-1');
// 	var btn2 = document.getElementById('btn-2');
// 	// if (event.target.matches('#btn-1')) {
// 	// 	document.getElementById('btn-2-message').innerText = '';
// 	// 	btn = document.getElementById('btn-1-message');
// 	// 	btn.innerText = 'Button 1 on the left!';
// 	// 	btn.disabled = true;
// 	// 	document.getElementById('btn-clear').disabled = false;
// 	// } else if (event.target.matches('#btn-2')) {
// 	// 	document.getElementById('btn-1-message').innerText = '';
// 	// 	document.getElementById('btn-2-message').innerText = 'Button 2 on top';
// 	// 	document.getElementById('btn-clear').disabled = false;
// 	// } else if (event.target.matches('#btn-clear')) {
// 	// 	document.getElementById('btn-2-message').innerText = '';
// 	// 	document.getElementById('btn-1-message').innerText = '';
// 	// 	document.getElementById('btn-clear').disabled = true;
// 	// }
// }, false);

function getById(id) {
	return document.getElementById(id);
}

var btn1 = getById('btn-1');
var btn1msg = getById('btn-1-message');
var btn2 = getById('btn-2');
var btn2msg = getById('btn-2-message');
var btnClear = getById('btn-clear');

btn1.onclick = function (e) {
	this.disabled = true;
	btn2.disabled = false;
	btnClear.disabled = false;

	btn2msg.innerText = '';
	btn1msg.innerText = 'Button 1 on the left';
};

btn2.onclick = function (e) {
	this.disabled = true;
	btn1.disabled = false;
	btnClear.disabled = false;

	btn1msg.innerText = '';
	btn2msg.innerText = 'Button 1 on the left';
};

btnClear.onclick = function (e) {
	this.disabled = true;
	btn1.disabled = false;
	btn2.disabled = false;

	btn1msg.innerText = '';
	btn2msg.innerText = '';
};
