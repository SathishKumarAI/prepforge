---
qid: ing_ca45c881ee__aws__local
question: 'Explain: Back-of-the-envelope calculations — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 434
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:58:42-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my last role at a SaaS company I was asked to estimate the compute budget for a new ML inference pipeline that would serve ~10 M requests/day. I used a *back‑of‑the‑envelope* approach, anchored in **Ownership** and **Dive Deep**.

| Step | Calculation | Result |
|------|-------------|--------|
| 1️⃣ Requests per second (RPS) | 10 M / 86 400 ≈ **116 RPS** |  |
| 2️⃣ Avg. inference latency | 50 ms (from pilot test) → CPU × RPS = 5.8 CPU‑seconds/s |  |
| 3️⃣ Compute required | 5.8 CPU‑s/s ÷ 1 core ≈ **6 cores** (rounded to 8 for burst) |  |
| 4️⃣ Cost | 8 c2.large (0.10 USD/hr) × 24 h = **$19.20/day** |  |

I validated the estimate with a small-scale pilot, and the actual cost was $21.30/day – a 11% variance that I documented as *learning from failure*.  

For the production system I chose **AWS SageMaker Endpoint** (fully managed, auto‑scaling) and paired it with **Amazon CloudWatch** for real‑time metrics. The design ensures 99.9 % availability via Multi‑AZ deployment, and cost control through Spot Instances for batch jobs.

**Bar‑raiser focus:**  
- Demonstrated *ownership* by leading the estimate from scratch to production.  
- Showed *depth* with concrete RPS/latency numbers and a validation loop.  
- Quantified impact: saved ~$12 k annually by choosing the right instance type.  
- Learned from the 11% over‑estimate and updated the estimation template for future projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
