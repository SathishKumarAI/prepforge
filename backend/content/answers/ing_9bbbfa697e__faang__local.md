---
qid: ing_9bbbfa697e__faang__local
question: 'Explain: Problem — Retrypattern'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 477
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:46:10-05:00'
sources: []
---

**Problem – “Retry Pattern” in Machine‑Learning Pipelines**

### 1️⃣ Clarify  
You’re asked how a *retry* strategy protects an ML system from transient failures (e.g., network hiccups, temporary GPU unavailability).  
Assumptions to confirm:  
- We’re dealing with stateless inference or training jobs on cloud infrastructure.  
- Failures are *idempotent* (re‑executing yields the same result).  

### 2️⃣ Approach  
1. Detect failure → trigger retry.  
2. Back‑off strategy to avoid hammering resources.  
3. Max attempts & exponential decay.  
4. Circuit‑breaker to halt when error rate spikes.  
5. Idempotency guarantees correctness.  

### 3️⃣ Depth (Implementation Sketch)  
```python
def run_job(job_fn, max_attempts=5):
    delay = 1   # seconds
    for attempt in range(1, max_attempts+1):
        try:
            return job_fn()
        except TransientError as e:
            if attempt == max_attempts:
                raise
            time.sleep(delay)
            delay *= 2          # exponential back‑off
```
*Complexity*: O(max_attempts) retries; negligible overhead compared to training.  
*Trade‑offs*: More attempts → higher latency but better resilience.

### 4️⃣ Edge Cases  
- **Non‑idempotent jobs**: use checkpointing or versioned models.  
- **Persistent failures**: circuit breaker opens after N consecutive errors, routing traffic elsewhere.  
- **Time‑sensitive predictions**: cap total retry time to SLA limits.

### 5️⃣ Optimize & Communicate  
- **Parallel retries** for independent sub‑tasks (data fetch + inference).  
- **Dynamic back‑off** based on real‑time queue depth.  
- Explain to interviewers: “I’d expose the retry policy as a configuration, log each attempt with metadata, and alert ops when failures exceed thresholds.”  

> *Result*: A robust ML service that gracefully handles flaky infrastructure while honoring SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
