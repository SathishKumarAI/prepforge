---
qid: ing_fc03847ccd__eli5__local
question: 'Explain: Monitoring and Alerting — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 224
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:14:03-05:00'
sources: []
---

**Imagine your machine‑learning model is a tiny, automated greenhouse that grows data‑driven crops (predictions).**  
*Monitoring* is like installing smart sensors on the greenhouse walls: they record temperature, humidity, and light levels—here, they track metrics such as prediction latency, error rates, and resource usage. *Alerting* is the alarm system that sounds when a sensor reports something off‑track, e.g., if the model’s accuracy drops below 95 % or CPU spikes past a threshold.

When an alert fires, engineers receive a clear message: “Model latency > 200 ms” or “Batch job failed.” They can then investigate—maybe retrain with new data, scale the inference server, or roll back to a stable model version.  

By continuously watching these metrics and reacting quickly to alarms, the ML system stays reliable, just as a greenhouse keeps its plants healthy by promptly fixing any environmental problem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
