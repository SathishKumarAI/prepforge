---
qid: vq_d4ead15b22__fp__local
question: How do you handle exception in ADF ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 415
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:58:18-05:00'
sources: []
---

**Why exceptions matter in ADF pipelines**

An Azure Data Factory (ADF) pipeline is a *workflow graph* whose nodes are deterministic data‑movement or transformation activities. The underlying runtime assumes that each node completes successfully; otherwise downstream logic (e.g., conditional splits, triggers) would be based on incomplete data, violating the *principle of causality*. Hence ADF must detect failures early and provide a recovery path.

**Fundamental failure handling strategy**

1. **Activity‑level error detection** – Every activity returns a `status` (`Succeeded`, `Failed`, `Skipped`). The runtime treats any non‑succeeded status as an exception that bubbles up to the pipeline level.
2. **Pipeline‑level fault tolerance** – ADF introduces *dependency conditions* (`OnSuccess`, `OnFailure`, `OnCompletion`) that allow you to branch execution paths. This is a form of *control‑flow optimization*: by modeling failures explicitly, the scheduler can avoid unnecessary work and isolate faulty data sources.
3. **Retry policies** – Each activity can be configured with a retry count and interval, exploiting the *law of diminishing returns* on transient errors (e.g., network glitches). The exponential back‑off strategy balances resource usage against recovery probability.

**Non‑obvious insight**

Most people configure retries only at the pipeline level, but ADF’s **dynamic content expressions** let you *change retry logic on the fly*. For example, use a lookup activity to fetch an environment variable that determines whether to enable extended retries for a staging copy. This turns static configuration into *adaptive resilience*, aligning with the information‑theoretic idea that uncertainty should be quantified and acted upon.

In short, handle exceptions in ADF by:  
- letting activities report status;  
- using dependency conditions to branch on failure;  
- applying fine‑grained retry policies;  
- optionally making those policies dynamic via expressions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
