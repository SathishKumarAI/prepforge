---
qid: ing_de2610d6bf__faang__local
question: 'Explain: now the demand service requests the supply'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 494
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:15:26-05:00'
sources: []
---

**Clarify**  
The question asks how a *demand* micro‑service (e.g., recommendation engine) obtains the necessary *supply* (model artifacts, feature vectors, or training data) in a production ML stack. I’ll assume:  

1. Services communicate over gRPC/REST.  
2. Supply is versioned and stored in a registry.  
3. There’s an orchestrator that can pull the latest model when needed.

**Approach**  
1. **Service discovery** – demand locates the supply service via a service mesh or DNS.  
2. **Version negotiation** – it queries the registry for the current model tag (e.g., `v12.3`).  
3. **Pull or stream** – the supply service streams the serialized model (TensorFlow SavedModel, ONNX) over gRPC.  
4. **Cache & hot‑swap** – demand caches locally and swaps in place when a new version arrives.  

**Depth**  
- *Protocol*: gRPC with protobufs for binary efficiency; optional HTTP/2 keep‑alive to detect stale connections.  
- *Serialization*: Use TensorFlow’s `SavedModel` or ONNX; compress with gzip to reduce bandwidth.  
- *Consistency*: Supply publishes a “ready” flag after loading; demand blocks until the flag is true, ensuring no partial loads.  
- *Security*: Mutual TLS and JWT auth for service‑to‑service calls.  
- *Complexity*: O(1) request latency + O(M) download time (M = model size).  

**Edge Cases**  
- Network partitions → fallback to last cached model.  
- Model corruption → checksum validation, retry logic.  
- Version drift → demand rejects incompatible tags and alerts ops.  

**Optimize & Communicate**  
To improve throughput, implement *prefetch* where the supply service pushes new models proactively during low‑traffic windows. Use a CDN for static assets if models are large. I’d explain this flow to interviewers by drawing a diagram: Demand ↔ Registry ↔ Supply → Cache → Inference. This shows clear responsibilities, fault tolerance, and scalability—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
