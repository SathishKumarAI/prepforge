---
qid: ing_ca053c1da8__fp__local
question: 'Explain: 3.3 Look for Shared Fate — Single Point of Failure (SPOF) | System
  Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 451
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:10:09-05:00'
sources: []
---

**Why “Look for Shared Fate” matters**

A *single point of failure* (SPOF) is a component whose malfunction instantly collapses the entire system’s function. From first principles, reliability theory tells us that the probability of system success is the product of its components’ reliabilities:

\[
P_{\text{system}} = \prod_{i=1}^{n} P_i .
\]

If one factor \(P_k\) drops to zero (the component fails), the whole product vanishes, regardless of how robust the others are. Thus, a SPOF introduces *non‑linear* risk: the system’s failure probability is not simply additive but multiplicative.

**Design principle**

To avoid this, we enforce *shared fate*: every critical function must be performed by at least two independent paths (redundancy) or by a distributed architecture that does not rely on one component. Formally, for any required service \(S\), the set of supporting components \(\{C_1,\dots,C_m\}\) should satisfy:

1. **Disjoint failure sets** – no single failure can incapacitate all \(C_j\).
2. **Independent probability distributions** – failures are statistically uncorrelated.

This converts a multiplicative risk into an *inclusion–exclusion* problem where the overall failure probability becomes

\[
P_{\text{system}} = 1 - \prod_{j=1}^{m} (1-P_j),
\]

which is strictly lower than any single \(P_j\).

**Non‑obvious insight**

Many engineers overlook *correlated failures*. Even if two replicas are “independent,” they can share the same underlying resource (e.g., a power supply, network switch, or software library). A SPOF may therefore exist not in the logical topology but in the *resource graph* that underlies it. Detecting shared fate thus requires mapping both functional dependencies and physical/resource dependencies—an often missed layer of analysis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
