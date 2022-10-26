export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Placeholder',
    children: [
      {
        label: 'Placeholder A-1',
        subLabel: 'Sublabel for Placeholder A-1',
        href: '#'
      },
      {
        label: 'Placeholder A-2',
        subLabel: 'Sublabel for Placeholder A-2',
        href: '#'
      }
    ]
  }
];
