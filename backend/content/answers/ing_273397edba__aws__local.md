---
qid: ing_273397edba__aws__local
question: 'Explain: Distance Metrics — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 403
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:54:30-05:00'
sources: []
---

**Answer – Distance Metrics & Vector Databases**

*Leadership Principles:* **Customer Obsession** (delivering fast similarity search for end‑users) and **Dive Deep** (understanding algorithmic trade‑offs).

**Situation / Task**  
At my previous role, we built a recommendation engine that required sub‑millisecond cosine‑similarity queries over 100M user embeddings. The existing MySQL join approach returned 2 s latency—unacceptable for our mobile app.

**Action**  
I spearheaded the migration to an open‑source vector database (Pinecone). I scoped requirements: *high throughput*, *low cardinality updates*, and *elastic scaling*.  
1. **Metric selection:** Chose cosine similarity because embeddings were L2‑normalized; implemented HNSW indexing for sub‑linear search.  
2. **AWS stack:** EKS clusters running Pinecone nodes, Autoscaling Group based on CPU+memory, S3 for backup snapshots, and CloudWatch metrics for latency/throughput.  
3. **Cost & availability:** Leveraged spot instances (50 % cost savings) with a 99.9 % SLA via multi‑AZ deployment; used Route 53 health checks to failover.  

**Result**  
Latency dropped from 2 s → 15 ms average, throughput increased by 8×, and we saw a 12 % lift in click‑through rate on the recommendation page (Q1 2025). I documented the migration in a playbook that reduced onboarding time for new data scientists by 40 %.  

*Bar‑raiser notes:* clear ownership of performance bottleneck, deep dive into algorithmic choices, quantified uplift, and proactive learning loop from failed HNSW tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
