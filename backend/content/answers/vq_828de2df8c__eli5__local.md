---
qid: vq_828de2df8c__eli5__local
question: How do you monitor and debug ADF pipelines?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 246
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:18:11-05:00'
sources: []
---

Imagine your Azure Data Factory (ADF) pipeline as a **train track** that moves data from one station to another.  
Monitoring is like watching the train’s GPS: the ADF *monitoring pane* shows each “trip” (pipeline run), its status (success, warning, or failure), and how long it took. Think of the **run history** as a logbook where you can click a trip to see every “stop” (activity) it made.

Debugging is like troubleshooting a stalled train. When an activity fails, ADF gives you a *failure message* and a *debug console*—just as a conductor would check the engine’s error lights. You can replay a run with **debug mode**, which re‑runs only the failed part and lets you inspect input and output data right there, like pulling the train’s brakes to see why it stalled.

So, keep an eye on the GPS (monitor pane), read the logbook (run history), and when something breaks, use the debug console to investigate—just as a conductor would diagnose a train issue.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
