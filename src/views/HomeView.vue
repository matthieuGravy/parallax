<script>
import { onMounted, vShow } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import wel from '@/components/wel.vue'

export default {
  components: {
    wel
  },
  setup() {
    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger)

      //cache graf
      const graf = gsap.timeline({
        scrollTrigger: {
          trigger: '.graf',
          start: 'top 100%',
          end: '=150%',
          pin: false,
          scrub: true,
          onUpdate: updatePercentage
        }
      })
      graf.fromTo(
        '.img-graf',
        { duration: 0, height: 0, width: '100%' },
        { duration: 2, height: '100%', width: '100%' },
        0
      )
      //tl div2
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.landing-two', // L'élément qui déclenche l'animation
          start: 'bottom bottom', // Point de départ de l'animation
          end: '+=50%', // Point de fin de l'animation
          pin: true, // Épingler l'élément à l'écran pendant l'animation
          scrub: true, // Effectuer l'animation en fonction du défilement
          onUpdate: updatePercentage // Fonction appelée lors de la mise à jour de la progression (si nécessaire)
        }
      })
      tl.to('.title1', { duration: 0.5, opacity: 1 }, 0),
        tl.to('.title1', { duration: 0.5, opacity: 0 }, 1)

      tl.fromTo(
        '.itsgravy',
        { duration: 0.5, opacity: 0, x: 0 },
        { duration: 0.5, opacity: 1, x: 50 },
        1
      )

      const anim = gsap.timeline({ repeat: -1 })
    })
    const updatePercentage = () => {
      // Code pour la mise à jour de la progression (si nécessaire)
    }
    const updatePf = () => {}
  }
}
</script>

<template>
  <div class="who">
    <div class="who-landing">
      <div class="landing landing-one">
        <wel></wel>
      </div>
      <div class="landing landing-two">
        <div class="graf">
          <div class="img-graf">
            <div class="content-wel">
              <div class="content-sticky">
                <!--<wel></wel>-->
              </div>
            </div>
          </div>
        </div>
        <div class="wrapper">
          <h2 class="radi-all title1">Were you looking for the secret ingredient?</h2>
        </div>
      </div>
      <div class="landing landing-three">
        <div class="bloc-mission">
          <div class="bloc-card">
            <div class="groupe-cadre">
              <div class="cadre">
                <div class="contain-img radi-all">
                  <img src="../assets/images/matt-pink.svg" class="radi-all" alt="Matthieu" />
                  <div class="groupe-btn">
                    <RouterLink class="radi-all btn btn-contact" to="/contact">Contat</RouterLink>
                    <RouterLink class="radi-all btn btn-about" to="/about">About</RouterLink>
                  </div>
                </div>
              </div>
              <div class="developper">
                <h2>Matthieu <span>Gravy</span></h2>
              </div>
            </div>
          </div>
          <div class="mission-container">
            <h3>
              Be authentic and stand out. I design your website to reflect your unique identity
              while ensuring it is fully optimized for search engines.
            </h3>
            <a class="btn radi-all" href="">show more</a>
          </div>

          <!--
          <h3>Transform your online presence with modern and captivating websites.</h3>
          <h3>
            As a passionate front-end developer, I specialize in creating customized showcase
            websites that professionally and attractively represent your business.
          </h3>
          <h3>
            With a strong background in front-end development, I am committed to crafting
            exceptional user interfaces to enhance your visitors' experience.
          </h3>
          -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
