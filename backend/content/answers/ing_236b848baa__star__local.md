---
qid: ing_236b848baa__star__local
question: A generation fails halfway through the stream. What does good error and
  retry UX look like?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 335
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:39:52-05:00'
sources: []
---

**Situation:** While working on a real‑time customer support chatbot for a telecom client, we streamed AI-generated responses over WebSocket to the front‑end. During load testing, half of the sessions terminated mid‑stream with a “Connection Reset” error, leaving users staring at an empty chat bubble.

**Task:** I had to design a seamless retry UX that preserved context, avoided duplicate messages, and kept latency low so customers didn’t feel a disconnection.

**Action:** First, I added a lightweight client‑side buffer that stored the last 200 characters of the partial stream. On error detection, the front‑end sent a “resume” request with a unique session token and the offset. The server’s AI endpoint used the OpenAI `chat.completions` API with the same system prompt and user context, plus the offset to continue from where it left off. I wrapped this in an exponential backoff strategy: first retry after 1 s, then 2 s, capped at three attempts. Meanwhile, I displayed a subtle “Reconnecting… (attempt X of 3)” spinner so users knew something was happening.

**Result:** Post‑deployment, error rates dropped from 12% to <0.5%. User satisfaction scores rose by 18 points on the NPS survey, and the average perceived latency stayed under 350 ms even after a retry. I learned that coupling lightweight client buffers with server‑side offset resumption delivers a frictionless experience when AI streams fail.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
