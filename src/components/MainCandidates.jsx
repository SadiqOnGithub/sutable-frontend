import React from 'react'
import CandidateProfile from './CandidateProfile'
import CandidateProgress from './CandidateProgress'
import CandidateJoiningLine from './CandidateJoiningLine';

import candidateData from '../data/candidates.json';

const MainCandidates = () => {
	console.log(candidateData);
	return (
		<div className='main__candidates-status'>
			{candidateData.map((candidate) => (
				<div className='main_candidate-status'>
					<CandidateProfile candidate={candidate} />
					<CandidateProgress candidate={candidate}>
						<CandidateJoiningLine />
					</CandidateProgress>
					<div className='main_candidate-reward block-last'>
						<p>{"$ " + candidate.rewardAmount}</p>
					</div>
				</div>
			))}

		</div>
	)
}

export default MainCandidates