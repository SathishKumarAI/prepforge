---
qid: ing_5d356c8187__star__local
question: 'Explain: So that is remote procedure calls. So — System Design BASICS:
  Horizontal vs. Vertical Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 324
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:34:28-05:00'
sources: []
---

**Situation:** While leading a product‑launch sprint for our recommendation engine, the team noticed the inference latency spiked from 120 ms to nearly 400 ms during peak traffic, jeopardizing the SLA of 300 ms.

**Task:** I had to redesign the deployment so that we could keep latency low while scaling to handle a projected 3× user growth without breaking budget constraints.

**Action:** First, I mapped out the current monolithic service as a single VM (vertical scaling). To avoid bottlenecks, I refactored it into micro‑services and exposed each via gRPC RPCs—lightweight, binary‑encoded calls that keep cross‑service latency under 5 ms. Next, I set up Kubernetes with autoscaling pods: the inference service now runs as a stateless container pool, and we use a shared Redis cache for model metadata to reduce disk IO. I also introduced a read‑replica database cluster (horizontal scaling) so that query loads are spread across nodes. Finally, I tuned the gRPC keepalive settings to balance connection reuse against resource usage.

**Result:** Latency dropped back to 110 ms under peak load, and we scaled from 4 to 24 pods with a 30% cost increase—well within budget. The exercise taught me that RPCs can replace heavy HTTP when low overhead is critical, and that horizontal scaling of stateless services combined with vertical tuning of stateful components yields the best performance‑cost trade‑off.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
