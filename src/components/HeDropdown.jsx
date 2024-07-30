import { Dropdown } from 'flowbite-react';

export function Component({ DropdownItems }) {
  return (
    <Dropdown
      label=''
      dismissOnClick={false}
      renderTrigger={() => <span>My custom trigger</span>}
    >
      {DropdownItems}
    </Dropdown>
  );
}
