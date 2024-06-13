<template>
  <div class="circle">
    <div class="circle_container">
      <div class="circle_nav">
        <NavCareAtom v-for="(navItem, index) in navItems" :key="index" :nav-care-text="navItem.text" :div-class-name="navItem.divClassName" />
      </div>
      <div class="circle_body">
        <div class="grey_title">For organizing Drag & Drop in the groups</div>
        <div class="cards_container">
          <CareSquareAtom
            v-for="(careItem, index) in careItems"
            :key="index"
            :class-name="careItem.className"
            :img-src="careItem.imgSrc"
            :alt-text="careItem.altText"
            :name="careItem.name"
            :profession="careItem.profession"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CareSquareAtom, NavCareAtom } from "../index"
import { NavItemInfo ,NavItem} from "../../types/NavItem"
import { CareInfo, CareItem } from "../../types/CareItem";

const navItems: NavItem[] = [{ text: NavItemInfo.findText }, { text: NavItemInfo.circleText , divClassName: NavItemInfo.circleDivClass }, { text: "PENDING", divClassName: NavItemInfo.pendingDivClass, id: NavItemInfo.pendingId}]

const careItems: CareItem[] = [
  { className: CareInfo.redBar, imgSrc: "/src/images/francis.png", altText: CareInfo.manPic, name: "Francis Fisher Williams", profession: CareInfo.graphicD },
  { className: CareInfo.blueBar, imgSrc: "/src/images/marie.png", altText: CareInfo.womanPic, name: "Marie Kraft Smith", profession: CareInfo.dc },
  { className: CareInfo.redBar, imgSrc: "/src/images/dolores.png", altText: CareInfo.womanPic, name: "Dolores Vidal Taylor", profession: CareInfo.comercial },
  { className: CareInfo.redBar, imgSrc: "/src/images/robbie.png", altText: CareInfo.manPic, name: "Robbie Walker Jr.", profession: CareInfo.ceo },
  { className: CareInfo.blueBar, imgSrc: "/src/images/vanessa.png", altText: CareInfo.womanPic, name: "Vanessa Herrera Simons", profession: CareInfo.nurse },
]
</script>
<style lang="scss">
.circle {
  display: flex;
  justify-content: center;
}

.circle_container {
  border: 1px solid lightgrey;
  margin: 20px 100px;
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0px 0px;
  background-color: #f5f5f5;

  @media screen and (min-width: 320px) and (max-width: 640px) {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
}

.circle_nav {
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: white;
}

.circle_body {
  display: flex;
  flex-direction: column;
}

.grey_title {
  border: 1px solid lightgrey;
  background-color: lightgrey;
  width: max-content;
  height: max-content;
  padding: 10px;
  margin: 15px auto;

  @media screen and (min-width: 320px) and (max-width: 640px) {
    font-size: small;
    width: inherit;
  }
}

.cards_container {
  margin: 15px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px 50px;
  justify-content: center;
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 50px;

  @media screen and (min-width: 320px) and (max-width: 640px) {
    margin-left: 0;
    margin-right: 0;
  }
}

#pending {
  @media screen and (min-width: 320px) and (max-width: 640px) {
    gap: 10px;
  }
}

.ellipse_pending {
  @media screen and (min-width: 320px) and (max-width: 640px) {
    margin-left: 0;
    padding: 5px 10px;
  }
}
</style>
