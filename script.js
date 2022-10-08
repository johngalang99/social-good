const initialPage = () => {
  const initialPage = document.querySelector(".initial");
  showSelected(initialPage);
};

const selectPage = (event) => {
  const page = event.target.dataset.page;
  const element = document.querySelector("#" + page);
  showSelected(element);
};

const showSelected = (selected) => {
  console.log(selected);
  document.querySelectorAll(".page").forEach((page) => {
    page.style.display = "none";
  });

  selected.style.display = "block";
};

document.querySelectorAll(".selectPage").forEach((pageSelectButton) => {
  pageSelectButton.addEventListener("click", selectPage);
});

initialPage();
