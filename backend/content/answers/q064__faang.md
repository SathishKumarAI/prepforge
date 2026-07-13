---
qid: q064
question: "What is the Central Limit Theorem and why does it matter?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — Confirm they want the statement plus its practical importance, not a measure-theoretic proof. Assume independent, identically distributed samples with finite variance.

**Approach** — State the theorem, then explain why it underpins most of inference.

**Depth** — The CLT says that for i.i.d. samples with mean μ and finite variance σ², the distribution of the sample mean approaches a normal distribution as n grows, regardless of the population's shape. Specifically, `(X̄ − μ) / (σ/√n)` converges to N(0,1). The standard error shrinks as σ/√n. This is why we can build confidence intervals and run t/z-tests even when the underlying data are skewed or non-normal — the *sampling distribution of the mean* is what turns normal.

**Edge cases** — It applies to the mean, not individual observations. It needs finite variance (fails for heavy-tailed distributions like Cauchy). Convergence is slower for highly skewed data, so small n may need n ≥ 30+ or more.

**Optimize & communicate** — For small or skewed samples, use bootstrapping instead of relying on asymptotic normality. Narrate: "The CLT is why averaging tames arbitrary distributions, letting me quantify uncertainty in an estimate." That connects theory to why it matters in practice.
