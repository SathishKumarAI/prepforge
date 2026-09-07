---
qid: ing_69dea56667__aws__local
question: 'Explain: Topics — Pattern: API Gateway / Backends for Frontends'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 528
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:23:35-05:00'
sources: []
---

**Situation & Task**  
While leading a data‑science team at my previous company, we built an on‑prem model that scored user churn risk. The product owner wanted a **real‑time inference surface** for the mobile app, but our internal API gateway was throttling traffic and the backend monolith made it hard to iterate quickly. I had to design a scalable, low‑latency pattern using **API Gateway + Backend for Frontend (BFF)**.

**Action & Design**  
1. **Front‑end abstraction** – Created a lightweight BFF in Node.js on an **AWS Lambda@Edge** instance behind **Amazon API Gateway**. The BFF aggregates data from the mobile client, enriches it with contextual features stored in **DynamoDB**, and calls the inference model via **Amazon SageMaker Runtime**.  
2. **Scalability & Availability** – API Gateway handles millions of requests per day; Lambda scales to 1,000 concurrent executions automatically. I enabled **caching (TTL = 60s)** on the gateway for idempotent lookups, reducing SageMaker invocations by ~30%.  
3. **Cost control** – By moving the heavy preprocessing out of the monolith and into stateless Lambda functions, we cut EC2 costs from $12k/month to $4k/month.  
4. **Observability** – Integrated **AWS X-Ray** for end‑to‑end tracing; each request now takes 120 ms average (vs 450 ms before). Metrics show a 40% reduction in error rate.

**Result**  
Within three weeks of deployment, the mobile app’s churn prediction latency dropped to <200 ms, user engagement increased by **12%**, and we saved **$8k/month**. The BFF pattern also enabled us to iterate on new features without redeploying the monolith—demonstrating ownership and bias for action.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Delivered a faster, more reliable inference API that directly improved user experience.  
- **Ownership & Dive Deep**: Took full responsibility for redesign, dissected performance bottlenecks, and engineered a production‑grade solution.

*Bar‑raiser notes:* Look for clear ownership, depth of technical insight (service choices, trade‑offs), quantified impact, and evidence of learning from prior failures (e.g., throttling issue).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
