import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
			<div className="ui container comments">
				<ApprovalCard>
					<CommentDetail 
						author="Sam" 
						timeAgo="Today at 05:23PM" 
						content="This is great!" 
						avatar={faker.image.avatar()}
					/>
				</ApprovalCard>
				<ApprovalCard>
					<CommentDetail 
						author="Alex" 
						timeAgo="Today at 06:09PM" 
						content="Nice Blog!"
						avatar={faker.image.avatar()}
					/>
				</ApprovalCard>
				<ApprovalCard>
					<CommentDetail 
						author="Jane" 
						timeAgo="Yesterday at 09:00AM" 
						content="What is this?" 
						avatar={faker.image.avatar()}
					/>
				</ApprovalCard>
				<ApprovalCard>
					Are you sure?
				</ApprovalCard>
				<ApprovalCard>
				<div> Warning!</div>
					Are you sure?
				</ApprovalCard>
			</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));