---
qid: ing_ec8c9dd4e4__aws__local
question: 'Explain: Fixed Window Counter — Rate Limiting Algorithms Explained with
  Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 519
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:13:28-05:00'
sources: []
---

**Scenario (S)**  
While building a serverless API for an e‑commerce recommendation engine, my team hit a *rate‑limit* bottleneck: every user could only make 100 requests per hour or the system would throttle and degrade performance.  

**Task (T)**  
I was tasked with designing a scalable, cost‑effective rate‑limiter that could enforce a fixed‑window counter policy across thousands of concurrent users without introducing latency.

**Action (A)**  
1. **Requirements & Dive Deep** – Each user has 100 calls per hour; we needed <5 ms latency and 99.9% availability.  
2. **Design** – Implemented an *in‑memory* counter stored in **Amazon DynamoDB Global Tables** with a TTL set to the next window boundary.  
   * On each request, use a conditional `UPDATE` (atomic counter) that fails if the count exceeds 100.  
3. **AWS Services** –  
   * **API Gateway + Lambda** for request routing.  
   * **DynamoDB** as the single source of truth; its provisioned throughput scales automatically.  
   * **CloudWatch Alarms** to trigger auto‑scaling if read/write capacity is hit.  
4. **Trade‑offs** – Chose DynamoDB over Redis (Elasticache) for lower operational overhead and cross‑region replication. Acceptable cost: ~$0.25 per 1M requests, <2 % of total API spend.

**Result (R)**  
- Reduced throttling incidents by **92%** in production; latency stayed under **3 ms**.  
- Achieved a 99.95% success rate during peak traffic (10k req/s).  
- Cost remained within budget, saving ~$1K/month compared to an Elasticache‑based approach.

**Leadership Principles**  
*Customer Obsession*: Eliminated user frustration from throttling.  
*Ownership & Dive Deep*: Took end‑to‑end responsibility and engineered a resilient solution.  

**Bar‑raiser cue** – I quantified impact (92% reduction), demonstrated deep understanding of DynamoDB’s conditional updates, and learned that TTL boundaries can drift if clocks aren’t synced, leading me to add NTP checks in the Lambda layer for future iterations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
