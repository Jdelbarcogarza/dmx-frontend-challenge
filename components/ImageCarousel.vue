<template>
	<div class="slider">
		<div class="slide-track">
			<div class="slide">
				<img
				
					src="https://veluxi3.vercel.app/images/logos/architect.png"
					height="100"
					width="64"
					alt=""
				/>
			</div>

			<div class="slide">
				<img
				
					src="https://veluxi3.vercel.app/images/logos/cloud.png"
					height="100"
					width="64"
					alt=""
				/>
			</div>
			<div class="slide">
				<img
				
					src="https://veluxi3.vercel.app/images/logos/coin.png"
					height="100"
					width="64"
					alt=""
				/>
			</div>
			<div class="slide">
				<img
				
					src="https://veluxi3.vercel.app/images/logos/mobile.png"
					height="100"
					width="64"
					alt=""
				/>
			</div>
			<div class="slide">
				<img
				
					src="https://veluxi3.vercel.app/images/logos/profile.png"
					height="100"
					width="64"
					alt=""
				/>
			</div>
			<div class="slide">
				<img
				
					src="https://veluxi3.vercel.app/images/logos/saas.png"
					height="100"
					width="64"
					alt=""
				/>
			</div>
		</div>
	</div>
</template>

<style scoped>
body {
  align-items: center;
  background: #E3E3E3;
  display: flex;
  height: 100vh;
  justify-content: center;
}
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}
.slider {
  background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 960px;
}
.slider::before, .slider::after {
  background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
  content: "";
  height: 100px;
  position: absolute;
  width: 200px;
  z-index: 2;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.slider::before {
  left: 0;
  top: 0;
}
.slider .slide-track {
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 6);
}
.slider .slide {
  height: 100px;
  width: 250px;
}

</style>
