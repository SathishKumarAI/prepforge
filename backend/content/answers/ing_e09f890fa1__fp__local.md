---
qid: ing_e09f890fa1__fp__local
question: 'Explain: Tier 3: Run on a sample (expensive LLM, ~$5/1K)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 341
total_tokens: 522
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:57:30-05:00'
sources: []
---

**Tier 3: “Run on a Sample” – the high‑end, pay‑as‑you‑go model**

When an application needs *instantaneous* inference from a state‑of‑the‑art large language model (LLM), it cannot afford to pre‑compute or cache responses. The only way to guarantee up‑to‑date knowledge and the full expressive power of a 175 B‑parameter transformer is to send each request directly to an external provider’s API. Each token that traverses this pipeline incurs a fee, typically **≈ $5 per 1 000 tokens**.  

Why such a price?  
* **Compute intensity** – decoding a single token in a model of that size requires billions of floating‑point operations, which the provider must provision on powerful GPUs or TPUs.  
* **Infrastructure and maintenance** – the service hosts the model, handles load balancing, security, versioning, and continuous training updates.  
* **Opportunity cost** – each inference opportunity competes for shared hardware; the price reflects the marginal cost of allocating a slice of that resource.

The non‑obvious insight: *the unit cost is not linear in the number of tokens because decoding is highly parallelizable but also memory‑bound.* For very short prompts, the overhead of network round‑trip and context loading dominates, making per‑token pricing appear steep. Thus, developers often batch requests or employ “prompt compression” to reduce token counts before hitting Tier 3, balancing latency against cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
