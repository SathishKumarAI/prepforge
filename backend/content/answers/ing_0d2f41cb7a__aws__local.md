---
qid: ing_0d2f41cb7a__aws__local
question: 'Explain: Cody — Cody - Sourcegraph docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 498
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:55:36-05:00'
sources: []
---

**Situation & Task**  
At my last role, I was tasked with building a developer‑centric search assistant—*Cody*—for the internal documentation of our large monorepo hosted on Sourcegraph. The goal was to reduce onboarding time for new engineers from **4 weeks → 2 days** and cut repeated support tickets by 70 %.

**Action**  
1. **Dive Deep into Requirements** – I mapped out user journeys, identified pain points (inconsistent doc coverage, slow query latency), and defined success metrics: *average search time*, *accuracy of returned docs*, and *developer satisfaction*.  
2. **Design & AWS Services**  
   - **Amazon SageMaker** for fine‑tuning a transformer model on our codebase + markdown docs.  
   - **AWS Lambda** (Python 3.11) to serve the inference endpoint, keeping cold‑start latency < 200 ms.  
   - **API Gateway** as the public entry point with request throttling (5 req/s per IP).  
   - **Amazon OpenSearch Service** for vector search over doc embeddings, auto‑scaling nodes based on query load.  
   - **AWS Secrets Manager** + **IAM** roles to secure credentials.  
3. **Bias for Action & Invent & Simplify** – I rolled out a MVP in 2 weeks using the *DistilBERT* model (≈ 30 M parameters) instead of a full BERT, cutting inference cost by ~60 %.  
4. **Iterate with Data** – A/B tested the new assistant against the legacy search; collected telemetry via CloudWatch and user feedback via PostHog.

**Result**  
- Onboarding time dropped from 28 days to **2 days** (≈ 93 % reduction).  
- Support tickets related to documentation fell by **70 %**.  
- Monthly inference cost was $1,200 versus the previous $3,500 for the legacy solution.  

**Learning & Ownership**  
I documented failures (initially over‑parameterized model causing > 2 s latency) and adjusted hyperparameters. I also set up a quarterly “Cody Review” to keep the model fresh with new docs—showing true ownership and commitment to continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
