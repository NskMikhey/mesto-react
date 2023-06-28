import React from 'react';
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = (props) => {

    // Стейт карточки с названием и ссылкой на изображение 
    const [card, setCard] = React.useState({ name: '', link: '' });

    React.useEffect(() => {
        setCard({ name: '', link: '' });
    }, [props.popupOpen])

    // Изменяет стейт card 
    function handleCardChange(evt) {
        const { name, value } = evt.target;
        setCard({
            ...card,
            [name]: value
        })
    }

    // Отправка формы
    function handleSubmit(evt) {
        evt.preventDefault();
        props.onAddPlace(card);
    }

    return (
        <PopupWithForm
            popupType="new-place"
            popupTitle="Новое место"
            submitButtonText="Создать"
            popupOpen={props.popupOpen}
            onClose={props.onClose}
            onOverlayClose={props.onOverlayClose}
            popupFormName="newPlaceForm"
            onSubmit={handleSubmit}
            isLoading={props.isLoading}
            loadingText={props.loadingText}
        >
            <label className="popup__input-group" htmlFor="place-title">
                <input
                    className="popup__input popup__input_place_title"
                    type="text"
                    placeholder="Название"
                    value={card.name ? card.name : ""}
                    name="name"
                    id="name_title"
                    required
                    minLength={2}
                    maxLength={30}
                    onChange={handleCardChange}
                />
                <span className="popup__error popup__error_type_title" />
            </label>
            <label className="popup__input-group" htmlFor="place-description">
                <input
                    className="popup__input popup__input_place_description"
                    type="url"
                    placeholder="Ссылка на картинку"
                    value={card.link ? card.link : ""}
                    name="link"
                    id="place_link"
                    required
                    onChange={handleCardChange}
                />
                <span className="popup__error popup__error_type_link" />
            </label>
        </PopupWithForm>
    );
};
export default AddPlacePopup;
