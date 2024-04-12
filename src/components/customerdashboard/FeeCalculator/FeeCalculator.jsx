/** @format */

import React,{useState} from "react";
import "./FeeCalculator.css";

const FeeCalculator = () => {
    const [transactionAmount, setTransactionAmount] = useState("");
	const TRANSACTION_FEE = transactionAmount * 0.02;
    const NEW_FEE=Math.round(TRANSACTION_FEE)
	const TOTAL_AMOUNT = +TRANSACTION_FEE + +transactionAmount;
const NEW_AMOUNT=Math.round(TOTAL_AMOUNT)
	return (
		<div className="fee-calc-con">
			<div className="fee-Calc-wrapper">
				<div className="fee-calc-top">
					<p className="fee-calc-title">Verse Of the Day</p>
				</div>
				<hr className="fee-calc-line" />
				<p>
				Every item on your to-do list is a step closer to achieving your dreams. Keep pushing forward, stay focused, and watch as your efforts transform into success.
				</p>
			</div>
		</div>
	);
};

export default FeeCalculator;
