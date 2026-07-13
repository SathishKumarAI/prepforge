---
qid: q075
question: "How can you estimate causal effects from observational data when you cannot run an experiment?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — Confirm the target: a causal effect (treatment on outcome) without randomization. Ask what confounders are observed and whether any natural experiment or instrument exists.

**Approach** — Name the core threat (confounding), then map methods to the identifying assumption each requires.

**Depth** — The obstacle is confounding: variables that affect both treatment and outcome create spurious association. Methods: **Regression / propensity-score matching or weighting** adjusts for *observed* confounders, assuming no unobserved ones (ignorability). **Instrumental variables** exploit a variable that affects treatment but the outcome only through treatment, handling unobserved confounding. **Difference-in-differences** compares treated vs. control before/after, assuming parallel trends. **Regression discontinuity** uses a cutoff rule, comparing units just above/below. **Causal graphs (DAGs)** with the backdoor criterion tell you exactly which variables to control for.

**Edge cases** — Unobserved confounders bias adjustment methods; you can't fix what you didn't measure. Bad controls (colliders, mediators) *introduce* bias. Weak instruments give unstable estimates. Parallel-trends and continuity assumptions are untestable directly.

**Optimize & communicate** — Triangulate multiple designs, run sensitivity analyses for hidden confounding, and state assumptions explicitly. Narrate: "Each method buys causal identification with a different untestable assumption — I'd pick the one whose assumption is most defensible here." That framing is the signal.
