---
qid: ing_3aa6d9552d__fp__local
question: 'Explain: Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 364
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:09:33-05:00'
sources: []
---

**Why a webhook?**  
In a distributed learning platform, the *event* is “model finished training” or “new data arrived.” The system must notify downstream services (e.g., inference servers, dashboards) **as soon as possible** without polling them continuously.  

**Fundamental trade‑off**  
We face a classic *information–efficiency* dilemma: send data frequently enough to be timely but not so often that we waste bandwidth or overload receivers. A webhook is the solution to this optimization problem: it turns a *state change* into an *instantaneous, unidirectional message*.

1. **Event detection** – The training job emits a status event (e.g., via a Kafka topic).  
2. **Subscription registry** – Other services register callbacks (“I want to be told when X happens”).  
3. **Trigger & delivery** – On the first occurrence of the event, the orchestrator sends an HTTP POST to each registered URL.  

The webhook’s *push* nature reduces latency from \(O(\text{poll interval})\) to near‑zero while keeping bandwidth proportional to the number of distinct subscribers, not the number of polling cycles.

**Non‑obvious insight:**  
Because the payload is tiny (often just a UUID and timestamp), the cost of retries and idempotency handling dominates. Designing the webhook endpoint to be *stateless* and *idempotent* turns the reliability problem into a simple “store if not already stored” operation, which scales linearly with subscriber count—an elegant manifestation of the *law of diminishing returns* in distributed messaging.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
