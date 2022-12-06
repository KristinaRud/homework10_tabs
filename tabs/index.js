"use strict";

const tabsTitle = document.querySelectorAll(".tabs-title");
const tabsContent = document.querySelectorAll(".tab");
let activeTab;

function selectTabTitle() {
  tabsTitle.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
  activeTab = this.dataset.tabName;
  selectTabContent(activeTab);
}

function selectTabContent(activeTab) {
  tabsContent.forEach((item) =>
    item.classList.contains(activeTab)
      ? item.classList.add("active")
      : item.classList.remove("active")
  );
}

tabsTitle.forEach((item) => {
  item.addEventListener("click", selectTabTitle);
});
