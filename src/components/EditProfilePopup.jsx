import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

const EditProfilePopup = (props) => {

    // Контекст currentUser 
    const currentUser = React.useContext(CurrentUserContext);
    const { name, about } = currentUser;

    // Состояние данных пользователя 
    const [userData, setUserData] = React.useState({ name: '', about: '' });

    // Изменяет состояние userData
    function handleUserDataChange(evt) {
        const { name, value } = evt.target;
        setUserData({
            ...userData,
            [name]: value
        })
    }

    // Отправка формы   
    function handleSubmit(evt) {
        evt.preventDefault();
        props.onUpdateUser(userData);
    }

    React.useEffect(() => {
        setUserData({ "name": name, "about": about })
    }, [name, about]);

    return (
        <PopupWithForm
            popupOpen={props.popupOpen}
            popupFormName="profileContent"
            popupType="edit-profile"
            popupTitle="Редактировать профиль"
            submitButtonText="Сохранить"
            onClose={props.onClose}
            onSubmit={handleSubmit}
            isLoading={props.isLoading}
            loadingText={props.loadingText}
            onOverlayClose={props.onOverlayClose}
        >
            <label className="popup__input-group" htmlFor="name">
                <input
                    className="popup__input popup__input_type_name"
                    type="text"
                    placeholder="Ваше имя"
                    name="name"
                    id="name"
                    required
                    minLength={2}
                    maxLength={40}
                    onChange={handleUserDataChange}
                    value={userData.name ? userData.name : ""}
                />
                <span className="popup__error popup__error_type_name" />
            </label>
            <label className="popup__input-group" htmlFor="about">
                <input
                    className="popup__input popup__input_type_about"
                    type="text"
                    placeholder="Вид деятельности"
                    name="about"
                    id="about"
                    required
                    minLength={2}
                    maxLength={200}
                    onChange={handleUserDataChange}
                    value={userData.about ? userData.about : ""}
                />
                <span className="popup__error popup__error_type_about" />
            </label>
        </PopupWithForm>
    );
};

export default EditProfilePopup;
