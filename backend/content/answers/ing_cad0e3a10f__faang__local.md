---
qid: ing_cad0e3a10f__faang__local
question: 'Explain: 14 System Design - Load Balancing Algorithms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 653
total_tokens: 886
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:31:06-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the main load‑balancing algorithms used in large‑scale systems (e.g., HTTP, microservices). Key assumptions: *stateless or stateful backends*, *dynamic request rates*, *need for high availability and low latency*. I’d confirm whether we need to cover only round‑robin / least‑connections or also consistent hashing and weighted schemes.

**Approach**  
1. List the classic algorithms.  
2. For each, explain how it maps a request to a backend, its assumptions, pros/cons.  
3. Highlight scenarios where one dominates (e.g., session stickiness vs. cache locality).  
4. Summarize trade‑offs in terms of complexity, scalability, fault tolerance.

**Depth**  

| Algorithm | Mapping rule | Assumptions | Pros | Cons |
|-----------|--------------|-------------|------|------|
| **Round‑Robin (RR)** | Cycles through servers sequentially | Equal capacity, stateless | Simple O(1) per request | Ignores current load; may overload slow nodes |
| **Weighted RR** | Same as RR but repeats server *w* times proportional to weight | Known weights, static | Handles heterogeneous resources | Requires re‑balancing on weight change |
| **Least‑Connections (LC)** | Chooses node with fewest active connections | Keeps track of live sessions | Adapts to bursty traffic | Extra state; can overload nodes that finish slowly |
| **Weighted LC** | Adds weights to LC | Same as weighted RR but dynamic | Balances capacity & load | More bookkeeping |
| **Consistent Hashing (CH)** | Maps key → node via hash ring, with virtual nodes | Key‑based routing (sessions, cache keys) | Minimal remapping on topology change | Requires more nodes for uniformity; needs sticky session handling |
| **IP‑Hash** | Hash client IP to server | Sticky sessions without cookies | Stateless per request | Poor distribution if IPs clustered |

Complexities: RR O(1); LC O(log N) with a min‑heap or bucket; CH O(log N) for lookup. Trade‑offs revolve around *statefulness*, *fault tolerance*, and *scalability*.

**Edge Cases**  
- Sudden node failure → need health checks, graceful draining.  
- Highly skewed request keys → virtual nodes in CH mitigate.  
- Session stickiness conflicts with load balance (use session affinity or sticky cookies).  
Testing: simulate 10k requests, inject slow node, verify distribution.

**Optimize & Communicate**  
For a production system I’d combine weighted RR for static capacity and LC for burst handling, backed by health‑check probes. If stateful data must stay on the same node, use CH with sticky sessions. I’d explain this choice to stakeholders as: *“We’ll start with weighted round‑robin for simplicity; if we observe hotspots during load tests, we’ll switch to least‑connections or consistent hashing.”* This keeps the architecture flexible and observable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
