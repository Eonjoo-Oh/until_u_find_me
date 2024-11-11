import React from 'react'
import { useLocation } from 'react-router-dom';

function Story() {
	const location = useLocation();
	return (
		<div>
			story!
		</div>
	)
}

export default Story;