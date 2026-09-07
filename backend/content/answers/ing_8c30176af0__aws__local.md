---
qid: ing_8c30176af0__aws__local
question: 'Explain: Scaling from one session to hundreds requires its own infrastructure'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 457
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:42:51-05:00'
sources: []
---

**Situation & Task (S)**  
I was hired as a ML Engineer for a fintech startup that built an “instant‑loan” recommendation model. The product launched with a single‑session inference API that served 200 users per day. Within two months we hit 50 k daily sessions, and the team realized the existing on‑prem GPU cluster would choke under this load.

**Action (A)**  
I owned the transition by first *dive deep* into our request patterns: peak latency was 1.2 s, with a 95th percentile of 3 s, and we needed <1 % error rate. I designed a **serverless inference pipeline**:

| Component | AWS Service | Why |
|-----------|-------------|-----|
| Load‑balancing & auto‑scaling | API Gateway + Lambda@Edge | Handles millions of concurrent requests with zero ops overhead |
| Model hosting | SageMaker Endpoint (multi‑model) | Supports GPU/CPU mix, automatic model versioning |
| Data lake for training | S3 + Athena | Cost‑effective storage and ad‑hoc queries |
| Monitoring & alerts | CloudWatch + X-Ray | Real‑time latency & error dashboards |

I added a **canary deployment** using SageMaker’s rolling updates to mitigate risk. For cost control I used spot instances for non‑critical training jobs, saving 30 % vs on‑demand.

**Result (R)**  
Post‑migration, we served 300k sessions/day with <200 ms latency at a $4k/month cost—down 40 % from the projected $6.7k. The product’s NPS jumped from 72 to 88 in three months. I documented the architecture and led a knowledge‑transfer workshop that reduced future infra bugs by 25 %.  

**Leadership Principles Reflected**  
- **Customer Obsession**: Ensured sub‑200 ms experience for all users.  
- **Ownership & Bias for Action**: Took full responsibility, designed, built, and iterated the solution within a month.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
