function toggleSearchInput() {
    const searchInputBox = document.getElementById("searchBoxResponsive");
    (searchInputBox.style.display === "none") 
        ? searchInputBox.style.display = "block" 
        : searchInputBox.style.display = "none"; 
}

export default toggleSearchInput;