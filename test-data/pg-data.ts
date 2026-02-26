export const LEO_LANGUAGE_URL = 'https://www.leo-lang.org';

export const LOGO = {
    alt: 'header-logo',
    src: '7d3935001d0733961543730a8d064951.svg',
    href: 'https://leo-lang.org',
}


export const HEADER_DROPDOWNS = ['Project', 'Examples', 'Help'];    
export const DD_PROJECT_ITEMS = [
  'Create New',
  'Direct Link to the Gist',
  'Permalink to the Playground',
  'Download Project'
];
export const DD_EXAMPLES_ITEMS = [
    'Auction',
    'Basic_bank',
    'Bubblesort',
    'Core',
    'Groups',
    'Helloworld',
    'Interest',
    'Lottery',
    'Message',
    'Simple_token',
    'Tictactoe',
    'Token',
    'Twoadicity',
    'Vote'
];
export const DD_HELP_ITEMS = [
    'Docs',
    'Report an issue'
];

export const DD_PROJECT = {
    button: 'Project',
    items: DD_PROJECT_ITEMS
}
export const DD_EXAMPLES = {
    button: 'Examples',
    items: DD_EXAMPLES_ITEMS
}
export const DD_HELP = {
    button: 'Help',
    items: DD_HELP_ITEMS
}

export const DROPDOWNS = [DD_PROJECT, DD_EXAMPLES, DD_HELP];

export const TESTNET_BTN = {
    name: 'testnet',
    tooltip: 'Network',
    before: { 
        content: "eb01",
        fontFamily: 'codicon', 
        visibility: 'visible',
        opacity: '1',
        display: 'block',
        fontSize: '16px',
        lineHeight: '16px',
        margin: '0px 6px 0px 0px',
    },
    after:  { content: "none", },
}

export const ENVIRONMENT_BTN = {
    name: 'Environment',
    tooltip: 'Environment',
    before: { content: "none", },
    after:  { content: "none", },
}

export const SHIELD_BTN = {
    name: 'Shield',
    tooltip: 'Disconnected',
    before: { content: "none", },
    after: {
        content: "\"\"", 
        fontFamily: "Inter, sans-serif", 
        visibility: 'visible',
        opacity: '1',
        backgroundColor: 'rgb(244, 67, 54)',
        color: 'rgb(255, 255, 255)',
        borderRadius: '50%',
        display: 'block',
        fontSize: '0px',
        height: '8px',
        width: '8px',
    }
}

/*
content: "";
    display: inline-block;
    font-size: 0;
    height: 8px;
    width: 8px;
*/

export const HEADER_BUTTONS = [TESTNET_BTN, ENVIRONMENT_BTN, SHIELD_BTN];