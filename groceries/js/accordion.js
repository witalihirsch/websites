const categoriesTitle = document.querySelector(".categories__title");
const columnList = document.querySelector(".column__list");

categoriesTitle.addEventListener("click", function() {
    columnList.classList.toggle('active');
});

const filterTitle = document.querySelector(".filter__title");
const columnFilter = document.querySelector(".column__filter");

filterTitle.addEventListener("click", function() {
    columnFilter.classList.toggle('active');
});
