import React from 'react'

export default class Level extends React.Component {
	render() {
		return (
			<React.Fragment>
				<a-scene
					countdown="start: 05:00; value: 00:00"
					gamestate="health: 5; wave: 0"
					gamestate-visuals=""
					decals="maxDecals: 30; src: #bulletDecal; size: 0.3"
				>
					<a-assets>
						<a-asset-image src="/assets/images/enemy_emissive0.jpg">
							{' '}
						</a-asset-image>
						<a-asset-image src="/assets/images/enemy_emissive1.jpg" />
						<a-asset-image src="/assets/images/enemy_emissive2.jpg" />
						<a-asset-image src="/assets/images/enemy_emissive3.jpg" />
						<a-asset-image src="/assets/images/enemy_diff.jpg" />
						<a-asset-image src="/assets/images/enemy_spec.jpg" />
						<a-asset-image src="/assets/images/gun_diff.jpg" />
						<a-asset-image src="/assets/images/gun_spec.jpg" />
						<a-asset-image src="/assets/images/gun_normal.png" />

						<a-asset-image src="/assets/images/decal0.png" />

						<a-asset-image
							id="emissive0"
							src="/assets/images/enemy_emissive0.jpg"
						/>
						<a-asset-image
							id="emissive1"
							src="/assets/images/enemy_emissive1.jpg"
						/>
						<a-asset-image
							id="emissive2"
							src="/assets/images/enemy_emissive2.jpg"
						/>

						<a-asset-item id="enemy0" src="/assets/models/enemy0.json" />
						<a-asset-item id="enemy1" src="/assets/models/enemy1.json" />
						<a-asset-item id="enemy2" src="/assets/models/enemy2.json" />
						<a-asset-item id="enemy3" src="/assets/models/enemy3.json" />
						<a-asset-item
							id="playerBullet"
							src="/assets/models/player-bullet.json"
						/>
						<a-asset-item
							id="enemyBullet"
							src="/assets/models/enemy-bullet.json"
						/>
						<img id="bulletDecal" src="/assets/images/decal0.png" />
						<img id="hurtImg" src="/assets/images/damage.png" />
						<img id="fx1" src="/assets/images/fx1.png" />
						<img id="fx2" src="/assets/images/fx2.png" />
						<img id="fx3" src="/assets/images/fx3.png" />
						<img id="fx4" src="/assets/images/fx4.png" />
						<img id="fx5" src="/assets/images/fx5.png" />
						<img id="fx6" src="/assets/images/fx6.png" />
						<img id="fx7" src="/assets/images/fx7.png" />
						<img id="fx8" src="/assets/images/fx8.png" />
						<audio id="mainThemeOgg" src="/assets/sounds/music.ogg" />
						<audio id="introOgg" src="/assets/sounds/intro.ogg" />
						<audio id="explosion0" src="/assets/sounds/explosion0.ogg" />
						<audio id="explosion1" src="/assets/sounds/explosion1.ogg" />
						<audio id="explosion2" src="/assets/sounds/explosion2.ogg" />
						<audio id="explosion3" src="/assets/sounds/explosion3.ogg" />
						<audio id="hitbullet" src="/assets/sounds/hitbullet.ogg" />
						<audio id="hitwall" src="/assets/sounds/hitwall.ogg" />
						<audio id="hurtOgg" src="/assets/sounds/hurt.ogg" />
						<audio id="enemy0shoot" src="/assets/sounds/enemy0shoot.ogg" />
						<audio id="enemy1shoot" src="/assets/sounds/enemy1shoot.ogg" />
						<audio id="enemy2shoot" src="/assets/sounds/enemy2shoot.ogg" />
						<audio id="enemy3shoot" src="/assets/sounds/enemy3shoot.ogg" />
					</a-assets>

					<a-entity
						id="introMusic"
						sound="src: #introOgg; loop: true; positional: false"
						sound-fade="from: 0; to: 0.3; duration: 8000; "
					/>
					<a-entity
						id="mainThemeMusic"
						sound="src: #mainThemeOgg; loop: true; volume:0.2; positional: false"
					/>
					<a-entity
						id="hurtSound"
						position="0 1.7 -0.2"
						sound="src: #hurtOgg; loop: false; volume:1; poolSize: 2"
					/>

					<a-entity id="explosion0" sound="src:#explosion0" />
					<a-entity id="explosion1" sound="src:#explosion1" />
					<a-entity id="explosion2" sound="src:#explosion2" />

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
					>
						<a-entity
							id="hurt"
							proxy_event="event: player-hit; dst:#hurt"
							geometry="primitive:sphere;radius:0.5;segmentsHeight:6;segmentsWidth:7"
							position="0 0 -0.2"
							rotation="0 90 0"
							material="shader: flat; side: back; transparent: true; opacity: 0; depthTest: false; src: #hurtImg"
						>
							<a-animation
								id="player-hit-anim"
								attribute="material.opacity"
								to="1"
								from="0"
								begin="player-hit"
								direction="alternate"
								dur="200"
								repeat="1"
							/>
						</a-entity>
					</a-entity>

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
						json-model="src:url(/assets/models/ring.json); singleModel:true)"
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
						json-model="src:url(/assets/models/border.json);"
						position="0 0 0"
					/>

					<a-entity id="highscores" position="2.2 2.2 -3.15" rotation="0 -45 0">
						<a-entity
							bmfont-text="fntImage:/assets/fonts/mozillavr.png;
          fnt:/assets/fonts/mozillavr.fnt;
          scale:0.002;
          text:HALL OF FAME;
          color:#f00"
						/>

						<a-entity highscores visible="true" position="0 -0.15 0" />
					</a-entity>

					<a-entity id="finished" visible="false">
						<a-entity id="message-group">
							<a-entity
								id="gameover-model"
								json-model="src:url(/assets/models/gameover.json)"
							/>
							<a-entity
								id="welldone-model"
								json-model="src:url(/assets/models/welldone.json)"
							/>
						</a-entity>
						<a-entity
							id="reset"
							collision-helper="radius: 0.7"
							json-model="src: url(/assets/models/restart.json);"
							material="color: #f00; flatShading: true"
							position="0 0.5 -6"
						/>
					</a-entity>

					<a-entity id="mainmenu">
						<a-entity
							id="logo"
							json-model="src:url(/assets/models/logo.json)"
							animate-message=""
						/>
						<a-entity
							id="start_enemy"
							enemy="name: enemy_start; canShoot: false"
							collision-helper="radius: 0.65"
							json-model="
          src: url(/assets/models/enemy0.json);
          texturePath: url(/assets/images/);
          singleModel: true"
							position="0 1.2 -7"
							scale="1.3 1.3 1.3"
						/>
					</a-entity>

					<a-entity position="-2.04 -0.32 -3.81" rotation="-14.54 25 0">
						<a-entity timer-counter="value: 00:00" />
						<a-entity
							id="lifes-counter"
							position="0.07 -0.25 -0.01"
							gamestate-bind="health: lifes-counter.value"
							lifes-counter="value: 5"
						/>
					</a-entity>
					<a-entity
						id="points-counter"
						position="1.5 -0.38 -4"
						rotation="-14.54 -25 0"
						points-counter="value: 000"
						gamestate-bind="points: points-counter.value"
					/>
				</a-scene>

				<div id="ablast-ui" class="hide">
					<div class="hiscore hided">
						<div class="help">
							<h1 id="highscore_message">Good job!</h1>
							<p>Please enter your name to join the Hall of Fame!</p>
						</div>
						<div class="form">
							<input id="player-name" type="text" value="" />
							<div id="save-score" class="button save">
								SAVE!
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}
