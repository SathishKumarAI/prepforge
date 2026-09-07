---
qid: ing_1bc59c2f62__aws__local
question: 'Explain: Ecommerce & product discovery — Elasticsearch: The Official Distributed
  Search & Analytics Engine | Elastic'
topic: Data Analytics
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 463
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:28:52-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked with building a real‑time product discovery layer for an e‑commerce platform that served ~200 k users per day and had >1 M SKUs. The goal was to deliver sub‑100 ms search results while keeping costs under $20K/month.

**Action (Design)**  
I chose **Amazon OpenSearch Service** (managed Elasticsearch) because it gives us the full Elastic query DSL, built‑in relevance tuning, and near‑real‑time indexing – all required for our recommendation engine.  

1. **Data ingestion** – Lambda streams clickstream data from Kinesis into OpenSearch using a *Bulk API* to keep latency <50 ms.  
2. **Index strategy** – A *single index* with an alias per locale, shard count 10 (auto‑scaling via OpenSearch’s `indexing_buffer_size`), and a dedicated *dedicated master node* for high availability.  
3. **Caching & scaling** – Elasticache Redis caches the top 100 hot SKUs; Auto Scaling groups behind ALB serve query traffic, ensuring 99.9 % uptime.  
4. **Cost control** – Spot instances for worker nodes and daily snapshot retention keep spend at ~$18K/month.

**Result**  
Search latency dropped from 350 ms to 78 ms (70 % improvement). Conversion on search pages rose by 12 %, adding $1.2M in annual revenue. I documented the architecture, mentored the devs, and iterated the query templates based on user feedback.

> **Leadership Principles:**  
> • *Customer Obsession* – we tuned relevance to actual click data.  
> • *Ownership* – I owned the end‑to‑end pipeline, from ingestion to monitoring.  

**Bar‑raiser note**: I’d expect interviewers to probe how I handled index re‑sharding, monitored query health, and learned from a 15 % spike in search errors during a flash sale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
