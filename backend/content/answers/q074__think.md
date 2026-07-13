---
qid: q074
question: "What is the multiple comparisons problem and how do you correct for it?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** State the trigger condition: running *many* hypothesis tests at once (many metrics, many subgroups, many variants). Assume each test uses the usual α = 0.05.
2. **Mental model.** Think of false positives as accumulating: each test has a 5% chance of a spurious hit, so across m tests the chance of *at least one* false positive balloons. That inflation is the whole problem.
3. **Reason step by step.** Quantify it — for 20 independent tests, P(≥1 false positive) ≈ 1 − 0.95²⁰ ≈ 64%. Then present corrections along a strictness axis: Bonferroni (threshold α/m, simple but conservative), Holm-Bonferroni (stepwise, less conservative, same FWER control), and Benjamini-Hochberg (controls the False Discovery Rate, more powerful).
4. **Traps to dodge.** Do not say more tests are harmless. Do not think Bonferroni loosens the threshold — it tightens it and raises Type II risk. Do not conflate FWER (any false positive is bad) with FDR (tolerate a controlled fraction).
5. **Sanity-check and communicate.** Match the method to the stakes: FWER control (Bonferroni/Holm) when a single false positive is costly, FDR (Benjamini-Hochberg) for large-scale discovery like genomics. Lead with the inflation intuition, then the correction that fits the goal.
