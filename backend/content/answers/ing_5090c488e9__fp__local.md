---
qid: ing_5090c488e9__fp__local
question: 'Explain: Types of Prompt Injection — Llm Security'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 476
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:56:29-05:00'
sources: []
---

**Prompt‑Injection in LLMs – the geometry of malicious context**

At its core a language model is an *expectation engine*: given a token sequence it returns the probability distribution over the next token that maximises expected log‑likelihood under its learned joint distribution \(P(\mathbf{t})\).  
When an attacker supplies extra tokens before or inside a prompt, they are reshaping the conditioning context \(\mathbf{c}\) so that the model’s posterior \(P(t| \mathbf{c})\) favours undesirable completions. The attack surface splits into three geometrically distinct regimes:

1. **Pre‑prompt Injection (Prefix hack)** – tokens added *before* the user prompt shift the global conditioning vector, effectively rotating the hidden state manifold so that the model “thinks” it is answering a different question.  
2. **Mid‑prompt Injection (In‑place hack)** – tokens inserted inside the prompt alter local attention windows; the model’s self‑attention graph is re‑wired, causing it to attend to malicious cues instead of user intent.  
3. **Post‑prompt Injection (Suffix hack)** – tokens appended after the intended answer force the decoder to generate continuation that may reveal secrets or violate policies, exploiting the model’s autoregressive bias toward context‑dependent completion.

**Why this must work:** because LLMs lack an *explicit* separation between “instruction” and “content”; all tokens are treated symmetrically in the transformer. The hidden state is a linear projection of every token, so any added token perturbs the entire representation.  

**Non‑obvious insight:** *The most effective attacks do not rely on overtly malicious words but on subtle statistical alignments.* By inserting tokens that statistically co‑occur with policy‑bypass phrases (e.g., “According to an expert…”) the attacker leverages the model’s internal knowledge graph, nudging it into a high‑probability path that bypasses safety filters. This subtlety often escapes conventional token‑level sanitisation but can be mitigated by **contextual anomaly detection**—monitoring shifts in hidden state norms rather than surface text.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
