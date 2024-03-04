import React, {useRef} from "react";
import styles from "@components/DropDown/qwer.module.css";
import classNames from "classNames";
import useDetectClose from "@hooks/useDetectClose";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";

const DropDown = ({ content }: any) => {
	const dropDownRef = useRef(null);
	const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);

	const closeDropDown =()=>{
		console.log("!@#$!@#!@")
		setIsOpen(false);


	}


	const check1 =()=>{
		console.log('check1')
	}
	const check2 =()=>{
		console.log('check2')
	}
	const check3 =()=>{
		console.log('check3')
	}
	const check4 =()=>{
		console.log('check4')
	}

	return (
		<div onBlur={closeDropDown}>
			<button className={styles.dropDownMenu} onClick={() => setIsOpen(!isOpen)}>
				정렬기준
				<FontAwesomeIcon icon={faCaretDown} />
			</button>
			<ul className={classNames(styles.menu, { [styles.active]: isOpen })}>
				<li onClick={check1}>인원</li>
				<li onClick={check2}>최근대화</li>
				<li onClick={check3}>추천</li>
				<li onClick={check4}>생성일</li>

			</ul>
		</div>
	);
};

export default DropDown;
