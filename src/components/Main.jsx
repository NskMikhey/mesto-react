import { useEffect, useState } from "react";
import api from "../utils/api";
import Card from "./Card";
// import 
const Main = (props) => {
    const [userName, setUserName] = useState('')
    const [userAbout, setUserAbout] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [cards, setCards] = useState([])

    useEffect(() => {
        Promise.all([api.getUserData(), api.getInitialCards()])
            .then(([dataUser, dataCard]) => {
                setUserName(dataUser.name)
                setUserAbout(dataUser.about)
                setUserAvatar(dataUser.avatar)
                dataCard.forEach(data => data.myid = dataUser._id)
                setCards(dataCard)
            })
    }, [])

    return (
        <main>
            <section className="profile">
                <button
                    className="profile__edit-avatar-button button-hover"
                    aria-label="Редактировать аватар"
                    onClick={props.onUpdateAvatar}
                />
                <img className="profile__avatar" src={userAvatar} alt="аватар" />
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button
                        className="profile__edit-button button-hover"
                        type="button"
                        title="Отредактировать данные"
                        aria-label="Редактировать профиль"
                        onClick={props.onEditProfile}
                    />
                    <p className="profile__about">{userAbout}</p>
                </div>
                <button
                    className="profile__add-button button-hover"
                    type="button"
                    title="Добавить фото"
                    aria-label="Добавить фото"
                    onClick={props.onNewPlace}
                />
            </section>
            <section className="elements">
                {cards.map(data => {
                    return (
                        <Card
                            card={data}
                            key={data._id}
                            onCardClick={props.onCardClick} // нажатие на карточку

                        />)
                })
                }
            </section>
        </main>
    )
};

export default Main