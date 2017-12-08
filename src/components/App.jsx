import React from "react" // required to define components
import { Property } from "components/Property"

export const App = ({ ads }) => (
	<ul>
		{ads.map(ad => (
			<li key={ad.id}>
				<Property {...ad} />
			</li>
		))}
	</ul>
)

