---
qid: ing_828ea642c1__aws__local
question: 'Explain: Code-based evals (fast, cheap, deterministic)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 461
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:20:17-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the migration of our on‑prem ML model validation pipeline to a cloud‑native solution. The goal was to reduce evaluation time from 2 h per run to under 10 min while keeping costs below $0.05 per inference.

**Action**  
I chose **AWS SageMaker Neo + Lambda** for code‑based evaluations:  
1. **Neo** compiles the model to a highly optimized binary that runs deterministically on edge devices (EC2 Inf1, Graviton).  
2. A **Lambda function** orchestrates the test harness, feeding input data stored in S3 and collecting metrics in DynamoDB.  
3. For scalability I used **SQS FIFO** to queue evaluation jobs; each Lambda reads a message, runs Neo locally, writes results, and deletes the message.

The architecture guarantees *availability* (Lambda retries on failure) and *cost efficiency* (pay‑as‑you‑go with no idle instances). We added an **SNS alert** for any deviation from expected accuracy thresholds, enforcing quick owner intervention.

**Result**  
- Evaluation time dropped from 2 h to **8 min** (90% reduction).  
- Cost per run fell from $0.30 to **$0.04** (87% savings).  
- Accuracy drift was caught within 5 min of deployment, preventing a potential $1M revenue loss.

**Reflection**  
This project exemplified *Ownership*—I owned the entire end‑to‑end pipeline—and *Dive Deep*, as I benchmarked Neo vs. native inference to justify the switch. The bar‑raiser would note my quantitative impact and my quick learning loop: when latency spiked, I traced it to Lambda concurrency limits and adjusted reserved capacity.

**Leadership Principles Highlighted**  
- **Customer Obsession** (fast, reliable model validation for data scientists).  
- **Ownership** (full responsibility from design through production).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
