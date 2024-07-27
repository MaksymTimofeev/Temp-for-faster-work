<template>

    <main>
      <button v-on:click="userIsActive = !userIsActive" class="buttonTable">Приховати/показати</button>
      <div v-if="userIsActive" class="table">
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
          <div v-for="i in userData" >
            <div> {{ i.stakingDays }} днів</div>
            <div> {{ i.profitPerDay }} %</div>
            <div> {{ i.profitWhole }} %</div>
            <div> {{ i.waiting }} BIN</div>
            <div>
             <span v-if="i.isActive" class="table__activeStatus">Активний</span>
              <span v-else class="table__inactiveStatus">Неактивний</span>
            </div>
          </div>
          <!-- <div>
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
          </div> -->
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

</template>

<script>

export default {
  data() {
    return {
      userIsActive: false,
      userData: [
        {
          stakingDays: 17,
          profitPerDay: ".5",
          profitWhole: "21.43",
          waiting: 10,
          isActive: false,
        },
        {
          stakingDays: 45,
          profitPerDay: "1",
          profitWhole: "9.43",
          waiting: 43,
          isActive: false,
        },
        {
          stakingDays: 23,
          profitPerDay: "12.34",
          profitWhole: "358.13",
          waiting: 638,
          isActive: true,
        },
      ]
    }
  },
}
</script>



<!-- <div>
  <div class="card">
      <div class="card-title">Tile Card</div>
  </div>
</div> -->