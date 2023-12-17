import Popover from '../popover';

test.each([
  ['click button red', 'red'],
  ['click button yellow', 'yellow'],
  ['click button green', 'green'],
])(
  ('test "%s"'
  ),
  (_, btnClassName) => {
    const widget = new Popover();
    expect(widget.popovers.length).toBe(0);

    document.body.innerHTML = `<div class="my-btns"><button class="my-btn ${btnClassName}">Click to toggle popover</button></div>`;
    const btn = document.querySelector('.my-btn');
    btn.addEventListener('click', e => {
      e.preventDefault();
      widget.showPopover(e.target);
    });

    btn.click();

    expect(widget.popovers.length).toBe(1);
  },
);
