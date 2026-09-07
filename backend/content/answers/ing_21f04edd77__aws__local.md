---
qid: ing_21f04edd77__aws__local
question: 'Explain: Tell me about a time you owned a customer-facing problem end to
  end.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 374
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:43:47-05:00'
sources: []
---

**Situation / Task**  
At my previous company I was the sole owner of a new AI‑driven recommendation engine that served 1 M daily users on an e‑commerce platform. A sudden spike in traffic during a holiday sale caused latency to jump from **120 ms** to **3 s**, driving a 12 % drop in conversion.

**Action**  
I *drove ownership* (Leadership Principle: **Ownership**) by assembling a cross‑functional squad and mapping the entire data pipeline. I:

1. Instrumented metrics with CloudWatch and set up Grafana dashboards to capture request latency, CPU, and GPU utilization.
2. Migrated inference from an on‑prem cluster to **Amazon SageMaker Endpoint** autoscaling (10–50 instances) and added a **Lambda cache layer** for cold starts.
3. Implemented a **Kafka streaming pipeline** (via MSK) to decouple model training from serving, enabling near‑real‑time updates without downtime.
4. Conducted A/B tests with **Amazon CloudFront** edge caching, reducing round‑trip time by 70 % and cutting costs by **$8k/month**.

**Result**  
Latency fell back to **115 ms** (within SLA), conversion rebounded by **18 %**, and revenue increased by **$1.2M** during the sale window. I documented lessons in a post‑mortem: “If you’re going to own a customer problem, own every layer—metrics, architecture, cost.”  

*Bar‑raiser cues*: clear ownership, deep dive into metrics, quantified impact, and learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
