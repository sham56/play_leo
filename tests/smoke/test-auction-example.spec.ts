import { expect, test } from '@playwright/test';
import { playground_full_open } from '../../helpers/pg_open';
import { PrivacyTermsModal, PrivecyTermsPages } from '../../POM/privacy_terms';
import { privacyModalData, privacyPageData, termsPageData, welcomeModalData  } from '../../test-data/privacy_modal';

test.describe('Auction example test', () => {

    test('Auction example', async ({ page }) => {
        await playground_full_open(page);

    });



});