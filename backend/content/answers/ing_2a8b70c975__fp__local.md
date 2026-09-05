---
qid: ing_2a8b70c975__fp__local
question: 'Explain: 4.2 Load Balancing and Health Checks — Single Point of Failure
  (SPOF) | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 428
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:35:25-05:00'
sources: []
---

### Why a “single point of failure” matters in AI‑heavy services

When an AI inference service is exposed through one endpoint, every request must traverse that exact node (or the load balancer that forwards to it).  
* **Fundamental problem** – the system’s availability equals the availability of that single node. If the node crashes or its network path goes down, *all* predictions stall, no matter how many replicas exist elsewhere.  
* **Why a load balancer alone is not enough** – a classic round‑robin LB assumes each backend can answer; it does not guarantee that the chosen backend is healthy. Without checks, the LB may hand off traffic to a dead node, causing timeouts and cascading failures in downstream pipelines.

### How health checks eliminate SPOF

1. **Probe the service continuously** (HTTP `/health`, TCP ping, or model‑specific inference).  
2. **Mark nodes as “unhealthy”** when probes fail for *N* consecutive attempts or exceed latency thresholds.  
3. **Route only to healthy replicas**, automatically draining traffic from failed nodes and re‑introducing them once they recover.

This pattern is a direct instantiation of the *redundancy principle* in reliability engineering: *“Don’t rely on one component; spread risk across many, and use observability to keep the system aware of each component’s state.”*

### Non‑obvious insight

Most teams only probe *availability* (is the endpoint up?). A deeper check is **semantic health**: run a lightweight inference or compute a checksum of the model weights. If a node has been reloaded with an outdated or corrupted model, it will pass network probes yet deliver wrong predictions—an SPOF that conventional liveness checks miss. Incorporating such *functional* health checks turns load balancing from a traffic‑routing problem into true **service‑level resilience**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
