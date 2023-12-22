import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Environment, Loader, OrbitControls, Stars } from '@react-three/drei'
import { MlscLogo } from '@/app/components/MLSC-Logo_alpha-final'
import { CPUcase2 } from '@/app/components/CpuCase2'

export default function Main() {
    return (
        <main className="main">
            <Canvas>
                <OrbitControls />
                <directionalLight position={[12, 5, 100]} />
                <ambientLight />
                <mesh>
                    <Stars radius={100} depth={20} count={2000} factor={4} saturation={2} fade speed={1} />
                    {/* <CPUcase2 /> */}
                    <MlscLogo scale={15} rotation={[1.7,0,0]} />
                </mesh>
            </Canvas>
        </main>
    )
}