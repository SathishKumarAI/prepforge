---
qid: ing_237a024f20__star__local
question: How would you implement sub-question decomposition, and when does it make
  things worse?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 310
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:39:52-05:00'
sources: []
---

**Situation** – At my previous company we were building a conversational agent for customer support that needed to answer multi-step queries like “Can I return an item bought last week and what is the refund timeline?” The model kept producing monolithic responses, often missing intermediate steps and confusing users.

**Task** – I had to redesign the inference pipeline so that each user request was broken into atomic sub‑questions, answered sequentially, then stitched back together for a coherent reply, while keeping latency under 800 ms per turn.

**Action** – I implemented a lightweight intent recognizer using spaCy to detect question boundaries, then fed the tokenized sub‑queries into our existing transformer. To preserve context I cached the previous answer and passed it as a prefix to the next step. I also added a fallback that reverts to the monolithic model if the decomposition adds more than 30 ms or if the sub‑query count exceeds five, preventing runaway complexity.

**Result** – User satisfaction scores rose from 78 % to 92 %, and average response time stayed at 750 ms. I learned that decomposition works best when queries naturally split into discrete facts; it can hurt performance on highly interdependent questions or when the overhead of managing multiple passes outweighs clarity gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
