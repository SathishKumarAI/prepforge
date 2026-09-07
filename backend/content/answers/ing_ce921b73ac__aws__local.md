---
qid: ing_ce921b73ac__aws__local
question: 'Explain: Failure Modes and Graceful Degradation — How to Prepare for System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 519
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:07:56-05:00'
sources: []
---

**Situation (S)**  
While architecting a real‑time recommendation engine for a global e‑commerce platform, we discovered that the ML inference layer could become a single point of failure during traffic spikes or model drift.

**Task (T)**  
Design a fault‑tolerant, self‑healing system that delivers “good enough” predictions even when upstream services fail—i.e., graceful degradation—while keeping latency < 50 ms for 99.9 % of requests.

**Action (A)**  

| Step | AWS Service | Rationale |
|------|-------------|-----------|
| 1️⃣ Cache fallback model | **Amazon ElastiCache (Redis)** | Stores a lightweight “last‑good” model; read‑only latency < 5 ms. |
| 2️⃣ Circuit breaker + retries | **AWS Lambda** with custom middleware | Detects downstream failures, triggers cache path, and back‑fills after recovery. |
| 3️⃣ Observability & auto‑heal | **Amazon CloudWatch**, **X-Ray** | Monitors inference latency & error rates; auto‑scales Lambda concurrency based on metrics. |
| 4️⃣ Model versioning & rollback | **SageMaker Endpoint Alias** + **AWS CodePipeline** | Promotes only validated models; if drift detected, automatically rolls back to previous alias. |

*Dive Deep*: I modeled the failure probability \(P_f\) as a function of traffic and latency using historical CloudWatch logs (p95 latency 120 ms during peak). The fallback cache reduced \(P_f\) from 0.12 to <0.02, yielding a 5‑point increase in customer satisfaction score.

**Result (R)**  
Post‑deployment, we achieved **99.97 % availability** for recommendations and cut the mean time to recovery by 70 %. The fallback path handled 15 M requests/day during outages with no revenue loss.

---

**Leadership Principles Highlighted**

- **Customer Obsession** – Ensuring uninterrupted service even when models fail.  
- **Ownership & Dive Deep** – Proactively modeling failure modes, quantifying impact, and iterating on the design.  

Bar‑raisers look for measurable ownership (99.97 % availability), deep technical insight (model‑drift mitigation via aliasing), and a clear learning loop (automatic rollback).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
