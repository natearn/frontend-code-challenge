import React from "react" // required to define components
import styles from "components/Property.css"

// Making some pretty glaring assumptions here
const euros = n => n.toLocaleString('de-DE', {
	style: "currency",
	currency: "EUR",
	minimumFractionDigits: 0
})

export const Property = ({
			photo,
			action,
			desc,
			addr,
			price,
			rooms,
			size,
}) => (
	<div className={styles.property || "property"}>
		<div>
			{/* alt='' is a hack to make failed images display at the correct size */}
			<img alt='' src={photo} />
			<button>{action}</button>
		</div>
		<div>
			<p>{desc}</p>
			<p className={styles.address || "address"}>{addr}</p>
			<div>
				<span>{euros(price)}</span>
				<span>{rooms} Zimmer</span>
				<span>ab {size} m²</span>
			</div>
		</div>
	</div>
)

