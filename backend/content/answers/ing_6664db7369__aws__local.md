---
qid: ing_6664db7369__aws__local
question: 'Explain: Now it doesn''t query Third Party Data — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 493
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:16:27-05:00'
sources: []
---

**Behavioral (STAR)**  
*Situation:* I led a migration of our location‑based recommendation engine from a monolithic architecture that called Google Maps APIs on every request. *Task:* Reduce latency, cost, and dependency risk while keeping map accuracy. *Action:* I scoped the problem with cross‑functional teams, identified 30 % of requests that only needed static POI data, and built an internal “Map Cache Service” using DynamoDB + S3 for bulk POIs, refreshed nightly via a Lambda job. We added a fallback path to Google Maps only when cache miss or high‑confidence error occurred. *Result:* End‑to‑end latency dropped 45 %, monthly API spend fell from $12k to $1k, and we avoided outages during Google’s 2‑hour maintenance window in Q3. *Learnings:* Own the entire data pipeline; validate assumptions with real traffic data before refactoring.

**Technical/System Design**  
- **Requirements:** 10M requests/day, <100 ms latency, 99.9 % availability, minimal external cost.  
- **Design:**  
  - **Cache Layer:** DynamoDB Global Tables (replicated to us-east‑1 & eu-central‑1) for read‑heavy access; S3 objects for bulk updates.  
  - **Refresh Mechanism:** Scheduled Lambda + Step Functions pulling POI data from Google Maps once per night, idempotently writing to DynamoDB.  
  - **Fallback Path:** API Gateway with a custom authorizer that routes to Google Maps only on cache miss or when `force_google=true`.  
- **Scalability & Cost:** DynamoDB auto‑scales; S3 is near‑zero cost for bulk data. Lambda execution costs <$0.02/day.  
- **Trade‑offs:** Slight staleness (≤24 h) vs. 10× cost reduction and improved reliability.

**Bar‑raiser Checklist**  
- Demonstrated *Ownership* by leading end‑to‑end solution.  
- *Dive Deep* into traffic patterns, latency budgets, and pricing models.  
- Quantified impact with concrete metrics.  
- Reflected on failure mode (Google outage) and turned it into a learning point.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
