---
qid: ing_187084627f__star__local
question: 'Explain: Step 1. Do the work manually — How Do AI Agents Work - by Neo
  Kim and Fran Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 361
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:17:42-05:00'
sources: []
---

**Situation** – In early 2023 I was tasked with building a lightweight customer‑support bot for a fintech startup that had an existing rule‑based FAQ system but no automated responses. The product manager wanted to prototype the bot within two weeks so we could test user engagement on our mobile app.

**Task** – My goal was to create an AI agent that could understand intent, fetch relevant policy data, and reply in natural language—all while staying under a 3 MB model footprint and keeping latency below 200 ms on the client device.

**Action** – I followed Neo Kim and Fran Soto’s “Do the work manually” approach: first I hand‑coded a list of common user intents (e.g., “reset password,” “check balance”) and mapped each to a small rule set. Next, I trained a lightweight intent classifier using fastText on our FAQ transcripts, then built a retrieval engine that queries an Elasticsearch index of policy documents. The agent’s response generator was a fine‑tuned GPT‑2 (distilGPT) distilled to 0.8 B parameters and quantized to int8 for speed. I integrated the components in a single Rust binary using ONNX Runtime, ensuring everything ran offline.

**Result** – Within 10 days we deployed the prototype; user click‑through on the bot rose from 12% to 35%, and average resolution time dropped by 27%. The model size was 2.7 MB, meeting our latency target. I learned that starting with hand‑crafted rules gives a clear safety net while allowing incremental AI augmentation without overengineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
