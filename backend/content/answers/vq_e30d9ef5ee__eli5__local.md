---
qid: vq_e30d9ef5ee__eli5__local
question: Explain Types of Triggers in ADF ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 255
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:31:47-05:00'
sources: []
---

Imagine your data factory as a kitchen where recipes (pipelines) need to be cooked at the right moments.  
Triggers are like the kitchen timers that tell you *when* to start each recipe.

1. **Schedule Trigger** – A regular timer, just like setting an alarm for 7 a.m. every weekday. It starts a pipeline on a fixed clock schedule (e.g., every hour, daily).

2. **Event Trigger** – Think of it as a doorbell that rings when a new ingredient arrives. When a file lands in a storage folder or a message appears on Event Grid, the trigger fires immediately.

3. **Tumbling Window Trigger** – Picture a conveyor belt that groups items into batches (e.g., every 15 minutes). Each batch runs its pipeline once, ensuring no overlap and processing all data from that window.

4. **Custom Trigger** – A timer you program yourself, like a countdown that starts when another pipeline finishes or when a particular condition is met.

Each trigger type decides *when* the kitchen lights up; choosing the right one keeps your data flowing smoothly without waste or delay.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
