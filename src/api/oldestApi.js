export const fetchOldestDog = async() => {
	const apiKey = process.env.REACT_APP_ANIMAL_API_KEY;
	let oldestDog = [];
	const baseUrl = `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${apiKey}&_type=json&state=protect&upkind=417000&numOfRows=100`;

	const today = new Date();
	const todayDate = today.toISOString().split('T')[0].replace(/-/g, '');

	let response = await fetch(`${baseUrl}&pageNo=1&bgnde=20211025&endde=${todayDate}`);
	let json = await response.json();
	const totalCount = json.response.body.totalCount;

	if (totalCount <= 10) {
		oldestDog = json.response.body.items.item.reverse(); //totalCount가 10개 미만이하일 경우
	} else {
		const lastPage = Math.ceil(totalCount / 100);

		response = await fetch(`${baseUrl}&pageNo=${lastPage}&bgnde=20211025&endde=${todayDate}`);
		json = await response.json();
		let animals = json.response.body.items.item;

		if (animals.length >= 10) {
			oldestDog = animals.slice(-10).reverse(); //totalCount가 10개 이상이면서 마지막 페이지에 10개이상의 요소가 있을 때
		} else {
			oldestDog = animals.reverse();

			response = await fetch(`${baseUrl}&pageNo=${lastPage - 1}&bgnde=20211025&endde=${todayDate}`);
			json = await response.json();
			let lastDogs = json.response.body.items.item;

			let number = 10 - oldestDog.length;
			oldestDog.push(...lastDogs.slice(-number).reverse()); // 스프레드 연산자를 사용하여 배열을 병합
		} //totalCount가 10개 이상이면서 마지막 페이지에 10개 미만의 요소가 있을때
	}

	return oldestDog;
}