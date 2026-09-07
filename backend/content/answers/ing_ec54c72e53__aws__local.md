---
qid: ing_ec54c72e53__aws__local
question: 'Explain: A customer''s LLM endpoint p99 latency jumped from 2s to 20s this
  week. No code changes on their side. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 400
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:12:53-05:00'
sources: []
---

**Situation & Task**  
The customer’s LLM endpoint (AWS SageMaker Runtime) had a p99 latency of 2 s, but this week it spiked to 20 s with no code changes. My goal was to identify the root cause and restore SLA in under 4 h.

**Action – Dive Deep + Ownership**  
1. **Metrics audit** – queried CloudWatch for `InferenceLatency`, `CPUUtilization`, `NetworkIn/Out`. Found CPU at 95 % on two instances, while network traffic spiked (≈500 MB/s).  
2. **Scaling check** – Auto‑Scaling policy had a cooldown of 10 min; the burst didn’t trigger new workers. I temporarily set `MinSize=4` to absorb load.  
3. **Endpoint health** – inspected CloudWatch logs for error rates; no model errors, but many “ConnectionReset” entries pointing to VPC endpoint throttling.  
4. **Network investigation** – traced traffic with VPC Flow Logs; discovered a new third‑party batch job writing to the same subnet, saturating the ENI.  
5. **Fix** – moved the batch job to a separate subnet and increased the ENI attachment limit. Reverted scaling policy to `Cooldown=2 min`.

**Result**  
p99 latency dropped back to 1.8 s within 3 h, cost impact <0.5 % of monthly spend. I documented the incident in our post‑mortem wiki and updated the auto‑scaling recipe, reducing future manual intervention.

> **Leadership Principles:** *Customer Obsession* (quick resolution), *Ownership* (end‑to‑end fix), *Dive Deep* (root cause analysis).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
