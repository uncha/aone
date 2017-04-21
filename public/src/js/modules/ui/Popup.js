/**
* Creates an instance of Popup.
* @author uncha
*
* 
*/

export class Popup{
	constructor({
		left='center',
		top='center',
		selector='',
		element='',
		buttonElement='',
		buttonSelector='',
		position='fixed',
		backgroundColor='',
		defaultShow=false,
		show=function(){},
		hide=function(){}
	}){
		if(!selector && !element) throw new Error('인자 selector또는 element중 하나는 반드시 전달되어야 합니다.');
		
		_(this).$element = element || $(selector);
					
		// position style
		_(this).$element.css({'position':position});

		// left position
		if(left == 'center'){
			_(this).$element.css({'left':'50%', 'margin-left':_(this).$element.outerWidth() / -2});
		} else {
			_(this).$element.css({'left':left, 'margin-left':''});
		}

		// top position
		if(top == 'center'){
			_(this).$element.css({'top':'50%', 'margin-top':_(this).$element.outerHeight() / -2});
		} else {
			_(this).$element.css({'top':top, 'margin-top':''});
		}

		let _this = this;
		// close event
		_(this).$element.find('.btn-popup-close').on('click.Popup', function(e){
			e.preventDefault();

			_this.hide();
		});

		// popup open button
		_(this).$buttonElement = buttonElement || $(buttonSelector);
		_(this).$buttonElement.on('click.Popup', function(e){
			e.preventDefault();

			_this.show();
		});

		// create background
		if(backgroundColor){
			_(this).$bg = $('<div class="popup-bg"></div>');
			_(this).$bg.css({
				position:'fixed',
				width:'100%',
				height:'100%',
				left:0,
				top:0,
				zIndex:900,
				display:'none',
				background:backgroundColor
			});
			_(this).$element.after(_(this).$bg);
		}

		// callback
		_(this).show = show;
		_(this).hide = hide;

		if(defaultShow) this.show();
	}

	show(){
		_(this).$element.fadeIn(400);
		if(_(this).$bg) _(this).$bg.fadeIn(400);

		_(this).show.apply(this, []);
	}

	hide(){
		_(this).$element.fadeOut(400);
		if(_(this).$bg) _(this).$bg.fadeOut(400);
		
		_(this).hide.apply(this, []);
	}

	destroy(){
		_(this).$element.find('.btn-popup-close').off('click.Popup');
		_(this).$element.remove();

		if(_(this).$bg) _(this).$bg.remove();

		_(this).$buttonElement.off('click.Popup');
	}
}