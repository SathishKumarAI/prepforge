---
qid: q063
question: "How would you design an A/B test?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — Ask what change we're testing and the business goal. Confirm the primary metric (e.g., conversion rate), the unit of randomization (user vs. session), and available traffic.

**Approach** — Walk through the pipeline: hypothesis → metric → sample size → randomization → run → analyze → decide.

**Depth** — State a hypothesis and one primary success metric plus a few guardrails (latency, revenue). Compute required sample size from the minimum detectable effect, baseline rate, α (0.05), and power (0.80). Randomly assign users to control and treatment, splitting at a stable unit so a user always sees the same variant. Run for full business cycles (≥1–2 weeks) to absorb weekly seasonality. Analyze with a two-sample test (t-test or z-test for proportions), reporting effect size and confidence intervals.

**Edge cases** — Peeking inflates false positives; fix the horizon or use sequential testing. Watch for novelty effects, sample ratio mismatch (SRM), network interference, and multiple-metric inflation.

**Optimize & communicate** — Run an A/A test to validate the pipeline; use CUPED or stratification to cut variance. Narrate: "I'd pre-register the metric and sample size to avoid p-hacking, then check for SRM before trusting results." That signals experimental rigor.
