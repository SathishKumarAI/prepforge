---
qid: ing_be7a809901__faang__local
question: 'Explain: Asynchronism and microservices — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 268
output_tokens: 455
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:05:40-05:00'
sources: []
---

**Clarify**  
The question asks how *asynchronism* (event‑driven, non‑blocking communication) works in a *microservice* architecture, using the Pastebin example from *system-design-primer*.  
Assumptions to confirm:  
1. Services communicate over HTTP/REST or gRPC.  
2. We want eventual consistency for user‑generated content (posts).  
3. Latency constraints are loose – a few seconds is acceptable.

**Approach**  
Outline the data flow:  
- **API Gateway → Post Service**: receives create/post request.  
- **Post Service** publishes a *“post_created”* event to a message broker (Kafka/Redis Streams).  
- **Storage Service** consumes the event, writes to DB, and replies with an async status.

The API can immediately return “queued” while the background worker processes the event, ensuring the client isn’t blocked.

**Depth**  
1. *Event bus*: Kafka gives ordering per key (post ID) and durability.  
2. *Consumer group*: Multiple workers scale horizontally; each handles distinct posts.  
3. *Idempotency*: Include a UUID in the event; consumer idempotently writes to DB.  
4. *Error handling*: Dead‑letter queue for failures; retry with exponential backoff.  
5. *Complexity*: O(1) per message, O(N) throughput where N is worker count.

**Edge cases**  
- Duplicate events → deduplication logic.  
- Broker outage → fallback to synchronous write (fallback path).  
- Slow consumer → back‑pressure via broker’s lag metrics.

**Optimize & communicate**  
We can replace Kafka with a lightweight pub/sub like Redis Streams if traffic is modest, trading durability for lower latency.  
When explaining, start with the user story, map each microservice role, then walk through the async pipeline, highlighting guarantees (at least once delivery) and trade‑offs. This demonstrates clear problem framing, architectural thinking, and depth—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
