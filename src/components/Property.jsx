import React from "react" // required to define components

export const Property = ({
			photo,
			action,
			desc,
			addr,
			price,
			rooms,
			size,
}) => (
	<div>
		<div>
			<img src={photo} />
			<button>{action}</button>
		</div>
		<div>
			<p>{desc}</p>
			<div>{addr}</div>
			<div>
				<span>{price}</span>
				<span>{rooms}</span>
				<span>{size}</span>
			</div>
		</div>
	</div>
)

