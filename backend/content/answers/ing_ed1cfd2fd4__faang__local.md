---
qid: ing_ed1cfd2fd4__faang__local
question: Your app is getting 429s from your LLM provider at peak traffic. How do
  you handle rate limits properly?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 448
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:51:40-05:00'
sources: []
---

**Clarify**  
We’re receiving HTTP 429 “Too Many Requests” errors during traffic spikes. Assumptions: (1) the LLM API enforces a per‑second/ per‑minute quota; (2) we can’t raise the quota without cost; (3) latency is critical for our users; (4) requests are stateless and can be retried.

**Approach**  
1. Parse `Retry-After` header to respect provider’s back‑off window.  
2. Implement a token‑bucket or leaky‑bucket rate limiter per user/session.  
3. Queue excess calls in an in‑memory priority queue with exponential back‑off.  
4. Cache recent responses (e.g., identical prompts) to reduce traffic.  
5. If quota is exhausted, fallback to a cheaper model or a cached “last known good” answer.

**Depth**  
- **Limiter**: `tokens = min(maxTokens, tokens + rate * elapsed)`; reject when `tokens==0`.  
- **Queue**: FIFO with retry counter capped at 5 attempts. Complexity O(1) enqueue/dequeue.  
- **Cache**: LRU of size N (configurable).  
- **Back‑off**: `sleep = min(base*2^attempt, maxBackOff)`.

This keeps latency bounded (~200 ms average), respects API limits, and prevents burst traffic from cascading failures.

**Edge Cases**  
- Missing or malformed `Retry-After`.  
- Sudden quota changes (e.g., provider reduces limit).  
- Network partitions causing stale cache.  
- Users sending identical prompts in rapid succession.

Tests: simulate 1000 concurrent requests; verify no more than quota calls per window and that retries succeed after back‑off.

**Optimize & Communicate**  
Add a metrics dashboard showing request rates, limiter hits, queue depth, and cache hit ratio to spot patterns early. If traffic grows, consider sharding the rate limit across multiple API keys or negotiating higher limits. Explain to stakeholders how this protects uptime while keeping costs predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
