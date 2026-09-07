---
qid: ing_9fff44de8b__aws__local
question: 'Explain: No Rate Limiting — Anti Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 354
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:26:36-05:00'
sources: []
---

**Situation / Task**  
I was leading the rollout of a public-facing recommendation API for a media startup. The team disabled rate‑limiting to “boost user experience,” hoping latency would drop.

**Action**  
*Ownership*: I took full ownership, first mapping traffic spikes (50 k QPS) against downstream Lambda invocations and DynamoDB write capacity.  
*Dive Deep*: Built a CloudWatch dashboard showing per‑endpoint request counts, error rates, and cold‑start latencies.  
I introduced *AWS WAF + API Gateway throttling* with a burst limit of 10 k requests/min and a steady state of 2 k. Added a **step‑function** to auto‑scale the DynamoDB provisioned capacity based on real‑time usage patterns.

*Bias for Action*: Deployed the changes in a blue/green environment, monitored in real time, and rolled back if latency > 200 ms or error rate > 1%.

**Result**  
- Reduced API error rate from **12% to <0.5%** during peak load.  
- Cut average Lambda cold‑start latency by **38%** (from 250 ms to 158 ms).  
- Saved ~$3k/month on DynamoDB read/write capacity by avoiding over‑provisioning.

**Learnings**  
Rate limiting is not a “feature” but a safety net; it protects downstream systems and preserves user trust. Future releases will embed rate limits as a core design decision, not an afterthought.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
