---
qid: ing_3c43c711b9__faang__local
question: 'Explain: Network Failures — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 498
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:04:07-05:00'
sources: []
---

**Network Failures – Ensuring High Availability in a Distributed AI Service**

| **Step** | **What I’d do** |
|----------|----------------|
| **Clarify** | “We need an AI inference platform that stays online even if individual network links or nodes fail.”  Assumptions: *latency‑critical*, *global traffic*, *stateless request handling*, *multiple data centers*. |
| **Approach** | 1. Design a *multi‑region* architecture with independent edge routers. <br>2. Use *TCP/UDP load balancers* that detect failed connections via health checks. <br>3. Deploy *gRPC or HTTP/2* over TLS for robust, multiplexed streams. |
| **Depth** | • **Circuit Breaker + Retry**: On a 5xx or timeout, the client retries after exponential back‑off; the server opens a circuit if failures exceed threshold.<br>• **Consistent Hashing + Sticky Sessions**: Route identical requests to the same node when possible, reducing cache misses.<br>• **Network Partition Handling**: Use *quorum* reads/writes (e.g., 2/3 of replicas) so that at least one partition can still serve. <br>Complexity: O(1) routing + O(log N) for hash lookup; overall latency ≈ 50–100 ms, throughput ≥10k req/s. |
| **Edge Cases** | • Simultaneous loss of all outbound links (regional outage).<br>• Sudden traffic spike causing overload on fallback nodes.<br>• Mis‑configured health checks leading to false positives. Test with Chaos Monkey and network emulation tools. |
| **Optimize & Communicate** | 1. Cache inference results at the edge (CDN) to offload core servers. <br>2. Implement *rate limiting* per client IP to prevent DoS. <br>Explain trade‑offs: more replicas → higher cost but lower failure probability; stricter timeouts → faster failover but risk of dropping valid requests. Conclude with a monitoring stack (Prometheus + Grafana) that alerts on latency spikes or circuit breaker activations, ensuring the system’s resilience is observable and measurable. |

*Word count:* 219

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
