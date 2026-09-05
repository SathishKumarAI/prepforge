---
qid: vq_0415fec04a__eli5__local
question: Can you explain each type of trigger in ADF and their use cases?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 343
total_tokens: 506
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:01:11-05:00'
sources: []
---

Imagine a smart kitchen where every dish must start at the right moment.  
In Azure Data Factory (ADF) the **triggers** are that kitchen’s timing system.

| Trigger type | Kitchen‑style image | What it does |
|--------------|---------------------|--------------|
| **Schedule trigger** | A clock‑set timer that rings at 6 a.m., noon, and 6 p.m. | Starts a pipeline on a fixed calendar (e.g., nightly ETL). |
| **Tumbling window trigger** | A conveyor belt that moves in equal, non‑overlapping segments of time – first 1 hour, then next 1 hour, etc. | Runs the same pipeline for each discrete time block, great for incremental data loads where you need a clear “window” (e.g., daily sales). |
| **Event trigger** | A doorbell that rings whenever someone enters the kitchen. | Fires a pipeline in response to an event such as a new file arriving in Blob storage or a message appearing on a Service Bus queue, ideal for real‑time data ingestion. |

Each type matches a different cooking style: planned batch meals (schedule), regular batches that never overlap (tumbling window), and instant recipes triggered by fresh ingredients (event). Choose the one that fits how your data “arrives” and when you want it processed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
