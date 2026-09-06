---
qid: vq_840d3c068b__faang__local
question: What does it mean to have high and low p-values?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 368
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:20:02-05:00'
sources: []
---

**Clarify**  
You’re asking how *p‑values* reflect evidence against a null hypothesis in statistical tests. Assume we’ve run a standard test (t‑test, chi‑square, etc.) and obtained a p‑value that tells us the probability of observing data at least as extreme as ours if the null were true.

**Approach**  
Explain what a low p‑value indicates, then contrast with a high one. Mention common thresholds (α = 0.05) and the interpretation in hypothesis testing.

**Depth**  
- *Low p‑value* (< α): data unlikely under H₀ → reject H₀; evidence supports alternative.  
- *High p‑value* (> α): data compatible with H₀ → fail to reject H₀; no strong evidence against it.  
Highlight that “high” does **not** prove the null, just that we lack evidence to refute it. Also note that p‑values depend on sample size: large samples can yield tiny p‑values for trivial effects.

**Edge Cases**  
- Very small samples → unstable p‑values; non‑normality may invalidate test assumptions.  
- Multiple testing inflates Type I error—adjust with Bonferroni or FDR.  
- Misinterpreting “not significant” as “no effect” can be misleading.

**Optimize & Communicate**  
Wrap up by stressing that p‑values are a tool, not a verdict. Emphasize effect size and confidence intervals for practical significance, and explain how to convey these findings clearly to stakeholders. This structured narrative showcases problem understanding, technical depth, and clear communication—key signals in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
