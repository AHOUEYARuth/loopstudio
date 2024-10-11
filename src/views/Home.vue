<template>
    <section class="banner">
        <div class="container">
            <div class="content">
                <div class="banner_card">
                    <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
                </div>
            </div>
        </div>
    </section>
    <section class="leader_section">
        <div class="container">
            <div class="leader_content">
                <div class="leader_img">
                    <img src="/src/assets/desktop/image-interactive.jpg" alt="">
                    <div class="leader_text">
                        <h2>THE LEADER <br>IN INTERACTIVE VR</h2>
                        <p>Founded in 2011, Loopstudios has been producing world-class virtual reality
                            projects for some of the best companies around the globe. Our award-winning
                            creations have transformed businesses through digital experiences that bind
                            to their brand.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="creation_section">
        <div class="container">
            <div class="creation content">
                <div class="head">
                    <h2>Our creations</h2>
                    <button>See all</button>
                </div>
                <div class="images_list">
                    <div class="item">
                        <img src="/src/assets/desktop/image-deep-earth.jpg" alt="">
                        <h3>
                            <span>DEEP</span>
                            <span>EARTH</span>
                        </h3>
                    </div>
                    <div class="item">
                        <img src="/src/assets/desktop/image-night-arcade.jpg" alt="">
                        <h3>
                            <span>NIGHT</span>
                            <span>ARCADE</span>
                        </h3>
                    </div>
                    <div class="item">
                        <img src="/src/assets/desktop/image-soccer-team.jpg" alt="">
                        <h3>
                            <span>SOCCER</span>
                            <span>TEAM VR</span>
                        </h3>
                    </div>
                    <div class="item">
                        <img src="/src/assets/desktop/image-grid.jpg" alt="">
                        <h3>
                            <span>THE</span>
                            <span>GRID</span>
                        </h3>
                    </div>
                    <div class="item">
                        <img src="/src/assets/desktop/image-from-above.jpg" alt="">
                        <h3>
                            <span>FROM</span>
                            <span>UP ABOVE</span>
                        </h3>
                    </div>
                    <div class="item">
                        <img src="/src/assets/desktop/image-pocket-borealis.jpg" alt="">
                        <h3>
                            <span>POCKET</span>
                            <span>BOREALIS</span>
                        </h3>
                    </div>
                    <div class="item" id="col">
                        <img src="/src/assets/desktop/image-curiosity.jpg" alt="">
                        <h3>
                            <span>THE</span>
                            <span>CURIOSITY</span>
                        </h3>
                    </div>
                    <div class="item">
                        <img src="/src/assets/desktop/image-fisheye.jpg" alt="">
                        <h3>
                            <span>MAKE IT</span>
                            <span>FISHEYE</span>
                        </h3>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.banner {
    background-image: url(/src/assets/desktop/image-hero.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
}

.banner:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #00000007;
}

.banner .container {
    position: relative;
    top: 40%;

}

.container {
    max-width: 1044px;
    margin: 0 auto;
}

h1 {
    color: hsl(0, 0%, 100%);
    font-weight: 20;
}

.banner_card {
    width: 300px;
    border: 1px solid #fff;
    padding: 0 20px;
}

.leader_section {
    width: 100%;
    background-color: hsl(0, 0%, 100%);
    padding: 80px 0;
}

.leader_img {
    width: 100%;
    display: flex;
    align-items: end;
}

.leader_text {
    min-width: 400px;
    color: hsla(0, 0%, 7%, 0.836);
    position: relative;
    right: 20%;
    background-color: #fff;
    padding: 50px;

}

.leader_text p {
    color: hsl(0, 0%, 55%);
    font-size: 14px;
}

.creation_section {
    width: 100%;
    background-color: #fff;
    padding: 40px 0;
}

.head {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: hsla(0, 0%, 7%, 0.966);
}

button {
    border: none;
    background-color: #000;
    color: #fff;
    padding: 5px 20px;
}

.images_list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.item {
    width: 246px;
    color: #fff;
}

.item img {
    width: 100%;
    filter: brightness(0.8);
}

.item h3 {
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 20%;
    left: 10%;
    font-weight: 90;
    /*  background-color: #00000098;
        width: 50%; */
}

#col {
    color: #000;
    filter: brightness(1);
}

/*   #col:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: #db0d0d;
    } */
</style>