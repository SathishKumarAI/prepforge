---
qid: ing_049668195a__aws__local
question: 'Explain: Choose Vertical Scaling When — Vertical vs Horizontal Scaling
  | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 484
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:36:14-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the redesign of a recommendation engine that served 1 M users daily. The existing cluster was hitting CPU limits; every request took >200 ms and our SLA slipped from 99.5 % to 98.8 %. I had to decide: add more powerful instances (vertical) or split into micro‑services (horizontal).

**Action & Technical Design**  
I scoped the workload: 70 % of traffic was read‑heavy, 30 % write‑intensive. I benchmarked a `c6i.8xlarge` (32 vCPU, 128 GiB) against a cluster of eight `m5.large` instances with an Elastic Load Balancer and DynamoDB for persistence.  
- **Vertical**: One powerful instance reduced latency to 120 ms, lowered infra cost by 15 % (single EC2 bill), but risked single‑point failure.  
- **Horizontal**: Auto Scaling Group + ECS Fargate pods achieved 90 ms latency, 99.9 % availability, and 20 % higher compute cost, yet offered better fault tolerance.

I chose a hybrid approach: critical inference workloads ran on the `c6i` instance (high‑CPU GPU enabled) while auxiliary services were containerized on Fargate. I also added CloudWatch alarms for CPU >70 % to trigger an autoscaling policy that spun up additional instances.

**Result**  
Latency dropped from 200 ms to 110 ms, SLA rose to 99.9 %, and total monthly spend fell by 12 %. The solution was adopted company‑wide, proving a balanced trade‑off between cost, scalability, and reliability.

**Leadership Principles Reflected**  
- **Ownership** – I drove the end‑to‑end redesign without external help.  
- **Dive Deep** – I benchmarked multiple instance types, measured CPU/latency, and modeled failure scenarios.  
- **Bias for Action** – Implemented the hybrid solution within two weeks instead of waiting for a full monolithic rewrite.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
