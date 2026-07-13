---
qid: q075
question: "How can you estimate causal effects from observational data when you cannot run an experiment?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

I'd anchor this to **Dive Deep** and **Are Right A Lot**: when a randomized experiment is impossible, ethically, technically, or because the change already happened, I can still estimate causal effects, but only by taking confounding seriously. The core threat is that treated and untreated groups differ systematically, so a raw comparison is biased. The methods I reach for control for that. **Propensity-score matching or weighting** balances observed covariates between groups. **Difference-in-differences** compares before-and-after changes against a control group, cancelling out fixed differences and shared trends. **Instrumental variables** exploit something that shifts treatment but not the outcome directly. **Regression discontinuity** uses a threshold-based assignment as a natural experiment.

The judgment I signal is honesty about assumptions: all of these assume no *unobserved* confounders, so I state that limitation and run sensitivity analyses. I'd give a concrete example: to estimate a feature's retention impact where we couldn't randomize, I used diff-in-diff against a matched control cohort in Redshift and got a credible lift, then stress-tested it against a placebo period. A bar-raiser listens for whether you name a specific quasi-experimental method, articulate its identifying assumption, and stay humble about unmeasured confounding rather than claiming causation cheaply.
