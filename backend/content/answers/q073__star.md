---
qid: q073
question: "What is bootstrapping and when is it useful?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Situation** I reported a median session-duration metric to leadership, and they asked for error bars, but the distribution was weird and multimodal, so no clean formula for the standard error of the median existed.

**Task** I needed a confidence interval for a statistic where the textbook analytical approach didn't apply.

**Action** This is exactly where bootstrapping shines. I resampled the observed data with replacement, thousands of times, each resample the same size as the original, computed the median for each, and built up the sampling distribution empirically. Then I took the 2.5th and 97.5th percentiles of those bootstrap medians as a 95% confidence interval. It made zero distributional assumptions, which is the whole appeal: it works for medians, correlations, or any statistic where the math is intractable or the data are non-normal. I ran 10,000 resamples for a stable interval.

**Result** I delivered a defensible interval, the median was 8.2 minutes with a 95% CI of [7.9, 8.6], and the metric review finally had rigor. My rule: reach for the bootstrap whenever the analytical standard error is unknown, unreliable, or based on assumptions you can't defend.
