---
qid: ing_2063f5be78__aws__local
question: 'Explain: Site cookies: Guess what? Those don’t work either!'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 554
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:40:35-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *“Site cookies: Guess what? Those don’t work either!”*  
>  When I first heard that phrase in a product meeting, it was a wake‑up call to rethink our user‑segmentation pipeline for the recommendation engine.

### Situation
Our ML model relied on third‑party cookie IDs to identify returning users. After GDPR enforcement and Chrome’s “SameSite” policy, about **35 %** of inbound traffic lost the cookie payload, causing a 12 % drop in click‑through rates (CTR) on personalized content.

### Task
Redesign the user‑identification flow so that we can still serve accurate recommendations without relying on cookies, while staying compliant and keeping latency under 200 ms.

### Action
1. **Anchor Principle: Ownership** – I took full responsibility for the data pipeline overhaul.  
2. **Dive Deep** – Analyzed logs to find deterministic client signals (IP + User‑Agent + referrer) that survived cookie loss.  
3. **Design** –  
   * **AWS Lambda@Edge** intercepts requests at CloudFront, hashes the deterministic bundle into a `client_id`.  
   * Stores `client_id → user_profile` in **Amazon DynamoDB** (partitioned by region for low‑latency).  
   * Uses **Amazon Kinesis Data Streams** to push each event to an **SageMaker Feature Store**, ensuring features are up‑to‑date.  
4. **Bias for Action** – Deployed the Lambda in 3 AZs, added a fallback to `anonymous_id` when signals collide.  
5. **Cost & Availability** – Lambda@Edge and DynamoDB provide *99.999%* availability with pay‑per‑invocation pricing; total cost < $0.02/1M requests.

### Result
Within two weeks of rollout, CTR on personalized content recovered to **98 %** of pre‑policy levels (+10 pp). The new pipeline processes 500k events per second with sub‑200 ms latency and costs $12/month, a 40 % savings over the legacy cookie stack.

### Learning
The failure taught me that *user identity is not one‑size‑fits‑all*. By treating each signal as an observable feature, we built a resilient system that scales automatically—exactly what Amazon expects from its leaders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
