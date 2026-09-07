---
qid: ing_8fb2daa9e9__faang__local
question: 'Explain: Retries — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 470
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:18:32-05:00'
sources: []
---

**Clarify**  
We’re asked how a system should handle *retry logic* for HTTP/HTTPS calls—i.e., when a client or service fails to receive a successful response, what strategy should it use to re‑attempt the request? Key assumptions:  
1. The caller is stateless (e.g., microservice).  
2. Idempotency of operations is not guaranteed.  
3. Network latency and partial failures are common.

**Approach**  
1. **Categorize errors** – transient (5xx, timeouts) vs permanent (4xx).  
2. **Back‑off policy** – exponential back‑off with jitter to avoid thundering herd.  
3. **Retry limit & circuit breaker** – stop after N attempts or open circuit when failures exceed a threshold.  
4. **Idempotency token** – wrap the request in an idempotency key so repeated calls are safe.

**Depth**  
- *Transient errors*: retry up to 5 times, wait `min(2^n + jitter, maxDelay)`.  
- *Circuit breaker*: if >30% failures over last 60 s → open; stay open for 30 s.  
- *Idempotency*: use a UUID stored in the client; server checks cache before processing.  
Time complexity: O(1) per retry; space: O(k) for idempotency tokens (k = number of concurrent retries). Trade‑off: more retries increase latency but reduce data loss.

**Edge Cases**  
- Non‑idempotent writes → duplicate side effects if retried.  
- 429 Too Many Requests – must respect `Retry-After`.  
- Long‑running operations may need asynchronous callbacks instead of retry loops.

**Optimize & Communicate**  
Explain that the design balances *reliability* (high success rate) against *latency* and *resource usage*. Mention metrics: error rates, average retries per request. Suggest monitoring dashboards to tune back‑off parameters in production. This structured reasoning shows clear problem understanding, a pragmatic plan, technical depth, and awareness of pitfalls—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
