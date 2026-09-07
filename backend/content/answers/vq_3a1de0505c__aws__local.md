---
qid: vq_3a1de0505c__aws__local
question: How to use decorators in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 379
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:47:15-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation / Task** – While building a serverless data‑pipeline for a fintech client, I needed to add retry logic and audit logging to multiple Lambda functions without duplicating code.  
> **Action** – I wrote two reusable decorators:  
> 1. `@retry(max_attempts=3, backoff_factor=2)` that wrapped any callable, caught exceptions, logged the attempt number via CloudWatch Logs, and retried with exponential back‑off (using `time.sleep`).  
> 2. `@audit` that injected a correlation ID into the Lambda context and emitted structured JSON to an SQS queue for downstream analytics.  
> I implemented them in pure Python, using the `functools.wraps` helper to preserve metadata, and parameterised the retry logic with environment variables so the same code could run in dev, test, and prod.  
> **Result** – After deploying, production error rates dropped from 4 % to <0.2 %, and end‑to‑end latency improved by ~12 %. The audit logs powered a new compliance dashboard that increased customer trust scores by 18 % over six months.  
> **Leadership Principles Reflected**  
> *Customer Obsession* – the retry logic directly protected user transactions from transient failures.  
> *Ownership & Dive Deep* – I examined CloudWatch metrics, tuned back‑off parameters, and iterated on decorator design until latency was acceptable.  

**Technical Takeaway** – Use decorators to encapsulate orthogonal concerns (retry, logging) so that business logic stays clean; expose configuration via environment variables for cost‑effective scaling across Lambda invocations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
