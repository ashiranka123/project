import React from 'react'
import 'aframe'
import { Scene, Entity } from 'aframe-react'
import 'aframe'
import 'aframe-look-at-component'

export default class Levels extends React.Component {
	render() {
		return (
			<Scene>
				<a-sky src="via_lactea.png">
					<Entity
						geometry="primitive: sphere;
			  radius: 5000;
			  segmentsWidth: 64;
			  segmentsHeight: 64"
						material="shader: flat; 
			  src: url(via_lactea.png);
			  color: #FFF;
			  fog: false"
						scale="-1 1 1"
					/>
				</a-sky>

				<Entity light="type: ambient; color: #FFFFFF" />
				<Entity
					light="type: point; intensity: 1;color: #BABABA"
					position="0 0 0"
				/>
				<Entity sound="src: nocturno.mp3; autoplay: true; volume: 1" />

				<Entity
					position="0 0 0"
					rotation="0 0 0"
					id="sun"
					events={{
						click: () => console.log('clicked')
					}}
				>
					<a-image
						position="0 5 0"
						src="SUN.png"
						scale="1.5 0.5 1.5"
						look-at="[camera]"
					/>
					<a-sphere
						position="0 0 0"
						scale="4 4 4"
						src="sol.jpg"
						rotation="0 225.2934514285298 0"
					>
						<a-animation
							attribute="rotation"
							from="0 0 0"
							to="0 360 0"
							dur="35000"
							repeat="indefinite"
							easing="linear"
						/>
						<Entity
							geometry="primitive: sphere;
			  radius: 0.85;
			  segmentsWidth: 36;
			  segmentsHeight: 18;
			  translate: 0 0 0"
							material="color: gray;
			  opacity: 1.0;
			  shader: standard;
			  transparent: true;
			  metalness: 0.0;
			  roughness: 0.5;
			  src: url(sol.jpg)"
						/>
					</a-sphere>
				</Entity>

				<Entity position="0 0 0" rotation="0 197.13176999996358 0">
					<a-animation
						attribute="rotation"
						to="0 360 0"
						dur="40000"
						fill="forwards"
						easing="linear"
						repeat="indefinite"
					/>
					<a-image position="0 5 6" scale="1.5 0.3 1.5" src="MERCURY.png" />
					<a-sphere
						position="0 0 6"
						scale="0.4 0.4 0.4"
						rotation="0 165.62860799994087 0"
						src="mercurio.jpg"
					>
						<a-mouseenter scale="3 3 3" easing="linear" />
						<a-mouseleave scale="0.4 0.4 0.4" />
						<a-animation
							attribute="rotation"
							from="0 0 0"
							to="0 360 0"
							dur="15000"
							easing="linear"
							repeat="indefinite"
						/>

						<Entity
							geometry="primitive: sphere;
			  radius: 0.85;
			  segmentsWidth: 36;
			  segmentsHeight: 18;
			  translate: 0 0 0"
							material="color: gray;
			  opacity: 1.0;
			  shader: standard;
			  transparent: true;
			  metalness: 0.0;
			  roughness: 0.5;
			  src: url(mercurio.jpg)"
						/>
					</a-sphere>
				</Entity>

				<Entity position="0 0 0" rotation="0 175.22823999996763 0">
					<a-animation
						attribute="rotation"
						to="0 360 0"
						dur="45000"
						fill="forwards"
						easing="linear"
						repeat="indefinite"
					/>
					<a-image position="0 5 8.5" scale="1.5 0.3 1.5" src="VENUS.png" />
					<a-sphere
						position="0 0 8.5"
						scale="0.4 0.4 0.4"
						src="venus.jpg"
						rotation="0 165.62860799994087 0"
					>
						<a-mouseenter scale="3 3 3" />
						<a-mouseleave scale="0.4 0.4 0.4" />
						<a-animation
							attribute="rotation"
							from="0 0 0"
							to="0 360 0"
							dur="15000"
							repeat="indefinite"
							easing="linear"
						/>

						<Entity
							geometry="primitive: sphere;
			  radius: 0.85;
			  segmentsWidth: 36;
			  segmentsHeight: 18;
			  translate: 0 0 0"
							material="color: gray;
			  opacity: 1.0;
			  shader: standard;
			  transparent: true;
			  metalness: 0.0;
			  roughness: 0.5;
			  src: url(venus.jpg)"
						/>
					</a-sphere>
				</Entity>

				<Entity position="0 0 0" rotation="0 157.70541599997085 0">
					<a-animation
						attribute="rotation"
						to="0 360 0"
						dur="50000"
						fill="forwards"
						easing="linear"
						repeat="indefinite"
					/>
					<a-image position="0 5 10.5" scale="1.5 0.3 1.5" src="EARTH.png" />
					<a-sphere
						id="tierra"
						position="0 0 10.5"
						scale="0.5 0.5 0.5"
						src="tierra.jpg"
						rotation="0 140.2364939832433 0"
					>
						<a-mouseenter scale="3 3 3" />
						<a-mouseleave scale="0.5 0.5 0.5" />
						<a-animation
							attribute="rotation"
							from="0 0 0"
							to="0 360 0"
							dur="15000"
							repeat="indefinite"
						/>

						<Entity
							geometry="primitive: sphere;
			  radius: 0.85;
			  segmentsWidth: 36;
			  segmentsHeight: 18;
			  translate: 0 0 0"
							material="color: gray;
			  opacity: 1.0;
			  shader: standard;
			  transparent: true;
			  metalness: 0.0;
			  roughness: 0.5;
			  src: url(tierra.jpg)"
						/>
					</a-sphere>

					<Entity position="0 0.3 10.5" rotation="0 315.4108319999417 0">
						<a-animation
							attribute="rotation"
							to="0 360 0"
							dur="25000"
							fill="forwards"
							easing="linear"
							repeat="indefinite"
						/>

						<a-sphere position="0 0.3 0.3" scale="0.2 0.2 0.2" src="luna.jpg">
							<Entity
								geometry="primitive: sphere;
			  radius: 0.85;
			  segmentsWidth: 36;
			  segmentsHeight: 18;
			  translate: 0 0 0"
								material="color: gray;
			  opacity: 1.0;
			  shader: standard;
			  transparent: true;
			  metalness: 0.0;
			  roughness: 0.5;
			  src: url(luna.jpg)"
							/>
						</a-sphere>
					</Entity>
				</Entity>

				<Entity position="0 0 0" rotation="0 143.3685599999735 0">
					<a-animation
						attribute="rotation"
						to="0 360 0"
						dur="55000"
						fill="forwards"
						easing="linear"
						repeat="indefinite"
					/>
					<a-image position="0 5 12.5" scale="1.5 0.3 1.5" src="MARS.png" />
					<a-sphere
						position="0 0 12.5"
						scale="0.4 0.4 0.4"
						src="marte.jpg"
						rotation="0 165.62860799994087 0"
					>
						<a-mouseenter scale="3 3 3" />
						<a-mouseleave scale="0.4 0.4 0.4" />
						<a-animation
							attribute="rotation"
							from="0 0 0"
							to="0 360 0"
							dur="15000"
							repeat="indefinite"
							easing="linear"
						/>

						<Entity
							geometry="primitive: sphere;
			  radius: 0.85;
			  segmentsWidth: 36;
			  segmentsHeight: 18;
			  translate: 0 0 0"
							material="color: gray;
			  opacity: 1.0;
			  shader: standard;
			  transparent: true;
			  metalness: 0.0;
			  roughness: 0.5;
			  src: url(marte.jpg)"
						/>
					</a-sphere>
				</Entity>

				<a-collada-model
					src="asteroides.dae"
					scale="2.1 2.1 2.1"
					position="0 0 0"
					rotation="0 175.22823999996763 0"
				>
					<a-animation
						attribute="rotation"
						from="0 0 0"
						to="0 360 0"
						dur="45000"
						repeat="indefinite"
						easing="linear"
					/>
				</a-collada-model>

				<Entity position="0 0 0" rotation="0 131.42117999997572 0">
					<a-animation
						attribute="rotation"
						to="0 360 0"
						dur="60000"
						fill="forwards"
						easing="linear"
						repeat="indefinite"
					/>
					<a-image position="0 5 24" scale="1.5 0.3 1.5" src="JUPITER.png" />
					<a-sphere
						position="0 0 24"
						scale="2.5 2.5 2.5"
						src="jupiter.jpg"
						rotation="0 165.62860799994087 0"
					>
						<a-mouseenter scale="3.2 3.2 3.2" />
						<a-mouseleave scale="2.5 2.5 2.5" />
						<a-animation
							attribute="rotation"
							from="0 0 0"
							to="0 360 0"
							dur="15000"
							repeat="indefinite"
							easing="linear"
						/>

						<Entity
							geometry="primitive: sphere;
			  radius: 0.85;
			  segmentsWidth: 36;
			  segmentsHeight: 18;
			  translate: 0 0 0"
							material="color: gray;
			  opacity: 1.0;
			  shader: standard;
			  transparent: true;
			  metalness: 0.0;
			  roughness: 0.5;
			  src: url(jupiter.jpg)"
						/>
					</a-sphere>
				</Entity>

				<Entity position="0 0 0" rotation="0 121.31185846151604 0">
					<a-animation
						attribute="rotation"
						to="0 360 0"
						dur="65000"
						fill="forwards"
						easing="linear"
						repeat="indefinite"
					/>
					<a-image position="0 5 31" scale="1.5 0.3 1.5" src="SATURN.png" />
					<a-sphere
						position="0 0 31"
						scale="1.8 1.8 1.8"
						src="saturno.png"
						rotation="0 165.62860799994087 0"
					>
						<a-mouseenter scale="2.5 2.5 2.5" />
						<a-mouseleave scale="1.8 1.8 1.8" />
						<a-animation
							attribute="rotation"
							from="0 0 0"
							to="0 360 0"
							dur="15000"
							repeat="indefinite"
							easing="linear"
						/>

						<Entity
							geometry="primitive: sphere;
			  radius: 0.85;
			  segmentsWidth: 36;
			  segmentsHeight: 18;
			  translate: 0 0 0"
							material="color: gray;
			  opacity: 1.0;
			  shader: standard;
			  transparent: true;
			  metalness: 0.0;
			  roughness: 0.5;
			  src: url(saturno.png)"
						/>
					</a-sphere>
					<Entity
						geometry="primitive: torus; radius: 3.2; radiusTubular: 0.1;segmentsTubular: 50"
						material="color: #57524A;"
						position="0 0 31"
						rotation="90 0 0"
						scale="1 1 0.1"
					/>
					<Entity
						geometry="primitive: torus; radius: 2.4; radiusTubular: 0.2;segmentsTubular: 50"
						material="color: #A29A87;"
						position="0 0 31"
						rotation="90 0 0"
						scale="1 1 0.1"
					/>
				</Entity>

				<Entity position="0 0 0" rotation="0 112.6467257142649 0">
					<a-animation
						attribute="rotation"
						to="0 360 0"
						dur="70000"
						fill="forwards"
						easing="linear"
						repeat="indefinite"
					/>
					<a-image position="0 5 36" scale="1.5 0.3 1.5" src="URANUS.png" />
					<a-sphere
						position="0 0 36"
						scale="1 1 1"
						rotation="165.62860799994087 0 0"
						src="urano.jpg"
					>
						<a-mouseenter scale="3 3 3" />
						<a-mouseleave scale="1 1 1" />
						<a-animation
							attribute="rotation"
							from="0 0 0"
							to="360 0 0"
							dur="15000"
							repeat="indefinite"
							easing="linear"
						/>

						<Entity
							geometry="primitive: sphere;
			  radius: 0.85;
			  segmentsWidth: 36;
			  segmentsHeight: 18;
			  translate: 0 0 0"
							material="color: gray;
			  opacity: 1.0;
			  shader: standard;
			  transparent: true;
			  metalness: 0.0;
			  roughness: 0.5;
			  src: url(urano.jpg)"
						/>
					</a-sphere>
					<Entity
						geometry="primitive: torus; radius: 1.5; radiusTubular: 0.01;segmentsTubular: 50"
						material="color: #FFFFFF;"
						position="0 0 36"
						rotation="-10 90 0"
						scale="1 1 0.1"
					/>
				</Entity>

				<Entity position="0 0 0" rotation="0 105.13694399998059 0">
					<a-animation
						attribute="rotation"
						to="0 360 0"
						dur="75000"
						fill="forwards"
						easing="linear"
						repeat="indefinite"
					/>
					<a-image position="0 5 40" scale="1.5 0.3 1.5" src="NEPTUNE.png" />
					<a-sphere
						position="0 0 40"
						scale="1 1 1"
						src="neptuno.jpg"
						rotation="0 165.62860799994087 0"
					>
						<a-mouseenter scale="3 3 3" />
						<a-mouseleave scale="1 1 1" />
						<a-animation
							attribute="rotation"
							from="0 0 0"
							to="0 360 0"
							dur="15000"
							repeat="indefinite"
							easing="linear"
						/>

						<Entity
							geometry="primitive: sphere;
			  radius: 0.85;
			  segmentsWidth: 36;
			  segmentsHeight: 18;
			  translate: 0 0 0"
							material="color: gray;
			  opacity: 1.0;
			  shader: standard;
			  transparent: true;
			  metalness: 0.0;
			  roughness: 0.5;
			  src: url(neptuno.jpg)"
						/>
					</a-sphere>
					<Entity
						geometry="primitive: torus; radius: 2; radiusTubular: 0.01;segmentsTubular: 50"
						material="color: #FFFFFF;opacity: 0.8"
						position="0 0 40"
						rotation="90 0 0"
						scale="1 1 0.1"
					/>
					<Entity
						geometry="primitive: torus; radius: 1.7; radiusTubular: 0.05;segmentsTubular: 50"
						material="color: #FFFFFF;opacity: 0.8"
						position="0 0 40"
						rotation="90 0 0"
						scale="1 1 0.1"
					/>
					<Entity
						geometry="primitive: torus; radius: 1.3; radiusTubular: 0.01;segmentsTubular: 50"
						material="color: #FFFFFF;opacity: 0.8"
						position="0 0 40"
						rotation="90 0 0"
						scale="1 1 0.1"
					/>
				</Entity>

				<Entity position="0 0 0" rotation="0 98.56588499998179 0">
					<a-animation
						attribute="rotation"
						to="0 360 0"
						dur="80000"
						fill="forwards"
						easing="linear"
						repeat="indefinite"
					/>
					<a-image position="0 5 46" scale="1.5 0.3 1.5" src="PLUTO.png" />
					<a-sphere
						position="0 0 46"
						scale="0.4 0.4 0.4"
						src="pluton.jpg"
						rotation="0 165.62860799994087 0"
					>
						<a-mouseenter scale="3 3 3" />
						<a-mouseleave scale="0.4 0.4 0.4" />
						<a-animation
							attribute="rotation"
							from="0 0 0"
							to="0 360 0"
							dur="15000"
							repeat="indefinite"
							easing="linear"
						/>

						<Entity
							geometry="primitive: sphere;
			  radius: 0.85;
			  segmentsWidth: 36;
			  segmentsHeight: 18;
			  translate: 0 0 0"
							material="color: gray;
			  opacity: 1.0;
			  shader: standard;
			  transparent: true;
			  metalness: 0.0;
			  roughness: 0.5;
			  src: url(pluton.jpg)"
						/>
					</a-sphere>
				</Entity>

				<Entity
					geometry="primitive: torus; radius: 3; radiusTubular: 0.01;segmentsTubular: 50"
					material="color: #FFFFFF;opacity: 0.3"
					position="0 0 0"
					rotation="90 0 0"
					scale="2 2 0.1"
				/>

				<Entity
					geometry="primitive: torus; radius: 4.24; radiusTubular: 0.01;segmentsTubular: 50"
					material="color: #FFFFFF;opacity: 0.3"
					position="0 0 0"
					rotation="90 0 0"
					scale="2 2 0.1"
				/>
				<Entity
					geometry="primitive: torus; radius: 5.24; radiusTubular: 0.01;segmentsTubular: 50"
					material="color: #FFFFFF;opacity: 0.3"
					position="0 0 0"
					rotation="90 0 0"
					scale="2 2 0.1"
				/>
				<Entity
					geometry="primitive: torus; radius: 6.25; radiusTubular: 0.01;segmentsTubular: 50"
					material="color: #FFFFFF;opacity: 0.3"
					position="0 0 0"
					rotation="90 0 0"
					scale="2 2 0.1"
				/>
				<Entity
					geometry="primitive: torus; radius: 12.1; radiusTubular: 0.01;segmentsTubular: 50"
					material="color: #FFFFFF;opacity: 0.3"
					position="0 0 0"
					rotation="90 0 0"
					scale="2 2 0.1"
				/>
				<Entity
					geometry="primitive: torus; radius: 15.55; radiusTubular: 0.01;segmentsTubular: 50"
					material="color: #FFFFFF;opacity: 0.3"
					position="0 0 0"
					rotation="90 0 0"
					scale="2 2 0.1"
				/>
				<Entity
					geometry="primitive: torus; radius: 18.05; radiusTubular: 0.01;segmentsTubular: 50"
					material="color: #FFFFFF;opacity: 0.3"
					position="0 0 0"
					rotation="90 0 0"
					scale="2 2 0.1"
				/>
				<Entity
					geometry="primitive: torus; radius: 20.05; radiusTubular: 0.01;segmentsTubular: 50"
					material="color: #FFFFFF;opacity: 0.3"
					position="0 0 0"
					rotation="90 0 0"
					scale="2 2 0.1"
				/>
				<Entity
					geometry="primitive: torus; radius: 23.05; radiusTubular: 0.01;segmentsTubular: 50"
					material="color: #FFFFFF;opacity: 0.3"
					position="0 0 0"
					rotation="90 0 0"
					scale="2 2 0.1"
				/>

				<Entity
					id="camera"
					camera=""
					position="-15 5 20"
					look-controls="enabled: true"
					rotation="-9.442134004606217 -16.615776058793863 0"
					cursor-visible="enabled: true"
					wasd-controls="enabled: true"
				>
					<Entity
						id="cursor"
						cursor="fuse: false;  maxDistance: 100; timeout: 200"
						geometry="primitive: ring; radiusInner: 0.005; radiusOuter: 0.01"
						material="color: aquamarine"
						position="0 0 -0.69"
						raycaster=""
					/>

					<a-animation
						attribute="position"
						begin="lugar"
						to="0 0 0"
						easing="linear"
						dur="5000"
					/>
					<a-animation
						attribute="position"
						begin="lugar0"
						to="-8 1 5"
						easing="linear"
						dur="5000"
					/>
					<a-animation
						attribute="position"
						begin="lugar1"
						to="-12 1 9"
						easing="linear"
						dur="5000"
					/>

					<a-animation
						attribute="position"
						begin="lugar2"
						to="-20 1 15"
						easing="linear"
						dur="5000"
					/>
					<a-animation
						attribute="position"
						begin="lugar3"
						to="-27 1 20"
						easing="linear"
						dur="5000"
					/>
					<a-animation
						attribute="position"
						begin="lugar4"
						to="-39 1 27"
						easing="linear"
						dur="5000"
					/>
				</Entity>
			</Scene>
		)
	}
}
