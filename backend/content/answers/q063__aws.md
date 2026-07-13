---
qid: q063
question: "How would you design an A/B test?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

I'd structure this as a design I own, anchored to **Deliver Results** and **Customer Obsession**. First, define one primary success metric tied to customer value and state a clear hypothesis. Second, run a **power analysis** up front to compute the sample size needed to detect a minimum meaningful effect at chosen alpha and 80-90% power, so I know the test duration before I start. Third, randomize at the right unit (user, not session, to avoid contamination) and verify balance across groups. Fourth, run long enough to cover weekly seasonality and avoid novelty effects. Fifth, analyze with the pre-registered test, check guardrail metrics, and correct if I'm peeking or testing many variants.

The judgment I signal is pre-commitment: I decide metric, sample size, and stopping rule *before* looking, to avoid p-hacking and peeking bias. I'd give a concrete example where I caught a Simpson's-paradox reversal by segmenting, or where an SRM check exposed a broken assignment. On AWS I'd log events to Kinesis, land them in Redshift, and report in QuickSight. A bar-raiser listens for power analysis, randomization unit, guardrail metrics, and resistance to peeking, the marks of someone who's actually shipped trustworthy experiments.
