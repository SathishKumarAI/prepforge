---
qid: ing_f739b89e80__faang__local
question: 'Explain: Retry Pattern — Retrypattern'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 514
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:15:01-05:00'
sources: []
---

**Clarify**  
The interviewer is asking for an explanation of the *Retry Pattern*—a fault‑tolerance strategy that repeatedly attempts a failed operation until it succeeds or a policy limit is reached. In ML pipelines this often applies to calls to external services (e.g., data stores, GPU schedulers, model registries). I’ll assume we’re focusing on stateless retries with exponential back‑off and optional idempotency.

**Approach**  
1. Define the retry policy: max attempts, base delay, jitter, and a predicate for retriable errors.  
2. Wrap the operation in a loop that checks the predicate; on failure sleep for `delay * 2^attempt + jitter`.  
3. On success break; on exhausting attempts raise or fallback.

**Depth**  
```python
def retry(fn, *, max_attempts=5, base_ms=100, jitter_ms=50,
          retriable=lambda e: isinstance(e, (TimeoutError, ConnectionError))):
    for attempt in range(max_attempts):
        try:
            return fn()
        except Exception as exc if retriable(exc) else None:
            if attempt == max_attempts - 1:
                raise
            sleep_time = base_ms * (2 ** attempt) + random.uniform(0, jitter_ms)
            time.sleep(sleep_time / 1000.0)
```
*Complexity*: O(max_attempts).  
*Trade‑offs*: More retries increase latency; too few may cause unnecessary failures. Jitter mitigates thundering herd.

**Edge Cases**  
- Non‑idempotent operations (e.g., training a model that consumes data) can produce duplicate artifacts—use idempotency keys or transactional semantics.  
- Persistent errors (invalid config) should short‑circuit without retrying.  
- System overload: back‑off helps, but exponential growth may still overload downstream services.

**Optimize & Communicate**  
For large ML workloads, expose policy via a config file and allow dynamic tuning per endpoint. Log each attempt with attempt number and error type for observability. In an interview, I’d emphasize that this pattern is essential in distributed training pipelines where transient network glitches or spot instance preemptions are common, ensuring robust, self‑healing behavior without manual intervention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
