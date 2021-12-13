import React from 'react'


import './experience.scss'




function Experience() {

    return (
        <div className={"Experience"}>

            <h2>Опыт работы</h2>

            <table className={"Table"}>
                <tr>
                    <td>LHV Bank</td>
                    <td>Frontend trainee</td>
                    <td>2021(Июнь - Сентябрь)</td>
                </tr>
            </table>
            <p>-Тут мне давали достаточно простые задачки по верстке и иногда создание логики на Vue-js.</p>
            <p>-Также задали сделать собственную верстку с помощью Vue-js, где после объясняли все ошибки и правила хорошей практики.</p>
        </div>
    )
}

export default Experience;