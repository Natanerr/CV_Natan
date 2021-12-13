import React from 'react'


import './avatar.scss'


import img from './me.jpg'


function Avatar() {

    return (
        <div className={"AvatarContainer"}>
            <div className={"SelfDescription"}>
                <img src={img} className={"Avatar"} alt="avatar"/>
                    <div>
                        <h1>Натан Янов</h1>

                            <p>
                                    Рабочий стаж в области фронтенда 3 месяца, общий пол года, в это время активно занимался версткой
                                    и изучением библиотек для JS-а.
                            </p>

                            <p>
                                Люблю учиться, играть и программировать
                            </p>
                    </div>
                </div>
        </div>
    )
}

export default Avatar;