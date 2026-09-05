---
qid: ing_a43f6a1d28__star__local
question: How do you keep LLM costs under control in a multi-tenant product?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 365
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:01:49-05:00'
sources: []
---

**Situation:**  
When we launched our SaaS platform that offered custom chatbot widgets to over 150 companies, each tenant could request up to 10 k prompt‑per‑month. Our initial cost model using a single large OpenAI GPT‑4 instance blew the budget—monthly spend hit $35K before we even reached 5% of our target.

**Task:**  
I had to redesign the architecture so that LLM usage stayed within a $12K/month cap while keeping latency under 200 ms and tenant isolation intact.

**Action:**  
1. Implemented a request‑level token quota system, mapping each tenant’s plan to a dynamic token budget (e.g., 50k tokens/plan).  
2. Added a caching layer with Redis that stored the last 5 k responses per tenant; cache hits dropped API calls by ~70%.  
3. Switched from GPT‑4 to an efficient open‑source LLM (Llama‑2 7B) for low‑complexity queries, routing only high‑value prompts to GPT‑4 via a lightweight proxy that batched requests in 32‑prompt windows.  
4. Monitored usage with Prometheus dashboards and set automated alerts to trigger throttling when a tenant approached their quota.

**Result:**  
Monthly LLM spend fell to $9.8K—30% under the target—and average latency improved from 250 ms to 180 ms. Tenant satisfaction scores rose by 15%, and we gained a clear framework for scaling to 500 tenants without escalating costs. I learned that combining quota enforcement, intelligent caching, and tiered model selection is key to cost‑effective multi‑tenant AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
