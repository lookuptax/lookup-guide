import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import SmartLocaleDropdown from '@site/src/components/SmartLocaleDropdown';

export default {
  ...ComponentTypes,
  'localeDropdown': SmartLocaleDropdown, // Override the default locale dropdown
  'custom-SmartLocaleDropdown': SmartLocaleDropdown, // Custom type for explicit use
};
