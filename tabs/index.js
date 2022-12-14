"use strict";

const tabsTitle = document.querySelectorAll(".tabs-title");
const tabsContent = document.querySelectorAll(".tab");

function removeClass(list, className){
  list.forEach((item) => item.classList.remove(className));
}

function selectTabTitle() {
  removeClass(tabsTitle, "active");
  this.classList.add("active");
  selectTabContent(this.dataset.tabName);
}

function selectTabContent(activeTab) {
  removeClass(tabsContent, "active")
  const activeContent = document.querySelector(`.${activeTab}`);
  activeContent.classList.add("active");
}

tabsTitle.forEach((item) => {
  item.addEventListener("click", selectTabTitle);
});
