---
qid: q060
question: "What is the difference between a population and a sample, and why do we sample?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll assume the interviewer wants the definitions, the reasons sampling is necessary, and awareness of how sampling can go wrong (bias), since that's the practical crux.

**Approach** — Define both terms, distinguish parameters from statistics, give the motivations for sampling, then cover representativeness.

**Depth** — A population is the entire set of individuals or observations we care about, every customer, every transaction. A sample is a subset drawn from that population that we actually measure. Quantities describing a population are parameters (true mean mu, true proportion); quantities computed from a sample are statistics (sample mean x-bar) that estimate those parameters. We sample because measuring the whole population is usually infeasible: it's too costly, too slow, or literally impossible (the population may be infinite or future, or measurement may be destructive, like crash-testing). A well-drawn sample lets us infer population parameters with quantifiable uncertainty (confidence intervals) at a fraction of the cost.

**Edge cases** — The sample must be representative; a biased sampling method (convenience sampling, self-selection, survivorship bias) yields estimates that are systematically wrong no matter how large the sample. Larger samples reduce variance but not bias.

**Optimize & communicate** — I'd use random or stratified sampling to ensure representativeness and report margins of error. I'd emphasize that sample size fixes variance but only good sampling design fixes bias, a distinction that signals real statistical maturity.
