---
qid: ing_999ef1cfad__star__local
question: 'Explain: Short-Term Context Management — Short Term Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 268
total_tokens: 503
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:39:49-05:00'
sources: []
---

**Situation** – While working on a real‑time customer support chatbot for a telecom provider, the model’s response latency spiked to 2 seconds during peak hours, causing churn complaints.

**Task** – I had to reduce context processing time by at least 50% without sacrificing answer relevance, keeping the user experience smooth under load.

**Action** – First, I profiled the token‑embedding pipeline and discovered that every turn re‑computed embeddings for the entire conversation history. I refactored it to use a sliding window of the last five turns, caching their embeddings in Redis with LRU eviction. Then I switched from the full GPT‑3.5 embedding endpoint to an on‑prem Whisper‑based lightweight encoder, cutting inference cost by 70%. Finally, I added a priority queue that throttles background context updates during traffic spikes, ensuring the model always had fresh short‑term context.

**Result** – Latency dropped from 2 seconds to 0.8 seconds, improving NPS by 12 points and reducing server costs by 35%. I learned that efficient short‑term context handling is as much about architecture as it is about model choice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
