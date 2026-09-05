---
qid: vq_0415fec04a__fp__local
question: Can you explain each type of trigger in ADF and their use cases?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 557
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:20:59-05:00'
sources: []
---

### ADF Triggers from First Principles  

At its core, a trigger is **a declarative “when‑to‑run” contract** that decouples *time* or *event* from *execution*.  
In Azure Data Factory (ADF) we have four families of triggers; each embodies a different optimisation principle:

| Trigger | Fundamental Problem Solved | Core Mechanism | Typical Use Case |
|---------|----------------------------|----------------|------------------|
| **Schedule** | “Run at fixed times” – like cron. | Uses UTC ISO‑8601 expressions to create a recurring job. | Daily nightly ETL, weekly reports. |
| **Event (Blob/Queue)** | “React immediately when data arrives.” | Listens to Azure Storage events via Event Grid; fires once per event. | Real‑time ingestion of log files or IoT telemetry. |
| **Tumbling Window** | “Process in deterministic, non‑overlapping partitions” – ideal for windowed analytics. | Defines a time slice (e.g., 1 h) that *always* has the same start/end; pipeline runs when window closes. | Hourly aggregations, lag‑aware data pipelines. |
| **Custom / REST** | “Trigger on external system’s signal.” | Exposes an HTTP endpoint; any caller can POST a payload to fire the pipeline. | CI/CD integration, on‑demand refresh from SaaS apps. |

#### Why they must work this way
- **Determinism vs. Event‑driven:** Schedule & tumbling windows guarantee *exact* run times, enabling downstream jobs that depend on precise timestamps.  
- **Event‑driven latency:** Event triggers trade off determinism for sub‑second response; the pipeline starts as soon as Azure Storage emits an event.  
- **Scalability:** Tumbling windows batch many events into a single window, reducing overhead and ensuring idempotent runs.

#### Non‑obvious insight
A tumbling window’s *start time* is not just a convenience—it guarantees that every run processes the same data slice even if the pipeline fails or restarts. This property lets you build **exactly‑once** semantics without complex deduplication logic, because windows never overlap and no data can be re‑processed unless explicitly retried.

---

In practice, pick the trigger whose optimisation principle (determinism, latency, batching) aligns with your business requirement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
