---
qid: ing_f402a47a40__eli5__local
question: 'Explain: Data Pipeline — How Google/Apple Maps Blur License Plates and
  Faces'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 217
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:00:36-05:00'
sources: []
---

Imagine you’re sending a postcard through a city mail system that has a privacy rule: no one should see the writer’s face or any street sign that could identify a person. The **data pipeline** is like the route the postcard takes—first it goes into a “privacy filter” box, then travels to the next post office, and finally reaches its destination with all sensitive details blurred.

In Google/Apple Maps, each photo (or video) you take first enters an internal system where software scans for faces or license plates. Those detected regions are replaced by a gray‑box blur—just like covering a face on a postcard. After blurring, the image is compressed and sent to cloud servers that store it in a secure database. When you view the map later, the server delivers the already‑blurred image back to your device. This chain of steps—from capture, through automated detection and masking, to storage—ensures privacy while still letting the map show useful scenery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
