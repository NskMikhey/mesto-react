import React from 'react';
const ImagePopup = (props) => {

    return (
        <section className="popup image-popup" aria-label="попап зума">
            <div className="popup__image-container" aria-label="зум карточки">
                <button
                    className="popup__close-button button-hover"
                    type="button"
                    aria-label="Закрыть окно"
                />
                <img src="#" alt="Описание картинки" className="popup__image" />
                <p className="popup__image-title" />
            </div>
        </section>
    )
};

export default ImagePopup