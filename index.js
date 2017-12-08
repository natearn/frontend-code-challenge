import { render } from "react-dom"
import { App } from "components/App.jsx"

let dummyData = {
	ads: [
		{
			id: 1,
			photo: "photo.jpg"
		},
		{
			id: 2,
			photo: "photo.jpg"
		},
		{
			id: 3,
			photo: "photo.jpg"
		},
	]
}

render(
	App(dummyData),
	document.getElementById("app")
)
