---
qid: ing_02fcdc4d37__fp__local
question: 'Explain: Week 2 — Generative AI with Large Language Models | Coursera'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 345
total_tokens: 520
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:11:16-05:00'
sources: []
---

**Week 2 – “Generative AI with Large Language Models” (Coursera)**  
The week tackles the *why* behind LLMs, not just how to code them.

1. **Fundamental problem:** Human language is a *probabilistic sequence*; we want machines that can predict the next token with high fidelity. This reduces to learning a distribution \(P(x_1,\dots,x_n)\) over sentences, which is equivalent to maximizing likelihood on massive corpora.  
2. **Why transformer architecture works:** Self‑attention lets every token attend to all others in parallel, capturing long‑range dependencies without recurrence. The attention weights encode a *soft* graph of interactions, turning language modeling into a dynamic, differentiable geometry that can be optimized by stochastic gradient descent.  
3. **Scaling law insight:** Empirically, loss scales as a power‑law with model size and data volume (\(L \approx a\,N^{-b}\)). The course derives this from the bias–variance trade‑off in overparameterized neural nets: more parameters reduce approximation error faster than they inflate variance when trained on enough data.  
4. **Non‑obvious takeaway:** *Tokenization is not merely preprocessing—it shapes inductive bias.* Subword units (BPE, SentencePiece) implicitly encode a prior that favors compositionality; changing token granularity can shift the learned language manifold, affecting downstream generation quality more than model hyperparameters.

The week culminates in hands‑on fine‑tuning of an LLM on a domain‑specific corpus, illustrating how theory translates to practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
