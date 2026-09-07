---
qid: ing_1ce81a28b9__faang__local
question: What Is a Load Balancer? — What Is a Load Balancer? | F5
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 484
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:52:19-05:00'
sources: []
---

**Clarify**

> *What is a load balancer?*  
> I’ll explain it in the context of distributed ML workloads: an intermediary that distributes incoming inference or training requests across multiple compute nodes to maximize throughput and reliability.  
> **Assumptions:** we’re dealing with stateless model servers, network‑based traffic, and at least two backend instances.

**Approach**

1. Identify the load balancing goal (latency minimization, high availability).  
2. Choose a strategy: round‑robin, least‑connections, weighted or content‑aware.  
3. Map it to ML infrastructure—e.g., TensorFlow Serving behind an Nginx LB or AWS ELB in front of SageMaker endpoints.

**Depth**

A load balancer sits between the client and backend model servers, maintaining a health‑check registry. When a request arrives, it selects an eligible instance based on the chosen algorithm and forwards the payload. Health checks (e.g., `/healthz` HTTP endpoint) ensure failed nodes are removed from rotation.  
- **Round‑robin**: O(1) per request, good for identical instances.  
- **Least‑connections**: adapts to variable inference times; requires a connection counter.  
- **Weighted**: useful when GPUs have differing capacities (e.g., 4× vs. 8×).  

Complexity is constant per request, but the health‑check loop runs in O(n) where *n* is the number of backends.

**Edge Cases**

- Sudden traffic spikes can overwhelm a single node; auto‑scaling mitigates this.  
- Sticky sessions are rarely needed for stateless ML, but if required (e.g., session‑based recommendation), use source‑IP affinity.  
- If an inference request is large, the LB must support TCP keep‑alive or HTTP/2 multiplexing.

**Optimize & Communicate**

I’d start with a simple round‑robin LB and instrument latency metrics; once baseline performance is stable, switch to least‑connections weighted by GPU load. I’d explain this evolution in an interview: “We’ll first prove the concept, then iteratively add intelligence based on observed bottlenecks.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
