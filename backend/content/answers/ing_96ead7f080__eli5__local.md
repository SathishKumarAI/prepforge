---
qid: ing_96ead7f080__eli5__local
question: What do you mean by “Event-Driven”? — What do you mean by \u201cEvent-Driven\u201d?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 178
total_tokens: 353
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:37:12-05:00'
sources: []
---

In machine learning, **event‑driven** means the system waits for a specific trigger—an “event”—before it does anything. Think of a smart home alarm: it sits idle until someone opens a door (the event). Only then does it start recording video and alerting you. Similarly, an event‑driven ML model stays inactive until a particular input appears—a sensor reading that crosses a threshold, a user clicking “predict,” or new data arriving. Once the event fires, the model loads, processes the data, and returns its prediction or recommendation. This contrasts with a batch approach where the model runs on a fixed schedule regardless of whether anything useful has happened. Event‑driven ML is efficient because it only uses resources when needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
