import { SHEPHERDS_PROD } from "./onboarding-prod";
import { SHEPHERDS_STAGE } from "./onboarding-stage";

const ENV = process.env.TEST_ENV ?? 'staging';

export const shepherds =
  ENV === 'production' ? SHEPHERDS_PROD  : SHEPHERDS_STAGE;  

//export const shepherdsCount = 
//  ENV === 'production' ? ShepherdsCount_prod : ShepherdsCount_stage;
  