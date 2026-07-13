---
qid: q073
question: "What is bootstrapping and when is it useful?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

I'd tie this to **Bias for Action** and **Invent and Simplify**: bootstrapping lets me quantify uncertainty when the math is intractable, without waiting for more data. It's resampling my dataset *with replacement* many times, computing the statistic on each resample, and using the spread of those estimates to get a standard error or confidence interval. Its power is that it makes almost no distributional assumptions, so it works for statistics with no clean closed-form, medians, percentiles, AUC, or ratios.

The judgment I signal is reaching for it exactly when parametric formulas break. I'd give a concrete example: I needed a confidence interval on the p90 latency improvement between two systems; there's no tidy formula for a percentile difference, so I bootstrapped a few thousand resamples in a SageMaker notebook and got a defensible interval that told us the gain was real, not noise. I'd also name the limits: it's compute-heavy, it can't invent information a tiny or biased sample lacks, and it assumes the sample represents the population. For big data I'd parallelize on EMR. A bar-raiser listens for whether you know *why* bootstrapping works, when it beats parametric methods, and its honest limitations, rather than treating it as magic.
