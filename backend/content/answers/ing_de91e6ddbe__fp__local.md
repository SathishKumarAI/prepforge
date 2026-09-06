---
qid: ing_de91e6ddbe__fp__local
question: 'Explain: Interview questions — Fine Tuning And Alignment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 452
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:53:07-05:00'
sources: []
---

### Why fine‑tuning & alignment matter

A language model is a **probabilistic density** \(P_\theta(\text{token}\mid\text{context})\) learned on billions of web texts.  
Its objective is to maximize likelihood, which optimizes *average* predictive accuracy but ignores that the distribution it copies contains biases, unsafe content, and sub‑optimal task performance.

Fine‑tuning is simply **re‑optimizing** a subset of parameters \(\theta'\subset\theta\) on a *task‑specific* dataset.  
From an optimization viewpoint this is projecting the high‑dimensional weight vector onto a manifold where the loss for the target distribution \(P_{\text{target}}\) is low:
\[
\theta^*=\arg\min_{\theta'} \mathbb{E}_{x\sim P_{\text{target}}}\!\big[-\log P_{\theta'}(y|x)\big].
\]
Because only a few layers are updated, the model keeps most of its general linguistic knowledge while adapting to new semantics or styles.

Alignment, by contrast, is **constraining** that same optimization so that the output distribution satisfies *human‑designed desiderata* (safety, fairness, factuality).  
Formally we add a penalty \(R(\theta')\) derived from a reward model \(r(x,y)\):
\[
\theta^*=\arg\min_{\theta'} \Big[\mathbb{E}_{x}\!\big[-\log P_{\theta'}(y|x)\big] + \lambda\, R(\theta')\Big],
\]
where \(R(\theta') = -\mathbb{E}[r(x,y)]\).  
The non‑obvious insight: **alignment is not a separate “filter” but an intrinsic regularizer on the same parameter space**.  By shaping gradients with human feedback, we force the model to trade off likelihood for compliance—exactly the mechanism that guarantees both *utility* and *ethics*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
