---
qid: ing_9fff44de8b__star__local
question: 'Explain: No Rate Limiting — Anti Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 307
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:52:16-05:00'
sources: []
---

**Situation:**  
At my last startup we launched a real‑time recommendation engine that served personalized product suggestions to millions of users via an API. The first week the traffic spiked unexpectedly after a marketing push, and our backend kept receiving bursts of hundreds of requests per second.

**Task:**  
I had to prevent service degradation while keeping latency low enough for a good user experience—no more than 150 ms per response—and avoid over‑provisioning compute resources.

**Action:**  
Instead of hard‑coding a fixed throttle, I implemented adaptive token‑bucket rate limiting in the API gateway. Tokens were replenished based on current CPU utilisation and request latency; if latency exceeded 120 ms or CPU >80%, the bucket refill slowed automatically. I also added a “burst window” to allow short surges without throttling, and logged every drop for later analysis. This approach let us maintain SLA compliance while using only the baseline compute pool.

**Result:**  
The system stayed within our latency budget during peak traffic, and we avoided an extra $30K in cloud spend that would have been needed if we had over‑scaled. Post‑deployment metrics showed a 95 % reduction in request rejections, and we learned that dynamic rate limiting balances performance with cost more effectively than static limits or no limits at all.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
