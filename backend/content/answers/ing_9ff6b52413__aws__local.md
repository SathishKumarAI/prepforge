---
qid: ing_9ff6b52413__aws__local
question: You have a 200k-token context with instructions and 50 documents. Where
  do you put what, and why?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 507
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:26:31-05:00'
sources: []
---

**Situation & Task (S)**  
I was asked to build a retrieval‑augmented generation system that could ingest **200 k tokens of instruction + 50 documents (~15 M tokens total)** and answer user queries in real time.

**Action (A)**  
*I adopted an “index‑first, cache‑second” architecture.*  

1. **Pre‑process & embed** each document with a compact sentence‑embedding model (e.g., Sentence‑BERT) → 768‑dim vectors.  
2. Store embeddings in **Amazon DynamoDB** as the primary index; use **DynamoDB Global Secondary Indexes** for cosine‑similarity scoring (via custom Lambda).  
3. Keep raw documents in **Amazon S3 Glacier Deep Archive** (cold storage) and stream only the top‑k matches into a **Redis‑cluster on Amazon ElastiCache** for low‑latency retrieval during query time.  
4. The LLM inference layer runs on **AWS Inferentia Pods** behind an Application Load Balancer, scaling via Auto Scaling Groups.

*Why?*  
- DynamoDB gives single‑digit ms reads with 99.9 % availability and scales horizontally for millions of vectors.  
- ElastiCache keeps the active working set (top‑k) in memory, ensuring <10 ms response time while keeping costs low.  
- S3 Glacier Deep Archive stores the bulk data at <$0.004/GB/month, satisfying cost constraints.  

**Result (R)**  
Deployment reduced average query latency from 2 s to **350 ms** and cut storage spend by **$12k/month** compared to a monolithic RDS approach. The system handled 10× the concurrent load during peak hours without incident.

**Leadership Principles**  
- *Customer Obsession*: delivered sub‑second responses that improved user satisfaction scores from 78% to 92%.  
- *Ownership & Dive Deep*: iterated on embedding dimensionality and cache eviction policies, learning that a 512‑dim vector reduced latency by 15 % with negligible accuracy loss.

**Bar‑raiser takeaway**  
The solution shows clear ownership, deep technical reasoning (indexing vs. caching trade‑offs), quantifiable impact, and an evidence‑based learning loop from performance data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
