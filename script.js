
const popupLinks = document.querySelectorAll('popup-link');
const body = document.querySelectorAll('body');
const lockPadding = document.querySelectorAll(".lock-padding");
// 
let unlock = true;
const timeout = 800;
// 
if (popuplinks.length > 0) {
	for (let index = 0; index < popuplinks.length; index++) {
		const popupLink = popupLinks[index];
	
		popupLink.addEventListener	("click",function(e){
			const popupName = popupLink.getAttribute('href').replace('#','');

			const currentPopup = document.getElementById(popupName);

			popupOpen(currentPopup);
			e.preventDefault();
		})
	
	}	
}
// 

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index  = 0; index <popupCloseIcon.length ; index ++) {
		const el = popupCloseIcon = [index];
		el.addEventListener('click',function(e){
			popupClose(el.closet('popup'));
			e.preventDefault()	;

		});
	
	}
	
}

// 

function popupOpen(currentPopup) {
	if (currentPopup && unlock) {
		const popupActive = document.querySelector('popup__open');
		if (popupActive) {
			popupClose(popupActive,false);
			
		} else {
			bodtlock();
		}
		currentPopup.classlist.add('open');
		currentPopup.addEventListener('click',function(e){
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
				}
		});
	} 
}
// 
function popupClose(popupActive,dounlock = true) {
	if (unlock) {
		popupActive.classlist.remove('open');
		if (dounlock) {
			bodyunlock();
			
		}
		
	}
	
}

// 

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'
	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	
	body.style.paddingRight = lockPaddingValue;
	body.classlist.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
		},timeout);
}

function bodyLock() {
	setTimeout(function(){
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = '0px'
		}
			body.style.paddingRight = '0px';
			body.classlist.remove('lock');
			},timeout),
			unlock = false;
			setTimeout(function() {
				unlock = true;
			},timeout);
}

document.addEventListener('keydown',function(e) {
	if(e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
}
});

(function(){
	if (!Element.prototype.closest){
		Element.prototype.closest = function(css) {
			var node = this;
			while(node) {
				if (node.matches(css)) return node ;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();

(function() {
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.matchesSelector ||
		Element.prototype.webkitMatchesSelector ||
		Element.prototype.mozMatchesSelector ||
		Element.prototype.msMatchesSelector ;

	}
})();