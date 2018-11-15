import React from 'react'

const CompanyCard = ({ selectedCompany }) => {
	return (
		<div className="mx-auto max-w-sm rounded overflow-hidden shadow-md px-6 py-4 mb-5">
			<h2>Company Name</h2>
			<h3>Company Status:</h3>
			<p>Certified</p>
			<p>Score: 6/10</p>
			<hr />
			<ul className="list-reset">
				<li>Checklist item</li>
				<li>Checklist item</li>
				<li>Checklist item</li>
				<li>Checklist item</li>
				<li>Checklist item</li>
				<li>Checklist item</li>
				<li>Checklist item</li>
				<li>Checklist item</li>
				<li>Checklist item</li>
				<li>Checklist item</li>
			</ul>
		</div>
	)
}

export default CompanyCard;