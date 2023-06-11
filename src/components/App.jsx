// import React, {useEffect, useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function App() {



  return (
    <div className="content">

      <Header />
      <Main />
      <Footer />

      {/* Delete card popup */}
      <PopupWithForm
        popupType="delete-popup"
        popupTitle="Вы уверены?"
        submitButtonText="Да"
      />

      {/* Edit profile popup */}
      <PopupWithForm
        popupType="edit-profile"
        popupTitle="Редактировать профиль?"
        submitButtonText="Сохранить"
      >
      </PopupWithForm>

      {/* New place popup */}
      <PopupWithForm
        popupType="new-place"
        popupTitle="Новое место"
        submitButtonText="Создать"
      >
      </PopupWithForm>

      {/* Update avatar popup */}
      <PopupWithForm
        popupType="avatar-popup"
        popupTitle="Обновить аватар"
        submitButtonText="Сохранить"
      >
      </PopupWithForm>

      {/* View image popup */}
      <ImagePopup />
    </div>
  );
}

export default App;
