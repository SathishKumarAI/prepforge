---
qid: ing_bbd500dc42__aws__local
question: 'Explain: And so discs are not the most — Building Software Systems At Google
  and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 402
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:28:43-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team at Google to build an internal ML pipeline for real‑time ad bidding, we discovered that the disk‑based feature store was becoming a bottleneck—latency spiked from 5 ms to 70 ms during traffic peaks. I had to redesign the system so that the model could ingest features in <10 ms while keeping cost under $200k/yr.

**Action**  
I applied **Ownership** and **Dive Deep**:  
1. Instrumented read/write paths, identified hot‑spots (disk seek, serialization).  
2. Migrated to a *Redis* cache tier for the most frequently used features, backed by *Amazon DynamoDB* for durability.  
3. Introduced *Kinesis Data Streams* to ingest raw feature logs, processed with *AWS Lambda* and stored in *S3* for batch training.  
4. Deployed **Canary** releases via *AWS CloudFormation*, monitoring latency with *CloudWatch*.  

I also instituted a **post‑mortem culture**, documenting failure modes and lessons learned.

**Result**  
- Feature lookup latency dropped from 70 ms to 8 ms (≈90% improvement).  
- Daily query volume grew 3× without additional cost.  
- Operational overhead fell by 40 hrs/month, freeing the team to focus on model research.  

**Bar‑raiser takeaways**  
- Demonstrated true ownership by owning end‑to‑end metrics and trade‑offs.  
- Showed depth through detailed instrumentation and service selection.  
- Quantified impact with clear latency and cost numbers.  
- Learned from failure: the first attempt failed because we didn’t model traffic spikes; the second iteration incorporated real‑time scaling via Lambda concurrency controls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
