---
qid: ing_408dc2239c__aws__local
question: 'Explain: Know whether agents actually complete the job'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 477
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:51:53-05:00'
sources: []
---

**Situation & Task**

In my last role as a Senior ML Engineer at a fintech startup, we built an automated fraud‑prevention pipeline that used reinforcement‑learning agents to flag suspicious transactions. A key metric for us was *agent job completion*: whether the agent actually finished evaluating a transaction and returned a decision before the next batch rolled in. The downstream payment gateway required 99.9 % of decisions within 200 ms, otherwise we risked lost revenue.

**Action**

I introduced an **Agent Health Dashboard** that instrumented every RL inference call with:

- A *heartbeat* timestamp sent to Amazon CloudWatch via `PutMetricData`.
- An AWS Step Functions state machine that wrapped each agent invocation. If the agent failed to emit a heartbeat within 150 ms, the state machine automatically retried or fell back to a rule‑based fallback.

To drive real‑time visibility I used:

| Service | Purpose |
|---------|---------|
| **Amazon CloudWatch** | Custom metrics (`agent.completed`, `agent.latency`) and alarms. |
| **AWS Step Functions** | Orchestrates retries and fallbacks, ensuring idempotent decisions. |
| **Amazon EventBridge** | Triggers alerts to the on‑call Ops team if a pattern of failures emerges. |
| **Amazon S3 + Athena** | Periodic batch analysis of agent logs for root‑cause diagnostics. |

I also added a lightweight “completion flag” inside the agent’s output payload, validated by a Lambda that updated DynamoDB with the job status. This gave us an audit trail and allowed us to compute a *Completion Rate* metric.

**Result**

- **Completion rate improved from 88 % to 99.7 %** within two weeks.
- **Mean latency dropped from 260 ms to 145 ms**, keeping us well below the SLA.
- The system cost increased by only **$150/month** (Lambda + CloudWatch), a negligible expense for the revenue saved.

**Reflection**

I learned that *visibility* is as critical as the ML model itself. By owning the monitoring loop and iteratively tightening our heartbeat window, we turned an opaque agent into a predictable service component—exactly what Amazon expects from a leader in ML operations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
