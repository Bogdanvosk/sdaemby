import React from 'react'
import { Link } from 'react-router-dom'
import { TCard } from '../../types'

import styles from './Card.module.scss'

const Card = ({ imgSrc, title, text, date }: TCard) => {
	return (
		<div className={styles.card}>
			<img src={imgSrc} alt='Image' />
			<div className={styles.body}>
				<h3 className={styles.title}>{title}</h3>
				<div className={styles['text-block']}>
					<p className={styles.text}>{text}</p>
				</div>
				<div className={styles.bottom}>
					<span className={styles.date}>{date}</span>
					<Link to={'/'}>
						<button className={styles.button}>Читать</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Card
