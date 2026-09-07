---
qid: ing_57cc3e775d__aws__local
question: 'Explain: Better Availability — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 365
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:44:14-05:00'
sources: []
---

**Situation – Task**  
In my last role I led the rollout of a global e‑commerce platform that served millions of product images and videos daily. Our on‑premise cache hit rate was only **68 %**, causing latency spikes during flash sales and a 12 % drop in conversion rates.  

**Action** – *Customer Obsession & Ownership*  
I designed a CDN‑first architecture using **Amazon CloudFront** backed by **S3** for origin storage and **Lambda@Edge** for dynamic content rewriting. I set up geo‑based routing, enabled field‑level encryption, and added an SQS queue to purge stale assets on demand. To guarantee 99.99 % availability we leveraged CloudFront’s edge locations (280+), coupled with an active‑active S3 replication across two regions.  

**Result – Dive Deep & Deliver Results**  
- **Latency** dropped from 350 ms to <80 ms for >90 % of requests.  
- **Cache hit ratio** rose to **92 %**, saving $18k/month in data transfer costs.  
- During a 24‑hour sale, the system handled 2× traffic without any outage.  

**Learning** – I discovered that over‑provisioning edge cache can inflate cost; we introduced an adaptive purging policy that reduced idle capacity by 15 %. The bar‑raiser will note my ownership of metrics, depth in trade‑off analysis (latency vs. cost), and iterative learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
