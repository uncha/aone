export class Math{
	constructor(){

	}

	static linearFunction(tg, start, end, min, max){
		if(arguments.length < 5) throw new Error('전달인자가 정확하지 않습니다.');
		
		let result = (tg - start) * (max - min) / (end - start) + min;
		
		if(max > min){
			if(result < min) result = min;
			if(result > max) result = max;
		} else {
			if(result > min) result = min;
			if(result < max) result = max;
		}

		return result;
	}
}