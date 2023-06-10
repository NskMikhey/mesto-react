const Main = () => {
    return (
        <main>
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
        </main>
    )
};

export default Main