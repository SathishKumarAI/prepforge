---
qid: ing_02bf37477f__faang__local
question: 'Explain: Endpoint: DELETE /backends/{backend_id} — Design Load Balancer
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 496
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:50:25-05:00'
sources: []
---

**Clarify**

We need to design the **DELETE /backends/{backend_id}** endpoint that removes a backend from a load‑balancer pool.  
Assumptions to confirm:  
1. Backends are identified by unique `backend_id`.  
2. The balancer supports multiple pools (e.g., HTTP, TCP).  
3. Deletion must be **idempotent** and propagate to all client nodes without downtime.  
4. We have a global configuration store (etcd/Consul) and an event bus for propagation.

**Approach**

1. Validate `backend_id` exists in the config DB.  
2. Mark it as *deleting* to prevent new traffic while draining.  
3. Trigger a **graceful drain**: send stop‑accepting‑new‑connections signal to all edge nodes, wait for active connections to finish or timeout.  
4. Once drained, remove from the config store and publish an event (`BackendDeleted`).  
5. Edge nodes subscribe to events; upon receipt they update their routing tables instantly.

**Depth**

- **API**: `DELETE /backends/{id}` → 200 OK (deletion started) or 404 if missing.  
- **State machine**: `ACTIVE → DELETING → INACTIVE`.  
- **Propagation**: Use Kafka/Redis Pub/Sub; edge nodes update in O(1).  
- **Complexity**: DB lookup O(log n), event broadcast O(k) where k is node count (constant‑time per node).  
- **Trade‑offs**: Immediate deletion risks dropping in‑flight traffic; graceful drain adds latency but preserves QoS.

**Edge Cases**

- Deleting a backend currently serving critical traffic → ensure timeout doesn’t exceed SLA.  
- Concurrent delete requests → deduplicate via idempotent check.  
- Network partitions → event may not reach all nodes; fallback to periodic sync.

**Optimize & Communicate**

Explain that we use optimistic locking in the DB (version field) to avoid race conditions, and we expose a *deletion status* endpoint so clients can poll or subscribe. Emphasize that this design keeps latency low for deletion requests while guaranteeing consistent routing across all nodes, meeting FAANG‑style reliability expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
