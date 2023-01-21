import React from 'react'
import MainCandidates from './MainCandidates'
import MainHeader from './MainHeader'

const SectionMain = () => {
	return (
		<section className="section__main">
			<div className="container" >
				<div className="section__main__container" >
					<MainHeader />
					<MainCandidates />
				</div>
			</div>
		</section>
	)
}

export default SectionMain