import styles from '../styles/Dropdown.module.scss'
import { FiChevronDown } from "react-icons/fi"
import { FiChevronUp } from "react-icons/fi"

function Dropdown ({toggling, isOpen, selectedOption, options, onOptionClicked }) {
	return (
		<div className={styles.filter}>
			<div onClick={toggling} className={`cursor-pointer ${styles.customSelect}`}>
				<div className="value">{selectedOption || "Popular"}</div>
				<div>
					{
						isOpen ? <FiChevronUp />  : <FiChevronDown />
					}
				</div>
			</div>
			{isOpen && (
				<div className={styles.selectOptions}>
					<ul>
						{ options && options.map(option => (
							<li onClick={onOptionClicked(option)} key={Math.random()}>{option.name}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default Dropdown;