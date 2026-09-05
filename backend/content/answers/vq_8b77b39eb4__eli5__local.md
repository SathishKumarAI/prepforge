---
qid: vq_8b77b39eb4__eli5__local
question: Q3). How do you handle the frequency of data in ADF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 252
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:19:19-05:00'
sources: []
---

Think of Azure Data Factory (ADF) like a well‑tuned kitchen where recipes (data pipelines) run at the right times. The “frequency of data” is simply how often you want each recipe to be cooked—every minute, every hour, once a day, or only when something changes.

In ADF you set this with **triggers**:

* **Schedule trigger** – like setting an alarm clock; it tells ADF to start the pipeline at fixed times (e.g., 2 AM daily).  
* **Event trigger** – like a doorbell that rings whenever new data lands in a storage folder; it starts the pipeline right after the file appears.  
* **Tumbling window trigger** – like a conveyor belt that groups items into regular batches (every 30 minutes) and processes them together.

You pick the trigger that matches how often your source updates, and ADF takes care of running the data flow at those moments. If you need to change the rhythm, just adjust the trigger’s settings—no code changes needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
