import { useState } from 'react'
import { MOON, SUN } from './const'

export function App() {
    let [theme, setTheme] = useState(
        localStorage?.theme === 'dark' ? 'dark' : 'light'
    )

    document.querySelector('html')!.className = theme

    let [player, setPlayer] = useState('X')

    let toggleTheme = () => {
        let newTheme = theme === 'dark' ? 'light' : 'dark'
        localStorage.setItem('theme', newTheme)
        document.querySelector('html')?.setAttribute('class', newTheme)
        setTheme(newTheme)
    }

    let onPlay = (id: string) => {
        let cell = document.querySelector<HTMLDivElement>(`#${id}`)!
        if (cell.innerHTML) {
            return
        } else {
            cell.innerHTML = player
            setPlayer(player === 'X' ? 'O' : 'X')
        }
    }

    let clearBoard = () => {
        let rows = ['a', 'b', 'c']
        let cols = [1, 2, 3]
        rows.forEach((row) => {
            cols.forEach((col) => {
                document.querySelector(`#${row}${col}`)!.innerHTML = ''
            })
        })
    }

    return (
        <div className='container mx-auto'>
            <div className='col'>
                <div className='row m-4 justify-center'>
                    <span className='text-xl'>Tic Tac Toe</span>
                    <span className='mx-2' onClick={() => toggleTheme()}>
                        {theme === 'dark' ? SUN : MOON}
                    </span>
                </div>
                <div className='col self-center'>
                    {['a', 'b', 'c'].map((row, rowNum) => (
                        <div className='row' key={rowNum}>
                            {[1, 2, 3].map((col, colNum) => (
                                <div
                                    className='cell'
                                    key={colNum}
                                    id={`${row}${col}`}
                                    onClick={() => onPlay(`${row}${col}`)}
                                ></div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className='row justify-center m-2'>
                    <button
                        className='bg2 rounded-xl p-2'
                        onClick={() => clearBoard()}
                    >
                        CLEAR BOARD
                    </button>
                </div>
            </div>
        </div>
    )
}
