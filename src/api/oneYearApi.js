export const fetchOneYearDogs = async () => {
	const apiKey = process.env.REACT_APP_ANIMAL_API_KEY;

	//일년전 오늘 날짜 구하기
	const oneYearAgo = new Date();
	oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
	const oneYearAgoDate = `${oneYearAgo.getFullYear()}${(oneYearAgo.getMonth() + 1).toString().padStart(2, '0')}${oneYearAgo.getDate().toString().padStart(2, '0')}`;

	const baseUrl = `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?bgnde=${oneYearAgoDate}&endde=${oneYearAgoDate}&upkind=417000&numOfRows=100&state=protect&kind-417000&serviceKey=${apiKey}&_type=json`;
	
	let page = 1;
	let oneYearDogs = [];
	let response = await fetch(`${baseUrl}&pageNo=${page}`);
	let json = await response.json();
	const totalCount = json.response.body.totalCount;
	
	oneYearDogs.push(...json.response.body.items.item);
	
	//항목이 100개 이상이면 pageno를 넘겨서 추가로 api 요청
	if (totalCount > 100) {
		page = 2;
		while(page <= Math.ceil(totalCount / 100)) {
			response = await fetch(`${baseUrl}&pageNo=${page}`);
			json = await response.json();
			oneYearDogs.push(...json.response.body.items.item);
			page++;
		}
	} 
	
	return oneYearDogs;
}
