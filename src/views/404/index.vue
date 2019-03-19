<template>
    <div class="saga-container">
        <div class="saga-error404page">
            <div class="saga-newcharacter404">
                <div class="saga-chair404"></div>
                <div class="saga-leftshoe404"></div>
                <div class="saga-rightshoe404"></div>
                <div class="saga-legs404"></div>
                <div class="saga-torso404">
                    <div class="saga-body404"></div>
                    <div class="saga-leftarm404"></div>
                    <div class="saga-rightarm404"></div>
                    <div class="saga-head404">
                        <div class="saga-eyes404"></div>
                    </div>
                </div>
                <div class="saga-laptop404"></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        created() {},
        mounted() {},
        methods: {}
    }
</script>
<style lang="scss">
    .saga-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    body {
        background-color: white;
        overflow: hidden;
    }
    .saga-error404page {
        width: 400px;
        height: 800px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .saga-body404,
    .saga-head404,
    .saga-eyes404,
    .saga-leftarm404,
    .saga-rightarm404,
    .saga-chair404,
    .saga-leftshoe404,
    .saga-rightshoe404,
    .saga-legs404,
    .saga-laptop404 {
        background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/15979/404-character-new.png) 0 0 no-repeat;
        width: 200px;
        height: 200px;
    }
    .saga-newcharacter404,
    .saga-torso404,
    .saga-body404,
    .saga-head404,
    .saga-eyes404,
    .saga-leftarm404,
    .saga-rightarm404,
    .saga-chair404,
    .saga-leftshoe404,
    .saga-rightshoe404,
    .saga-legs404,
    .saga-laptop404 {
        background-size: 750px;
        position: absolute;
        display: block;
    }
    .saga-newcharacter404 {
        width: 400px;
        height: 800px;
        left: 50%;
        top: 20px;
        margin-left: -200px;
    }
    $swayspeed: 20s;
    .saga-torso404 {
        position: absolute;
        display: block;
        top: 138px;
        left: 0px;
        width: 389px;
        height: 252px;
        animation: sway $swayspeed ease infinite;
        transform-origin: 50% 100%;
    }
    .saga-body404 {
        position: absolute;
        display: block;
        top: 0px;
        left: 0px;
        width: 389px;
        height: 253px;
    }
    .saga-head404 {
        position: absolute;
        top: -148px;
        left: 106px;
        width: 160px;
        height: 194px;
        background-position: 0px -265px;
        transform-origin: 50% 85%;
        animation: headTilt $swayspeed ease infinite;
    }
    .saga-eyes404 {
        position: absolute;
        top: 92px;
        left: 34px;
        width: 73px;
        height: 18px;
        background-position: -162px -350px;
        animation: blink404 10s steps(1) infinite, pan 10s ease-in-out infinite;
    }
    .saga-leftarm404 {
        position: absolute;
        top: 159px;
        left: 0;
        width: 165px;
        height: 73px;
        background-position: -265px -341px;
        transform-origin: 9% 35%;
        transform: rotateZ(0deg);
        animation: typeLeft 0.4s linear infinite;
    }
    .saga-rightarm404 {
        position: absolute;
        top: 148px;
        left: 231px;
        width: 157px;
        height: 91px;
        background-position: -442px -323px;
        transform-origin: 90% 25%;
        animation: typeLeft 0.4s linear infinite;
    }
    .saga-chair404 {
        position: absolute;
        top: 430px;
        left: 55px;
        width: 260px;
        height: 365px;
        background-position: -12px -697px;
    }
    .saga-legs404 {
        position: absolute;
        top: 378px;
        left: 4px;
        width: 370px;
        height: 247px;
        background-position: -381px -443px;
    }
    .saga-leftshoe404 {
        position: absolute;
        top: 591px;
        left: 54px;
        width: 130px;
        height: 92px;
        background-position: -315px -749px;
    }
    .saga-rightshoe404 {
        position: absolute;
        top: 594px;
        left: 187px;
        width: 135px;
        height: 81px;
        background-position: -453px -749px;
        transform-origin: 35% 12%;
        animation: tapRight 1s linear infinite;
    }
    .saga-laptop404 {
        position: absolute;
        top: 186px;
        left: 9px;
        width: 365px;
        height: 216px;
        background-position: -2px -466px;
        transform-origin: 50% 100%;
        animation: tapWobble 0.4s linear infinite;
    }
    @keyframes sway {
        0% {
            transform: rotateZ(0deg);
        }
        20% {
            transform: rotateZ(0deg);
        }
        25% {
            transform: rotateZ(4deg);
        }
        45% {
            transform: rotateZ(4deg);
        }
        50% {
            transform: rotateZ(0deg);
        }
        70% {
            transform: rotateZ(0deg);
        }
        75% {
            transform: rotateZ(-4deg);
        }
        90% {
            transform: rotateZ(-4deg);
        }
        100% {
            transform: rotateZ(0deg);
        }
    }
    @keyframes headTilt {
        0% {
            transform: rotateZ(0deg);
        }
        20% {
            transform: rotateZ(0deg);
        }
        25% {
            transform: rotateZ(-4deg);
        }
        35% {
            transform: rotateZ(-4deg);
        }
        38% {
            transform: rotateZ(2deg);
        }
        42% {
            transform: rotateZ(2deg);
        }
        45% {
            transform: rotateZ(-4deg);
        }
        50% {
            transform: rotateZ(0deg);
        }
        70% {
            transform: rotateZ(0deg);
        }
        82% {
            transform: rotateZ(0deg);
        }
        85% {
            transform: rotateZ(4deg);
        }
        90% {
            transform: rotateZ(4deg);
        }
        100% {
            transform: rotateZ(0deg);
        }
    }
    @keyframes typeLeft {
        0% {
            transform: rotateZ(0deg);
        }
        25% {
            transform: rotateZ(7deg);
        }
        75% {
            transform: rotateZ(-6deg);
        }
        100% {
            transform: rotateZ(0deg);
        }
    }
    @keyframes typeRight {
        0% {
            transform: rotateZ(0deg);
        }
        25% {
            transform: rotateZ(-6deg);
        }
        75% {
            transform: rotateZ(7deg);
        }
        100% {
            transform: rotateZ(0deg);
        }
    }
    @keyframes tapWobble {
        0% {
            transform: rotateZ(-0.2deg);
        }
        50% {
            transform: rotateZ(0.2deg);
        }
        100% {
            transform: rotateZ(-0.2deg);
        }
    }
    @keyframes tapRight {
        0% {
            transform: rotateZ(0deg);
        }
        90% {
            transform: rotateZ(-6deg);
        }
        100% {
            transform: rotateZ(0deg);
        }
    }
    @keyframes blink404 {
        0% {
            background-position: -162px -350px;
        }
        94% {
            background-position: -162px -350px;
        }
        98% {
            background-position: -162px -368px;
        }
        100% {
            background-position: -162px -350px;
        }
    }
    @keyframes pan {
        0% {
            transform: translateX(-2px);
        }
        49% {
            transform: translateX(-2px);
        }
        50% {
            transform: translateX(2px);
        }
        99% {
            transform: translateX(2px);
        }
        100% {
            transform: translateX(-2px);
        }
    }
</style>