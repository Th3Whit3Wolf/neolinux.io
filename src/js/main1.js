var DropdownMenu = /** @class */ (function () {
    function DropdownMenu(dropdown) {
        this.dropdownMenu = dropdown;
        this.options = dropdown.options;
    }
    DropdownMenu.prototype.OnChange = function () {
        alert(this.options[this.options.selectedIndex].value);
        document.location.href = this.options[this.options.selectedIndex].value;
    };
    return DropdownMenu;
}());
window.onload = function () {
    var select1 = (document.getElementById("cf"));
    var ddm1 = new DropdownMenu(select1);
    select1.onchange = function () {
        ddm1.OnChange();
    };
};
