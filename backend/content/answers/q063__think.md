---
qid: q063
question: "How would you design an A/B test?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Ask what change is being tested and what business outcome matters. State assumptions: users can be randomized independently, there is a measurable primary metric, and you can run long enough. Pin down one success metric before anything else.
2. **Mental model.** Frame it as a randomized controlled experiment: randomization buys you causal inference by making A and B groups comparable on everything except the change.
3. **Reason step by step.** Walk the pipeline: define hypothesis and metric → power analysis (baseline rate, minimum detectable effect, α, power) to fix sample size → randomly assign → run to full sample without peeking → analyze with a two-proportion z-test/t-test plus confidence interval → decide on statistical *and* practical significance.
4. **Traps to dodge.** Never stop early the moment p < 0.05 (inflates false positives). Watch for sample-ratio mismatch, novelty effects, multiple-comparison inflation, and network effects that break independence.
5. **Sanity-check and communicate.** Verify guardrail metrics did not regress and the groups were balanced. Deliver it as an ordered recipe — hypothesis, sizing, randomize, run, analyze, decide — so the interviewer hears rigor, not just "compare two versions."
