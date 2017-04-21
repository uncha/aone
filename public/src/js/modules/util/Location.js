export class Location{
	constructor(){

	}

	static getParamValue(paramName){
		if(!paramName) throw new Error('검색할 파라미터명이 전달되어야 합니다.');

		let arrResult = location.search.match(new RegExp("[&?]" + paramName+"=(.*?)(&|$)"));
        let str = location.search.match(new RegExp("[&?]"));
        let result = arrResult && arrResult[1] ? this.replaceAll(decodeURIComponent(arrResult[1])) : null;

        // 띄어 쓰기가 +로 표시되지 않도록 처리
        let len = str.length;
    	let arr = [];
    	for(var i=0; i<len; i++){
    		let replaceStr = str.slice(i,i+1).replace('+', ' ');
    		arr.push(replaceStr);
    	}
    	return arr.join('');
	}
}