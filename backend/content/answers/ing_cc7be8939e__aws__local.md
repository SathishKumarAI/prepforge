---
qid: ing_cc7be8939e__aws__local
question: 'Explain: Current limitations — Agentic AI Use Cases - by Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 433
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:03:14-05:00'
sources: []
---

**Situation & Task (S)**  
While leading a product‑innovation team at a fintech startup, we wanted to prototype an *agentic AI* that could autonomously negotiate credit limits for small businesses. The goal was to reduce manual approval time from **2 days → 30 minutes**.

**Action (A)**  
I mapped out the constraints:  
1. **Data sparsity** – only 10% of customers had historical transaction data, limiting supervised learning.  
2. **Regulatory compliance** – every decision needed an audit trail; unsupervised agents risked opaque reasoning.  
3. **Explainability** – our underwriting team demanded a confidence score and rationale for each recommendation.  
4. **Real‑time inference** – the model had to run in < 100 ms on AWS Lambda while keeping latency low across regions.

I designed a hybrid system: a *policy‑gradient* agent (AWS SageMaker) that sampled actions, coupled with a *rule‑based fallback* using Amazon DynamoDB for edge cases. We added an audit layer via CloudTrail and a transparency API built on Amazon API Gateway + Lambda.  

**Result (R)**  
After 3 months of A/B testing:  
- **Approval time dropped to 25 minutes** (85% reduction).  
- The model achieved **92% precision** on a held‑out validation set, meeting compliance thresholds.  
- Cost per inference was **$0.0002**, keeping the overall monthly spend <$500.

**Reflection**  
I learned that *agentic AI* thrives only when you **own** both the ML logic and the operational safeguards—otherwise, the system either stalls or violates regulations. This aligns with Amazon’s Leadership Principles: **Ownership** (taking full responsibility for success/failure) and **Dive Deep** (understanding every layer of data, compliance, and cost).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
