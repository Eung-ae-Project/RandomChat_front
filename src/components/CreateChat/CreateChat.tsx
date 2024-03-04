import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "@components/CreateChat/qwer.module.css";


const CreateChat = () => {
	const [isOpen, setIsOpen] = useState(false);
	const onToggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<button className={styles.createButton} onClick={onToggleMenu}>
				채팅방 생성
				<FontAwesomeIcon icon={faPlus} />
			</button>
			{isOpen && <div className={styles.background} onClick={onToggleMenu}>
				<div className={styles.modal}>
					<div className={styles.chatImage}>
						<img src="src/assets/profile.png"  alt="chatImage"></img>
					</div>
				</div>
			</div>}
		</>
	);
};

export default CreateChat;
