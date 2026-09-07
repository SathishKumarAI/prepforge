---
qid: ing_7c2d13bd70__aws__local
question: 'Explain: What you''re actually expected to know — Frontend Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 404
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:06:08-05:00'
sources: []
---

**Customer Obsession | Ownership**

*Situation*: In my last role I was tasked with adding an AI‑powered recommendation widget to our e‑commerce storefront that would drive upsell revenue.

*Task*: Build a fully responsive frontend component, integrate with a real‑time inference API, and ensure it scales to 10 k concurrent users without impacting page load times.

*Action*:  
- **Requirements**: Low‑latency (≤150 ms), mobile‑first UI, graceful degradation if the AI service is down.  
- **Design**: Created a React component that lazily loads a WebAssembly model bundle from S3 via CloudFront, caches predictions in IndexedDB, and falls back to server‑side rendering when offline. I used **AWS Amplify** for auth + GraphQL API, **Lambda@Edge** for edge inference routing, and **SQS** for async queueing of heavy requests.  
- **Scalability/Availability**: Leveraged CloudFront’s global edge network (99.999% SLA) to reduce latency; Lambda concurrency was auto‑scaled with provisioned concurrency to avoid cold starts.  
- **Cost & Trade‑offs**: Estimated $0.02 per 1 k requests for Lambda + S3 storage, vs. $10 k/month if we hosted the model on EC2 – a 95% cost saving.

*Result*: The widget increased average order value by **12 %**, generated an additional **$1.8M** in annual revenue, and maintained page load times below 2 s for 99.5 % of users.  
I documented the failure mode when CloudFront was throttled, learned to monitor edge metrics, and iterated on caching strategy—illustrating true ownership and a data‑driven mindset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
