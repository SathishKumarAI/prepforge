---
qid: ing_d18db0a6f1__aws__local
question: 'Explain: So in any real world scenario you — Database Design Tips | Choosing
  the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 432
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:14:32-05:00'
sources: []
---

**Situation (S)**  
In my last role I led the redesign of a recommendation engine that served 3 M daily users. The old monolith used MySQL for all data and hit 99.9 % latency SLA only 30 % of the time, hurting user engagement.

**Task (T)**  
I had to choose the right database(s) to support real‑time personalization while keeping costs under $50K/month.

**Action (A)**  
1. **Dive Deep into Access Patterns** – read/write ratios, latency, consistency needs.  
2. **Choose a polyglot approach**:  
   * **Amazon DynamoDB** for high‑throughput user profile reads/writes (≈10 k RCU/WCU per shard) – offers single‑digit ms latency and auto‑scaling.  
   * **Amazon Aurora Serverless v2** for transactional analytics (sales, logs) – 1–100 % CPU burst with pay‑per‑second billing.  
3. **Implement caching** with ElastiCache Redis to hit 95 % of read requests in <5 ms.  
4. **Use Global Tables** for multi‑region failover and low‑latency access for international users.  

**Result (R)**  
* Latency dropped from 350 ms average to 12 ms, hitting the SLA 99.9 % of the time.  
* Monthly DB cost fell from $120K to $42K while throughput doubled.  
* A/B tests showed a 18 % lift in click‑through rate due to faster recommendations.

**Bar‑raiser Takeaway** – I owned every layer, quantified impact with real metrics, and learned that the right mix of managed services can simultaneously scale, simplify, and cut costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
