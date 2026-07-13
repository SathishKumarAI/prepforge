---
qid: q099
question: "In an analytics context, how do you know if a change in a metric is statistically significant or just noise?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

I'd distinguish a real change from noise with statistics, not by eyeballing a dashboard. **Bias for Action** doesn't mean reacting to every wiggle; **Are Right A Lot** means I quantify uncertainty first. My approach: establish a baseline and its natural variance, then run a hypothesis test appropriate to the metric, a two-proportion z-test or chi-square for conversion rates, a t-test for means, checking the **p-value** against a pre-set threshold (say 0.05) and, just as important, the **confidence interval** and **effect size**, because a tiny, practically meaningless change can be "significant" at huge sample sizes.

I also insist on adequate **sample size and power** before calling it, and I watch for peeking (repeatedly testing until it crosses significance) and multiple-comparisons inflation, correcting when I test many metrics.

A real example: a PM wanted to ship a feature after a 3% conversion "lift" on day one. I showed the confidence interval spanned zero and we lacked power; we ran a properly sized A/B test to two weeks. The lift settled at a real, significant 1.8%, and we shipped on evidence instead of a false positive that would have wasted a quarter.

A bar-raiser listens for whether I reason about significance, effect size, power, and peeking, and resist acting on noise, tying rigor to a real decision.
