import React from 'react';

interface HeaderListItem {
	id: number;
	listNumber: number;
	text: string;
	icon?: React.ReactElement,
	frontIcon?: boolean
}

export type HeaderList = HeaderListItem[]