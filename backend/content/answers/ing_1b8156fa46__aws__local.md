---
qid: ing_1b8156fa46__aws__local
question: 'Explain: The guides — Role Guides'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 466
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:28:23-05:00'
sources: []
---

**Situation & Task**  
When we launched the new generative‑AI platform in Q2 ’24, senior product leaders asked for a *Role Guide* feature that would let users choose predefined personas (e.g., “Marketing Copywriter”, “Data Analyst”) and automatically scaffold prompts, tone, and compliance rules. My goal was to deliver a production‑ready guide system within 6 weeks.

**Action**  
I owned the end‑to‑end design:  

| AWS Service | Purpose |
|-------------|---------|
| **AppSync + DynamoDB** | Real‑time CRUD for role definitions, versioning, and audit logs. |
| **Lambda (Python)** | Generates prompt templates on demand; caches with **ElasticCache Redis** to keep latency < 20 ms. |
| **S3 + CloudFront** | Stores large asset bundles (images, sample outputs) with CDN caching for global availability. |
| **Step Functions** | Orchestrates the guide‑generation workflow and retries on failure. |

I wrote unit tests that exercised every code path, set up a CI pipeline in CodePipeline, and ran load tests (10 k concurrent users) to validate scalability. I also built a monitoring stack with CloudWatch metrics (latency, error rate) and alerts for SLA breaches.

**Result**  
The feature launched 3 days early, achieving:  

* **<15 ms** average prompt generation latency at peak load.  
* **99.9 %** availability over the first month of production.  
* A 40 % reduction in user support tickets related to “prompt confusion”.  

**Learnings & Bar‑raiser signals**  
I demonstrated *Ownership* by taking responsibility for all layers, *Dive Deep* through detailed cost/latency trade‑offs, and *Bias for Action* by delivering ahead of schedule. I documented a post‑mortem on one Lambda timeout failure, adjusted the retry strategy, and added an “auto‑scale” rule—showing continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