main {
  .who {
    width: 100%;

    .who-landing {
      height: auto;
      background-image: url(../assets/images/GRAVY-trans.png);

      .landing {
        &-one {
          height: 110vh;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          position: relative;
          background-color: black;
          opacity: 0.92;
        }

        &-two {
          height: auto;
          background-color: black;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .graf {
            min-height: 100vh;
            width: 100%;

            .img-graf {
              background-image: url('../assets/images/pexels-wendelin-jacober-1447073.jpg');
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center center;

              .content-wel {
                position: fixed;
                height: 50%;
                max-width: 1280px;
                text-align: center;
                margin: auto;
                position: relative;
                .content-sticky {
                  position: sticky;
                  top: 20rem;
                }
              }
            }
          }
          .wrapper {
            overflow: hidden;
            height: auto;
            max-width: 1280px;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-self: center;
            justify-content: center;
            h2 {
              opacity: 0;
              transform: rotateX(-30deg);
              font-size: 8vh;
              padding: 0.5rem 1rem;
              @media screen and (max-width: 1280px) {
                text-align: center;
                padding: 7%;
                font-size: 6.5vh;
              }
              @media screen and (max-width: 400px) {
                font-size: 5vh;
                text-align: center;
              }
            }
            .title2 {
              font-weight: 500;
            }
            .itsgravy {
              margin-bottom: 1rem;
              height: auto;
              width: 20rem;
            }
          }
        }

        &-three {
          min-height: auto;
          background-color: black;
          position: relative;
          .bloc-mission {
            max-width: 1280px;
            display: flex;
            margin: auto;
            @media screen and (max-width: 1280px) {
              flex-direction: column;
            }
            .mission-container {
              flex: 2;
              text-align: center;
              padding: 5% 0;
              align-self: center;
              @media screen and (max-width: 900px) {
                padding: 7%;
              }
              h3 {
                margin: auto;
                //width: 60%;
                place-self: center;
                font-size: 4.2vh;
                color: white;
                margin-bottom: 1rem;
                @media screen and (max-width: 900px) {
                  font-size: 3vh;
                }
                @media screen and (max-width: 400px) {
                  font-size: 2.5vh;
                  margin-top: 0.5vh;
                  margin-bottom: 4vh;
                }
              }
              a {
                width: 10rem;
                letter-spacing: 0.2rem;
                text-align: center;
                padding: 0.8rem 4rem;
                transition: 0.3s ease all;
                margin: auto;
                @media screen and (max-width: 900px) {
                  transform: scale(1.5);
                  background-color: hsla(56, 100%, 49%, 0.2);
                  cursor: pointer !important;
                }
                &:hover {
                  transform: scale(1.5);
                  background-color: hsla(56, 100%, 49%, 0.2);
                  cursor: pointer !important;
                }
              }
            }
            .bloc-card {
              flex: 1;

              .groupe-cadre {
                //max-width: 30rem;
                height: 70vh;
                text-align: center;
                border-radius: 25px;
                opacity: 1;
                margin: auto;
                @media screen and (max-width: 900px) {
                  height: 60vh;
                }
                .cadre {
                  padding-top: 6rem;
                  @media screen and (max-width: 900px) {
                    padding-top: 0rem;
                  }

                  img {
                    animation-name: blur;
                    animation-duration: 3s;
                    animation-iteration-count: infinite;
                    @media screen and (max-width: 900px) {
                      animation: none;
                    }
                  }
                  .groupe-btn {
                    @media screen and (max-width: 900px) {
                      opacity: 1;
                      transition: 1s;
                    }
                  }
                }
                .developper {
                  color: white;
                  display: grid;
                  flex-direction: column;
                  position: relative;
                  h2 {
                    flex: 1;
                    margin-top: 1vh;
                    font-size: 4vh;
                    place-self: center;
                    letter-spacing: 0.2rem;
                    @media screen and (max-width: 400px) {
                      margin-top: 0;
                    }
                    span {
                      font-weight: 500;
                    }
                  }
                }
              }
              &:hover {
                .cadre {
                  img {
                    animation: none;
                    opacity: 0.7;
                  }
                  .groupe-btn {
                    opacity: 1;
                    transition: 1s;
                  }
                }
              }

              @keyframes blur {
                0% {
                  filter: blur(20px);
                }
                50% {
                  filter: blur(50px);
                }
                100% {
                  filter: blur(20px);
                }
              }

              .cadre {
                justify-content: center;
                position: relative;
                margin: auto;
                display: flex;
                img {
                  image-rendering: optimizeQuality;
                }
                .groupe-btn {
                  position: absolute;
                  bottom: 17%;
                  left: 50%;
                  transform: translate(-50%, 50%);
                  opacity: 0;
                  display: flex;
                  flex-direction: column;
                  margin: 1 0rem 0;
                  align-items: center;
                  justify-content: space-around;
                  height: 6rem;
                  width: 80%;

                  .btn {
                    width: 10rem;
                    place-self: center;
                    padding: 0.5rem 1rem;
                    text-align: center;
                    letter-spacing: 0.2rem;

                    &-contact {
                      background-color: black;
                    }

                    &-about {
                      background-color: #424c49;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
