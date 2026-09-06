---
qid: ing_d8c30428f1__fp__local
question: 'Explain: Compaction — Context Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 359
total_tokens: 525
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:41:13-05:00'
sources: []
---

**Compaction as Context Engineering**

The core problem any large‑language model faces is a *fixed token budget*.  
When the prompt, knowledge base, and instructions together exceed this limit, the model can no longer attend to all relevant signals. Compaction therefore becomes an optimization problem: **maximize expected utility (accuracy) subject to a hard constraint on sequence length**.

Formally, let \(X\) be the full context set and \(Y\) the target output. We seek a compressed representation \(\tilde X\subseteq X\) that maximizes mutual information \(I(Y;\tilde X)\) while keeping \(|\tilde X|\leq B\). This is precisely *rate‑distortion* in information theory, where “distortion” is the loss of predictive power. The optimal solution trades off two forces:

1. **Relevance** – retain tokens that convey high mutual information with \(Y\).
2. **Redundancy elimination** – discard repetitive or low‑entropy fragments.

A non‑obvious insight: *semantic abstraction* often yields higher utility than raw token compression. For example, summarizing a paragraph into a concise factual statement can increase \(I(Y;\tilde X)\) more than simply truncating words, because the abstract captures the essential relations that the model will exploit. Thus compaction is not mere size‑reduction; it is an informed abstraction grounded in information geometry and optimization principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
