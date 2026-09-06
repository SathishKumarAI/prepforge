---
qid: ing_a7cbb35d34__fp__local
question: 'Explain: The Rise of "Thinking" Models — Chain Of Thought'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 398
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:02:06-05:00'
sources: []
---

**The Rise of “Thinking” Models – Chain‑of‑Thought (CoT)**  

At its core, a language model answers questions by sampling from the probability distribution \(P(\text{output}\mid \text{prompt})\). The training objective is to maximize the likelihood of human‑written text, which implicitly rewards *surface‑level* coherence but not necessarily *reasoning*. When faced with multi‑step problems (e.g., arithmetic or commonsense inference), a vanilla model often jumps straight to an answer, ignoring intermediate constraints that would guarantee correctness.  

CoT addresses this by **forcing the model to generate a sequence of symbolic or natural‑language steps** before producing the final answer. This aligns the generative process with *structured optimization*: each step can be viewed as a partial evaluation of a latent function \(f\) that maps premises to conclusions. By iterating over intermediate states, the model approximates gradient descent in a discrete space—each token choice nudges it closer to satisfying all constraints.  

Mathematically, CoT transforms the inference problem into maximizing \(\sum_{t} P(s_t \mid s_{<t}, \text{prompt})\) where \(s_t\) are intermediate “thoughts.” The chain acts as a *self‑consistency* mechanism: if any step contradicts earlier premises, the probability of subsequent tokens collapses, discouraging hallucinations.  

**Non‑obvious insight:** CoT implicitly teaches the model *attention over its own hidden states*. Each generated token can be seen as a query that refocuses the network’s internal representation, effectively performing an **online attention mechanism** without explicit architectural changes. This emergent self‑attentive behavior is why fine‑tuned CoT models often surpass their non‑CoT counterparts on reasoning benchmarks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
