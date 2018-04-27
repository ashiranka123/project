import { Scene, Entity } from 'aframe-react'
import 'aframe-look-at-component'
import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

export default withRouter(
	connect(
		state => ({}),
		dispatch => ({
			go: to => dispatch(push(to))
		})
	)(
		class Game extends React.Component {
			handleClick = e => console.log(e, 'click')

			handleMouseEnter = e => console.log(e, 'mouseenter')

			handleMouseLeave = e => console.log(e, 'mouseleave')

			state = {
				reading: true,
				score: 0,
				difficulty: {
					mercury: 1,
					venues: 2,
					earth: 3,
					mars: 4,
					jupiter: 5,
					saturn: 6,
					uranus: 7,
					neptune: 8
				}[this.props.match.params.level],
				timer:
					1100 -
					{
						mercury: 1,
						venues: 2,
						earth: 3,
						mars: 4,
						jupiter: 5,
						saturn: 6,
						uranus: 7,
						neptune: 8
					}[this.props.match.params.level] *
						100
			}

			componentDidMount() {
				this.readingTimer = setTimeout(
					() => this.setState({ reading: false }),
					100000
				)
			}

			componentWillMount() {
				if (this.readingTimer) {
					this.readingTimer()
				}
			}

			render = () => (
				<Scene>
					<Entity
						events={{
							click: this.handleClick,
							mouseenter: this.handleMouseEnter,
							mouseleave: this.handleMouseLeave
						}}
						primitive="a-box"
						color="red"
						position="0 0 -5"
					/>

					<a-curvedimage
						src={`${this.props.match.params.level}_info.png`}
						material=""
						position="0 2.528 -4.443"
						rotation="0 102.21567065133887 0"
						geometry="thetaLength:150;segmentsRadial:50;segmentsHeight:5;radius:3;height:4"
						visible={this.state.reading}
					/>

					<a-entity
						gltf-model="/enemy.gltf"
						scale="0.02 0.02 0.02"
						position="-1.9999756110000493 2 -5"
						look-at="[camera]"
						visible={`${!this.state.reading}`}
					>
						<a-animation
							attribute="position"
							dur="5000"
							fill="forwards"
							to="-2 2 -5"
							direction="alternate"
							repeat="indefinite"
						/>
					</a-entity>
					<a-entity
						gltf-model="/enemy.gltf"
						scale="0.02 0.02 0.02"
						position="3.501 3.891 -5"
						look-at="[camera]"
						visible={`${!this.state.reading}`}
					>
						<a-animation
							attribute="position"
							dur="5500"
							fill="forwards"
							to="-2 2 -5"
							direction="alternate"
							repeat="indefinite"
						/>
					</a-entity>
					<a-entity
						gltf-model="/enemy.gltf"
						scale="0.02 0.02 0.02"
						position="-1.999975408602728 2 -5"
						look-at="[camera]"
						visible={`${!this.state.reading}`}
					>
						<a-animation
							attribute="position"
							dur="5000"
							fill="forwards"
							to="-2 2 -5"
							direction="alternate"
							repeat="indefinite"
						/>
					</a-entity>
					<a-entity
						gltf-model="/enemy.gltf"
						scale="0.02 0.02 0.02"
						position="-3.522 4.67 -5"
						look-at="[camera]"
						visible={`${!this.state.reading}`}
					>
						<a-animation
							attribute="position"
							dur="500"
							fill="forwards"
							to="-2 2 -5"
							direction="alternate"
							repeat="indefinite"
						/>
					</a-entity>
					<a-entity
						gltf-model="/enemy.gltf"
						scale="0.02 0.02 0.02"
						position="-0.95695289419337 2 -5"
						look-at="[camera]"
						visible={`${!this.state.reading}`}
					>
						<a-animation
							attribute="position"
							dur="10000"
							fill="forwards"
							to="-2 2 -5"
							direction="alternate"
							repeat="indefinite"
						/>
					</a-entity>
					<a-entity
						gltf-model="/enemy.gltf"
						scale="0.02 0.02 0.02"
						position="-1.547 3.582 -5"
						look-at="[camera]"
						visible={`${!this.state.reading}`}
					>
						<a-animation
							attribute="position"
							dur="8000"
							fill="forwards"
							to="-3 2 -5"
							direction="alternate"
							repeat="indefinite"
						/>
					</a-entity>
					<a-entity
						gltf-model="/enemy.gltf"
						scale="0.02 0.02 0.02"
						position="-3.344 2 -5"
						look-at="[camera]"
						visible={`${!this.state.reading}`}
					>
						<a-animation
							attribute="position"
							dur="7000"
							fill="forwards"
							to="-5 3 -4"
							direction="alternate"
							repeat="indefinite"
						/>
					</a-entity>
					<a-entity
						gltf-model="/enemy.gltf"
						scale="0.02 0.02 0.02"
						position="2.162 2 -5"
						look-at="[camera]"
						visible={`${!this.state.reading}`}
					>
						<a-animation
							attribute="position"
							dur="9000"
							fill="forwards"
							to="-2 4 -3"
							direction="alternate"
							repeat="indefinite"
						/>
					</a-entity>
					<a-entity
						gltf-model="/enemy.gltf"
						scale="0.02 0.02 0.02"
						position="1.2585093331605095 4 -5"
						look-at="[camera]"
						visible={`${!this.state.reading}`}
					>
						<a-animation
							attribute="position"
							dur="9000"
							fill="forwards"
							to="2 5 -4"
							direction="alternate"
							repeat="indefinite"
						/>
					</a-entity>

					<a-entity light="color: #ffffff; groundColor: #79a8bb; intensity: 0.3; type: hemisphere" />
					<a-entity position="0 50 0" light="intensity: 0.9; type: point" />
					<a-entity position="0 -50 0" light="intensity: 0.5; type: point" />

					<a-entity
						id="sky"
						rotation="0 90 0"
						geometry="primitive: sphere; radius: 600; segmentsHeight: 32; segmentsWidth: 32"
						material="shader: flat; fog: false; side: back; src: url(assets/images/sky.jpg)"
					/>

					<a-entity
						id="player"
						camera="userHeight: 1.6"
						wasd-controls
						look-controls
						restrict-position
						shoot="direction: 0 0 -1; spaceKeyEnabled: true"
					/>

					<a-entity
						id="ring0"
						json-model="src:url(/assets/models/ring.json); singleModel:true)"
						position="0 0 0"
						rotation="0 0 0"
						scale="1.3 1.3 1.3"
					>
						<a-animation
							id="ring0anim"
							attribute="rotation"
							to="0 360 180"
							repeat="indefinite"
							dur="50000"
							easing="linear"
						/>
					</a-entity>

					<a-entity
						id="ring1"
						json-model="src:url(/assets/models/ring.json); singleModel:true"
						position="0 0 0"
						rotation="90 0 0"
					>
						<a-animation
							id="ring1anim"
							attribute="rotation"
							to="90 360 180"
							repeat="indefinite"
							dur="30000"
							easing="linear"
						/>
					</a-entity>

					<a-entity
						id="border"
						json-model="src:url(/assets/models/border.json)"
						position="0 0 0"
					/>
				</Scene>
			)
		}
	)
)
