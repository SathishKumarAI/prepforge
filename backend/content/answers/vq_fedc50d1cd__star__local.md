---
qid: vq_fedc50d1cd__star__local
question: What are the three different types of Error Handling?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 323
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:28:24-05:00'
sources: []
---

**Situation:**  
In a recent migration from an on‑prem Hadoop cluster to a cloud‑native data lake, our nightly ETL pipeline was throwing intermittent failures due to transient network glitches and downstream API timeouts. The SLA required 99.9% job completion with no manual intervention.

**Task:**  
I had to redesign the error handling strategy so that the pipeline could self‑heal, avoid cascading failures, and still surface critical issues for ops.

**Action:**  
1. **Try/Except (Exception Handling):** Wrapped every external call in a try block, logging the exact exception and stack trace for auditability.  
2. **Retry with Exponential Backoff (Transient Error Recovery):** Implemented a retry decorator that attempted failed requests up to five times, doubling the wait each time, capped at 30 s, to cope with flaky network links.  
3. **Fallback/Compensating Action (Graceful Degradation):** For non‑critical source tables, if retries exhausted, I switched to a cached snapshot and marked the run as “partial” so downstream analytics could still consume available data.

**Result:**  
The pipeline’s success rate jumped from 93% to 99.97%, cutting manual re‑runs by 70%. I learned that blending immediate exception capture with intelligent retry logic and graceful degradation is key to resilient data engineering at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
