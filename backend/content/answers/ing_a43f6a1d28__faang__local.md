---
qid: ing_a43f6a1d28__faang__local
question: How do you keep LLM costs under control in a multi-tenant product?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 558
total_tokens: 796
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:07:14-05:00'
sources: []
---

## Clarify  
You’re building a SaaS that serves many tenants with a large language model (LLM). The goal is to keep inference and storage costs predictable while honoring each tenant’s usage limits. Key assumptions:  
- All tenants share the same underlying LLM (e.g., GPT‑4) but may have different SLAs.  
- Billing is per token or per request, with a cap per month.  
- You can cache embeddings, use tiered pricing, and enforce quotas.

## Approach  
1. **Quota & rate‑limiting** – enforce per‑tenant caps (monthly tokens, concurrent requests).  
2. **Caching & reuse** – store embeddings/outputs for repeated prompts or identical context.  
3. **Model selection** – route low‑complexity queries to cheaper variants (e.g., GPT‑3.5).  
4. **Monitoring & alerts** – real‑time dashboards per tenant, auto‑pause when near limits.  
5. **Cost‑aware billing** – transparent invoices that break down token usage by model and tenant.

## Depth  
- **Quota enforcement**: Use a token counter in the request pipeline; if exceeded, return an HTTP 429 or “quota reached” message. Complexity O(1) per request.  
- **Caching strategy**: Hash prompt+context → cache key; TTL based on data freshness. In‑memory (Redis) for hot items, disk for cold. Reduces token usage by up to 70% for repeat queries.  
- **Model routing**: Simple rule‑based switch or reinforcement learning policy that chooses the cheapest model meeting latency SLAs.  
- **Billing aggregation**: Store token counts in a columnar store; aggregate per tenant monthly with SQL/Beam, cost ~O(N) where N is request count.  

## Edge Cases  
- **Burst traffic**: temporarily lift limits but log spikes for future capacity planning.  
- **Prompt drift**: new prompts bypass cache → higher costs; monitor and add to cache set.  
- **Tenant churn**: ensure stale tenant data is purged from caches to avoid unnecessary storage costs.

## Optimize & Communicate  
Explain that the layered approach (quota, caching, model routing) gives linear scalability and predictable cost ceilings. Highlight trade‑offs: tighter quotas reduce risk but may degrade UX; aggressive caching saves money but adds complexity. Conclude by noting that continuous monitoring turns these controls into a self‑regulating system—exactly what FAANG teams expect in a multi‑tenant AI product.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
