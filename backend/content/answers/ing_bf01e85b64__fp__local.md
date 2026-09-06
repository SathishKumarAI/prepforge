---
qid: ing_bf01e85b64__fp__local
question: What is prompt caching? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 320
total_tokens: 487
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:49:28-05:00'
sources: []
---

**Prompt caching** is the pre‑computation and reuse of a model’s internal activation states for a fixed textual prefix (the *prompt*).  
The fundamental problem it solves is latency: in many applications we repeatedly ask a large language model to generate text conditioned on an identical or highly similar prompt, while only the suffix changes. The forward pass through the transformer’s self‑attention layers can be reused if the key/value tensors produced by the prompt are stored.

Why must it work this way? A transformer computes each token as  
\(h_t = \text{SelfAttention}(K,V,Q)\), where \(Q\) is the query for the new suffix token and \(K,V\) come from all previous tokens. When the prompt is fixed, its contribution to \(K,V\) is constant; only \(Q\) varies with each suffix. Thus we can cache \((K,V)\) once, amortizing the cost of evaluating all layers over many suffixes.

This idea rests on *modularity* in neural computation: a model’s state can be split into reusable and dynamic parts. It also leverages *information locality*: early layers encode prompt‑specific context that rarely changes.

**Non‑obvious insight:** Prompt caching is not merely a speed trick; it turns the transformer into a *parameter‑efficient cache* that effectively reduces its depth for repeated queries, yielding a new form of model compression without retraining.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
