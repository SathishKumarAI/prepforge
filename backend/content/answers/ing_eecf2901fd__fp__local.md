---
qid: ing_eecf2901fd__fp__local
question: 'Explain: Pitfall 15: Solving a Different Problem — Common Pitfalls'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 382
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:26:42-05:00'
sources: []
---

**Pitfall 15 – “Solving a Different Problem”**

The core objective of an AI system is to **solve the target task** defined by its specification (e.g., classifying images, translating text). When we design experiments or benchmarks, we implicitly assume that the data distribution and evaluation metric faithfully reflect that target. However, if the training data, loss function, or test protocol inadvertently emphasize a *proxy* objective—such as maximizing token‑level accuracy on a narrow dataset—the model learns to optimize the proxy instead of the true task.

Why this happens:  
1. **Convenience bias** – datasets are easier to collect and label than real‑world scenarios.  
2. **Metric misalignment** – a single scalar score (e.g., BLEU, F1) may reward surface patterns that correlate with the target but do not capture its essence.  
3. **Overfitting to artifacts** – models latch onto spurious correlations present only in the curated data.

A deeper principle at play is *distribution shift*. The training distribution \(P_{\text{train}}\) differs from the deployment distribution \(P_{\text{test}}\); if we treat \(P_{\text{train}}\) as a surrogate for \(P_{\text{true}}\), we solve a different optimization problem.  
**Non‑obvious insight:** Even subtle changes—like a slightly altered tokenization scheme or an unintentional class imbalance—can cause the learned decision boundary to drift, producing a model that performs well on paper but fails in practice. The fix is rigorous *task‑aligned* evaluation: design synthetic probes and real‑world trials that directly test the intended capability, not just its statistical proxies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
