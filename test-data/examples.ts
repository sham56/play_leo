export const helloworld = {
    name: 'helloworld',
    program_name: 'helloworld.aleo',
    input: 'leo run main 1u32 2u32',
    output: '3u32',
}

export const auction = {
    name: 'auction',
    program_name: 'auction.aleo',
    input: 'leo run place_bid aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px 10u64',
    output: 'amount: 10u64.private',
    full_output: '{\n' +
        + 'owner: aleo1ashyu96tjwe63u0gtnnv8z5lhapdu4l5pjsl2kha7fv7hvz2eqxs5dz0rg.private,\n' +
        + 'bidder: aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px.private,\n' +
        + 'amount: 10u64.private,\n' +
        + 'is_winner: false.private,\n' +
        + '_nonce: 7237808032430179785364340215336684385884479382670462337293581784287409549823group.public,\n' +
        + '_version: 1u8.public\n' +
        + '}',
}

export const examples = {
    helloworld,
    auction,
}