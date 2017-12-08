import { render } from "react-dom"
import { App } from "components/App"
import { fetchProps } from "api"

let dummyData = {
	ads: [1,2,3,4,5].map((_,idx) =>
		({
			id: idx,
			photo: "photo.jpg",
			action: "Mieten",
			desc: "This is a property description. For the purpose of styling, " +
				  "I'd like to make this reasonably long. This is not mean to be " +
				  " informative!",
			addr: "74635 Sinn / Fleisbach",
			price: 4398.00,
			rooms: 2,
			size: 96,
		})
	)
}

fetchProps()
	.catch(error => console.log(error))
	.then(props =>
		render(
			App(props || dummyData),
			document.getElementById("app")
		)
	)
