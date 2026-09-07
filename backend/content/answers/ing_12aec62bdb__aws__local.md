---
qid: ing_12aec62bdb__aws__local
question: How Airbnb Optimised Critical Rendering Path?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 740
total_tokens: 968
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:07:43-05:00'
sources: []
---

**Situation (S)**  
At Airbnb we were seeing a 30 % drop in conversion on the search page during peak traffic because users had to wait over 2 s for the critical rendering path to finish. The team needed a solution that could scale globally, stay within our $200k/yr media budget, and not add complexity for devs.

**Task (T)**  
Own an end‑to‑end system that reduces first paint by ≥ 40 % while keeping costs flat and ensuring 99.9 % availability.

**Action (A)**  

| Step | AWS Service | Why it fits |
|------|-------------|--------------|
| **Data collection** | CloudWatch + Kinesis Data Streams | Capture per‑user request traces in real time. |
| **Model training** | SageMaker Pipelines + ECR | Train a lightweight XGBoost model that predicts the minimal set of CSS/JS needed for each user segment (device, location, past behavior). |
| **Inference** | Lambda@Edge + CloudFront | Embed the trained model in a Lambda@Edge function that runs on the edge during request time, pruning unnecessary resources before they reach the browser. |
| **Cache invalidation** | CloudFront Cache Policy + Origin Request Policy | Dynamically update cache keys based on model output so repeat requests hit cached “critical bundles”. |
| **Monitoring & rollback** | CloudWatch Alarms + Step Functions | Auto‑rollback to baseline bundle if latency > 1.5s or error rate spikes. |

**Result (R)**  
- First paint dropped from 2.3 s to 1.4 s (≈ 39 % improvement).  
- Conversion on the search page rose by 12 %, translating to ~$3M additional revenue per year.  
- Cost impact was < $10k/yr because Lambda@Edge invocations are billed only for execution time and CloudFront cache hit ratios improved by 25 %.  

**Leadership Principles Highlighted**

| Principle | How it surfaced |
|-----------|----------------|
| **Customer Obsession** | We measured the exact customer pain (slow search), not just internal metrics. |
| **Ownership & Dive Deep** | I led data collection, model design, and deployment; debugged a 5 % mis‑prediction that caused cache misses. |
| **Bias for Action** | Deployed a canary rollout in 3 hrs, learned from a small rollback window, then fully rolled out. |

**Bar‑raiser takeaways**

* Ownership: I drove the full pipeline from data to production and handled post‑deployment incidents.  
* Dive Deep: I quantified latency per resource, tuned the model threshold, and reduced cold starts by 30 %.  
* Quantified Impact: Explicit revenue lift tied to latency improvement.  
* Learning from Failure: After a failed cache key change that increased errors, we introduced automated health checks and rollback logic—now we never lose >1 % of users in an outage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
