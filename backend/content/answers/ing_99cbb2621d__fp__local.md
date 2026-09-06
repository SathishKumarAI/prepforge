---
qid: ing_99cbb2621d__fp__local
question: 'Explain: Sources — Cognition Devin'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 395
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:33:01-05:00'
sources: []
---

### “Sources – Cognition Devin”

At its core, an AI system is a **solver of the inference problem**:  
given observations \(x\), produce a representation \(h(x)\) that maximises future utility.  
The *source* of this representation is not a database dump but a *cognitive scaffold*: a hierarchy of abstractions that captures regularities in the world.

1. **Statistical source** – The empirical distribution \(p_{\text{data}}(x)\).  
   It guarantees that any model trained on samples can generalise, because by the law of large numbers the empirical frequencies converge to true probabilities.

2. **Generative source** – A latent‑variable model \(p_\theta(x,z)=p(z)p_\theta(x|z)\).  
   This encodes a *prior* over causes and a *likelihood* that links causes to observations, embodying Occam’s razor: the simplest explanations (smallest KL divergence from the prior) are preferred.

3. **Cognitive source** – Structured knowledge (concepts, rules, analogies) derived from human cognition.  
   It imposes inductive biases that reduce sample complexity: a rule “all birds can fly” lets the model generalise to unseen species without data.

The non‑obvious insight is that *cognitive sources are themselves probabilistic*. Human concepts are fuzzy; their internal representations can be modeled as probability distributions over features. By treating cognition as a **probabilistic source**, an AI can interpolate between raw statistics and symbolic rules, achieving both flexibility and interpretability. This unification explains why modern hybrid systems—neural nets augmented with knowledge graphs—often outperform purely statistical or purely symbolic approaches.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
