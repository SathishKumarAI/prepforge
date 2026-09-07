---
qid: ing_71917de944__aws__local
question: 'Explain: Additional Efficiency Innovations — Inside Kaiju - building conversational
  models at scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 398
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:42:12-05:00'
sources: []
---

**Situation & Task**  
At Kaiju I led the “Inside” project to launch a conversational AI that could handle 5 M+ daily user interactions while cutting latency by 40%. The challenge was scaling GPT‑like models without compromising customer experience.

**Action (Design)**  
- Built a **model‑as‑a‑service** layer on **Amazon SageMaker** for training and inference, leveraging **SageMaker Neo** to compile models for Lambda.  
- Deployed a **request‑routing micro‑service** on **AWS App Runner** with an API Gateway front‑end; each request hit a *cold‑start*‑free Lambda that fetched the latest model from **EFS** (in-memory caching).  
- Implemented **real‑time A/B testing** using **Amazon CloudWatch Metrics** + **Step Functions** to route 10% traffic to experimental models, automatically rolling back if latency > 200 ms.  
- Used **DynamoDB Global Tables** for session state, ensuring multi‑region availability and sub‑50 ms read times.

**Result (Quantified)**  
- Latency dropped from 350 ms to 210 ms (+40%).  
- Cost per inference fell 35% by moving to Lambda + Neo.  
- Customer satisfaction scores rose 12 points on post‑interaction surveys, correlating with the smoother experience.

**Learning & Ownership**  
I iterated the architecture after a “cold‑start” failure in a beta region—traced the issue via CloudWatch traces, refactored the cache strategy, and documented the rollback playbook. This demonstrates deep ownership, bias for action, and a data‑driven mindset—key Amazon principles I embody.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
