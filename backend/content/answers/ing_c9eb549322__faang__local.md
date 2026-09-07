---
qid: ing_c9eb549322__faang__local
question: 'Explain: Throughput — Latency vs Throughput vs Bandwidth | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 510
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:29:13-05:00'
sources: []
---

**Clarify**  
You’re asking how *latency*, *throughput*, and *bandwidth* differ when designing an ML inference system (e.g., a recommendation engine). I’ll assume we’re measuring request‑level latency, total requests processed per second, and the raw data rate between components.

**Approach**  
1. Define each metric formally.  
2. Map them to ML pipeline stages (pre‑processing → model inference → post‑processing).  
3. Illustrate trade‑offs with a simple diagram or example.  
4. Quantify typical values for a production model.

**Depth**  

| Metric | Definition | Typical ML Context |
|--------|------------|--------------------|
| **Latency** | Time from request arrival to response emission (ms). | Inference latency often < 10 ms for real‑time ads, > 100 ms acceptable for batch scoring. |
| **Throughput** | Requests processed per second (RPS). | A model serving 1M RPS needs ~10 k instances if each handles 100 RPS. |
| **Bandwidth** | Data rate across a link (MB/s). | Model size (~50 MB) + input vector (~1 KB) → 51 MB per request; at 1 M RPS → 51 TB/s, unrealistic—so we shard model or use quantization. |

*Trade‑offs*: Reducing latency by adding GPU replicas increases throughput but also raises bandwidth (more traffic to GPUs). Compressing inputs lowers bandwidth but may hurt accuracy.

**Edge Cases**  
- **Burst traffic**: Throttle to avoid saturating GPU memory → latency spikes.  
- **Model updates**: Rolling deployments can temporarily drop throughput.  
- **Cold starts**: First request latency high; use pre‑warm or serverless warm pools.

**Optimize & Communicate**  
1. Profile each stage (CPU vs GPU).  
2. Use model quantization to cut bandwidth by 4× with < 1% accuracy loss.  
3. Cache frequent embeddings to shave latency.  
Explain that the goal is a balanced design: keep latency below SLA, maintain target RPS, and stay within network capacity. This structured reasoning demonstrates clear problem framing, systematic analysis, and actionable trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
