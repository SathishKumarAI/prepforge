---
qid: ing_af6a5fb2de__aws__local
question: 'Explain: Inbox Search Feature at Facebook using HBase'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 476
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:02:10-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team building an *Inbox Search* feature for a global social network that had >1 billion active users. The goal was to reduce the average time to find a message from ~45 s to under 2 s while keeping cost per query <$0.00001 and ensuring 99.9 % availability.

**Approach (Dive Deep + Ownership)**  
- **Data model:** A column‑family table in HBase with *user_id* as row key, sorted by message timestamp. Each cell stored a compressed inverted index of keywords → O(1) lookup per user.  
- **Indexing pipeline:** Spark jobs run nightly on EMR, parse new messages, update the HBase tables via bulk load (HFile), and publish metrics to CloudWatch.  
- **Query engine:** Lambda functions (Python/Go) read from HBase through the AWS SDK, perform a two‑stage filter: first retrieve candidate rows, then apply full‑text scoring in memory. Results are cached in ElastiCache (Redis) for 10 min to amortize hot‑user traffic.  
- **Scalability & Cost:** HBase on EC2 spot instances (p3.2xlarge) kept storage at $0.03/GB/month; Lambda burst capacity handled peak spikes without overprovisioning. Total monthly spend: ~$45k vs a projected $120k for a monolithic search engine.

**Result (Deliver Results)**  
- Latency dropped from 45 s to 1.8 s (90% reduction).  
- Search success rate increased from 78 % to 96 %.  
- Cost fell by 63 %, freeing budget for other growth initiatives.

**Reflection & Learning**  
I realized early that sharding on *user_id* caused hotspots; adding a random prefix mitigated this. I instituted an automated “hot‑spot” alert and auto‑scaling rule, which reduced future incidents by 70 %. This cycle of ownership, deep technical dive, and data‑driven iteration exemplifies the Amazon leadership principles I live by.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
