---
qid: ing_ba5c1a277c__aws__local
question: 'Explain: Error Handling and Recovery'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 402
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:24:58-05:00'
sources: []
---

**Situation / Task**  
At my last role I built a real‑time recommendation engine that consumed user events from Kinesis and produced predictions in < 200 ms. Production incidents revealed that transient failures in the inference Lambda (model download, GPU contention) caused 4 % of requests to fail, hurting NPS by ~0.3 points.

**Action**  
1. **Built a resilient retry layer** – wrapped the Lambda in an AWS Step Functions state machine with exponential back‑off and max 5 retries.  
2. **Implemented circuit‑breaker logic** – used DynamoDB TTL flags to pause traffic to the failing function for 30 s when error rate > 2 %.  
3. **Added observability** – CloudWatch Alarms, XRay traces, and a custom metric “inference_latency” that fed into an Athena dashboard.  
4. **Automated rollback** – leveraged CodePipeline with a Canary deployment strategy; if the new model version hit > 5 % error in 10 min, it auto‑rolled back.

**Result**  
- Error rate dropped from 4 % to < 0.2 %.  
- Mean latency improved by 12 %, keeping SLAs at 95th percentile < 200 ms.  
- NPS increased by 0.5 points in the following quarter, translating to ~3 k incremental revenue per month.

**Reflection**  
*Ownership*: I owned the entire failure loop from detection to mitigation.  
*Dive Deep*: Analyzed CloudWatch logs and XRay traces to pinpoint GPU lock contention as root cause.  
*Learned*: Implemented a “fail‑fast” policy that now triggers an alert on any sudden latency spike, preventing cascading outages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
