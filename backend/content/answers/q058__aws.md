---
qid: q058
question: "What is the normal distribution and why is it important?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

I'd tie this to **Are Right A Lot**: the normal distribution is powerful *and* frequently assumed where it doesn't hold, so knowing both sides matters. It's the symmetric bell curve defined by mean and standard deviation, with the 68-95-99.7 rule. It's important because the **Central Limit Theorem** makes sampling distributions of means approximately normal regardless of the underlying data, which underpins confidence intervals, t-tests, and A/B testing; and many methods assume normal errors.

The judgment I signal is skepticism: real business data, revenue, latency, session length, is usually right-skewed, not normal. I'd give a concrete example: I assumed normality for a revenue metric and my t-test gave misleadingly tight intervals until I checked a Q-Q plot, saw heavy skew, and switched to a log transform plus bootstrapping, which changed the conclusion on a launch decision. So I verify normality with histograms or Q-Q plots before leaning on it, and reach for nonparametric or resampling methods when it fails. A bar-raiser listens for whether you know normality is an assumption to *test*, not assume, and can name what to do when it's violated, rather than reciting the bell curve.
