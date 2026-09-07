---
qid: ing_b7866d7245__faang__local
question: Your product is moving from a standard chat model to a reasoning model with
  extended thinking. What changes for capacity, SLOs, and design?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 442
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:49:43-05:00'
sources: []
---

**Clarify**  
You’re migrating from a token‑rate limited “chat” LLM to a multi‑step reasoning engine that chains sub‑models (retrieval, planning, execution). Confirm: *What is the target latency?* *Which metrics matter most (accuracy vs throughput)?* *Do you need deterministic output or probabilistic confidence?*

**Approach**  
1. **Capacity** – shift from single‑model inference to a pipeline of models; estimate total FLOPs per request.  
2. **SLOs** – define latency buckets for each stage and overall end‑to‑end SLA (e.g., 200 ms).  
3. **Design** – adopt a micro‑service architecture: orchestrator, retriever cache, planner, executor, post‑processor.

**Depth**  
- *Capacity*: If the chat model uses 10 B params at 1k tokens/second, a reasoning pipeline with retrieval (0.5×), planning (1×), execution (2×) may need ~4–6× GPU memory and compute.  
- *SLOs*: Use per‑stage latency percentiles; enforce back‑pressure on the orchestrator so slow stages throttle upstream.  
- *Design*: Employ async queues, circuit breakers, and a stateful session store to keep intermediate plans. Use model distillation or quantization for low‑latency “execution” steps.

**Edge Cases**  
- *Cold start* – retrieval cache misses cause spikes; warm‑up with dummy queries.  
- *Model drift* – reasoning outputs may diverge; monitor confidence scores and roll back if below threshold.  
- *Resource contention* – simultaneous heavy workloads can exceed GPU quotas; use autoscaling.

**Optimize & Communicate**  
- Profile each stage, prune redundant steps, batch retrievals.  
- Communicate trade‑offs: higher accuracy ↔ longer latency; more compute ↔ tighter SLOs.  
- Present a cost–benefit matrix to stakeholders, highlighting expected gains in user satisfaction versus infrastructure spend.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
