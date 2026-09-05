---
qid: ing_6b76a58e8f__eli5__local
question: 'Explain: Pre-LN vs Post-LN — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 260
total_tokens: 421
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:26:16-05:00'
sources: []
---

Think of a large language model (LLM) as a giant kitchen that prepares sentences word by word.  
Each “layer” in the kitchen is like a station where ingredients (the current hidden state) are mixed and transformed into new flavors (updated representations).  

**Layer Normalization (LN)** is the quality‑control step: it checks that the mix isn’t too salty or bland before moving on, keeping everything balanced.  
- **Pre‑LN**: The kitchen first does its quality check *before* adding the next ingredient. Every station starts with a fresh, normalized batch. This keeps the flow steady and lets the model learn longer sequences without getting stuck.  
- **Post‑LN**: The quality check happens *after* the new ingredient is added. The station can see the raw flavor first, then adjusts it. It’s simpler but can become unstable when many layers stack up.

So Pre‑LN = “normalize first, then transform”; Post‑LN = “transform first, then normalize.” The choice changes how smoothly the kitchen (the model) works over deep stacks of layers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
