---
qid: vq_b5d50083de__eli5__local
question: Describe the role of triggers in ADF pipelines ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 234
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:25:08-05:00'
sources: []
---

Think of an Azure Data Factory (ADF) pipeline as a factory line that moves data from one station to another—cleaning, transforming, loading it into a warehouse.  
A **trigger** is the factory’s alarm clock: it tells the line when to start or pause.  

- **Schedule trigger** wakes the line at fixed times (every hour, every day).  
- **Event‑based trigger** listens for a signal—like a new file dropping into an Azure Blob storage folder—and starts the pipeline as soon as that signal arrives.  
- **Tumbling window trigger** groups events into time windows (e.g., “process all files from 2 pm to 3 pm”) and runs once per window.

When the trigger fires, ADF hands off control to the pipeline, which then executes its defined activities in order. If you want your data flow to run automatically whenever new data appears or at regular intervals, you attach the appropriate trigger. Thus, triggers are simply the “start‑buttons” that make pipelines run without manual clicks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
