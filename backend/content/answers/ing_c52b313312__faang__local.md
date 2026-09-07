---
qid: ing_c52b313312__faang__local
question: 'Explain: Sync vs Async Processing — 10 System Design Tradeoffs You Cannot
  Ignore'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 872
total_tokens: 1111
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:19:17-05:00'
sources: []
---

## Clarify  
The interview asks for the trade‑offs that arise when choosing **synchronous** (blocking) versus **asynchronous** (non‑blocking) processing in ML systems.  
*Assumptions to confirm:*  
- Target workload: inference vs training?  
- Latency sensitivity of downstream services.  
- Throughput requirements and batch sizes.  
- Infrastructure constraints (GPU/CPU, networking).  

## Approach  
1. List 10 key trade‑offs that impact system design.  
2. For each, explain the implication on latency, throughput, resource utilization, fault tolerance, and complexity.  
3. Provide concrete examples or metrics when possible.  

## Depth – Trade‑off Summary  

| # | Trade‑off | Sync Impact | Async Impact | Typical ML Scenario |
|---|-----------|-------------|--------------|---------------------|
| 1 | **Latency vs Throughput** | Low latency, lower throughput; each request waits for a GPU slot. | Higher throughput by queuing jobs; per‑request latency increases due to queue wait. | Real‑time inference (sync) vs batch model training (async). |
| 2 | **Resource Utilization** | Idle GPU cycles when waiting for I/O or CPU pre‑processing. | Keeps GPUs busy via back‑pressure; better utilization of compute. | Large GPU clusters for nightly training jobs. |
| 3 | **Scalability & Elasticity** | Harder to scale horizontally; need dedicated servers per request. | Easy to add workers; message brokers (Kafka, SQS) buffer load spikes. | Serving millions of predictions per day. |
| 4 | **Complexity & Debugging** | Simpler control flow, easier to trace end‑to‑end latency. | Requires distributed tracing, idempotency handling, eventual consistency. | Distributed recommendation pipelines. |
| 5 | **Fault Tolerance & Retry** | Failures propagate immediately; simpler retry logic. | Need durable queues and deduplication; more resilient but harder to guarantee order. | Training jobs that can be retried on node failure. |
| 6 | **Consistency Guarantees** | Strong ordering – request processed in sequence. | Weak ordering unless extra coordination added; potential stale model usage. | Online A/B testing of new models. |
| 7 | **Cost Implications** | Pay for instant compute (e.g., spot GPU instances may be idle). | Can batch jobs on cheaper, larger pools; reduces per‑job cost. | Nightly hyper‑parameter search. |
| 8 | **Monitoring & Observability** | Latency metrics are straightforward; can use APM traces. | Need queue depth, back‑pressure metrics, and job lifecycle dashboards. | Multi‑tenant inference service. |
| 9 | **Data Freshness / Drift Handling** | Immediate model update possible; latency of reloading model. | Model updates propagate asynchronously; may serve slightly stale weights. | Online learning pipelines with periodic retraining. |
|10 | **Security & Isolation** | Easier to sandbox per request (e.g., separate container). | Shared workers increase attack surface; need careful isolation. | Serving untrusted user‑generated models. |

## Edge Cases  
- Sudden traffic spikes causing queue backlog → back‑pressure must be throttled.  
- Long‑running async jobs that exceed TTL in the broker → implement retry & dead‑letter queues.  
- Sync inference on a GPU cluster may starve other critical jobs; need priority scheduling.

## Optimize & Communicate  
- **Hybrid**: Use sync for latency‑critical predictions, async for heavy training or batch scoring.  
- **Adaptive Queuing**: Dynamically adjust queue size based on real‑time GPU utilization.  
- **Narration**: “We’ll start with a synchronous API for the mobile app to keep UX snappy; for nightly retraining we shift to an asynchronous pipeline that feeds into our model registry, ensuring high throughput without compromising cost.”  

By framing these trade‑offs in terms of measurable system properties and real ML use‑cases, you demonstrate both depth and structured thinking—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
