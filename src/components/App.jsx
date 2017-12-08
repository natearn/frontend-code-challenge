import React from "react" // required to define components
import styles from "components/App.css"
import { Property } from "components/Property"

export const App = ({ ads }) => (
	<ul className={ styles.app || "app" }>
		{ads.map( ad => (
			<li key={ad.id}>
				<Property {...ad} />
			</li>
		))}
	</ul>
)
