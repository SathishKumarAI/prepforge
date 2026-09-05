---
qid: ing_78a94b7d1c__star__local
question: 'Explain: DocumentDB lets you pick your read consistency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 366
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:35:15-05:00'
sources: []
---

**Situation:**  
At my last role I was building a real‑time analytics dashboard for an e‑commerce platform that shipped millions of orders daily. The backend used Amazon DocumentDB (compatible with MongoDB) to store customer order histories and product catalog data.

**Task:**  
We needed the dashboard to display up-to-the‑second inventory levels while keeping read latency below 100 ms, even under heavy write traffic from the checkout service. This required choosing an appropriate consistency model for reads without sacrificing performance.

**Action:**  
I evaluated DocumentDB’s “eventual” and “strong” consistency options. I set up a two‑tier approach: critical inventory queries used *strong* consistency on a dedicated read replica cluster, ensuring that any write to stock levels was immediately visible; less time‑sensitive reads (e.g., product descriptions) hit the default *eventual* consistency pool, which served from local replicas and reduced latency. I also implemented a TTL index for stale inventory snapshots so that eventual reads could be cached for 5 seconds. The configuration was automated with Terraform, and I monitored read/write latencies using CloudWatch dashboards.

**Result:**  
The dashboard’s average read latency dropped to 78 ms for strong‑consistency paths while maintaining sub‑200 ms for eventual reads. Inventory accuracy improved from a 2–3 second lag to near real‑time, reducing out‑of‑stock incidents by 35%. I learned how fine‑grained consistency controls in DocumentDB can balance latency and data freshness, and that proper monitoring is key to validating the trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
