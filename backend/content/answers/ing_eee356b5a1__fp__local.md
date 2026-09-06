---
qid: ing_eee356b5a1__fp__local
question: 'Explain: Basic Prompting — Prompt Engineering | Lil''Log'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 389
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:26:49-05:00'
sources: []
---

**Prompt Engineering – the Geometry of Language Models**

At its core a language model is an *information‑theoretic* system: it maps an input sequence \(x\) to a probability distribution over next tokens,
\(P_\theta(\cdot|x)\).  The fundamental problem for users is to steer this distribution toward a desired semantic output.  
Prompt engineering reframes that steering as a *geometric constraint* in the model’s hidden space.

1. **Define the objective** – choose a target property (e.g., “explain in lay terms”).  
2. **Anchor the prompt** – append or prepend tokens that act as boundary conditions, effectively translating the input into a sub‑manifold where the desired distribution mass is concentrated.  
3. **Iterate via feedback** – measure divergence from the target and adjust prompt tokens to shrink the distance (e.g., using loss functions on generated text).

Why must it work this way? Because language models are *contextualized*; each added token re‑weights the hidden activations linearly before the softmax. By treating prompts as linear constraints, we exploit the model’s learned manifold structure rather than brute‑forcing outputs.

**Non‑obvious insight:**  
A prompt that is **short but semantically dense** (e.g., “Explain like I’m 5:”) often outperforms longer, verbose prompts because it reduces *semantic drift* in early layers. The fewer tokens before the target content, the less opportunity for the model to wander into unrelated high‑probability regions of its latent space.

In practice, treat prompts as *geometric anchors*—tiny vectors that nudge the entire trajectory of token probabilities toward the desired outcome.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
