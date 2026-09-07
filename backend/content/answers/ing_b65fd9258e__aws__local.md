---
qid: ing_b65fd9258e__aws__local
question: 'Explain: Request Flow — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 574
total_tokens: 805
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:16:15-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:*  
At my last company we launched a ML‑powered recommendation API that was exposed to millions of mobile users. A race condition in the request pipeline caused duplicate model inference calls when clients retried a failed request, inflating GPU usage by 30 % and degrading latency.

*Task:*  
Design an idempotent request flow that guarantees each unique request triggers at most one inference, while still delivering low‑latency responses to end users.

*Action:*  

1. **Key Generation** – Create a deterministic request key from `user_id`, `model_version`, and a client‑supplied `request_id`.  
2. **AWS DynamoDB** – Store the key with status (`PENDING/COMPLETED`) and inference result hash.  Provisioned capacity set to 1 × 10⁵ RCU/WCU, auto‑scaling to handle peak 100k req/s.  
3. **Lambda + Step Functions** –  
   * Lambda checks DynamoDB; if `COMPLETED`, immediately returns cached result (latency <5 ms).  
   * If `PENDING` or absent, Lambda triggers a SageMaker endpoint (`async-invoke`) and writes the request key with status `PENDING`.  
4. **SageMaker Callback** – On inference completion, Lambda updates DynamoDB to `COMPLETED` and stores the result.  
5. **Retry Policy** – Clients receive HTTP 202 for pending requests; subsequent retries hit cache.

*Result:*  
- Duplicate inferences dropped from 30 % to <0.1 %.  
- GPU cost reduced by $12k/month (≈15 % of ML spend).  
- End‑to‑end latency improved by 20 %, keeping 95th percentile <120 ms.

**Bar‑raiser Checklist**

| Expectation | How I Showed It |
|-------------|-----------------|
| **Ownership** | Took full responsibility for the downstream cost & user impact; proposed a production‑ready solution. |
| **Dive Deep** | Analyzed logs, profiled GPU usage, and quantified duplication rate before designing the cache layer. |
| **Quantified Impact** | Delivered concrete numbers: 30 % → <0.1 % duplicates, $12k/month savings, latency 20 % improvement. |
| **Learning from Failure** | After initial design caused a spike in DynamoDB reads, we switched to `DAX` caching, balancing cost and performance. |

This idempotent flow aligns with AWS’s emphasis on **Customer Obsession** (prevent wasted GPU cycles) and **Ownership** (owning the end‑to‑end request lifecycle).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
