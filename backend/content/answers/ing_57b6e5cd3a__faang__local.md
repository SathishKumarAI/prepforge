---
qid: ing_57b6e5cd3a__faang__local
question: 'Explain: Resource state monitoring and alerting — Event-Driven Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 470
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:07:40-05:00'
sources: []
---

**Clarify**  
You’re asking how an event‑driven architecture can monitor ML resource states (CPU, GPU, memory, queue depth, model latency) and generate alerts when thresholds are breached. I’ll assume we’re dealing with a cloud‑native pipeline that runs many models in containers or serverless functions, and that we need near‑real‑time visibility without polling.

**Approach**  
1. **Instrumentation** – expose Prometheus‑style metrics from each container (or use CloudWatch/Stackdriver).  
2. **Event bus** – push metric snapshots to a lightweight broker (Kafka/Kinesis) whenever a value crosses a threshold or on a scheduled interval.  
3. **Processing layer** – run a stream processor (KSQL, Flink, Lambda) that aggregates metrics, applies rules, and emits an “alert” event when limits are exceeded.  
4. **Alerting sink** – consume alert events in a notification service (SNS, PagerDuty, Slack webhook).  

**Depth**  
- Metrics: `cpu_utilization`, `gpu_mem_used`, `model_latency_ms`, `queue_depth`.  
- Rules can be declarative (`if latency > 200ms for >5s`) or ML‑based anomaly detection.  
- Complexity: O(1) per metric update; stream processor scales linearly with event rate.  
- Trade‑offs: Polling (less real‑time, simpler) vs. push (higher latency but lower overhead).

**Edge Cases**  
- **Burst traffic** can flood the broker – use backpressure or batch windows.  
- **Metric skews** (e.g., transient spikes) – apply smoothing or hysteresis.  
- **Missing metrics** – detect gaps and alert on observability loss.

**Optimize & Communicate**  
I’d start with a minimal viable pipeline: Prometheus + Kafka + Lambda, then iterate by adding ML‑based anomaly detection for smarter alerts. I’ll explain each component’s responsibility, how they decouple concerns, and quantify latency (e.g., <100 ms from spike to alert). This shows clear problem framing, architectural insight, and practical depth—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
