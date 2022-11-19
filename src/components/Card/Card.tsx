import React from 'react'
import { TCard } from '../../types'

import styles from './Card.module.scss'

const Card = ({ imgSrc, title, text, date }: TCard) => {
	return (
		<div className={styles.card}>
			<img src={imgSrc} alt='Image' />
			<div className={styles.body}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.text}>{text}</p>
				<div className={styles.bottom}>
					<span className={styles.date}>{date}</span>
					<button className={styles.button}>Читать</button>
				</div>
			</div>
		</div>
	)
}

export default Card
