---
qid: ing_747a153c43__star__local
question: 'Explain: Model Training — Inside Kaiju - building conversational models
  at scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 344
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:27:17-05:00'
sources: []
---

**Situation** – At Kaiju I was part of a product team tasked with launching a new customer‑support chatbot for our e‑commerce platform. The existing model could answer only about 30 % of user intents and had latency issues when scaled to millions of concurrent users.  

**Task** – My goal was to build a robust, low‑latency conversational model that could handle at least 80 % intent coverage while keeping inference time under 200 ms per request across 10 k+ daily sessions.

**Action** – I led the data pipeline: scraped and annotated 1.2M dialogue turns from live chat logs, then used a multi‑label classification approach with RoBERTa fine‑tuned on a distributed GPU cluster (NVIDIA A100s). To reduce latency, I distilled the model into a lightweight DistilBERT variant, quantized to int8, and deployed it via Kaiju’s custom inference microservice using ONNX Runtime. We also implemented an adaptive sampling strategy for low‑frequency intents, boosting coverage without bloating the model size.

**Result** – The new chatbot achieved 86 % intent accuracy on a held‑out test set and reduced average response time to 145 ms. User satisfaction scores rose from 3.2 to 4.5 out of 5, and we cut support tickets by 32 %. I learned that balancing model complexity with deployment constraints is critical for real‑world conversational AI at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
