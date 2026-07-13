---
qid: q073
question: "What is bootstrapping and when is it useful?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Distinguish this statistical bootstrap from unrelated "bootstrapping" meanings (startups, computing). Assume you have a single observed sample and want to quantify uncertainty in some statistic computed from it.
2. **Mental model.** Core idea: treat your sample as a stand-in for the population, and simulate "drawing new samples" by resampling **with replacement**. The variability across resamples approximates the true sampling distribution.
3. **Reason step by step.** Spell out the loop: draw many (1k–10k) resamples of size n with replacement → compute the statistic on each → use that empirical distribution to get standard errors and confidence intervals (e.g. percentile method). Stress it shines when no closed-form sampling distribution exists — median, correlation, odd metrics.
4. **Traps to dodge.** Do not resample *without* replacement (that just reshuffles). Do not claim it needs a known population distribution — its strength is being non-parametric. Watch that it assumes the sample represents the population, so it struggles with tiny samples or extreme-tail statistics.
5. **Sanity-check and communicate.** Confirm the resample size equals n and sampling is with replacement. Mention it underpins bagging in ensembles to show connections. Deliver as: resample-with-replacement → recompute → read off the distribution.
