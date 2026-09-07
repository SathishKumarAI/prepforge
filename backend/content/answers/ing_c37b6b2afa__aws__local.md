---
qid: ing_c37b6b2afa__aws__local
question: 'Explain: Scaling Verify with Wallet for Identity Verification at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 563
total_tokens: 794
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:45:09-05:00'
sources: []
---

**S – Situation:**  
When I joined the Uber Payments team, our identity‑verification workflow was a single‑tenant monolith that processed ~10k wallet activations per day. The new “Verify with Wallet” feature—linking user wallets to verified IDs—required us to scale from 10 k to 1 M verifications per month while maintaining <2 % error rate.

**T – Task:**  
I was tasked with redesigning the verification pipeline to be fully serverless, cost‑effective, and highly available, ensuring we could ingest up to 200 K concurrent requests during peak events (e.g., promotions).

**A – Action & Design:**  

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| Ingest API | **API Gateway + Lambda@Edge** | Low‑latency edge routing, auto‑scaling to millions of calls. |
| Orchestration | **Step Functions** (with Parallel state) | Guarantees idempotent retries and decouples ID checks from wallet updates. |
| Identity check | **Amazon Rekognition & Textract** + custom ML model on SageMaker | Parallel processing of selfie, document OCR, and facial match; each step scales independently. |
| Data store | **DynamoDB (global tables)** | Multi‑region active‑active for high availability; provisioned throughput auto‑scales with Lambda concurrency. |
| Monitoring | **CloudWatch + X-Ray** | End‑to‑end tracing to identify bottlenecks; dashboards for SLA compliance. |

I added a *dedicated “verification” microservice* that validates the wallet’s ownership via a signed JWT, then triggers the Step Function workflow. We implemented **canary releases** and a **traffic‑shifting strategy** (80/20) to mitigate risk.

**R – Result:**  
- 95 % reduction in verification latency (from 3.2 s to 0.18 s).  
- 70 % cost savings by shifting from on‑prem servers to Lambda (≈$120k/year vs $350k).  
- Maintained <1.5 % false‑positive rate, meeting compliance KPIs.  

**Leadership Principles:**  
*Ownership* – I drove the entire redesign, owning end‑to‑end SLAs. *Dive Deep* – I dissected every component’s performance and cost curves to choose the optimal AWS services. This approach not only scaled Uber’s identity verification but also set a reusable pattern for future cross‑product integrations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
