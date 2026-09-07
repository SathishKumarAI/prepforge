---
qid: ing_4b5bee47a4__faang__local
question: 'Explain: Design a multi-tenant inference platform that serves many foundation
  models to thousands of customers (Bedrock-shaped).'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 537
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:39:41-05:00'
sources: []
---

**Clarify**

We’re building an inference‑as‑a‑service platform similar to AWS Bedrock: multiple large foundation models (LLMs, vision, etc.) are hosted and exposed via a single API endpoint that serves thousands of tenant customers concurrently.  
Key assumptions to confirm:  

- *Model size*: 10–30 B parameters; GPU/TPU inference cost dominates.  
- *Latency SLA*: <200 ms per request for most tenants.  
- *Throughput*: 1k+ requests/sec aggregate, with burst capability.  
- *Security*: strict isolation (data, metrics) and compliance (GDPR, SOC‑2).  

**Approach**

1. **Multi‑tenant scheduling layer** – a request router that maps tenant IDs to model queues.  
2. **Model serving runtime** – use a lightweight inference engine (e.g., Triton or FastAPI + ONNX Runtime) with GPU sharding.  
3. **Resource pool manager** – dynamic allocation of GPUs/TPUs per tenant based on SLA and usage history.  
4. **Observability & metering** – per‑tenant request counters, latency histograms, cost attribution.  
5. **Security sandboxing** – containerized inference workers with network isolation; data masking before passing to models.

**Depth**

- *Router*: hash‑based sharding + priority queue (premium tenants).  
- *Runtime*: batch decoding (token‑level batching) to amortize GPU overhead, while maintaining low latency for single requests.  
- *Scaling*: horizontal pod autoscaling driven by per‑tenant QPS; use Kubernetes custom resources for model deployments.  
- *Cost*: pre‑warm GPUs for high‑priority tenants; spin‑down idle workers after a timeout.  
Complexity: O(log n) routing, linear GPU utilization with batching, memory footprint ≈ model size + container overhead.

**Edge Cases**

- Sudden traffic spike → queue backpressure, graceful degradation (fallback to smaller model).  
- Model update failure → rolling restart, keep‑alive health checks.  
- Data leakage between tenants → enforce strict RBAC and audit logs.

**Optimize & Communicate**

Iteratively profile latency hotspots; shift compute from CPU to GPU for token generation. Communicate progress by sharing metrics dashboards, explaining trade‑offs (e.g., batch size vs. latency). This structure demonstrates clear problem framing, a robust architectural plan, technical depth, edge‑case awareness, and continuous optimization—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
