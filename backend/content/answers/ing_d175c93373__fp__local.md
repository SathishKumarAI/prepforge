---
qid: ing_d175c93373__fp__local
question: What are the most common prompt anti-patterns you'd flag in a code review?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 473
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:25:53-05:00'
sources: []
---

### Why prompt anti‑patterns sabotage AI quality

At its core an LLM is a stochastic decoder that maximizes the likelihood of tokens conditioned on a *context*.  
The context you hand it—the prompt—acts as a *prior* over the output space.  
When the prior is poorly shaped, the decoder’s search collapses into high‑probability but irrelevant regions, wasting compute and generating hallucinations.

| Anti‑pattern | Why it breaks the prior | Deeper principle |
|--------------|------------------------|------------------|
| **“Open‑ended” questions** (e.g., “Tell me everything”) | Forces the model to cover an astronomically large space; likelihood mass is spread thin, so the top tokens are generic. | *Entropy maximization* – too high entropy yields vague answers. |
| **Excessive verbosity** (long preambles, filler) | Inflates context size without adding signal, causing token budget to be consumed on noise. | *Information bottleneck* – only the most informative tokens should occupy the limited capacity. |
| **Ambiguous or multi‑step tasks** | The model must infer hidden sub‑tasks; its internal planner is unreliable, leading to drift. | *Causal inference*: without explicit causal structure, the decoder’s joint distribution misaligns with intent. |
| **Unclear constraints** (no limits on length, style) | The output space explodes; likelihood peaks at generic defaults. | *Regularization*: constraints act as priors that shape the posterior. |

### One non‑obvious insight

> **Prompt “tightening” can be seen as a *loss function* for the LLM.**  
> By explicitly penalizing unwanted token sequences (e.g., via negative examples or style tokens), you reshape the decoder’s internal loss landscape, steering it toward the desired mode without extra inference cost.  

In code review, flag any prompt that dilutes signal, inflates entropy, or leaves the model to wander in an unbounded search space. Tight, constraint‑rich prompts act as a lightweight regularizer, ensuring efficient, accurate generation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
