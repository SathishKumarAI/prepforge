---
qid: ing_d71b568a02__star__local
question: 'Explain: Summary — Conversational AI latency: What is it and why it matters?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 314
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:38:57-05:00'
sources: []
---

**Situation** – At my previous role, we were launching a voice‑first customer support bot for an e‑commerce platform. The product manager set a KPI: every user query had to be answered within 300 ms to keep the “real‑time” feel.

**Task** – I was responsible for diagnosing and reducing the bot’s end‑to‑end latency while maintaining accuracy, especially during peak traffic (up to 2k concurrent users).

**Action** – First, I instrumented each stage: speech‑to‑text, intent classification, slot filling, policy inference, and text‑to‑speech. Using Azure Application Insights, I found the NLP inference engine was the bottleneck—each request took ~250 ms due to a 4‑layer transformer on CPU. I switched to a distilled BERT model running on an A100 GPU, cutting inference time to 60 ms. Next, I implemented async streaming of partial responses so users saw “processing” cues immediately. Finally, I added a caching layer for frequent intents, reducing redundant calls by 35 %.

**Result** – The average latency dropped from 480 ms to 140 ms, meeting the KPI and improving user satisfaction scores by 12 %. I learned that real‑time conversational AI hinges on profiling every microservice, choosing right model size, and providing visual feedback during processing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
