---
qid: q064
question: "What is the Central Limit Theorem and why does it matter?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Make explicit *what* is becoming normal — the sampling distribution of the sample **mean**, not the raw data. State the precondition: independent samples from a population with finite variance.
2. **Mental model.** Picture repeatedly drawing samples of size n, computing each mean, and histogramming those means. The CLT promises that histogram trends toward a bell curve as n grows, whatever the original shape.
3. **Reason step by step.** Give the three facts: the sampling distribution centers on μ, its spread is the standard error σ/√n (shrinking with larger n), and normality kicks in around n ≥ 30, more for heavy skew. Then connect: because means are ~normal, z- and t-based inference works.
4. **Traps to dodge.** Do not say "all data becomes normal" — only the means do. Do not require the population itself to be normal. Note standard error *falls*, not rises, with n.
5. **Sanity-check and communicate.** Test the claim mentally with a skewed source like income: individual incomes stay skewed, but averages of samples pile up normally. Land the "why it matters": it licenses confidence intervals and hypothesis tests on non-normal data.
