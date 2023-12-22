import Link from 'next/link'
import '../teams.css'
import { useEffect, useState } from 'react'
import localFont from 'next/font/local'


const customFont = localFont({ src: '../TechnoproRegular-XzO9.ttf' })



export default function Navbar({ isClosed, setIsClosed }) {
    const [title, setTitle] = useState("MLSC")

    return (
        <div className={`menu-bar ${customFont.className}`}>
            <div className="title-bar" style={{ display: isClosed ? "flex" : "none" }}>
                <div className='nav-link'>
                    <div className="sliced-top" style={{ color: "purple" }}>{title}</div>
                    <div className="sliced-bottom" aria-hidden="true" style={{ color: title === "MLSC" ? "purple  " : "white" }}>{title}</div>
                </div>
                <div className="jumbotron" onClick={() => setIsClosed((prev) => !prev)}>
                    <img src='/images/hamburger.png' alt="" />
                </div>
            </div>
            <nav style={{ display: isClosed ? "none" : "flex" }}>
                <h1 className='nav-link'>
                    <div className="sliced-top" style={{ color: title === "MLSC" ? "purple" : "white" }}>{title}</div>
                    <div className="sliced-bottom" aria-hidden="true" style={{ color: title === "MLSC" ? "purple  " : "white" }}>{title}</div>
                </h1>
                <ul className='navbar'>
                    <li>
                        <Link className='nav-link' href="/" onMouseOver={() => setTitle("HOME")} onMouseOut={() => setTitle("MLSC")}>
                            <div className="sliced-top">Home</div>
                            <div className="sliced-bottom" aria-hidden="true">Home</div>
                        </Link>
                    </li>
                    <li>
                        <Link className='nav-link' href="/team" onMouseOver={() => setTitle("TEAM")} onMouseOut={() => setTitle("MLSC")}>
                            <div className="sliced-top">Team</div>
                            <div className="sliced-bottom" aria-hidden="true">Team</div>
                        </Link>
                    </li>
                    <li>
                        <div className='nav-link' onMouseOver={() => setTitle("CLOSE")} onMouseOut={() => setTitle("MLSC")} onClick={() => setIsClosed((prev) => !prev)}>
                            <div className="sliced-top">Close</div>
                            <div className="sliced-bottom" aria-hidden="true">Close</div>
                        </div>
                    </li>
                    <li>
                        <Link className='nav-link' href="/events" onMouseOver={() => setTitle("EVENTS")} onMouseOut={() => setTitle("MLSC")}>
                            <div className="sliced-top">Events</div>
                            <div className="sliced-bottom" aria-hidden="true">Events</div>
                        </Link>
                    </li>
                    <li>
                        <Link className='nav-link' href="/blogs" onMouseOver={() => setTitle("BLOGS")} onMouseOut={() => setTitle("MLSC")}>
                            <div className="sliced-top">Blogs</div>
                            <div className="sliced-bottom" aria-hidden="true">Blogs</div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}