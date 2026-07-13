---
qid: q064
question: "What is the Central Limit Theorem and why does it matter?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

I'd tie this to **Dive Deep**: the CLT is the reason most of applied statistics works, so I explain both the statement and why I rely on it. It says that the distribution of the *sample mean* approaches a normal distribution as sample size grows, regardless of the population's shape, with standard error shrinking as sigma over root-n. So even skewed data like revenue or latency yields an approximately normal sampling distribution of the mean for large enough n.

Why it matters: it's what lets me build confidence intervals and run t-tests and A/B tests on non-normal business data. I'd give a concrete example: our per-user revenue was heavily right-skewed, but with a sample of tens of thousands the mean's sampling distribution was reliably normal, so my A/B confidence intervals were valid without transforming the raw data. I'd add the caveats I actually watch: it's about the mean, not individual values; heavy tails or tiny samples need larger n or bootstrapping; and it says nothing about the data itself being normal. A bar-raiser listens for whether you know the CLT applies to the *sampling distribution of the statistic* and can name when n is too small to trust it.
