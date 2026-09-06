---
qid: ing_a01b3e4dcf__fp__local
question: 'Explain: Success Response (200 OK) — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 423
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:45:56-05:00'
sources: []
---

**Why a load‑balancer must return “200 OK” for every healthy request**

When a client issues an HTTP call, the *semantic* contract is:  
*“If the server can fulfill my request, it will reply with a 2xx status.”*  
A load‑balancer (LB) sits in front of many application instances. Its job is to **maximize throughput** while keeping each instance **stable** and **responsive**.

1. **Fundamental problem** – The LB must route traffic so that no downstream node becomes overloaded, otherwise latency explodes or the node crashes.  
2. **Optimization view** – Treat the cluster as a *flow network* with capacities equal to instance throughput. The LB’s routing policy is an online algorithm that keeps the flow below capacity while keeping queue lengths minimal (Jackson‑network theory). A “200 OK” is the only signal that the downstream node accepted the request, meaning the flow was within its capacity.  
3. **Information‑theoretic view** – The status code is a 1‑bit *acknowledgment* of successful decoding of the client’s intent. If the LB were to return a non‑2xx status, it would be conveying that the request failed to be decoded or processed—information that must propagate back to the client immediately.

**Non‑obvious insight:**  
The LB should **not** cache “200 OK” responses; caching would break the flow‑control guarantees because cached responses no longer reflect current load. Instead, each “200 OK” is a *dynamic contract* that confirms the node’s ability to process one more unit of work, enabling the LB to maintain an up‑to‑date view of real‑time capacity without explicit heartbeats. This subtle distinction keeps the system both *scalable* and *robust*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
