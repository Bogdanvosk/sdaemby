import breadcrumbsIcon from '../../assets/icons/breadcrumbs-icon.svg'
import Container from '../Container/Container'

import styles from './Breadcrumbs.module.scss'

const Breadcrumbs = () => {
	return (
		<Container>
			<div className={styles.breadcrumbs}>
				<img src={breadcrumbsIcon} alt='' />
				<span className={styles.circle}></span>

				<ul className={styles.list}>
					<li className={styles.item}>Новости</li>
				</ul>
			</div>
		</Container>
	)
}

export default Breadcrumbs
