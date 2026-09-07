---
qid: ing_91a6c6fd04__faang__local
question: 'Explain: Troubleshooting by Layer — OSI Model | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 425
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:22:44-05:00'
sources: []
---

**Clarify**  
The interviewer wants a layered approach for diagnosing ML pipeline failures, analogous to the OSI model in networking. I’ll assume we’re dealing with a production‑grade stack: data ingestion → feature extraction → training → inference → serving.  

**Approach**  
Treat each layer as an isolated “protocol” that passes only its defined payload (e.g., raw logs, transformed features). When a fault appears, isolate the layer by validating its input/output contract before moving to the next.

1. **Application Layer – Business logic**  
2. **Presentation Layer – API/serving**  
3. **Session Layer – Feature store/session persistence**  
4. **Transport Layer – Data pipeline (Kafka/Spark)**  
5. **Network & Physical Layers – Storage, compute, networking**

**Depth**  
*Data Ingestion*: Check schema drift, missing partitions, back‑pressure metrics.  
*Feature Store*: Validate freshness, TTLs, consistency across shards.  
*Training Service*: Monitor GPU utilisation, loss curves, overfitting signals.  
*Inference Endpoint*: Latency SLA violations → check batch vs real‑time routing, model version mismatch.  
*Observability*: Log correlation IDs, use distributed tracing (OpenTelemetry) to map a request through layers.

**Edge Cases**  
- Non‑deterministic data drift causing subtle feature shifts.  
- Backwards‑compatibility of serialized models across versions.  
- Network partition leading to stale feature reads.  
- Data poisoning attacks disguised as “random noise”.

**Optimize & Communicate**  
Automate health checks per layer, publish metrics to a central dashboard, and set up alerts on contract violations. Explain to the team how this layered debugging reduces mean‑time‑to‑resolution by localising faults early—just like OSI’s abstraction layers simplify network troubleshooting. This demonstrates structured thinking, deep technical grasp, and clear communication—all key for a FAANG interview score.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
