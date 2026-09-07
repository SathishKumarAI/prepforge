---
qid: ing_4dfc153ccf__aws__local
question: 'Explain: REST APIs (JSON based) — Restapis'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 483
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:21:47-05:00'
sources: []
---

**Answer – Amazon Interview Style**

**Context & Leadership Principles:**  
I was leading a data‑science team that needed to expose our model inference engine as a scalable REST API for external partners. I applied **Ownership** (own the end‑to‑end experience) and **Dive Deep** (understand every layer of the stack).

**Situation –** In Q2 2024 we had a legacy batch pipeline producing predictions nightly, but partners demanded real‑time scoring with < 200 ms latency.

**Task –** Design a JSON‑based REST API that could serve millions of requests daily while keeping costs under $5k/month.

**Action –**  
1. **Service Architecture:**  
   * **Amazon API Gateway** → throttles, caching (30 s), and request validation.  
   * **AWS Lambda** (Python 3.10) → stateless inference using a pre‑loaded Torch model in `/tmp`.  
   * **EFS + Lambda Provisioned Concurrency** to avoid cold starts.  
2. **Security:** IAM roles, Cognito JWT verification, and WAF rules for OWASP top‑10 protection.  
3. **Observability:** CloudWatch Logs, X-Ray traces, and a custom metric `InferenceLatency`.  

**Result –**  
* 1 M requests/day with 92 % of responses < 150 ms.  
* Cost fell from $12k to $4.8k/month (40 % savings).  
* 99.9 % SLA achieved within the first month.

**Bar‑raiser notes:**  
* **Ownership:** I drove all decisions, from API spec to cost optimization.  
* **Dive Deep:** Leveraged Lambda cold‑start mitigation and EFS for model loading.  
* **Quantified Impact:** Precise latency and cost metrics.  
* **Learning from Failure:** Initial rollout hit 300 ms latency; iterative tuning of provisioned concurrency resolved it, proving the value of continuous experimentation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
