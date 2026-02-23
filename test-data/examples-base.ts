export const helloworld_base = {
    name: 'helloworld',
    program_name: 'helloworld.aleo',
    input: 'leo run main 1u32 2u32',
}

export const auction_base = {
    name: 'auction',
    program_name: 'auction.aleo',
    input: 'leo run place_bid aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px 10u64',
}

export const basic_bank_base = {
    name: 'basic_bank',
    program_name: 'basic_bank.aleo',
    input: 'leo run issue aleo1s3ws5tra87fjycnjrwsjcrnw2qxr8jfqqdugnf0xzqqw29q9m5pqem2u4t 100u64',
}

export const bubblesort_base = {
    name: 'bubblesort',
    program_name: 'bubblesort.aleo',
    input: `leo run bubble_sort '[5u32, 1u32, 10u32, 11u32, 12u32, 2u32, 2u32, 3u32]'`,
}

export const core_base = {
    name: 'core',
    program_name: 'core.aleo',
    input: 'leo run main 1field',
}

export const groups_base = {
    name: 'groups',
    program_name: 'groups.aleo',
    input: 'leo run main 1817767092074430972953743941103352519057913259183777531581123188265134806220group',
}

export const interest_base = {
    name: 'interest',
    program_name: 'interest.aleo',
    input: 'leo run fixed_iteration_interest 80u32 5u32',
}

export const lottery_base = {
    name: 'lottery',
    program_name: 'lottery.aleo',
    input: 'leo run play',
}

export const message_base = {
    name: 'message',
    program_name: 'message.aleo',
    input: 'leo run main "{ first: 2field, second: 3field }"',
}

export const simple_token_base = {
    name: 'simple_token',
    program_name: 'simple_token.aleo',
    input: 'leo run mint aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px 100u64',
}

export const tictactoe_base = {
    name: 'tictactoe',
    program_name: 'tictactoe.aleo',
    input: 'leo run new',
}

export const token_base = {
    name: 'token',
    program_name: 'token.aleo',
    input: 'leo run mint_public aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px 100u64',
}

export const twoadicity_base = {
    name: 'twoadicity',
    program_name: 'twoadicity.aleo',
    input: 'leo run main 8444461749428370424248824938781546531375899335154063827935233455917409239040field',
}

export const vote_base = {
    name: 'vote',
    program_name: 'vote.aleo',
    input: 'leo run new_ticket 2264670486490520844857553240576860973319410481267184439818180411609250173817field aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px',
}


