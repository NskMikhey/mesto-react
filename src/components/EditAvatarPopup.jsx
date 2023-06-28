import React from 'react';
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = (props) => {

    const refAvatar = React.useRef('');

    function handleSubmit(evt) {
        evt.preventDefault();

        props.onUpdateAvatar({
            avatar: refAvatar.current.value
        })
    }

    React.useEffect(() => {
        refAvatar.current.value = '';
    }, [props.popupOpen]);

    return (
        <PopupWithForm
            popupType="avatar-popup"
            popupTitle="Обновить аватар"
            submitButtonText="Сохранить"
            popupOpen={props.popupOpen}
            popupFormName="updateAvatarForm"
            onClose={props.onClose}
            onSubmit={handleSubmit}
            isLoading={props.isLoading}
            loadingText={props.loadingText}
            onOverlayClose={props.onOverlayClose}
        >
            <label className="popup__input-group" htmlFor="avatar_url">
                <input
                    type="url"
                    className="popup__input"
                    name="profile-avatar"
                    id="profile-avatar"
                    placeholder="Ссылка на картинку"
                    required
                    ref={refAvatar}
                />
                <span
                    className="popup__error"
                    id="popup__error_type_profile-avatar"
                ></span>
            </label>
        </PopupWithForm>
    );
};

export default EditAvatarPopup;
