import { useState } from 'react'
import { MOON, SUN } from './const'

export function App() {
    let [theme, setTheme] = useState(
        localStorage?.theme ? localStorage.theme : 'dark'
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

    const rows = ['a', 'b', 'c']
    const cols = [1, 2, 3]

    let [clearBoardClicked, setClearBoardClicked] = useState(false)

    let clearBoard = () => {
        rows.forEach((row) => {
            cols.forEach((col) => {
                document.querySelector(`#${row}${col}`)!.innerHTML = ''
            })
        })
        setClearBoardClicked(false)
    }

    return (
        <div className='container mx-auto'>
            <div className='col space-y-2'>
                <div className='row m-4 justify-center'>
                    <span className='text-xl'>Tic Tac Toe</span>
                    <span className='mx-2' onClick={() => toggleTheme()}>
                        {theme === 'dark' ? SUN : MOON}
                    </span>
                </div>
                <div className='col self-center'>
                    {rows.map((row, rowNum) => (
                        <div className='row' key={rowNum}>
                            {cols.map((col, colNum) => (
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
                {clearBoardClicked ? (
                    <>
                        <div className='row justify-center'>
                            <span className='bg3 p-2 rounded-xl'>
                                Clear Board?
                            </span>
                        </div>
                        <div className='row justify-center space-x-2'>
                            <span
                                className='warn p-2 rounded-xl'
                                onClick={() => clearBoard()}
                            >
                                CLEAR
                            </span>
                            <span
                                className='bg2 p-2 rounded-xl'
                                onClick={() => setClearBoardClicked(false)}
                            >
                                CANCEL
                            </span>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='row justify-center'>
                            <span className='text-xl'>{player}'s turn</span>
                        </div>
                        <div className='row justify-center'>
                            <span
                                className='bg2 p-2 rounded-xl'
                                onClick={() => setClearBoardClicked(true)}
                            >
                                CLEAR BOARD
                            </span>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
