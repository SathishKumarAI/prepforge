---
qid: ing_f57dfabec7__faang__local
question: When do you use distributed tracing? — What is Distributed tracing?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 384
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:10:45-05:00'
sources: []
---

**Clarify**  
*Question:* “When do you use distributed tracing?” – we first need to define *distributed tracing*: a system‑level diagnostic tool that records request flow across multiple services (e.g., microservices, serverless functions) by attaching trace IDs and span metadata.

**Approach**  
1. Identify scenarios where a single request spans many components.  
2. Decide if latency, error propagation, or debugging are the primary goal.  
3. Choose an instrumentation library (OpenTelemetry, Jaeger, Zipkin).  

**Depth**  
- **Latency‑profiling:** When end‑to‑end response time is high and you need to pinpoint which service introduces delay.  
- **Error correlation:** If failures propagate through a chain, tracing shows where the first fault occurred.  
- **Observability & SLIs:** For SLO compliance, you aggregate span metrics (e.g., % of requests above threshold).  
- **Capacity planning:** Trace data reveals bottlenecks that guide scaling decisions.  
Complexity: O(N) per request for N spans; storage and query costs grow with traffic volume.

**Edge Cases**  
- *High‑volume services:* Sampling rate must balance fidelity vs overhead.  
- *Stateless serverless functions:* Context propagation via headers is critical; missing headers break trace continuity.  
- *Security/privacy:* Sensitive payloads must be masked before sending to collectors.

**Optimize & Communicate**  
Start with a low sampling rate (e.g., 1 %) and instrument critical paths. Gradually increase as needed. Document the trace schema so downstream teams can query spans efficiently. When explaining to stakeholders, emphasize that distributed tracing turns opaque request pipelines into measurable units, enabling faster incident response and proactive performance tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
