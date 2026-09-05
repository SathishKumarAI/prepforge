---
qid: ing_2d2d01d3b0__star__local
question: 'Explain: Pitfall 19: Ignoring Hallucination Risk — Common Pitfalls'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 338
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:58:20-05:00'
sources: []
---

**Situation** – I was leading a prototype for an internal knowledge‑base chatbot that pulled from our legacy documentation and a few public APIs. The team had a tight two‑week sprint to deliver a demo for the product council.  
**Task** – Build a “smart” assistant that could answer technical questions in real time while keeping response latency below 800 ms, so we could show it live during the meeting.  
**Action** – I opted to use an open‑source LLM with minimal fine‑tuning because of the time constraint. We deployed the model directly into our stack and set up a simple prompt that concatenated the user query with the top‑retrieved document snippets. No hallucination mitigation was added; we relied on the retrieval step alone to keep facts correct. During the demo, the bot started fabricating code snippets and citing nonexistent API endpoints, which embarrassed us in front of executives. I immediately rolled back the deployment, introduced a confidence‑scoring filter, and integrated an external fact‑checking service that flagged any answer with less than 85 % retrieval overlap.  
**Result** – The revised bot passed all user tests with <5 % hallucination rate, maintained sub‑800 ms latency, and was approved for production rollout. I learned that ignoring hallucination risk can turn a promising feature into a liability; incorporating verification layers early is essential even under tight deadlines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
