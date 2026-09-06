---
qid: ing_57fe305d8d__fp__local
question: 'Explain: Core Architecture — Claude Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 425
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:11:21-05:00'
sources: []
---

### Why Claude’s core architecture is built the way it is

Claude tackles **“how can a large language model understand intent and produce safe, grounded text?”**  
The answer starts from two invariants:

1. **Text as a sequence of tokens** – any language model must learn the probability distribution \(P(x_1,\dots,x_n)\).  
2. **Human‑aligned objectives** – the model’s outputs must respect safety constraints and factuality, otherwise it is useless.

From these invariants follows the *transformer* backbone: self‑attention lets every token attend to all others, giving a global context that satisfies (1).  

But pure likelihood training only optimises next‑token probability; it does **not** optimise for alignment.  
Anthropic therefore introduces two layers on top:

| Layer | Purpose | Why it works |
|-------|---------|--------------|
| **Reinforcement Learning from Human Feedback (RLHF)** | Adjusts the policy toward human preferences | Turns a likelihood objective into an *expected reward* \(E_\pi[R]\), directly encoding safety and usefulness. |
| **Constitutional AI** | Uses a set of rules (“constitutions”) to generate self‑critique and revise outputs | Provides a *probabilistic prior* over safe behaviors, reducing reliance on brittle human labels. |

The deeper insight most miss: **the constitution acts as a learned regulariser that biases the transformer’s latent space toward a submanifold of “acceptable” utterances**.  
This turns Claude from a generic language model into a *self‑regulating policy* that can be fine‑tuned with minimal data while staying grounded in its safety priors.

In short, Claude’s core architecture is: transformer → RLHF → constitutional self‑critique, each step derived from the fundamental need to map token probabilities onto aligned, safe outputs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
