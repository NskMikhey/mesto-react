

function App() {
  return (
    <div className="page-content">
      <header className="header">
        <img
          className="header__logo"
          src="#"
          alt="лого место"
        />
      </header>
      <main className="content">
        <section className="profile">
          <button
            className="profile__edit-avatar-button button-hover"
            aria-label="Редактировать аватар"
          />
          <img className="profile__avatar" src="#" alt="аватар" />
          <div className="profile__info">
            <h1 className="profile__name"> </h1>
            <button
              className="profile__edit-button button-hover"
              type="button"
              title="Отредактировать данные"
              aria-label="Редактировать профиль"
            />
            <p className="profile__about" />
          </div>
          <button
            className="profile__add-button button-hover"
            type="button"
            title="Добавить фото"
            aria-label="Добавить фото"
          />
        </section>
        <section className="elements" aria-label="фото карточки" />
        <footer className="footer">
          <p className="footer__copyright" lang="en">
            © 2023 Mesto Russia
          </p>
        </footer>
      </main>
      {/* Edit profile popup */}
      <section className="popup edit-profile">
        <div className="popup__container">
          <button
            className="popup__close-button button-hover"
            type="button"
            aria-label="Закрыть окно"
          />
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form" name="profileContent" noValidate="">
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
            <button className="popup__submit" type="submit" aria-label="Сохранить">
              Сохранить
            </button>
          </form>
        </div>
      </section>
      {/* New place popup */}
      <section className="popup new-place">
        <div className="popup__container">
          <button
            className="popup__close-button button-hover"
            type="button"
            aria-label="Закрыть окно"
          />
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form" name="newPlaceForm" noValidate="">
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
            <button className="popup__submit" type="submit" aria-label="Создать">
              Создать
            </button>
          </form>
        </div>
      </section>
      {/* Update avatar popup */}
      <section className="popup avatar-popup">
        <div className="popup__container">
          <button
            className="popup__close-button button-hover"
            type="button"
            aria-label="Закрыть окно"
          />
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form" name="editAvatar" noValidate="">
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
            <button className="popup__submit" type="submit" data-value="Сохранить">
              Сохранить
            </button>
          </form>
        </div>
      </section>
      {/* View image popup */}
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
      {/* Delete card popup */}
      <section className="popup delete-popup">
        <div className="popup__container">
          <button
            className="popup__close-button button-hover"
            type="button"
            aria-label="Закрыть окно"
          />
          <form
            className="popup__form popup__form_type_delete"
            name="deletePlace"
            noValidate=""
          >
            <h2 className="popup__title">Вы уверены?</h2>
            <button
              className="popup__submit popup__submit_type_delete"
              type="submit"
              data-value="Да"
            >
              Да
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
