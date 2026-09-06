---
qid: ing_c07b5c2105__fp__local
question: 'Explain: Notes — Which Latency Numbers Should You Know?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 516
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:52:05-05:00'
sources: []
---

### Why Latency Matters

In a deployed model the **goal is to map an input *x* to an output *ŷ* as quickly as possible** while maintaining accuracy.  
Latency, formally the elapsed time from request arrival to response delivery, is a function of three coupled processes:

1. **Pre‑processing (Tₚ)** – feature extraction, tokenization, image resizing.  
2. **Computation (T_c)** – forward pass through the network, which depends on *model size*, *hardware throughput* and *parallelism*.  
3. **Post‑processing (Tₚᵒ)** – converting logits to human‑readable form.

The total latency is \(L = T_p + T_c + T_{p^{o}}\).  
Because inference pipelines are often **cascaded** (e.g., a lightweight detector followed by a heavy classifier), the *critical path* dominates: even if one stage is fast, a bottleneck elsewhere inflates \(L\).

### Key Latency Metrics

| Metric | Definition | When to Use |
|--------|------------|-------------|
| **End‑to‑End (E2E) latency** | Full \(L\) from request to response | User‑facing services |
| **Inference time** | \(T_c\) alone | Model benchmarking, hardware scaling |
| **Queue latency** | Time spent waiting before GPU/CPU execution | Multi‑tenant inference servers |
| **Service level agreement (SLA)** threshold | Max acceptable E2E latency | Regulatory or business constraints |

### Deeper Insight

Latency is fundamentally an *optimization* problem under a stochastic workload: we must allocate scarce compute resources to minimize the expected \(L\) while respecting capacity.  
A non‑obvious fact: **batching reduces per‑sample inference time but increases queue latency**; thus the optimal batch size depends on arrival rate and acceptable SLA, not merely on hardware throughput.

### Bottom Line

Know **E2E**, **inference**, and **queue** latencies separately, because each reveals a different bottleneck.  
The trade‑off between batching (throughput) and queueing (latency) is the key lever for meeting service guarantees in real‑world ML deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
