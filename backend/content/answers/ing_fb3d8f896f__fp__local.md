---
qid: ing_fb3d8f896f__fp__local
question: 'Explain: Title: Training Compute-Optimal Large Language Models'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 480
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:54:10-05:00'
sources: []
---

**Training Compute‑Optimal Large Language Models**

At its core, language modeling is an *information‑theoretic* problem: we want a function \(f_\theta\) that maps a context to the next token with minimal error. The capacity of \(f_\theta\) grows with its parameter count \(\Theta\), but each additional parameter costs compute and data. Empirically, validation loss follows a power law in both model size \(M\) and total pre‑training FLOPs \(F\):

\[
L(M,F)\approx a\,M^{-\alpha} + b\,F^{-\beta},
\]

with \(\alpha,\beta>0\). Optimizing \(L\) under a fixed compute budget \(C\) requires balancing the two terms: too small a model wastes data, too large a model squanders FLOPs per parameter. The *compute‑optimal* regime is where marginal gains in loss from adding parameters equal marginal gains from extra training steps:

\[
\frac{\partial L}{\partial M} \cdot \Delta M = \frac{\partial L}{\partial F}\cdot \Delta F,
\quad
\text{with } \Delta F = C\,\Delta M / M.
\]

Solving yields the *optimal compute per parameter*:

\[
C_{\text{opt}}(M)=k\,M^{\gamma},
\]

where \(k,\gamma\) depend on dataset size and hardware. This relation guarantees that each FLOP contributes maximally to reducing loss.

**Non‑obvious insight:** The optimal compute per parameter *decreases* with model size (\(\gamma<0\)). Thus, as we scale up, we should train smaller models more thoroughly (more epochs) rather than simply cranking up the number of layers. This counterintuitive “train hard, not wide” principle explains why recent state‑of‑the‑art LLMs often allocate more compute to fine‑tuning than to raw scaling, and it guides efficient resource allocation in practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
