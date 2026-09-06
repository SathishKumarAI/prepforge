---
qid: ing_b334bb847d__fp__local
question: 'Explain: Cut costs — Event-Driven Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 481
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:24:54-05:00'
sources: []
---

**Why Event‑Driven Architecture (EDA) cuts ML costs**

The core problem in an ML platform is *compute idleness*: training and inference pipelines are built as monoliths that run on a fixed cluster, paying for CPU/GPU time even when no data arrive or models are idle.  
EDA replaces the monolithic schedule with *data‑driven triggers*. Each model, feature store, or preprocessing step publishes an event (e.g., “new batch ready”, “label updated”) and subscribes to events it cares about. The execution engine (serverless functions, container‑orchestrated workers) spins up only when an event is received, executes the minimal task, then scales down.

1. **Pay‑per‑execution** – Cloud providers bill for actual runtime; idle nodes are eliminated.  
2. **Fine‑grained parallelism** – Independent events can be processed concurrently on lightweight containers, reducing queue latency and improving resource utilization.  
3. **Automatic scaling** – During peak data ingestion the system auto‑spawns workers; during quiet periods it throttles them down.  
4. **Observability & cost attribution** – Every event carries metadata (source, payload size, model version), allowing precise billing per pipeline component.

**Non‑obvious insight:**  
By treating *model inference* as an event source rather than a polling endpoint, you can integrate *dynamic batching*. When multiple inference requests arrive within the same micro‑window, they are coalesced into one batch job. This not only reduces per‑request latency but also amortizes GPU overhead, yielding a 30–50 % cost reduction that most teams miss because they assume a one‑to‑one request‑to‑worker mapping.

In short, EDA transforms ML workloads from “run everything all the time” to “run exactly what’s needed when it’s needed”, aligning compute consumption with data flow and thus cutting operational costs dramatically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
