---
qid: ing_1125834a9a__aws__local
question: 'Q: What is the KV cache and why does it matter for serving?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 411
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:04:32-05:00'
sources: []
---

**Answer (Amazon Style)**  

During a recent project to launch an on‑demand recommendation engine for our e‑commerce platform, I led the team that optimized inference latency by introducing a **key‑value (KV) cache**.  
- **Situation:** The model was served via SageMaker endpoints; each request required recomputing embeddings for 3 M users, causing 200 ms tail latency and high EC2 usage.  
- **Task:** Reduce latency to < 80 ms while keeping cost under $5k/month.  
- **Action:** I designed a distributed KV cache using **Amazon ElastiCache‑Redis** keyed by user ID → precomputed embedding vectors. The cache layer was added in front of the SageMaker endpoint, and we implemented an async background job (AWS Batch) to refresh stale entries every 12 h. We also leveraged **S3 Select** for cold‑start loads.  
- **Result:** Latency dropped from 200 ms to 65 ms (average), tail latency improved by 70%, and cost fell from $8k to $4.2k/month—achieving a 48% reduction in operational spend. The cache also enabled us to scale the inference tier horizontally without bottlenecking on GPU instances.

**Leadership Principles Highlighted:**  
- **Customer Obsession & Deliver Results** – delivering a faster, cheaper experience for millions of shoppers.  
- **Ownership & Dive Deep** – architecting the solution end‑to‑end and iterating on cache eviction policies based on real metrics.  

A bar‑raiser would listen for: clear ownership of performance goals, deep dive into latency metrics, quantifiable cost impact, and lessons learned from initial cache miss spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
