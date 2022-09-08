import { useState } from 'react'

export function App() {
    let [player, setPlayer] = useState('X')

    let handleClick = (id: any) => {
        document.querySelector<HTMLDivElement>(`#${id}`)!.innerHTML = player
        setPlayer(player === 'X' ? 'O' : 'X')
    }

    return (
        <div className='container mx-auto'>
            <div className='row m-4 justify-center'>
                <span className='text-xl'>Tic Tac Toe</span>
            </div>
            <div className='row justify-center'>
                <div className='col'>
                    <div
                        className='cell'
                        id='a1'
                        onClick={() => {
                            handleClick('a1')
                        }}
                    ></div>
                    <div
                        className='cell'
                        id='b1'
                        onClick={() => {
                            handleClick('b1')
                        }}
                    ></div>
                    <div
                        className='cell'
                        id='c1'
                        onClick={() => {
                            handleClick('c1')
                        }}
                    ></div>
                </div>
                <div className='col'>
                    <div
                        className='cell'
                        id='a2'
                        onClick={() => {
                            handleClick('a2')
                        }}
                    ></div>
                    <div
                        className='cell'
                        id='b2'
                        onClick={() => {
                            handleClick('b2')
                        }}
                    ></div>
                    <div
                        className='cell'
                        id='c2'
                        onClick={() => {
                            handleClick('c2')
                        }}
                    ></div>
                </div>
                <div className='col'>
                    <div
                        className='cell'
                        id='a3'
                        onClick={() => {
                            handleClick('a3')
                        }}
                    ></div>
                    <div
                        className='cell'
                        id='b3'
                        onClick={() => {
                            handleClick('b3')
                        }}
                    ></div>
                    <div
                        className='cell'
                        id='c3'
                        onClick={() => {
                            handleClick('c3')
                        }}
                    ></div>
                </div>
            </div>
        </div>
    )
}
