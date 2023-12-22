'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Environment, Loader, OrbitControls, Stars } from '@react-three/drei'
import { CPUcase2 } from '../components/CpuCase2'
import Navbar from './components/Navbar'
import Main from './components/Main'
import { useState } from 'react'
export default function Home() {
    const [isClosed, setIsClosed] = useState(true);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-0 ">
            <Navbar isClosed={isClosed} setIsClosed={setIsClosed} />
            {isClosed ? <Main /> : ''}
            <Loader />
        </main>
    )
}
