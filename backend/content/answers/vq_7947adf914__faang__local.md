---
qid: vq_7947adf914__faang__local
question: What's the acceptable latency?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 490
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:18:06-05:00'
sources: []
---

**Clarify**  
The question asks for a *target* end‑to‑end latency that is “acceptable” in a data‑engineering context. I’d first confirm:  
1. What pipeline type? (batch vs streaming)  
2. Which stakeholders drive the SLA (e.g., dashboards, ML inference, alerts)?  
3. Are we talking ingestion, processing, or query latency?  

**Approach**  
- Define a **latency budget** per stage.  
- Use *observability* to measure current values and identify bottlenecks.  
- Iterate: optimize the highest‑cost segments until the overall SLA is met.

**Depth**  
| Stage | Typical Target | Rationale |
|-------|----------------|-----------|
| Ingestion (Kafka, Kinesis) | < 5 s | Near‑real‑time analytics; buffer limits |
| Buffer → Compute (Spark Structured Streaming / Flink) | 30–60 s | Allows windowed aggregation while keeping drift minimal |
| Query/Serving (Druid, ClickHouse) | ≤ 1 s | Interactive BI dashboards |
| ML inference (batch model scoring) | < 10 min | Batch jobs run nightly; user experience tolerates minutes |

These numbers come from industry benchmarks: e.g., a 5‑second ingestion latency keeps back‑pressure low; 30‑sec streaming windows balance freshness vs. resource usage.

**Edge Cases**  
- **Spike in traffic** → back‑pressure, increased lag.  
- **Data skew** → outliers in processing time.  
- **System failures** → cascading delays beyond budget.  
Tests: synthetic load with burst patterns; simulate node failures; validate that SLA holds at 95th percentile.

**Optimize & Communicate**  
1. **Partitioning & sharding** to reduce contention.  
2. **Adaptive batch sizing** for streaming engines.  
3. **Incremental compression** to speed I/O.  
Explain trade‑offs: e.g., smaller windows mean higher CPU but fresher data; larger buffers reduce churn but increase latency.

By framing the answer with clear assumptions, a staged plan, concrete numbers, edge‑case awareness, and optimization rationale, we hit the structured, communicative style that FAANG interviewers prize.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
