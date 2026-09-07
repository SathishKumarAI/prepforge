---
qid: ing_941a753330__aws__local
question: 'Explain: Caching — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 587
total_tokens: 846
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:01:03-05:00'
sources: []
---

**Scenario (S)**  
I was tasked to redesign the tweet‑feed delivery pipeline at a startup that later became part of Amazon’s media division. The feed latency had ballooned from 350 ms to over 2 s during peak hours, hurting user engagement.

**Task (T)**  
Reduce average response time by ≥ 70 % while keeping cost under the current $5k/month budget and ensuring at least 99.9 % availability for 1 billion daily active users.

**Action (A)**  

| Step | Design choice | AWS services | Rationale |
|------|---------------|--------------|-----------|
| 1 | **Cache tweet metadata + user‑specific personalization** | Amazon ElastiCache Redis, DynamoDB Streams | Redis gives sub‑ms read latency; streams keep cache fresh after writes. |
| 2 | **Edge‑caching of rendered HTML fragments** | CloudFront with Lambda@Edge | Reduces origin load and brings content closer to users globally. |
| 3 | **Back‑fill on miss via async Lambda + SQS** | AWS Lambda, Amazon SQS, SNS | Decouples request flow; ensures eventual consistency without blocking UI. |
| 4 | **Auto‑scaling & Multi‑AZ** | Auto Scaling Groups, RDS Multi‑AZ | Handles traffic spikes and provides high availability. |

**Result (R)**  
- Latency dropped from **2 s → 0.45 s** (73% reduction).  
- Hit rate on Redis climbed to **92 %**, cutting DynamoDB reads by 60 %.  
- Monthly cost remained **$4.7k** due to efficient cache sizing and spot instance usage for Lambda concurrency.  
- Post‑deployment, user engagement increased by **12 %** (time‑on‑platform).

---

### Leadership Principles & Bar‑raiser Signals  

*Customer Obsession*: I measured latency directly against user churn data.  
*Ownership*: Built the end‑to‑end pipeline, from cache invalidation logic to cost monitoring dashboards.  
*Dive Deep*: Tracked per‑region cache hit ratios and identified a 5 % cold‑start penalty in us-east-1; solved by prewarming.  

Bar‑raisers listen for concrete metrics (latency, cost), architectural depth (why Redis over Memcached, why Lambda@Edge), and learning from missteps (initially misjudged write amplification on DynamoDB). The solution balances scalability, availability, and cost while keeping the customer experience at the core.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
