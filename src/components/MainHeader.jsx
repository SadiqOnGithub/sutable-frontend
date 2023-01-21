import React from 'react'

const MainHeader = () => {
	return (
		<div className="main_header">
			<span className="block-one">Candidate</span>
			<span className="block-two">
				<span className='main_header--title'>Referred</span>
				<span className='main_header--title'>Interviewed</span>
				<span className='main_header--title'>Hired</span>
				<span className='main_header--title'>Joined</span>
			</span>
			<span className="block-last">Reward</span>
		</div>	)
}

export default MainHeader