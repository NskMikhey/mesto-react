const Card = (props) => {

    const {name, link} = props.card;

    // Нажатие на карточку 
    function handleClick() {
        props.onCardClick(props.card);
    }
    return (
        <article className="card">
            <img src={`${link}`} alt={name} className="card__image" onClick={handleClick}/>
            <button
                type="button"
                className="card__remove button-hover"
                aria-label="Удалить карточку"
            />
            <div className="card__info">
                <h2 className="card__title">{name}</h2> 
                <div className="card__like-container">
                    <button
                        type="button"
                        className="card__like button-hover"
                        aria-label="лайк"
                    />
                    <p className="card__like-counter" />
                </div>
            </div>
        </article>

    )
};

export default Card
