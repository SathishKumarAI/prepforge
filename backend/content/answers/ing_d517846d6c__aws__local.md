---
qid: ing_d517846d6c__aws__local
question: 'Explain: through and hit play it was instantaneous'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 498
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:21:33-05:00'
sources: []
---

**Situation:**  
I led a team that built a real‑time recommendation engine for a global e‑commerce platform. Customers reported “lag” when clicking the **Play** button on product videos – an average 1.8 s latency broke the user experience.

**Task:**  
Reduce the end‑to‑end inference time so that the video preview appears *instantly* (≤ 200 ms) while keeping cost under $0.01 per request and supporting > 10 M concurrent users.

**Action:**  

| Step | AWS Services | Design Choice | Why |
|------|--------------|---------------|-----|
| 1 | **SageMaker Endpoint** with *Multi‑Model* hosting | Deploy a single model container that serves both “similarity” and “personalization” models. | Reduces cold‑start overhead & ECR bandwidth. |
| 2 | **AWS Lambda@Edge** + **CloudFront** | Edge function pre‑computes feature vectors from the user profile stored in DynamoDB. | Moves heavy compute to the edge, cutting RTT by ~600 ms. |
| 3 | **Amazon Timestream** for real‑time analytics | Track latency per region and auto‑scale endpoint instances via Lambda. | Enables data‑driven scaling decisions. |
| 4 | **Cost‑optimization**: Use *SageMaker Neo* to compile models for Graviton2; reserve instance capacity for peak hours. | Cuts inference cost by 35 % while keeping 99.9 % availability. |

**Result:**  
Latency dropped from 1.8 s to **120 ms**, a **93 % reduction**. Monthly cost fell from $12k to $7.8k, freeing $4.2k for R&D. The solution scaled to 15 M concurrent users with no single point of failure.

**Learning:**  
I realized that *dive deep* into network topology (edge vs origin) was critical; a naive “just move the model” approach would have cost twice as much. This experience reinforced **Ownership**, **Dive Deep**, and **Deliver Results**—hallmarks of Amazon’s culture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
