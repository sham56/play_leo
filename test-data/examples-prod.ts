import { helloworld_base, auction_base, basic_bank_base, bubblesort_base, core_base, groups_base, interest_base,
         lottery_base, message_base, simple_token_base, tictactoe_base, token_base, twoadicity_base, vote_base } from './examples-base';

export const helloworld_prod = {
    ...helloworld_base,
    output: '3u32',
}
    
export const auction_prod = {
    ...auction_base,
    output: 'amount: 10u64.private',
}

export const basic_bank_prod = {
    ...basic_bank_base,
    output: 'amount: 100u64.private',
}

export const bubblesort_prod = {
    ...bubblesort_base,
    output: `[  1u32,  2u32,  2u32,  3u32,  5u32,  10u32,  11u32,  12u32]`,
}

export const core_prod = {
    ...core_base,
    output: '4595219516058260790934374008127448551939609560761882410393975303774294984915field',
}

export const groups_prod = {
    ...groups_base,
    output: '1540945439182663264862696551825005342995406165131907382295858612069623286213group',
}

export const interest_prod = {
    ...interest_base,
    output: '126u32',
}

export const lottery_prod = {
    ...lottery_base,
    output: '_version: 1u8.public',
}

export const message_prod = {
    ...message_base,
    output: '5field',
}

export const simple_token_prod = {
    ...simple_token_base,
    output: 'amount: 100u64.private',
}

export const tictactoe_prod = {
    ...tictactoe_base,
    output: 'r3: {    c1: 0u8,    c2: 0u8,    c3: 0u8  }',
}

export const token_prod = {
    ...token_base,
    output: 'arguments: [    aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px,    100u64  ]',
}

export const twoadicity_prod = {
    ...twoadicity_base,
    output: '47u8',
}

export const vote_prod = {
    ...vote_base,
    output: 'pid: 2264670486490520844857553240576860973319410481267184439818180411609250173817field.private',
}
