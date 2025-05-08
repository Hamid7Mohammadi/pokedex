import { useState } from "react"
import { first151Pokemon, getFullPokedexNumber } from "../utils"


export default function SideNav(props) {

    const { selectedPokemon, setSelectedPokemon,
        handleCloseMenu, showSideMenu } = props
    
    const [searchValue, setSeatchValue] = useState('')
    
    const filteredPokemon = first151Pokemon.filter((ele, eleIndex) => {
        
        if (getFullPokedexNumber(eleIndex).includes(searchValue))
             { return true }
        
        if (ele.toLowerCase().includes(searchValue.toLowerCase())) { return true }
        
        return false
    })

    return (
        <nav className={' ' + (!showSideMenu ? " open" : '')}>

            <div className={"header" + (!showSideMenu ? " open" : '')} >
                <button onClick={handleCloseMenu} className="open-nav-button">
                <i className="fa-solid fa-arrow-left-long"></i>
                </button>
                <h1 className="text-gradient">Pokédex </h1>
            </div>
            <input
                placeholder="E.g. 001 or Bulba..."
                value={searchValue}
                onChange={(e) => {
               setSeatchValue(e.target.value) 
            }}/>
            {filteredPokemon.map((pokemon, pokemonIndex) => {
                return (
                    <button key={pokemonIndex}
                        onClick={() => {
                            setSelectedPokemon(first151Pokemon.indexOf(pokemon))
                            handleCloseMenu()
                        }}
                        className={'nav-card ' +
                            ( pokemonIndex === selectedPokemon ? 'nav-card-selected' : '') } >
                        <p>{ getFullPokedexNumber(first151Pokemon.indexOf(pokemon))}</p>
                        <p>{pokemon }</p>
                    </button>
                )
            })}
        </nav>
    )
}