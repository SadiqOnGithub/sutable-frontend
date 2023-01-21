import React from 'react'

const CandidateProfile = ({ candidate }) => {
	return (
		<div className='main_candidate-info block-one'>
			<div className='candidate-info--pic'>
				<img src='/assets/pokerFace.png' alt='profile picture' />
			</div>
			<div className='candidate-info--title'>
				<h4>{candidate.name}</h4>
				<p>{candidate.designation}</p>
			</div>
		</div>
	)
}

export default CandidateProfile