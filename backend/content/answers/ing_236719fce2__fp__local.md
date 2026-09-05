---
qid: ing_236719fce2__fp__local
question: 'Explain: Endpoint: PUT /config/algorithm — Design Load Balancer | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 457
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:20:39-05:00'
sources: []
---

**Endpoint:** `PUT /config/algorithm`  
**Purpose:** Dynamically update the routing logic that a load‑balancer uses to decide which backend instance receives each request.

---

### Why this design is required

A production system must adapt to changing traffic patterns, fault states, and policy updates without rebooting the balancer. The endpoint lets operators inject new *routing rules* (e.g., weighted round robin, least‑connection, header‑based routing) while the balancer continues to serve traffic. If we exposed only a static configuration file, every change would trigger a restart and cause an outage.

### How it works

1. **Request body** – a JSON payload that encodes a *deterministic function* of request attributes (path, headers, query params) into a backend selector.
2. **Validation layer** – parses the function, verifies that it is *pure* (no side‑effects), and checks against an ACL to prevent malicious overrides.
3. **Atomic update** – the new rule replaces the old one in a single transaction; the balancer reads from a read‑only cache so requests are never served with a partially‑applied rule.
4. **Versioning & rollback** – each rule is tagged with a monotonically increasing version number. If a request fails to route (e.g., backend down), the balancer can automatically roll back to the previous stable rule.

### Deeper principle

The endpoint embodies *online convex optimization*: at every tick, we choose a routing policy that maximizes expected throughput minus penalty for misrouting. The API is the interface through which a high‑level optimizer (e.g., reinforcement learning agent) pushes its policy into production.

---

**Non‑obvious insight:**  
Because the balancer’s decision function must be *deterministic*, the endpoint cannot accept arbitrary code; instead it accepts a declarative description that can be statically verified. This guarantees that the balancer remains *statically analyzable*—a property essential for formal verification of safety properties like “no request is ever dropped.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
