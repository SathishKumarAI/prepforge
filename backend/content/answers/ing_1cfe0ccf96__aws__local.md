---
qid: ing_1cfe0ccf96__aws__local
question: 'Explain: 2-Tier Architecture — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 557
total_tokens: 792
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:31:58-05:00'
sources: []
---

**Situation & Task (S)**  
While leading a fintech start‑up, we had to launch a real‑time fraud‑detection feature for our mobile app. The existing monolith was slow and couldn’t scale with the projected 2 M active users. I owned the redesign of the backend into a **two‑tier client–server architecture** that would reduce latency by 70% and keep costs below $200k/yr.

**Action (A)**  
1. *Requirements & Design* – Clients (iOS/Android) send transaction data to an API Gateway; the server tier hosts a stateless Lambda function that scores each transaction using a pre‑trained XGBoost model stored in S3, and writes results to DynamoDB for real‑time lookups.  
2. *AWS Services* –  
   - **Amazon API Gateway** (auto‑scaling, throttling) → 99.999% availability.  
   - **AWS Lambda** (pay‑as‑you‑go, <1 s cold starts) → zero server maintenance.  
   - **S3** for model artifacts (low cost, versioned).  
   - **DynamoDB** with global tables for multi‑region latency < 10 ms.  
   - **CloudWatch + X-Ray** for observability and quick troubleshooting.  
3. *Scalability & Cost* – Lambda concurrency auto‑scales to 50k requests/sec; DynamoDB throughput set to 1M RCU/WCU with auto‑scale, costing ~$140k/yr vs $350k for the monolith.  
4. *Bias for Action & Ownership* – I prototyped in two weeks, ran A/B tests against legacy service, and iterated on model feature selection to improve F1 from 0.82 to 0.89.

**Result (R)**  
- Latency dropped from 350 ms to <70 ms (≈80% reduction).  
- Throughput increased to 50k tx/s, supporting projected growth without over‑provisioning.  
- Cost savings of $210k/yr and a 30% decrease in mean time to recovery (MTTR) due to serverless observability.  

**Learning & Bar‑raiser cues** – I demonstrated ownership by steering the migration end‑to‑end, dove deep into performance metrics, quantified impact with clear KPIs, and iterated quickly after discovering Lambda cold‑start spikes, turning a failure point into an optimization lesson.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
