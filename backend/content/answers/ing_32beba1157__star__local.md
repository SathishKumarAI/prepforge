---
qid: ing_32beba1157__star__local
question: 'Explain: Some limitations of orchestration: — Orchestration vs. Choreography
  in Microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 340
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:10:07-05:00'
sources: []
---

**Situation:**  
At my last company we built a recommendation engine that pulled data from ten microservices—user profile, inventory, pricing, fraud detection, and more. Our CI pipeline was set up to deploy each service independently, but the end-to-end workflow required tight coordination.

**Task:**  
I needed to decide whether to keep using a central orchestrator (like Camunda) or shift to a choreography model where services communicate via events so that we could reduce latency, avoid single points of failure, and improve scalability.

**Action:**  
First I profiled the current orchestration stack: it added ~200 ms per request due to sequential calls and a 5% failure rate when any downstream service timed out. I then designed an event‑driven choreography using Kafka streams and sagas for compensation logic. We introduced domain events (“OrderPlaced”, “InventoryChecked”) and rewrote services to emit/consume them instead of waiting on RPCs. I also added circuit breakers in the orchestration layer to isolate failures.

**Result:**  
After a 3‑month rollout, request latency dropped from 750 ms to 450 ms (40% improvement), and system availability rose from 95% to 99.5%. The trade‑off was an increase in operational complexity—more Kafka topics and monitoring—but the team gained resilience and easier horizontal scaling. I learned that orchestration is simpler for tightly coupled workflows, while choreography shines when services must be loosely coupled and highly resilient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
