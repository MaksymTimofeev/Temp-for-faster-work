<template>
    <div>

      <header class="header">
      <div class="container">
        <div class="header__inner">
          <a href="" class="header__logo">
            <img src="../assets/images/header-logo.svg" alt="" />
          </a>
          <span class="header__menu">
            <button class="header__button">
              Wallet balance: <br />
              <b style="position: relative; right: 17px">100 BNB</b>
            </button>
            <button class="header__button header__button_color">
              0x63...B492
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group">
                  <path
                    id="Vector"
                    d="M12 13.172L16.95 8.22198L18.364 9.63598L12 16L5.63599 9.63598L7.04999 8.22198L12 13.172Z"
                    fill="#C5FFF0"
                  />
                </g>
              </svg>
            </button>
            <button class="header__button-mobile">
              <img src="../assets/images/header__mobile-button.png" alt="" />
            </button>
          </span>
        </div>
        <div class="header__main">
          <div class="header__content">
            <span class="header__content-title"
              >Hi ! It seems I`m
              <span class="header__content-title-yellow">kindness</span></span
            >
            <span class="header__content-text">but who knows</span>
            <button class="header__content-button header__font-style">
              Let’s meet ->
            </button>
          </div>
          <div class="header__picture">
            <img src="../assets/images/header-big-logo.png" alt="" />
          </div>
        </div>
      </div>
    </header>
    <main>
      <div class="table">
        <div class="table__main">
          <div class="table__main-bin">
            <span class="table__item">Всього застекано</span>
            <span class="table__coin-bin">
              <img src="../assets/images/main__bin.svg" alt="" />25 BIN</span
            >
            <span class="table__coin-bnb">
              <img src="../assets/images/main__bin.svg" alt="" />25 BNB</span
            >
            <span class="table__revenue"
              ><img src="../assets/images/main__warning.svg" alt="" />Максимальний дохід
              по стекінгу 200%</span
            >
          </div>
          <div class="table__main-market">
            <div><span>Ребондіровано</span><span>10 BIN</span></div>
            <div><span>Продано BIN</span><span>360 BIN</span></div>
            <div style="border-bottom: none">
              <span>Заклеймено BIN</span><span>7660 BIN</span>
            </div>
          </div>
        </div>
        <div class="table__indexes">
          <div class="table__indexes-menu">
            <div>Дні стекінгу</div>
            <div>Дохід за день</div>
            <div>Дохід за період</div>
            <div>Очікується</div>
            <div>Статус</div>
          </div>
          <div>
            <div>17 днів</div>
            <div>0.5%</div>
            <div>31.7%</div>
            <div>10 BIN</div>
            <div><span class="table__activeStatus">Активний</span></div>
          </div>
          <div>
            <div>17 днів</div>
            <div>0.5%</div>
            <div>31.7%</div>
            <div>10 BIN</div>
            <div><span class="table__inactiveStatus">Неактивний</span></div>
          </div>
          <div>
            <div>17 днів</div>
            <div>0.5%</div>
            <div>31.7%</div>
            <div>10 BIN</div>
            <div><span class="table__activeStatus">Активний</span></div>
          </div>
        </div>
        <div class="table__indexes-mobile">
          <div>
            <div>
              <div>Дні стекінгу :</div>
              <div>17 днів</div>
            </div>
            <div>
              <div>Дохід за день:</div>
              <div>0.5%</div>
            </div>
            <div>
              <div>Дохід за період:</div>
              <div>31.7%</div>
            </div>
            <div>
              <div>Очікується:</div>
              <div>10 BNB</div>
            </div>
            <div>
              <div>Статус:</div>
              <div><span class="table__activeStatus">Активний</span></div>
            </div>
          </div>
          <div>
            <div>
              <div>Дні стекінгу :</div>
              <div>17 днів</div>
            </div>
            <div>
              <div>Дохід за день:</div>
              <div>0.5%</div>
            </div>
            <div>
              <div>Дохід за період:</div>
              <div>31.7%</div>
            </div>
            <div>
              <div>Очікується:</div>
              <div>10 BNB</div>
            </div>
            <div>
              <div>Статус:</div>
              <div><span class="table__activeStatus">Активний</span></div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="footer__text">
        Copyright © 2022 stagrant. All rights reserved.
      </div>
    </footer>


      <!-- <Card /> -->
    </div>
</template>

<!-- <script>
import Card from '@/components/Card.vue'

export default{
    components:{
        Card
    }
}
</script> -->