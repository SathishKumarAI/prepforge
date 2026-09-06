---
qid: ing_d7cf690f61__think__local
question: A chat assistant re-sends a long conversation history on every turn. How
  do you avoid recomputing all of it, and what are the pitfalls?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 209
output_tokens: 433
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:11:33-05:00'
sources: []
---

**1️⃣ Clarify the problem & set assumptions**  
- *What* is “re‑sending” – do we literally transmit the whole history or just send a prompt?  
- *Why* is it costly – network bandwidth, token limits, latency, model memory.  
- Assume a stateless server that must supply context on each request and a language model with limited input size.

**2️⃣ Adopt a layered mental model**  
- **Compression layer:** summarize or chunk the history into fixed‑size tokens.  
- **Caching layer:** store recent turns in memory (e.g., Redis, in‑process cache).  
- **Incremental update layer:** send only diffs/appendages rather than full history.

**3️⃣ Step‑by‑step reasoning**  
1. Keep a *running summary* of the conversation using an LLM or rule‑based summarizer.  
2. On each turn, fetch the latest user input + last N turns (or summary).  
3. Append new turn to cache; if cache exceeds token budget, prune oldest entries or replace with the compressed summary.  
4. Optionally use a “context window” trick: prepend only the most relevant snippets (retrieved via embeddings) instead of all text.

**4️⃣ Common pitfalls to avoid**  
- *Over‑compression*: losing nuance that later turns depend on.  
- *Stale cache*: serving outdated context if multiple concurrent users share state.  
- *Token budget mismanagement*: sending more tokens than the model can handle, causing truncation.  
- *Security leaks*: accidentally re‑sending sensitive data when caching.

**5️⃣ Sanity‑check & communicate**  
- Verify that the token count stays below the model’s limit before each request.  
- Log cache hits/misses and summarization quality metrics.  
- Explain to stakeholders: “We keep a rolling summary + recent turns, so we never resend the entire chat; this cuts bandwidth by X% while preserving context.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
