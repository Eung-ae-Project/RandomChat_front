import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "@components/CreateChat/qwer.module.css";



const CreateChat = () => {
	const [isOpen, setIsOpen] = useState(false);
	const backgroundRef = useRef(null);
	const onToggleMenu = (e:any) => {
		if(backgroundRef.current == e.target){
			setIsOpen(false)
		}else{
			setIsOpen(true)
		}
	};

	return (
		<>
			<button className={styles.createButton} onClick={onToggleMenu}>
				채팅방 생성
				<FontAwesomeIcon icon={faPlus} />
			</button>
			{isOpen && <div ref={backgroundRef} className={styles.background} onClick={onToggleMenu}>
				<div className={styles.modal}>
					<div className={styles.chatImage}>
						<img src="src/assets/profile.png" alt="chatImage"></img>
					</div>
					<form className={styles.inputForm}>
							<input type="text" placeholder="채팅방 이름" className={styles.formTitle}/>
						<textarea placeholder="채팅방 설명" className={styles.formDescription}></textarea>
						<div className={styles.tagLine}>
								<input type="text" placeholder="태그" className={styles.tagLine} />
								<select>
									<option value="20">20</option>
									<option value="50">50</option>
									<option value="100">100</option>
								</select>
							</div>
							<div className={styles.publicLine}>
								<div>
									<label><input type="radio" name="public" value="공개" />공개</label>
									<label><input type="radio" name="public" value="비공개" />비공개</label>
								</div>
								<input type="text" />
							</div>
						<div className={styles.buttonArea}>
							<button className={styles.formButton}>채팅방 생성</button>
						</div>

					</form>
				</div>
			</div>}
		</>
	);
};

export default CreateChat;
