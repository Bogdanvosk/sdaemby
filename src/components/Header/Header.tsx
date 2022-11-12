import Container from '../Container/Container'
import styles from './Header.module.scss'

import { useState } from 'react'
import { HeaderList } from '../../types'

import logo from '../../assets/logo.png'
import locationSvg from '../../assets/icons/location.svg'

const Header = () => {
	const [isActive, setIsActive] = useState(7)

	const onActive = (id: number) => {
		setIsActive(id)
	}

	const listItems: HeaderList = [
		{ id: 1, listNumber: 1, text: 'Главная' },
		{ id: 2, listNumber: 1, text: 'Новости' },
		{ id: 3, listNumber: 1, text: 'Размещение и тарифы' },
		{
			id: 4,
			listNumber: 1,
			text: 'Объявления на карте',
			icon: (
				<svg
					width='9'
					height='10'
					viewBox='0 0 9 10'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M7.43806 1.74419C6.7055 0.627907 5.4962 0 4.13573 0C2.7869 0 1.5776 0.627907 0.821781 1.74419C0.0659671 2.83721 -0.108452 4.23256 0.356665 5.45349C0.484572 5.77907 0.682246 6.11628 0.93806 6.4186L3.87992 9.88372C3.94969 9.95349 4.01946 10 4.12411 10C4.22876 10 4.29853 9.95349 4.36829 9.88372L7.32178 6.4186C7.5776 6.11628 7.7869 5.7907 7.90318 5.45349C8.36829 4.23256 8.19387 2.83721 7.43806 1.74419ZM4.13573 5.86047C3.13573 5.86047 2.31015 5.03488 2.31015 4.03488C2.31015 3.03488 3.13573 2.2093 4.13573 2.2093C5.13574 2.2093 5.96132 3.03488 5.96132 4.03488C5.96132 5.03488 5.14736 5.86047 4.13573 5.86047Z'
						fill='#8291a3'
					/>
				</svg>
			),
			frontIcon: true
		},
		{ id: 5, listNumber: 1, text: 'Контакты' },
		{
			id: 6,
			listNumber: 2,
			text: 'Квартиры на сутки',
			icon: <img src={locationSvg} alt='' />,
			frontIcon: false
		},
		{ id: 7, listNumber: 2, text: 'Коттеджи и усадьбы' },
		{ id: 8, listNumber: 2, text: 'Бани и Сауны' },
		{ id: 9, listNumber: 2, text: 'Авто напрокат' }
	]

	const firstList = listItems
		.filter(el => el.listNumber === 1)
		.map(item => {
			return (
				<li
					onClick={() => onActive(item.id)}
					className={`${styles.item} ${
						item.id === isActive ? styles.active : ''
					}`}>
					<a href='#' className={styles.link}>
						{item.frontIcon ? item.icon : null}
						{item.icon ? <span>{item.text}</span> : item.text}
						{!item.frontIcon ? item.icon : null}
					</a>
				</li>
			)
		})

	const secondList = listItems
		.filter(el => el.listNumber === 2)
		.map(item => {
			return (
				<li
					onClick={() => onActive(item.id)}
					className={`${styles.declarationItem} ${
						item.id === isActive ? styles.active : ''
					}`}>
					<a href='#' className={styles.declarationLink}>
						{item.frontIcon ? item.icon : null}
						{item.icon ? <span>{item.text}</span> : item.text}
						{!item.frontIcon ? item.icon : null}
					</a>
				</li>
			)
		})

	return (
		<div className={styles.header}>
			<Container>
				<div className={styles.pages}>
					<div className={styles.left}>
						<ul className={styles.pagesList}>
							{firstList}
							{/* <li className={styles.item}>
								<a href='#' className={styles.link}>
									Главная
								</a>
							</li>
							<li className={styles.item}>
								<a href='#' className={styles.link}>
									Новости
								</a>
							</li>
							<li className={styles.item}>
								<a href='#' className={styles.link}>
									Размещение и тарифы{' '}
								</a>
							</li>
							<li className={`${styles.item} ${styles.active}`}>
								<a href='#' className={styles.link}>
									<svg
										width='9'
										height='10'
										viewBox='0 0 9 10'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M7.43806 1.74419C6.7055 0.627907 5.4962 0 4.13573 0C2.7869 0 1.5776 0.627907 0.821781 1.74419C0.0659671 2.83721 -0.108452 4.23256 0.356665 5.45349C0.484572 5.77907 0.682246 6.11628 0.93806 6.4186L3.87992 9.88372C3.94969 9.95349 4.01946 10 4.12411 10C4.22876 10 4.29853 9.95349 4.36829 9.88372L7.32178 6.4186C7.5776 6.11628 7.7869 5.7907 7.90318 5.45349C8.36829 4.23256 8.19387 2.83721 7.43806 1.74419ZM4.13573 5.86047C3.13573 5.86047 2.31015 5.03488 2.31015 4.03488C2.31015 3.03488 3.13573 2.2093 4.13573 2.2093C5.13574 2.2093 5.96132 3.03488 5.96132 4.03488C5.96132 5.03488 5.14736 5.86047 4.13573 5.86047Z'
											fill='#8291a3'
										/>
									</svg>
									<span>Объявления на карте</span>
								</a>
							</li>
							<li className={styles.item}>
								<a href='#' className={styles.link}>
									Контакты
								</a>
							</li> */}
						</ul>
					</div>
					<div className={styles.right}>
						<div className={styles.bookmarks}>
							<a href='#' className={styles.bookmarksLink}>
								Закладки
								<svg
									xmlns='http://www.w3.org/2000/svg'
									height='16px'
									viewBox='0 0 24 24'
									width='16px'
									fill='#8291A3'>
									<path d='M0 0h24v24H0z' fill='none' />
									<path
										d='M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z'
										stroke='#8291A3'
									/>
								</svg>
							</a>
						</div>
						<div className={styles.login}>
							<a href='#' className={styles.loginLink}>
								Вход и регистрация
							</a>
						</div>
					</div>
				</div>
			</Container>
			<div className={styles.declaration}>
				<Container>
					<div className={styles.declarationWrapper}>
						<div className={styles.logo}>
							<img src={logo} alt='Logo' />
						</div>
						<ul className={styles.declarationList}>
							{secondList}
							{/* <li className={styles.declarationItem}>
								<a href='#' className={styles.declarationLink}>
									<span>Квартиры на сутки</span>
									<img src={locationSvg} alt='' />
								</a>
							</li>
							<li className={styles.declarationItem}>
								<a href='#' className={styles.declarationLink}>
									Коттеджи и усадьбы
								</a>
							</li>
							<li className={styles.declarationItem}>
								<a href='#' className={styles.declarationLink}>
									Бани и Сауны
								</a>
							</li>
							<li className={styles.declarationItem}>
								<a href='#' className={styles.declarationLink}>
									Авто напрокат
								</a>
							</li> */}
						</ul>
						<button className={styles.button}>
							+ Разместить объявление
						</button>
					</div>
				</Container>
			</div>
		</div>
	)
}

export default Header
