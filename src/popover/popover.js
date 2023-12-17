import markup from './markup';

export default class Popover {
  constructor() {
    this.popovers = [];
  }

  showPopover(parentElement) {
    this.removeAllPopovers();

    const title = parentElement.className;
    const content = parentElement.innerText;

    const popoverElement = document.createElement('div');
    popoverElement.classList.add('popover');
    popoverElement.innerHTML = markup;

    document.body.appendChild(popoverElement);
    popoverElement.querySelector('.popover-title-text').innerText = title;
    popoverElement.querySelector('.popover-content-text').innerText = content;

    document.body.appendChild(popoverElement);
    const { left, top } = parentElement.getBoundingClientRect();

    popoverElement.style.left = `${left + parentElement.offsetWidth / 2 - popoverElement.offsetWidth / 2}px`;
    popoverElement.style.top = `${top - popoverElement.offsetHeight - 7}px`;

    this.popovers.push(popoverElement);
  }

  removeAllPopovers() {
    this.popovers.forEach(el => el.remove());
    this.popovers = [];
  }
}
