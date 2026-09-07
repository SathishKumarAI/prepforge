---
qid: ing_cf9bf85640__faang__local
question: 'Explain: Latency tiers (the core design decision)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 463
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:43:07-05:00'
sources: []
---

**Clarify**  
You’re asking how we decide *latency tiers*—i.e., the acceptable response time buckets for an AI‑powered service (e.g., <10 ms “real‑time”, 10–100 ms “interactive”, >100 ms “batch”). Confirm assumptions: is this for inference, training, or both? What SLA targets exist? Which workloads dominate traffic?

**Approach**  
1. **Map user experience** → Identify critical paths and how latency impacts perception.  
2. **Profile workloads** → Measure per‑component times (model loading, GPU/CPU inference, I/O).  
3. **Define tiers** based on business impact:  
   * Tier A – <10 ms for live‑video or AR.  
   * Tier B – 10–100 ms for chatbots and recommendation engines.  
   * Tier C – >100 ms for analytics, batch scoring.  
4. **Assign resources** → Provision GPUs, CPUs, or edge devices per tier; use autoscaling policies tied to SLA thresholds.

**Depth**  
- Use a *latency budget* per request: subtract infrastructure overhead from target to allocate to model inference.  
- Optimize models with quantization/knowledge distillation for Tier A/B.  
- Cache embeddings and partial results in Tier B.  
- For Tier C, schedule on spot instances or CPU clusters; no strict latency enforcement needed.  
Complexity: profiling O(n) requests; autoscaling decision O(log m). Trade‑off between overprovisioning (cost) and SLA violations.

**Edge Cases**  
- Sudden traffic spikes → fallback to Tier C temporarily.  
- Model drift causing longer inference times → trigger re‑optimization pipeline.  
- Network partitions affecting edge nodes → route to cloud Tier B/B+.

**Optimize & Communicate**  
Iteratively tighten the latency budget, monitor with distributed tracing (e.g., OpenTelemetry), and adjust tier thresholds quarterly. Explain that tiers align engineering effort with user impact, ensuring cost‑effective scaling while meeting diverse AI workload demands.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
