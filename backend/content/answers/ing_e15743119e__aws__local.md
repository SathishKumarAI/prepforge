---
qid: ing_e15743119e__aws__local
question: 'Explain: How Signal found two hidden retry loops in our production agent
  Alyx'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 418
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:49:09-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
In late‑March we noticed a 4 % spike in failed requests from our AI agent *Alyx* that powers real‑time recommendations. The SLA required <1 % failure, yet the error logs were silent—no stack trace or retry counters. I owned the investigation and aimed to surface hidden faults without impacting live traffic.

**Action (Dive Deep, Bias for Action)**  
I instrumented a lightweight CloudWatch Agent on each EC2 instance, capturing *retry‑count* metadata that was previously omitted. Using Kinesis Data Streams, I streamed these metrics in real time to Lambda, which performed a stateful correlation against the request ID and session token. The analysis revealed two hidden retry loops:  
1) an internal library re‑queued failed calls up to 3 times (loop A), and  
2) the external ML inference service automatically retried on HTTP 5xx errors up to 5 times (loop B).  

Both loops doubled latency, inflating CPU usage by ~12 % during peak hours. I refactored the retry logic: loop A was removed in favor of exponential back‑off; loop B’s timeout threshold was tightened from 10 s to 3 s. I deployed the changes via CodeDeploy with a blue/green strategy, rolling out to 30 % traffic first.

**Result (Deliver Results)**  
Post‑fix metrics: error rate dropped from 4.2 % to 0.6 %, latency improved by 28 ms on average, and CPU utilization fell by 9 %. The change also reduced AWS costs by ~$1.8K/month due to fewer retries. I documented the incident in an internal knowledge base and conducted a blameless post‑mortem, highlighting the importance of observability for hidden retry paths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
