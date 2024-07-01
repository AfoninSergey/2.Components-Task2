import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	const [steps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);
	const firstStep = !activeIndex;
	const lastStep = steps.length - 1 === activeIndex;

	const onBackButtonClick = () => {
		setActiveIndex((activeIndex) => activeIndex - 1);
	};

	const onForwardButtonClick = () => {
		setActiveIndex((activeIndex) => activeIndex + 1);
	};

	const onStartOverButtonClick = () => {
		setActiveIndex(0);
	};
	const onStepButtonClick = (index) => {
		setActiveIndex(index);
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map(({ id, title }, index) => (
							<li
								key={id}
								className={`${styles['steps-item']} ${index === activeIndex ? styles.active : null} ${index <= activeIndex ? styles.done : null}`}
							>
								<button
									onClick={() => onStepButtonClick(index)}
									className={styles['steps-item-button']}
								>
									{index + 1}
								</button>
								{title}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							onClick={onBackButtonClick}
							disabled={firstStep}
						>
							Назад
						</button>
						{!lastStep ? (
							<button
								className={styles.button}
								onClick={onForwardButtonClick}
							>
								Далее
							</button>
						) : (
							<button
								className={styles.button}
								onClick={onStartOverButtonClick}
							>
								Начать сначала
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
