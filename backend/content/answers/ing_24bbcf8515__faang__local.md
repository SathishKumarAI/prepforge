---
qid: ing_24bbcf8515__faang__local
question: 'Explain: Deduction Rules ​ — Models & Pricing | DeepSeek API Docs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 524
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:09:43-05:00'
sources: []
---

**Clarify**  
You’re asking for an overview of *Deduction Rules* in the DeepSeek AI platform—specifically how models are chosen and priced when you invoke the API. I’ll assume you want a high‑level view (not raw code) that covers: 1️⃣ rule types, 2️⃣ model selection logic, and 3️⃣ pricing tiers.

**Approach**  
1. List rule categories (default, custom, conditional).  
2. Explain how each rule maps to a specific model or cluster of models.  
3. Summarize the cost formula: base rate + usage multiplier + optional premium for specialized models.  

**Depth**  
- **Rule Types**  
  - *Default*: Auto‑selects the most recent, best‑performing model for the task (e.g., GPT‑4‑Turbo).  
  - *Custom*: User supplies a `model_id` or tags; the engine bypasses auto‑selection.  
  - *Conditional*: Rules based on request metadata (`temperature`, `max_tokens`, user role) that trigger alternative models (e.g., “if max_tokens > 2000, use GPT‑4‑Large”).  

- **Model Selection**  
  The engine evaluates rules in priority order: custom > conditional > default. If multiple match, the first rule wins. Internally it queries a lightweight catalog that stores model capabilities and cost rates.

- **Pricing**  
  - *Base Rate*: $0.02 per 1K input tokens for GPT‑4‑Turbo; higher for larger models.  
  - *Multiplier*: Adjusted by `temperature` (±10%) and output length (`max_tokens`).  
  - *Premium Layer*: Specialized fine‑tuned models add a flat surcharge ($0.01/K tokens).  
  Final cost = `(input + output) × base_rate × multiplier + premium`.

**Edge Cases**  
- Invalid `model_id`: falls back to default, logs warning.  
- Conflicting rules: first‑match semantics may surprise users; recommend explicit tagging.  
- Token burst > quota: API throttles and returns 429.

**Optimize & Communicate**  
To reduce latency, cache rule–model mappings in Redis; batch token counting via vectorized libraries. When explaining this to stakeholders, emphasize that the system balances automation (default rules) with flexibility (custom/conditional), while pricing remains transparent and scalable across model families.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
