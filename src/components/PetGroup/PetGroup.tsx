import React, {PropsWithChildren} from 'react';
import {PetGroupElement} from "./PetGroup.style";

export const PetGroup: React.FC<PropsWithChildren<{}>> = ({ children }) => {

	return (
		<PetGroupElement>
			{children}
		</PetGroupElement>
	)
}

export default PetGroup;