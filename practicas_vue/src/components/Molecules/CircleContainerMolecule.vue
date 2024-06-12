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

interface NavItem {
  text: string
  divClassName?: string
  id?: string
}

interface CareItem {
  className: string
  imgSrc: string
  altText: string
  name: string
  profession: string
}

const navItems: NavItem[] = [{ text: "FIND" }, { text: "MY CIRCLE OF CARE", divClassName: "bottom_bar" }, { text: "PENDING", divClassName: "ellipse_pending", id: "pending" }]

const careItems: CareItem[] = [
  { className: "red_bar", imgSrc: "/src/images/francis.png", altText: "Man picture", name: "Francis Fisher Williams", profession: "Graphic Designer" },
  { className: "blue_bar", imgSrc: "/src/images/marie.png", altText: "Woman picture", name: "Marie Kraft Smith", profession: "Doctor" },
  { className: "red_bar", imgSrc: "/src/images/dolores.png", altText: "Woman picture", name: "Dolores Vidal Taylor", profession: "Commercial" },
  { className: "red_bar", imgSrc: "/src/images/robbie.png", altText: "Man picture", name: "Robbie Walker Jr.", profession: "CEO NY Memorial" },
  { className: "blue_bar", imgSrc: "/src/images/vanessa.png", altText: "Woman picture", name: "Vanessa Herrera Simons", profession: "Nurse" },
]
</script>
<style lang="scss" scoped>
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
