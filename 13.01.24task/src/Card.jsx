function Card() {
  return (
    <div className="card">
      <div className="card__img--container">
        <img src="Carousel.png" alt="card-profile" width="100" />
      </div>
      <div className="card__content">
        <h2 className="card__title">Card Title</h2>
        <p className="card__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatibus.
        </p>
        <ul>
          <li>
            <a href="#" className="card__link">
              HTML
            </a>
          </li>
          <li>
            <a href="#" className="card__link">
              CSS
            </a>
          </li>
          <li>
            <a href="#" className="card__link">
              JS
            </a>
          </li>
          <li>
            <a href="#" className="card__link">
              Bootstrap
            </a>
          </li>
          <li>
            <a href="#" className="card__link">
              React
            </a>
          </li>
          <li>
            <a href="#" className="card__link">
              TS
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
