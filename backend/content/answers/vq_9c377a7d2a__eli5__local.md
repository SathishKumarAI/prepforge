---
qid: vq_9c377a7d2a__eli5__local
question: How can you trigger pipeline based on file arrival in ADLS ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 235
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:21:49-05:00'
sources: []
---

Think of your data lake as a giant mailbox that opens every day.  
A **pipeline** is like a mail‑handler robot: it picks up letters, sorts them, and delivers the right ones to the next step in your workflow.

When you want the robot to start automatically as soon as a new letter (file) lands in the mailbox (ADLS), you set up an **event trigger**.  
In Azure, that means telling the data‑factory service, “watch this folder; when a file is added or changed, fire my pipeline.”  

You do it with a small rule called a **Blob event**: you point it at your ADLS container and specify the action (e.g., `Microsoft.Storage.BlobCreated`).  
When the event fires, Azure Data Factory launches the pipeline right away, just like a doorbell that rings as soon as someone drops mail in.  

No manual checks or polling needed—your robot reacts instantly to new data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
