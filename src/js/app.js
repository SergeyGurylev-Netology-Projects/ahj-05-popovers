import Popover from '../popover/popover';
import '../popover/popover.css';

const popover = new Popover();

const btns = document.getElementsByClassName('my-btn');
[...btns].forEach(el => el.addEventListener('click', onClick));

function onClick(e) {
  e.preventDefault();
  popover.showPopover(e.target);
}
