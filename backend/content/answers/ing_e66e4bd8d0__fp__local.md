---
qid: ing_e66e4bd8d0__fp__local
question: 'Explain: How a Request Flows Through the System — Design Load Balancer
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 510
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:08:45-05:00'
sources: []
---

**From Problem to Solution**

When a client sends an HTTP request we *must* route it to a backend that can satisfy the user’s intent while keeping latency low and throughput high. The fundamental trade‑off is **throughput vs. consistency**: if every request hits the same node, that node becomes a bottleneck; if requests are spread arbitrarily, some nodes may be idle while others over‑commit.

A load balancer solves this by acting as an *information bottleneck*—it observes only a small set of metrics (CPU, queue length, error rate) and makes routing decisions that approximate the optimum distribution of work. This is an instance of **online convex optimization**: we seek to minimize the maximum load while respecting constraints (e.g., session stickiness). The decision rule must be *stateless* enough to scale yet *stateful* enough to honor sessions.

**Key Insight:**  
Most designs treat the balancer as a simple round‑robin or hash, but that ignores *dynamic capacity*. By maintaining a lightweight **heartbeat queue**—a moving average of each node’s effective throughput—we can compute a *weight* \( w_i = \frac{1}{\text{load}_i + \epsilon} \). Routing probabilities proportional to \( w_i \) converge to the optimal load distribution without requiring full state or complex coordination.

**Flow Summary**

| Step | What Happens | Why It Matters |
|------|--------------|----------------|
| 1. **Client → LB** | DNS resolves to LB IP, TLS handshake | Central entry point for observability |
| 2. **LB probes nodes** | Sends periodic health checks, aggregates metrics | Keeps a live view of node capacity |
| 3. **LB selects target** | Computes weighted probability from heartbeat queue | Approximates optimal load split |
| 4. **LB forwards request** | TCP connection to chosen backend (possibly via HTTP/2 stream) | Minimizes round‑trip time |
| 5. **Backend responds** | Sends back through LB, which aggregates headers | Provides single exit point for monitoring |

By framing the balancer as an online optimizer that continually re‑weights targets based on observed load, we achieve a design that is both *scalable* and *robust*—the essential properties any system‑design interview seeks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
