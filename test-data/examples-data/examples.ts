import { helloworld_stage, auction_stage, basic_bank_stage,bubblesort_stage, core_stage, groups_stage, interest_stage, 
         lottery_stage, message_stage, simple_token_stage, tictactoe_stage, token_stage, twoadicity_stage, vote_stage } from './examples-stage';
import { helloworld_prod, auction_prod, basic_bank_prod, bubblesort_prod, core_prod, groups_prod, interest_prod, 
         lottery_prod, message_prod, simple_token_prod, tictactoe_prod, token_prod, twoadicity_prod, vote_prod } from './examples-prod';

const ENV = process.env.TEST_ENV ?? 'staging';

export const helloworld =
  ENV === 'production' ? helloworld_prod : helloworld_stage;

export const auction =
  ENV === 'production' ? auction_prod : auction_stage;  
  

export const basic_bank =
  ENV === 'production' ? basic_bank_prod : basic_bank_stage;  

export const bubblesort =
  ENV === 'production' ? bubblesort_prod : bubblesort_stage;  

export const core =
  ENV === 'production' ? core_prod : core_stage;

export const groups =
  ENV === 'production' ? groups_prod : groups_stage;  
  

export const interest =
  ENV === 'production' ? interest_prod : interest_stage; 
  
export const lottery =
  ENV === 'production' ? lottery_prod : lottery_stage;

export const message =
  ENV === 'production' ? message_prod : message_stage;

export const simple_token =
  ENV === 'production' ? simple_token_prod : simple_token_stage;

export const tictactoe = 
  ENV === 'production' ? tictactoe_prod : tictactoe_stage;

export const token =
  ENV === 'production' ? token_prod : token_stage;

export const twoadicity =
  ENV === 'production' ? twoadicity_prod : twoadicity_stage;

export const vote =
  ENV === 'production' ? vote_prod : vote_stage;

export const examples = {
    helloworld,
    auction,
    basic_bank,
    bubblesort,
    core,
    groups,
    interest,
    lottery,
    message,
    simple_token,
    tictactoe,
    token,
    twoadicity,
    vote
}
