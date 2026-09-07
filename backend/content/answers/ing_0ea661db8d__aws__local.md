---
qid: ing_0ea661db8d__aws__local
question: 'Explain: Portfolio moves — Backend Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 466
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:58:44-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
At my previous company we had a “portfolio moves” feature that let users shift entire investment portfolios between brokerage accounts. The backend was monolithic; any change risked downtime for 4 M+ active users. My goal: refactor the service into a serverless, event‑driven architecture while guaranteeing <1 ms latency and zero data loss.

**Action (Dive Deep + Bias for Action)**  
I mapped all data flows, identified idempotent API calls, and designed an **AWS EventBridge**‑driven pipeline. Each portfolio move emits a `MoveRequested` event; a Lambda function validates ownership, writes to **DynamoDB** (partition key = userId), and publishes a `MoveApproved`. A second Lambda reconciles source & destination accounts via **Kinesis Data Streams**, guaranteeing at‑least‑once processing. I added CloudWatch metrics (`portfolio_move_latency`, `error_rate`) and set up **AWS X-Ray** for tracing.

- *Scalability*: Auto‑scales with concurrent events; no server provisioning.  
- *Availability*: Multi‑AZ DynamoDB, Kinesis shards → 99.999% SLA.  
- *Cost*: ~$0.20 per 1 M moves vs $12M/month on the legacy VM.

**Result (Deliver Results)**  
Post‑migration, we saw a **92 % reduction in latency** (average 0.8 ms) and a **30 % drop in failure rate** (from 5 errors/day to <1). The new design also cut infra costs by **$10M annually**.

**Bar‑raiser takeaways**  
- Demonstrated *ownership* of the end‑to‑end pipeline.  
- Showed *depth* through event modeling, idempotency, and observability.  
- Quantified impact with real metrics (latency, error rate, cost).  
- Learned from a failed monolith roll‑out by prioritizing data consistency checks early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
