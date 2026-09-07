---
qid: vq_1712b31ac8__aws__local
question: What is the difference between a LIST BOX and a COMBO BOX ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 473
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:40:28-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** In my last role I was tasked with redesigning the product configuration UI for a SaaS platform that served >50 k concurrent users.  
> **Task:** The requirement was to replace a bulky list box that let customers pick a feature set, with a more space‑efficient combo box without losing usability or performance.  
> **Action:** I first *dive deep* into usage logs: the list box had a 30 % click‑through rate but caused 0.4 s latency per request due to server‑side filtering of >10 k options.  
> I designed a hybrid solution:
> - **Front‑end**: a React combo box that fetches suggestions via an async API, throttling requests (AWS API Gateway + Lambda) and caching results in CloudFront.  
> - **Back‑end**: a DynamoDB table indexed by `feature_prefix` to support prefix search, with a global secondary index for popularity ranking.  
> I added a *Customer Obsession* layer by conducting A/B tests; the new combo box reduced page weight by 70 % and improved feature selection speed from 0.4 s to 0.12 s, increasing conversion by **12 %**.  
> **Result:** The migration cut infrastructure costs by 15 %, maintained 99.95 % availability via multi‑AZ deployment, and earned a “Fast & Frugal” award in our quarterly review.

---

### Key takeaways for the bar‑raiser
- **Ownership:** Took end‑to‑end responsibility from requirement to rollout.  
- **Dive Deep:** Analyzed logs → identified bottleneck → engineered data model.  
- **Quantified Impact:** 12 % lift in conversion, 70 % front‑end size reduction, 15 % cost savings.  
- **Learning from Failure:** Early prototype had race conditions; refactored to idempotent Lambda functions and added CloudWatch alerts.

> *Leadership Principles highlighted:* Customer Obsession, Ownership, Dive Deep, Bias for Action.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
