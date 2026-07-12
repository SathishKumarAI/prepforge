---
qid: q064
question: "What is the Central Limit Theorem and why does it matter?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Situation** I was building a monitoring system for API latency, and a teammate insisted we couldn't compute confidence intervals on the mean because the raw latency distribution was heavily right-skewed.

**Task** I had to explain why we could still reason about the average latency reliably, and set up alerting that wasn't fooled by the skew.

**Action** I leaned on the Central Limit Theorem: regardless of the underlying distribution's shape, the distribution of the sample mean approaches normal as sample size grows. Since each five-minute window aggregated tens of thousands of requests, the mean of those windows was effectively normal, so a standard-error-based interval was valid. I demonstrated it by bootstrapping the sample means and showing the histogram was bell-shaped even though individual latencies weren't. That justified normal-based control limits for the mean, while I kept percentile alerts separate for tail behavior.

**Result** We deployed alerting that flagged real regressions with a false-alarm rate under 5%. The lesson I emphasize is that CLT is what lets us do so much inference on means without knowing the population distribution.
