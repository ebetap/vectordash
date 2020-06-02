import Styles from './Stars.scss';

const Stars = ({ count, renderNumber, renderRest }) => {
  const countNumber = Math.round(Number(count));
  let stars = [];

  for (let i = 0; i < 5; ++i) {
    if (i < countNumber) {
      stars.push(
        <img key={i} src='/static/img/yellow-star.png' alt='Icon Star' />
      );
    } else if (renderRest) {
      stars.push(
        <img key={i} src='/static/img/empty-star.png' alt='Icon Star Off' />
      );
    }
  }

  return (
    <div className={Styles.rating}>
      {renderNumber && <div className='rating-number'>{count}</div>}

      {stars}
    </div>
  );
};

export default Stars;
