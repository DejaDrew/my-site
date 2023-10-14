import React, { useRef, useState } from 'react'

import { Canvas, useFrame } from '@react-three/fiber'

export default function IntroThreeJs() {
  
  const offy = .33;

    
  function Box(props:any) {
    
    const ref = useRef<any>();    
        
    useFrame((state, delta) => {
      if (ref.current) {
        ref.current.rotation.y += (Math.random()*0.00017)+.000001;
      }
    });
    
    return (
      <mesh
        {...props}
        ref={ref}
        scale='6'
        >
        <boxGeometry args={[2, 4, 2]} />
        <meshStandardMaterial color="#1f293f" metalness={0.9} roughness={0.7} envMapIntensity={3} />  
      </mesh>
    )
  }

  return (
    <div className='three-bg h-full w-full opacity-60 absolute'>
				<Canvas camera={{ fov: 55, position: [0, 0, 15] , rotation: [0,0,.65] }} >
					<group >
						<ambientLight intensity={6} />            
						<pointLight position={[-10, 0, 15]} intensity={400} />
						<Box position={[0, 0, 0]} rotation={[0, 0-offy, 0]} />
						<Box position={[1, 0, 0]} rotation={[0, .88-offy, -.5]} />
						<Box position={[0, -1.5, -2]} rotation={[0, -.68-offy, .5]} />	  

            <Box position={[0, 0, 0]} rotation={[0, 0-offy, -50]} />           	
					</group>
				</Canvas>
			</div>
  )
}
