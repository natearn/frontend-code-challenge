import { render } from "react-dom"
import { App } from "components/App.jsx"

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

render(
	App(dummyData),
	document.getElementById("app")
)
