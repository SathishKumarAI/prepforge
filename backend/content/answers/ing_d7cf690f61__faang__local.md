---
qid: ing_d7cf690f61__faang__local
question: A chat assistant re-sends a long conversation history on every turn. How
  do you avoid recomputing all of it, and what are the pitfalls?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 444
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:01:27-05:00'
sources: []
---

**Clarify**  
The system receives a user message and must send back the entire chat context to the LLM each turn. Re‑sending the full history is expensive in bandwidth, latency, and token limits. I’ll assume: (1) we can store the conversation locally; (2) the LLM accepts a single prompt; (3) there’s no external state that must be recomputed per turn.

**Approach**  
1. **Incremental context build** – keep an ordered list of messages.  
2. **Sliding window / summarization** – truncate or compress older turns so the prompt stays within token limits.  
3. **Cache LLM outputs** – memoize the model’s response for a given context to avoid recomputation when nothing changes.

**Depth**  
*Maintain a ring buffer* of the last N messages (e.g., 20). When a new message arrives, append it and drop the oldest. *Optional summarization*: run a lightweight summarizer on chunks older than N or after every K turns, replacing them with a single “summary” token. Complexity: O(1) append/drop per turn; summarizer adds amortized O(M) where M is number of words in the chunk. Cache lookup is O(1). Pitfalls include stale summaries that misrepresent earlier context and cache invalidation when new user intent changes interpretation.

**Edge Cases**  
- Very long single messages: need to split or truncate.  
- Context switches (e.g., new topic): force a reset of the buffer.  
- User edits previous turns: requires re‑summarizing affected segments.  
- Multi‑user conversations: separate buffers per session.

**Optimize & Communicate**  
Explain that we trade a small amount of extra compute for linear time complexity and bounded prompt size, ensuring predictable latency. Highlight that summarization quality directly impacts downstream accuracy, so we’d monitor F1/accuracy on held‑out dialogs and adjust window size or summarizer thresholds accordingly. This keeps the system responsive while avoiding recomputing the entire history each turn.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
