---
qid: ing_b50b9a92cd__faang__local
question: 'Explain: Clarifying questions & assumptions — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 485
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:44:26-05:00'
sources: []
---

**Clarify**  
We’re asked how a *LLM gateway* and a *serving platform* fit together in an AI‑powered product.  
Key clarifying questions:  

1. What size of model are we talking about (small, 100 M parameters vs. 70 B)?  
2. Is the gateway intended for single‑tenant inference or multi‑tenant SaaS?  
3. Do we need real‑time latency (<10 ms) or batch processing?  
4. How many concurrent requests per second should it support?  
5. What security and compliance requirements (data isolation, GDPR)?

**Approach**  
1. **Gateway** – front‑end API that validates auth, rate limits, routes to the correct model instance.  
2. **Serving Platform** – backend that manages GPU/CPU resources, loads models, handles batching, scaling, and fault tolerance.

**Depth**  
- The gateway uses a lightweight reverse proxy (e.g., Envoy) with JWT validation and per‑user quota enforcement.  
- It forwards requests to the serving platform via gRPC, adding metadata for routing.  
- Serving platform runs on Kubernetes; each pod hosts one or more model replicas managed by an inference scheduler (KServe, TorchServe).  
- Batch inference is achieved using token‑level batching: accumulate up to *N* requests, concatenate inputs, run a single forward pass, then split outputs.  
- Latency: per‑request head‑start cost (~2 ms) + batch latency (≈30 ms for 64 requests on V100).  
- Fault tolerance via pod autoscaling and graceful draining.

**Edge Cases**  
- Sudden spike → gateway throttles; serving platform scales pods.  
- Model drift or corruption → health checks fail, route to fallback model.  
- Mixed‑precision vs. FP32: ensure correct precision per request type.

**Optimize & Communicate**  
To reduce tail latency, implement *dynamic batching* and *request coalescing*. Use a circuit breaker for overloaded services. I’d explain this flow diagrammatically in the interview, emphasizing how the gateway abstracts security while the serving platform focuses on efficient compute utilization. This showcases end‑to‑end understanding of production LLM deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
