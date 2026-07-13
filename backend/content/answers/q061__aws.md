---
qid: q061
question: "What is a p-value and how do you interpret it?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

I'd tie this to **Are Right A Lot**: the p-value is one of the most misinterpreted numbers in the field, so stating it precisely signals rigor. It's the probability of observing data *at least as extreme* as ours **if the null hypothesis were true**. A small p-value (say below 0.05) means our result would be surprising under the null, so we reject it. Critically, it is **not** the probability the null is true, nor the probability the result was luck, nor a measure of effect size.

The judgment I signal is refusing to treat 0.05 as magic. I'd give a concrete example I owned: an A/B test hit p=0.03, but the lift was 0.1%, statistically significant yet commercially meaningless, and with our traffic even trivial differences cross the threshold; I recommended against shipping despite the significant result. I always pair the p-value with effect size and a confidence interval, and I pre-register the test to avoid p-hacking. In practice I'd run this analysis over event data in Redshift. A bar-raiser listens for whether you interpret p-values correctly, resist p-hacking, and insist on practical significance alongside statistical significance.
