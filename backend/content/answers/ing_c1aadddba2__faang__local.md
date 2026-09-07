---
qid: ing_c1aadddba2__faang__local
question: Walk me through deploying a 70B open-weight model to production on Kubernetes.
  What breaks?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 487
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:11:25-05:00'
sources: []
---

**Clarify**  
You’re asking how to run a *70 billion‑parameter* open‑weight LLM (e.g., GPT‑3‑style) in production on Kubernetes, and what failure modes you’ll encounter. I’d confirm:  
- Expected request latency (<200 ms for inference).  
- Throughput target (tokens/s).  
- Whether the model is static or fine‑tuned per tenant.  
- Budget constraints for GPU nodes.

**Approach**  
1. **Model partitioning** – sharded across multiple GPUs (tensor & pipeline parallelism).  
2. **Containerization** – each shard runs in a sidecar pod with a lightweight inference engine (e.g., Triton/ONNX Runtime).  
3. **Service mesh** – gRPC gateway aggregates shards, handles load balancing and retries.  
4. **Autoscaling** – Cluster Autoscaler + Horizontal Pod Autoscaler on GPU usage and request queue depth.  
5. **Observability** – Prometheus metrics (GPU utilization, latency), Loki logs, Jaeger traces.

**Depth**  
- Use *DeepSpeed* or *Megatron‑LM* for efficient sharding; each pod hosts one shard (~10–15 B params).  
- Deploy on GPU nodes with NVLink for low‑latency inter‑node communication.  
- The gateway maintains a stateful session cache to reduce token recomputation.  
- Complexity: O(num_shards) memory, inference latency ≈ sum of per‑shard compute + network hops.  
- Trade‑offs: larger shards → fewer nodes but higher GPU cost; smaller shards → more nodes and networking overhead.

**Edge Cases**  
- *GPU failure*: pod restarts trigger shard reload; fallback to lower‑capacity model until replacement.  
- *Network partition*: gateway retries, circuit breaker opens after threshold.  
- *Model update*: blue/green rollout with canary traffic to avoid downtime.

**Optimize & Communicate**  
I’d iterate on shard size vs. latency using A/B tests, then document the deployment pipeline (CI/CD) and run‑book for failure scenarios. Presenting this roadmap shows clear problem framing, technical depth, and proactive risk mitigation—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
