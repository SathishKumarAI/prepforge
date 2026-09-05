---
qid: ing_0255dfd52f__fp__local
question: 'Explain: Co-Reasoning (Shared Scratchpads) — Human In The Loop Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 371
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:10:05-05:00'
sources: []
---

**Co‑Reasoning (Shared Scratchpads) – A Human‑in‑the‑Loop Pattern**

The *fundamental problem* is that an AI’s internal state (attention maps, latent vectors, gradients) is opaque to a human collaborator; the model cannot be guided or corrected mid‑execution.  
To solve this, we expose a **scratchpad**—a mutable, shared memory space that both agents can read and write. The AI writes provisional hypotheses (“I think token X is likely”), while the human can annotate, correct, or supply domain knowledge (e.g., “this phrase is a negation cue”).  
Why must this work? Because inference in modern neural nets is a *sequential decision process*: each step depends on prior activations. By inserting an explicit intermediate representation that is *observable* and *modifiable*, we transform the opaque black‑box into an **interactive Markov decision process** where human actions are additional transition inputs. The AI learns to condition its policy not only on the raw input but also on the current scratchpad contents, thereby aligning its reasoning trajectory with human intent.

The deeper principle is **information bottleneck optimization**: the scratchpad acts as a compressed interface that maximizes mutual information between user intent and model predictions while minimizing unnecessary signal.  
A non‑obvious insight: when the scratchpad is *structured* (e.g., slot‑based or graph), the AI can learn to perform *meta‑reasoning*—optimizing not just the final answer but also the *efficiency of communication* with the human, reducing overall interaction cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
