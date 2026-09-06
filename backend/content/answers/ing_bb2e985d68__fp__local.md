---
qid: ing_bb2e985d68__fp__local
question: 'Explain: Return the Right Status Code — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 331
total_tokens: 504
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:41:34-05:00'
sources: []
---

In a webhook the client is *a consumer of an event* and the server is *the producer*.  
The fundamental problem is **state synchronization**: the producer must convey whether its attempt to deliver an event was successful so that the consumer can decide whether to retry, acknowledge or abort.  

Why does HTTP help?  
- **Status codes are a minimal protocol‑agnostic signal**; they encode a *probabilistic outcome* (success vs. failure) in a single byte, avoiding extra payload.  
- The mapping from code to *retry strategy* follows the principle of *exponential backoff*: 2xx → “do nothing”, 4xx → “stop retrying – client error”, 5xx → “retry later – server problem”.  

From an optimization view, this is a *feedback control loop*:  
```
event sent → code received → action chosen
```
The controller (consumer) adjusts its policy based on the code, minimizing wasted network traffic while guaranteeing eventual consistency.  

**Non‑obvious insight:** A 202 “Accepted” tells the consumer that the server has queued the event but not yet processed it; this enables *eventual delivery* without blocking the client’s request thread, a pattern often omitted when developers default to 200/201.  

Thus the right status code is the glue that turns stateless HTTP into an efficient, self‑correcting event channel.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
