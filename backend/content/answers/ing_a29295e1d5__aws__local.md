---
qid: ing_a29295e1d5__aws__local
question: 'Explain: Back of the Envelope: Understanding Scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 382
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:32:43-05:00'
sources: []
---

**Situation / Task**  
I was asked to estimate the compute cost for a new recommendation engine that would serve 10 M users with 1 B items per day on an on‑prem cluster. The goal was to decide whether we should move to SageMaker or stay in-house.

**Action (Dive Deep + Bias for Action)**  
1. **Profiling** – ran a single training job on the current GPU cluster: 4 hrs, 32 GB GPU memory, ~2 TB of data.  
2. **Scaling rule** – compute time scales linearly with data size and model complexity (≈ 0.5 hrs per 10 M rows).  
3. **Cost model** – AWS SageMaker Training: $1.50/hr per ml.m4.xlarge GPU, Spot pricing 40 % cheaper; inference via SageMaker Endpoint: $0.20/1000 requests.  
4. **Scenario** – 1 B rows/day → 4 × daily jobs → 16 hrs training/day = 384 hrs/month ≈ $576 /m (on‑prem) vs $230 /m on AWS.

**Result (Deliver Results + Ownership)**  
I presented the envelope estimate to leadership. The team approved migration, saving ~60 % monthly cost and reducing infra maintenance by 30 %. Post‑migration, we hit a 95 % uptime SLA with auto‑scaling spot instances, keeping costs below $200/month.

**Learning (Customer Obsession)**  
The quick, data‑driven estimate allowed us to pivot before committing resources. It reinforced the habit of building minimal viable cost models for new ML initiatives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
