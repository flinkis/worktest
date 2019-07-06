import React from 'react'
import css from '../styles/general.scss'
import Character from './character'

const sortByName = (characterA, characterB) => {
    if (characterA.name < characterB.name) {
        return -1
    }
    if (characterA.name > characterB.name) {
        return 1
    }
    return 0
}

const CharacterList = ({ characters }) => (
    <>
        <h3 className={css.characters__title}>Characters in movie</h3>
        <div className={css.characters}>
            {characters.sort(sortByName).map((c, index) => (
                <Character key={c.name} character={c} number={index + 1} />
            ))}
        </div>
    </>
)

export default CharacterList
