---
qid: ing_83b9217215__faang__local
question: 'Q32: How do you handle rate limits and quotas?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 478
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:51:08-05:00'
sources: []
---

**Clarify**

> *“Rate limits”* refers to the maximum number of API calls per second/minute/hour, while *“quotas”* are overall daily/weekly usage caps.  
> Assumptions: we’re building a service that consumes external AI APIs (e.g., OpenAI), and we must stay within limits without compromising user experience.

**Approach**

1. **Instrumentation** – log every request with timestamp, endpoint, and cost.  
2. **Local Throttling** – implement a token‑bucket or leaky‑bucket algorithm per service.  
3. **Back‑off Strategy** – on 429/TooManyRequests responses, use exponential back‑off + jitter.  
4. **Graceful Degradation** – cache results and serve stale data when limits are hit.  
5. **Quota Monitoring** – expose a dashboard that tracks daily/weekly usage against thresholds.

**Depth**

- *Token bucket* size = allowed calls per period; refill rate = limit / period.  
- Complexity: O(1) per request for token check; memory O(number_of_endpoints).  
- Exponential back‑off: `wait = min(max, base * 2^attempt + random_jitter)` ensures we don’t hammer the API.  
- Caching uses a TTL that matches the AI model’s freshness requirement.

**Edge Cases**

| Case | What breaks? | Test |
|------|--------------|------|
| Sudden traffic spike | Bucket overflows → many 429s | Simulate burst load |
| Quota reset time mis‑sync | Missed reset window | Verify with mock clock |
| Multiple services share bucket | Incorrect rate distribution | Unit test per‑service counters |

**Optimize & Communicate**

- **Horizontal scaling**: each microservice holds its own bucket; no shared state, so we can add nodes without global locks.  
- **Observability**: alert when usage > 80% of quota to trigger manual throttling or plan upgrade.  
- I’d narrate this by first showing the problem diagram (requests → bucket → API), then walking through the algorithm and its trade‑offs, ending with how observability informs future capacity planning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
