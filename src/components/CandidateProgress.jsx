import React from 'react'
import { TiTick } from 'react-icons/ti';


const CandidateProgress = ({ candidate, children }) => {
	const tick = <span className='progress-bar__circle'><TiTick /></span>;
	const circleGray = <span className='progress-bar__circle progress-bar__circle--gray'></span>;
	const circlePerson = <span className='progress-bar__circle progress-bar__circle--person'>
		<img src='/assets/pokerFace.png' alt='avatar' />
	</span>;

	return (
		<div className='main_candidate-progress block-two'>
			<div className='candidate__progress-bar-container'>
				<div className='part part-1'>
					{candidate.referred ? tick : circlePerson}
					<div className='progress-bar__line' style={{ backgroundColor: `${candidate.referred ? 'hsl(137, 88%, 45%)' : 'hsl(0, 0%, 60%)'}`}}></div>
				</div>
				<div className='part part-1'>
					{candidate.referred && !candidate.interviewed ? circlePerson : candidate.interviewed ? tick : circleGray}
					<div className='progress-bar__line' style={{ backgroundColor: `${candidate.interviewed ? 'hsl(137, 88%, 45%)' : 'hsl(0, 0%, 60%)'}`}}></div>
				</div>
				<div className='part part-1'>
					{candidate.interviewed && !candidate.hired ? circlePerson : candidate.hired ? tick : circleGray}
					<div className='progress-bar__line' style={{ backgroundColor: `${candidate.hired ? 'hsl(137, 88%, 45%)' : 'hsl(0, 0%, 60%)'}`}}></div>
				</div>
				<div className='part part-1'>
					{candidate.hired && !candidate.joined ? circlePerson : candidate.joined ? tick : circleGray}
					{children}
				</div>
			</div>
		</div>
	)
}

export default CandidateProgress