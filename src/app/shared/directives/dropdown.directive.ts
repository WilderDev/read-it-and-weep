import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective {
  // Inject packages
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  // When "isOpen" switches to true this will be added and when it's false, it will be removed
  @HostBinding("class.show") isOpen = false;

  // Click Listener to toggle.
  @HostListener("click") toggleOpen() {
    // Change our "isOpen" variable to the opposite of what it currently is.
    this.isOpen = !this.isOpen;

    // Grab the dropdown-menu div
    let dropdownList = this.elementRef.nativeElement.querySelector(
      ".dropdown-menu"
    );

    if (this.isOpen) {
      // If "isOpen" is true => ADD the class "show" to our dropdownList
      this.renderer.addClass(dropdownList, "show");
    } else {
      // If "isOpen" is false => REMOVE the class "show" from our dropdownList
      this.renderer.removeClass(dropdownList, "show");
    }
  }
}
