---
qid: vq_c35de6a037__fp__local
question: How do you implement error handling in ADF pipelines?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 489
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:55:06-05:00'
sources: []
---

### Why error handling matters

A pipeline is a *workflow graph* whose nodes consume and produce data streams.  
If any node fails, the downstream graph can become inconsistent or waste resources.  
From an **optimization** perspective we want to minimize expected loss = cost × failure probability.  
Thus we must *detect*, *classify*, and *react* to failures in a way that keeps the overall system’s expected loss minimal.

### Core principles

1. **Detection = observable state change**  
   Each activity emits `Succeeded`, `Failed`, or `InProgress`.  
   In ADF, this is exposed via the pipeline run status and activity logs; they form the *observable*.

2. **Classification = severity taxonomy**  
   Map statuses to a hierarchy:  
   - *Transient*: network glitch → retry.  
   - *Permanent*: bad schema → abort & alert.  
   This mirrors the *Markov decision process* where each state transition has an associated cost.

3. **Reaction = policy function**  
   Implement policies as *control flow* (if‑else, switch) or *pipeline branches*.  
   ADF offers:
   - **Retry/Timeout**: automatic exponential back‑off.
   - **Fail & Continue**: `ContinueOnError` flag.
   - **Escalation**: trigger Webhook/Logic App for human review.

### Implementation pattern

```yaml
- activity: CopyData
  retryPolicy:
    maxRetryCount: 3
    intervalInSeconds: 30
  continueOnError: false
```

If `CopyData` fails after 3 retries, the pipeline stops and an alert is sent via an *OnFailure* event trigger.

### Non‑obvious insight

Most users treat errors as “stop everything”.  
In a data‑engineering context, **partial failures are often cheaper** than full aborts.  
By configuring `continueOnError` for non‑critical branches (e.g., enrichment steps) and isolating them with *if‑condition* activities, you keep the main lineage intact while still capturing anomalies. This “fail fast, recover smart” strategy reduces total cost of ownership more than blanket retries or immediate aborts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
