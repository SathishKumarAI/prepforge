---
qid: ing_7683a6c5e1__fp__local
question: 'Explain: Prompt Engineering | Lil''Log'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 517
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:16:28-05:00'
sources: []
---

**Prompt Engineering (Lil’Log)**  
At its core a language model is an *approximate posterior* \(p_\theta(\mathbf{y}\mid\mathbf{x})\) over text given context \(\mathbf{x}\). The training objective forces the network to map any input string to a distribution that maximises likelihood on the next token. When we deploy such a model, we are no longer free to provide arbitrary \(\mathbf{x}\); instead we must *design* it so that the induced posterior concentrates on the desired behaviour.

1. **Optimization view** – The prompt is a constrained input that nudges the network’s internal state toward a region of parameter space where gradients would have pushed during training. By adding “You are an expert in…; answer concisely”, we bias the model towards sub‑spaces of its weight manifold that were heavily sampled for those patterns, effectively *regularising* the inference path.

2. **Geometric view** – Think of the hidden activations as points on a high‑dimensional manifold. A prompt is a direction vector that moves the activation from a generic “blank slate” point to a region aligned with the task manifold (e.g., question answering). The closer this alignment, the lower the entropy of the output distribution.

3. **Probabilistic view** – Prompt engineering can be seen as *conditioning* on auxiliary variables \(z\) that are never learned directly but are inferred implicitly through wording. By carefully crafting \(z\), we reduce posterior uncertainty:  
   \[
   p(\mathbf{y}\mid\mathbf{x}, z)=p_\theta(\mathbf{y}\mid f_{\text{prompt}}(z,\mathbf{x}))
   \]
   where \(f_{\text{prompt}}\) is a deterministic mapping from text to hidden representation.

**Non‑obvious insight:**  
Most people view prompts as “instructions”. In reality they are *implicit regularisers* that select a sub‑manifold of the model’s latent space. By systematically varying prompt phrasing, we can *explore* this manifold and discover latent factors (e.g., tone, formality) that were never explicitly encoded during training. This opens up a principled way to perform *latent variable inference* without retraining: the prompt becomes an external control knob for any hidden dimension the model has learned.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
