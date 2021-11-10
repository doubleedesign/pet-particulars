import React, {PropsWithChildren} from 'react';
import { MessageCard } from './Message.style';

export interface MessageProps {
	type: string
}

export const Message: React.FC<PropsWithChildren<MessageProps>> = ({
   type,
   children
}) => {
	return (
		<MessageCard type={type}>
			{children}
		</MessageCard>
	)
}

export default Message;