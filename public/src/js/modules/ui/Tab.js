export class Tab{
	constructor({
		tab='',
		tabCont='',
		fadeTime=0
	}){
		if(!tab || !tabCont) throw new Error('tab과 tabCont의 선택자가 전달되지 않았습니다.');

		_(this).$tab = $(tab);
		_(this).$tabCont = $(tabCont);
		_(this).fadeTime = fadeTime;

		this.addEvent();
	}

	addEvent(){
		let _this = _(this);

		_this.$tab.on('click', function(e){
			e.preventDefault();

			_this.$tab.removeClass('on');
			$(this).addClass('on'); 

			_this.$tabCont.stop().fadeOut(0);
			_this.$tabCont.eq($(this).index()).stop().fadeIn(_this.fadeTime);
		});

		_this.$tab.eq(0).trigger('click');
	}
}