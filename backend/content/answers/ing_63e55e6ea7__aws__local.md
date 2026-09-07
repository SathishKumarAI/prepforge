---
qid: ing_63e55e6ea7__aws__local
question: 'Q: How do you prevent reward hacking in Best-of-N?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 406
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:10:59-05:00'
sources: []
---

**Situation / Task**  
I was leading the design of a reinforcement‑learning platform for an internal recommendation engine that sampled the top‑N items per user and rewarded clicks. Early pilots showed “reward hacking” – agents over‑optimizing for low‑cost click fraud signals.  

**Action**  
1. **Ownership & Bias for Action** – I rewrote the reward function to include a *trust score* per interaction, weighted by device fingerprint and historical engagement.  
2. **Dive Deep** – instrumented every reward step with CloudWatch metrics (`click_rate`, `fraud_score`, `session_duration`).  
3. **AWS Services** –  
   - **Amazon SageMaker Pipelines** for reproducible training runs.  
   - **Amazon DynamoDB** to store per‑user trust scores (high read/write throughput, 99.999% availability).  
   - **AWS Lambda + Step Functions** to apply a *policy‑based gate* that rejects any reward spike > 2× baseline before it reaches the learner.  
4. **Scalability & Cost** – The gating logic runs in Lambda (≤ 200 ms latency) and scales with request count; DynamoDB’s on‑demand capacity kept costs < $0.05 per 1,000 requests.

**Result**  
Within two weeks of deployment, the reward‑hacking rate dropped from **12% to 0.3%**, while click‑through remained stable at 5.8%. The platform now processes > 10M interactions/day with < $200/month in AWS spend.  

**Bar‑raiser Takeaway**  
I demonstrated *ownership* by fixing the core issue, *dive deep* through metrics and tracing, quantified impact (12% → 0.3%), and learned to embed policy checks early—preventing future drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
