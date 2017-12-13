// This module is responsible for implementing the API client as well as
// simplifying the responses to make them easier to work with

// get the ads as a Promise
export const fetchJSON = () => {

	let url = new URL("http://localhost:9090/api.mcmakler.de/v1/advertisements")
	let headers = new Headers()
	headers.append("Accept","application/json")
	headers.append("X-Requested-From","cors-proxy-server")

	const context = {
		method: 'GET',
		headers: headers,
		mode: 'cors',
		cache: 'default'
	}

	return fetch(url,context)
		.then(res => {
			if (res.ok) {
				return res.json()
			} else {
				throw new Error("API response was not OK")
			}
		})
}

// transform a successful response json into something that is easier to
// consume by the application (such as the App props object)
// TODO: Make this more robust and maintainable!
export const simplify = json => ({
	ads: json.data.map(ad => {

		const title = Object.values(ad.advertisementAssets)
			.find(({titlePicture}) => titlePicture)
		const photo = title && title
			.advertisementThumbnails
			.inventory_m
			.url

		return {
			id: ad._id.$id,
			photo: photo,
			action: ad.advertisementPrice.baseRent ? "Mieten" : "Kaufen",
			desc: ad.title,
			addr: ad.realestateSummary.address.postalCode
				+ " "
				+ ad.realestateSummary.address.city,
			price: ad.advertisementPrice.sellPrice,
			rooms: ad.realestateSummary.numberOfRooms,
			size: ad.realestateSummary.space,
		}
	})
})

export const fetchProps = () => fetchJSON().then(simplify)
