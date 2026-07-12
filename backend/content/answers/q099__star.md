---
qid: q099
question: "In an analytics context, how do you know if a change in a metric is statistically significant or just noise?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Situation** At an e-commerce company, a designer shipped a new product-page button and excitedly reported that conversion "jumped from 4.0% to 4.3%." The team wanted to roll it out to everyone the next day based on that.

**Task** I had to determine whether that 0.3-point lift was a real effect or just random noise before we committed to it.

**Action** I set it up as a proper A/B test rather than a before-and-after eyeball. I defined the null hypothesis that the button made no difference, split traffic 50/50, and ran a two-proportion z-test on conversion. I checked the sample size first with a power calculation, since with only a few hundred visitors that lift could easily be chance. After a week of about 40,000 users per arm, I computed the p-value and the 95% confidence interval on the difference. The p-value came out at 0.02 and the confidence interval excluded zero, so the lift was statistically significant, not noise.

**Result** We rolled out with confidence and the lift held, adding roughly $60K in annualized revenue. What I learned is that a single point estimate means nothing without significance testing, confidence intervals, and enough sample size to distinguish signal from randomness.
