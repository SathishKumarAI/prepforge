---
qid: ing_c3109c51a3__faang__local
question: 'Explain: Example — Retrypattern'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 533
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:14:24-05:00'
sources: []
---

**Clarify**  
You’re asking how a *retry‑pattern* works in a machine‑learning workflow—e.g., when a model‑training job or data‑fetch step fails, we automatically re‑attempt it. I’ll assume we’re dealing with stateless batch jobs on a cloud platform (AWS SageMaker / GCP Vertex) and that failures can be transient (network glitches, spot‑instance preemption).

**Approach**  
1. **Identify retryable errors** – map exception codes to transient vs permanent.  
2. **Define back‑off strategy** – exponential with jitter to avoid thundering herd.  
3. **Set max attempts / timeout** – to prevent infinite loops.  
4. **Persist state** – store attempt count in a lightweight DB (DynamoDB/Firestore) or job metadata.  
5. **Circuit breaker** – after N consecutive failures, pause the pipeline and alert ops.

**Depth**  
```python
import time, random

def run_job():
    attempts = 0
    max_attempts = 5
    base_delay = 2   # seconds
    while attempts < max_attempts:
        try:
            train_model()          # may raise TransientError or FatalError
            return "Success"
        except TransientError as e:
            attempts += 1
            delay = base_delay * (2 ** attempts) + random.uniform(0, 1)
            time.sleep(delay)
    notify_ops("Model training failed after retries")
```
- **Complexity**: O(max_attempts) time; constant space.  
- **Trade‑offs**: More attempts → higher availability but longer latency; fewer attempts → faster failure propagation.

**Edge Cases**  
- Permanent errors incorrectly classified as transient → endless retries.  
- Jitter too small → synchronized retries across many jobs.  
- State persistence loss → lost attempt counts, leading to duplicate runs.

**Optimize & Communicate**  
- Use cloud‑native retry libraries (e.g., AWS Step Functions “Retry” field) for declarative control.  
- Expose metrics: `retry_count`, `avg_backoff_time`.  
- Narrate: “We first classify errors, then apply exponential back‑off with jitter, capped at five attempts; if still failing, we alert the ops team and skip to the next pipeline stage.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
