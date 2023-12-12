const generateDelay = page => {
  return {
    xshort: async () => {
      await page.waitForTimeout(500)
    },
    short: async () => {
      await page.waitForTimeout(1000)
    },
    medium: async () => {
      await page.waitForTimeout(2000)
    },
    long: async () => {
      await page.waitForTimeout(3000)
    }
  }
}

module.exports = generateDelay
