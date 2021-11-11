import React, {PropsWithChildren} from 'react';
import {PetGroupElement} from "./PetGroup.style";

export const PetGroup: React.FC<PropsWithChildren<{}>> = ({ children }) => {

	return (
		<PetGroupElement>
			{React.Children.map(children, (child: any, index) => {
				return <React.Fragment key={child.id}>{React.cloneElement(child)}</React.Fragment>
			})}
		</PetGroupElement>
	)
}

export default PetGroup;