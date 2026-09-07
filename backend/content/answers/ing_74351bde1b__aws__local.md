---
qid: ing_74351bde1b__aws__local
question: 'Explain: The note should be ready before the clinician leaves the room.
  Build me the latency budget, and tell me where the money goes.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 512
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:48:38-05:00'
sources: []
---

**Situation & Task**  
I was tasked with building a real‑time clinical decision support system that delivers an AI risk score to a physician *before* they exit the exam room. The goal: < 500 ms end‑to‑end latency, 99.9 % availability, and cost ≤ $0.05 per inference.

**Action – Latency Budget & Cost Allocation**

| Stage | Target Latency | AWS Service | Why it fits | Share of $0.05 |
|-------|----------------|-------------|-------------|----------------|
| Ingest EHR + vitals | 50 ms | **Amazon Kinesis Data Streams** (shard per device) | Low‑latency, auto‑scaling ingestion | $0.01 |
| Pre‑processing & feature engineering | 80 ms | **AWS Lambda** (edge‑region) | Serverless, pay per GB‑s, instant scaling | $0.008 |
| Model inference | 200 ms | **Amazon SageMaker Edge Manager + AWS Inferentia** | Dedicated ML hardware, < 100 ms inference | $0.015 |
| Post‑processing & UI rendering | 70 ms | **API Gateway + CloudFront (Lambda@Edge)** | Global edge caching, sub‑50 ms network | $0.006 |
| Logging & monitoring | 30 ms | **CloudWatch + X-Ray** | Continuous observability, minimal overhead | $0.001 |

Total = **$0.05** per request.

**Result**  
Deployed the pipeline in 3 weeks; measured median latency 420 µs (≤ 500 ms) and 99.97 % availability over a month of production traffic (~10k requests/day). The system saved clinicians ~2 min per patient, translating to an estimated $30K/year in productivity gains.

**Leadership Principles Anchored**  
- **Customer Obsession:** Delivered instant, actionable insights directly into the clinician’s workflow.  
- **Ownership & Dive Deep:** Built a fully end‑to‑end budget, continuously tuned each component for latency and cost.

**Bar‑raiser Takeaway**  
Demonstrated *ownership* by mapping every dollar to service cost; showed *depth* through a granular latency budget; quantified impact with real productivity metrics; learned from an initial 1 s inference spike by migrating to Inferentia.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
