---
qid: ing_8f02bdacd0__aws__local
question: Eval suites are slow, cost real money, and are noisy. How do you put one
  in CI without making everyone hate you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 339
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:49:38-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the rollout of a new NLP model for a global e‑commerce platform. The nightly evaluation suite ran on GPU instances, cost ~$1 k per run, and produced noisy metrics that caused developers to ignore results.

**Action**  
- **Ownership + Bias for Action:** I scoped an incremental “lightweight” CI step that executed only the most critical unit‑level tests (≈5 % of the full suite).  
- **Dive Deep + Invent & Simplify:** Built a containerized microservice on **Amazon SageMaker Edge Manager** to run inference locally, then sent predictions to **AWS Lambda** for quick sanity checks.  
- **Customer Obsession + Deliver Results:** Integrated these checks into GitHub Actions; failures trigger an automated Slack alert with a reproducible Docker image so developers can debug instantly.

**Result**  
- Reduced CI runtime from 90 min to 12 min, cutting GPU costs by **85% ($720/month)**.  
- Noise in metrics dropped by 70% because we only reported statistically significant differences (p<0.01).  
- Adoption rate jumped from 30% to 92%, and mean time to resolve a false‑positive alert fell from 3 days to 1 hour.

**Takeaway**  
Balancing ownership, deep technical insight, and customer‑centric metrics enabled a frictionless CI experience that saved money, reduced noise, and kept the team productive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
