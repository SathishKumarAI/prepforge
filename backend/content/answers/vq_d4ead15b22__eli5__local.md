---
qid: vq_d4ead15b22__eli5__local
question: How do you handle exception in ADF ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 237
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:29:38-05:00'
sources: []
---

Imagine ADF is a busy train station where data trains (pipelines) run on tracks (activities). Sometimes a track can be blocked—maybe a sensor fails or a file is missing. In real life, the station would send an alarm and reroute the train; in ADF we do the same with **exception handling**.

1. **Set up a “branch”**: Add a *Switch* activity that looks at the result of your main step (success or failure).  
2. **Route failures to a separate path**: The “Fail” case can trigger an email, write a log entry, or start another pipeline that cleans up or retries.  
3. **Use “On Error” events**: In the pipeline’s settings you can specify what should happen if any activity fails—e.g., send a notification, pause the pipeline, or execute a cleanup flow.

So, just like a station redirects a stalled train to keep traffic moving smoothly, ADF lets you define clear reactions for every failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
