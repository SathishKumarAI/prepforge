---
qid: ing_da252f3fdf__aws__local
question: 'Explain: Availability in Series vs Parallel — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 467
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:31:52-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a redesign of our recommendation engine I was asked to explain *availability in series vs parallel* and how it impacts system design.  

**Situation** – The legacy pipeline had three micro‑services chained sequentially: *Data Ingest → Feature Engine → Model Scorer*. A 0.5 % failure rate in any step caused a cascade, dropping overall availability from 99.9 % to 98.6 %.  

**Task** – I needed to quantify the trade‑off between adding redundancy (parallelism) and keeping the pipeline simple, while meeting our SLA of < 2 ms latency for 95 % of requests.  

**Action** –  
1. **Model the series/parallel equation**: `A_total = ∏ A_i` for series; for parallel with n replicas, `A_parallel = 1 - (1-A)^n`.  
2. Implemented a *Circuit Breaker* and *Bulkhead* pattern using **AWS Lambda + API Gateway** to run the Feature Engine in two independent instances (parallel).  
3. Added **Amazon CloudWatch Alarms** to auto‑scale replicas based on error rate, ensuring at least 99.95 % availability for that step.  
4. Updated the orchestration with **Step Functions** to fail fast and route traffic through a fallback path when any service was unhealthy.  

**Result** – Availability of the pipeline rose from 98.6 % to 99.94 %, latency stayed < 2 ms, and cost increased by only 12 % due to efficient Lambda scaling. I learned that *parallelism* can dramatically improve resilience but must be coupled with observability (CloudWatch) and a clear failure policy—an essential lesson for any high‑availability design.  

**Leadership Principles:**  
- **Customer Obsession** – delivering reliable recommendations improves user experience.  
- **Ownership & Dive Deep** – I owned the end‑to‑end pipeline, dissected each service’s failure mode, and engineered a concrete, measurable improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
