import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";



function App() {


  // Состояние Popup редактирования профиля 
  const [editProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);

  // Состояние Popup добавления карточки 
  const [newPlacePopupOpen, setNewPlacePopupOpen] = React.useState(false);

  // Состояние Popup редактирования аватара 
  const [updateAvatarPopupOpen, setUpdateAvatarPopupOpen] =
    React.useState(false);

  // Состояние выбранной для просмотра карточки 
  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
  });

  // Открывает Popup редактирования профиля 
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  // Открывает Popup добавления карточки 
  function handleNewPlaceClick() {
    setNewPlacePopupOpen(true);
  }
  // Открывает Popup редактирования аватара 
  function handleUpdateAvatarClick() {
    setUpdateAvatarPopupOpen(true);
  }

  //Устанавливает выбранную карточку по нажатию
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  // del
  const [deletePlacePopupOpen, setDeletePlacePopupOpen] =
  React.useState(false);

  function handleDeletePlaceClick(card) {
    setDeletePlacePopupOpen(true);
  }

  // Закрывает все Popup 
  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setNewPlacePopupOpen(false);
    setUpdateAvatarPopupOpen(false);
    setSelectedCard({ name: "", link: "" });
    setDeletePlacePopupOpen(false);
  }

  return (
    <div className="content">

      <Header />
      <Main
        onEditProfile={handleEditProfileClick} // редактирование профиля
        onNewPlace={handleNewPlaceClick} // добавление карточки
        onUpdateAvatar={handleUpdateAvatarClick} // редактирование аватара
        onCardClick={handleCardClick} // нажатие на карточку
        onDeleteCard={handleDeletePlaceClick} // удаление карточки
      />
      <Footer />

      {/* Edit profile popup */}
      <PopupWithForm
        popupType="edit-profile"
        popupTitle="Редактировать профиль"
        submitButtonText="Сохранить"
        popupOpen={editProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__input-group" htmlFor="name">
          <input
            className="popup__input popup__input_type_name"
            type="text"
            placeholder="Ваше имя"
            name="name"
            id="name"
            required=""
            minLength={2}
            maxLength={40}
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
            required=""
            minLength={2}
            maxLength={200}
          />
          <span className="popup__error popup__error_type_about" />
        </label>
      </PopupWithForm>

      {/* New place popup */}
      <PopupWithForm
        popupType="new-place"
        popupTitle="Новое место"
        submitButtonText="Создать"
        popupOpen={newPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__input-group" htmlFor="place-title">
          <input
            className="popup__input popup__input_place_title"
            type="text"
            placeholder="Название"
            name="title"
            id="title"
            required=""
            minLength={2}
            maxLength={30}
          />
          <span className="popup__error popup__error_type_title" />
        </label>
        <label className="popup__input-group" htmlFor="place-description">
          <input
            className="popup__input popup__input_place_description"
            type="url"
            placeholder="Ссылка на картинку"
            name="link"
            id="link"
            required=""
          />
          <span className="popup__error popup__error_type_link" />
        </label>
      </PopupWithForm>

      {/* Update avatar popup */}
      <PopupWithForm
        popupType="avatar-popup"
        popupTitle="Обновить аватар"
        submitButtonText="Сохранить"
        popupOpen={updateAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__input-group" htmlFor="avatar_url">
          <input
            type="url"
            className="popup__input popup__input_profile-avatar"
            name="profile-avatar"
            id="profile-avatar"
            placeholder="Ссылка на картинку"
            required=""
          />
          <span className="popup__error popup__error_type_profile-avatar" />
        </label>
      </PopupWithForm>

      {/* Delete card popup */}
      <PopupWithForm
        popupType="delete-place"
        popupTitle="Вы уверены?"
        submitButtonText="Да"
        popupOpen={deletePlacePopupOpen}
        onClose={closeAllPopups}
      />

      {/* View image popup */}
      <ImagePopup
        popupOpen={updateAvatarPopupOpen}
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
