---
qid: ing_04c8663fe2__fp__local
question: 'Explain: LLM-as-Judge Across Different Domains — Ai Evals Comprehensive
  Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 401
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:15:56-05:00'
sources: []
---

**LLM‑as‑Judge: why a language model can arbitrate diverse tasks**

The core problem is *decision making under uncertainty* with sparse, noisy evidence—exactly what human judges face when interpreting statutes, grading essays, or diagnosing disease. A large language model (LLM) solves this by learning the **posterior distribution** \(P(\text{label}\mid \mathbf{x})\) over all possible outcomes given an input \(\mathbf{x}\). Its training data supply a massive empirical approximation of this posterior across domains: legal opinions, teacher rubrics, clinical notes. 

Mathematically, the LLM implements a *variational inference* engine that compresses high‑dimensional context into a latent representation \(\mathbf{h}\) and then decodes it to a probability vector via a softmax layer. The network’s loss function—cross‑entropy over millions of labeled examples—forces \(\mathbf{h}\) to capture the *information bottleneck* between input features and target labels, ensuring that only task‑relevant signals survive. This is why the same architecture can judge code correctness, literary quality, or medical diagnosis: it learns a universal mapping from context to decision probability.

**Non‑obvious insight:**  
Because the LLM’s latent space is *shared* across domains, it implicitly performs **cross‑domain calibration**. When a user asks for a verdict on a novel problem, the model draws on analogous patterns learned elsewhere (e.g., fairness considerations in law and ethics in AI). This emergent “meta‑judgment” ability explains why fine‑tuning on a tiny set of domain‑specific examples can dramatically improve performance—the model merely needs to adjust its prior over the latent space rather than relearn the entire mapping.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
