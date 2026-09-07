---
qid: ing_5e399b3a87__faang__local
question: 'Explain: Common Pitfalls — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 459
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:22:56-05:00'
sources: []
---

**Common Pitfall – Idempotency in ML‑Driven Systems**

| Stage | What to Clarify | How to Approach | Depth (Tech Detail) | Edge Cases | Optimize & Communicate |
|-------|-----------------|-----------------|---------------------|------------|------------------------|
| **Clarify** | *Problem:* Clients repeatedly trigger the same training job or inference request, expecting identical results. Assume a stateless API that may hit rate limits or cause duplicate model uploads. | Ask: “Do we need strict idempotence for all endpoints? What is the cost of a duplicated train?” |  |
| **Approach** | 1️⃣ Use a *request‑id* header. <br>2️⃣ Store job metadata in a write‑once DB (e.g., DynamoDB with conditional writes). <br>3️⃣ Cache inference results keyed by input hash + model version. |  |
| **Depth** | • Conditional PutItem (`ConditionExpression='attribute_not_exists(request_id)'`) guarantees only one training record per id.<br>• For inference, compute SHA‑256 of input + model ID; if cache hit, return cached prediction (latency <1 ms).<br>• If a duplicate request arrives during an ongoing job, redirect to the running job’s status endpoint instead of restarting. |  |
| **Edge Cases** | • Clock skew causing identical `request_id` collisions.<br>• Long‑running jobs that exceed cache TTL – stale predictions.<br>• Clients omitting the header → fall back to a deterministic hash of payload as surrogate id. |  |
| **Optimize & Communicate** | • Add exponential backoff for conditional write retries (max 3 attempts).<br>• Log each duplicate attempt; alert if >10% of traffic is duplicated.<br>• Explain trade‑offs: extra storage vs. avoided compute and cost savings (~20–30 % in training ops). |  |

**Takeaway:** Idempotency prevents wasted GPU cycles, guarantees consistent model versions for consumers, and simplifies error recovery—critical for any ML platform at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
