import { useState } from 'preact/hooks'
import { SUN, MOON } from './consts'

enum Theme {
    Light = 'light',
    Dark = 'dark'
}

function themeCheck() {
    if (localStorage.theme) {
        document.querySelector('html')!.className = localStorage.theme
        return localStorage.theme
    } else localStorage.theme = Theme.Dark
    return Theme.Dark
}

export function App() {
    let [player, setPlayer] = useState('X')
    let [theme, setTheme] = useState(themeCheck())

    let toggleTheme = () => {
        if (theme === Theme.Dark) {
            setTheme(Theme.Light)
            localStorage.theme = Theme.Light
            document.querySelector('html')!.className = 'light'
        }

        if (theme === Theme.Light) {
            setTheme(Theme.Dark)
            localStorage.theme = Theme.Dark
            document.querySelector('html')!.className = 'dark'
        }
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
        <div class='container mx-auto'>
            <div class='col space-y-2'>
                <div class='row m-4 space-x-2 justify-center'>
                    <span class='text-xl'>Tic Tac Toe</span>
                    <span class='' onClick={toggleTheme}>
                        {theme === Theme.Dark && SUN}
                        {theme === Theme.Light && MOON}
                    </span>
                </div>
                <div class='col self-center'>
                    {rows.map((row) => (
                        <div class='row'>
                            {cols.map((col) => (
                                <div
                                    class='cell'
                                    id={`${row}${col}`}
                                    onClick={() => onPlay(`${row}${col}`)}
                                ></div>
                            ))}
                        </div>
                    ))}
                </div>
                {clearBoardClicked ? (
                    <>
                        <div class='row justify-center'>
                            <span class='bg3 p-2 rounded-xl'>Clear Board?</span>
                        </div>
                        <div class='row justify-center space-x-2'>
                            <button
                                class='bg2 p-2 rounded-xl'
                                onClick={() => setClearBoardClicked(false)}
                            >
                                CANCEL
                            </button>
                            <button
                                class='warn p-2 rounded-xl'
                                onClick={() => clearBoard()}
                            >
                                CLEAR
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div class='row justify-center'>
                            <span class='text-xl'>{player}'s turn</span>
                        </div>
                        <div class='row justify-center'>
                            <button
                                class='bg2 p-2 rounded-xl'
                                onClick={() => setClearBoardClicked(true)}
                            >
                                CLEAR BOARD
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
