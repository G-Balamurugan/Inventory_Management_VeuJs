const responsiveUtil = require('@blibli/integration-test-tools/lib/utils/responsive')
const networkUtil = require('@blibli/integration-test-tools/lib/utils/network')
const snapshotUtil = require('@blibli/integration-test-tools/lib/utils/snapshot')
const interactionUtil = require('@blibli/integration-test-tools/lib/utils/interaction')
const host = require('@blibli/integration-test-tools/lib/utils/host')

const TARGET_HOST = host.name + ':8080'

/*
* Scenario:
* Test
* */
const BTN_ABOUT = '#blibliApp > header > .wrapper > nav > .about-button'
  
describe('Desktop: Open About Page', () => {
  let delay
  beforeAll(async () => {
    await responsiveUtil.setMobile(page)
      
    await page.goto('http://' + TARGET_HOST)
    await networkUtil.waitForNetworkIdle(page, 3000, 1)
  })
  
  test('1. should load well', async () => {
    // Add your test here
    await snapshotUtil.assertSnapshot(expect, page)
  })

  test('2. should click button about', async () => {
    await page.click(BTN_ABOUT)
    await snapshotUtil.assertSnapshot(expect, page)
  })
})