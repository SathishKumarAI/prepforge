---
qid: ing_05003de09e__aws__local
question: 'Explain: Rate Limiting — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 465
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:37:18-05:00'
sources: []
---

**Situation & Task**  
At my last role I was tasked with launching a public ML‑model API that would serve thousands of concurrent requests per second. Early traffic spikes caused the backend inference cluster to throttle and the service crashed, hurting our **Customer Obsession**. I owned the redesign and delivered a robust rate‑limiting system.

**Action – Design & Implementation**  
1. **Requirements** – 10 k QPS, 99.9 % availability, burst tolerance of 2 k QPS per user, cost under $5k/month.  
2. **Architecture**  
   * **API Gateway + Lambda@Edge** to front‑end traffic and enforce a first line of throttling (regional limits).  
   * **Amazon DynamoDB** (partitioned by API key) stores the token bucket state with TTL for auto‑eviction.  
   * **AWS AppConfig** pushes global rate‑limit rules, enabling instant rollback if a rule causes outages.  
3. **Algorithm** – Sliding‑window token bucket implemented in Lambda; on each request we atomically decrement tokens via `UpdateItem` with a conditional expression (ensures consistency).  
4. **Scalability & Cost** – DynamoDB’s provisioned capacity auto‑scales to 5 k RCU/WCU, costing ~$1.2k/month. API Gateway + Lambda add < $0.8k/month. Total <$3k/month, well below the budget.  

**Result**  
- Reduced latency from 400 ms spikes to <30 ms average during peak bursts.  
- 99.98 % request success rate versus the previous 92 %.  
- Customer satisfaction score (CSAT) rose by **15 points** in the first month post‑launch.

**Learnings & Bar‑Raiser Signals**  
I demonstrated *Ownership* by leading from problem discovery to solution delivery, *Dive Deep* through detailed DynamoDB tuning, and quantified impact with real metrics. I also documented a failure scenario (DynamoDB write throttling) and built an automated alert/rollback path—showing continuous learning and risk mitigation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
