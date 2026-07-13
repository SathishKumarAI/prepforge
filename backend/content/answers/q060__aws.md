---
qid: q060
question: "What is the difference between a population and a sample, and why do we sample?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

I'd frame this with **Frugality** and **Bias for Action**: sampling is how you get a trustworthy answer fast and cheaply instead of processing everything. The population is the entire set you care about, every user or transaction; a sample is a subset you actually measure and use to *infer* about the population. We sample because measuring the whole population is often too slow, expensive, or impossible, and a well-drawn sample gives estimates that are accurate within a quantifiable margin.

The judgment I signal is that *how* you sample determines validity: the sample must be random and representative, or bias creeps in and no sample size fixes it. I'd give a concrete example: I estimated a fleet-wide metric from a 1% random sample queried in Athena, cutting query cost roughly 50x while keeping the confidence interval tight enough for the decision; but I first checked the sample wasn't skewed toward one region. I'd also mention that bigger samples shrink variance but with diminishing returns. A bar-raiser listens for whether you understand representativeness and sampling bias, and whether you can justify a sample size against a required margin of error rather than grabbing whatever's convenient.
