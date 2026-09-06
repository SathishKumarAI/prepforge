---
qid: ing_984bfb4dce__fp__local
question: What is a health check? — Grokking-System-Design-Interview-Quizzes/Quizzes/Load
  Balancer.org at master \u00b7 ema2159/Grokking-System-Design-Interview-Quizzes \u00b7
  GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 214
output_tokens: 405
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:29:47-05:00'
sources: []
---

### Health‑Check: The Load Balancer’s “Ping” for Reliability

When a load balancer routes traffic to a pool of servers, its **goal is to keep users on the *fastest* and *most reliable* path**. A server can become unavailable without an external signal—crashes, network partitions, or resource exhaustion can silently render it unresponsive. The fundamental problem is detecting such failures *before* clients hit them.

A health‑check is a lightweight probe (HTTP GET, TCP SYN, ICMP echo, etc.) sent at regular intervals to each backend. It answers the question: **“Can this server still serve requests?”**  
If the probe succeeds within a timeout, the server remains in the *active* pool; otherwise it is marked *down* and traffic stops being directed there.

Why must it work that way?  
1. **Optimization** – The load balancer seeks to minimize latency by avoiding failed nodes.  
2. **Information Theory** – Each probe reduces uncertainty about a node’s state; the more frequent, the lower entropy of the system’s status.  
3. **Probability & Fault Tolerance** – By modeling failures as stochastic events, we can compute expected availability and choose probe intervals that keep the failure probability below a target (e.g., \(p < 10^{-6}\)).

#### Non‑obvious Insight
A *single* health‑check type can be misleading. For example, an HTTP 200 on `/health` may still mask backend database timeouts. The deeper principle: **the probe’s semantics must match the failure mode**—otherwise you’re optimizing for a different metric than actual service quality.

In short, a health‑check is the load balancer’s statistical test that keeps routing decisions optimal and guarantees end‑to‑end reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
