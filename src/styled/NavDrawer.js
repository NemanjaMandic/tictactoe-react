import React from 'react';
import styled from 'styled-components';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Menu from 'material-ui/svg-icons/navigation';

export const NavToggleButton = () => {
	return (
		<FloatingActionButton>
			<Menu />
		</FloatingActionButton>
	);
}