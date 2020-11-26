import React from 'react';


function Header(props) {

	return (
		 <div className='App'>
        	<header>
          		<h1>{props.title}</h1>
        	</header>
        </div>
		);
}

export default Header;