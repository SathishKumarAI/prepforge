---
qid: ing_5fc321515a__eli5__local
question: 'Explain: Choose UDP When — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 212
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:08:31-05:00'
sources: []
---

Imagine you’re sending a package to a friend. **TCP** is like mailing it with a tracking number, signature at delivery, and automatic re‑send if something goes wrong. It guarantees the package arrives whole and in order, but it takes time and adds overhead.

**UDP** is like dropping a postcard on your friend’s porch: no tracking, no guarantee of arrival, no waiting for confirmation. The card gets there quickly, but if the wind blows or someone grabs it, you won’t know until you ask.

In machine‑learning systems, use **UDP** when you need speed and can tolerate occasional loss—like streaming live sensor data to a model that can handle gaps. Use **TCP** when accuracy matters more than latency—such as sending training batches where every piece must arrive intact. The key trade‑off: reliability vs. low‑delay, minimal overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
