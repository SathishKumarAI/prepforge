---
qid: vq_69b73fdb20__star__local
question: How does text generation with Generative AI work?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 338
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:02:41-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were building an automated customer support bot that could draft personalized responses to user queries in real time. The existing rule‑based system was slow and produced repetitive answers, so the product manager asked me to prototype a generative AI model.

**Task** – I needed to design a pipeline that could ingest user intent, generate fluent, context‑aware replies within 300 ms, and stay compliant with our data privacy policies. The goal was a 40 % reduction in average handling time while keeping the accuracy of sentiment detection above 90 %.

**Action** – I started by fine‑tuning an open‑source transformer (GPT‑2) on our internal conversation logs, adding a custom token for each user segment to preserve personalization. To meet latency constraints, I deployed the model with ONNX Runtime and used dynamic quantization, which cut inference time from 650 ms to 280 ms. I wrapped the generator in an API that filtered out disallowed content via a post‑processing blacklist and logged every output for auditability.

**Result** – The bot handled 1,200 tickets per hour with an average response time of 270 ms, cutting handling time by 43 %. User satisfaction scores rose from 3.8 to 4.5 out of 5, and we avoided any data leakage incidents during the pilot. I learned that balancing model size, quantization, and compliance layers is key to deploying generative AI at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
