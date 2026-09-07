---
qid: ing_2e8a1a1301__aws__local
question: 'Explain: Using Private Sigstore Instances — GitHub - sigstore/model-transparency:
  Supply chain security for ML \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 449
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:10:21-05:00'
sources: []
---

**Situation (S)**  
I led the rollout of *Private Sigstore* for our on‑prem ML pipeline at a regulated fintech. The goal was to prove every model artifact’s integrity before it hit production, satisfying both internal audit and ISO 27001.

**Task (T)**  
Integrate Sigstore’s supply‑chain security into our CI/CD while keeping latency < 200 ms per model push and cost under $0.05/model for a 10k models/month workload.

**Action (A)**  
1. **Dive Deep & Ownership** – I mapped the existing GitHub Actions workflow, identified bottlenecks, and wrote a lightweight container that signs artifacts with Sigstore’s `cosign` and uploads them to an S3‑backed private registry.  
2. **AWS Services** –  
   * ECS Fargate* for stateless signing tasks (scales horizontally).  
   * S3+CloudFront* as the artifact store, providing 99.999% availability.  
   * Secrets Manager* to rotate Sigstore keys automatically.  
3. **Bias for Action** – Implemented a serverless Lambda that triggers on S3 upload, verifies signatures with `cosign`, and writes a “verified” tag back to DynamoDB.  
4. **Deliver Results** – The new pipeline signed 99.9 % of 10k models in <180 ms each, cutting audit time from 48 h to 15 min and keeping monthly spend at $12 (≈$0.0012/model).

**Result (R)**  
Audit score improved from 68/100 to 97/100; compliance downtime dropped by 92 %. I documented the design in a white‑paper that now serves as the company’s ML security standard.

> **Bar‑raiser cues:** ownership of end‑to‑end flow, deep dive into AWS cost & latency trade‑offs, quantifiable impact, and iterative learning (post‑mortem on failed signature attempts).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
