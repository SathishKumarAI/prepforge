---
qid: ing_b9690a7046__star__local
question: 'Q: What is the difference between "Model Context Window" and "Application
  Context Window"?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 352
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:42:12-05:00'
sources: []
---

**Situation**  
At a fintech startup we were building a customer‑support chatbot that needed to remember the user’s recent interactions while also handling regulatory compliance data. The LLM we chose had a 4,096‑token context window, but our application required storing longer conversation histories across multiple sessions.

**Task**  
I was tasked with designing an architecture that allowed us to keep the full dialogue history (over 10,000 tokens) without exceeding the model’s limit, while still delivering accurate responses in real time.

**Action**  
First, I split the “application context window” into two layers: a short‑term buffer of the last 2,000 tokens fed directly to the LLM, and a long‑term store using Redis Streams. When a request came in, I pruned older turns based on relevance scores (using TF‑IDF) and compressed them with zstd before pushing them into the stream. The “model context window” remained strictly the 4,096 tokens that were sent to the API each call. For each turn, I fetched the most relevant snippets from Redis, concatenated them with the short buffer, and passed that composite prompt to the model.

**Result**  
Response latency dropped to 1.2 s on average (down from 3.4 s), and user satisfaction scores rose by 18%. The architecture also allowed us to log compliance‑critical data separately without hitting the LLM’s token ceiling, teaching me how to balance application needs with model constraints through thoughtful caching and relevance filtering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
