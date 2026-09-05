---
qid: ing_d7cf690f61__star__local
question: A chat assistant re-sends a long conversation history on every turn. How
  do you avoid recomputing all of it, and what are the pitfalls?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 358
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:40:37-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a customer‑support chatbot that stored every user interaction in a single large JSON blob. Each time the bot responded it had to re‑send the entire history back to the LLM, which caused latency spikes (up to 4 s) and pushed GPU memory over limits during peak traffic.

**Task:**  
I needed to cut response time by at least 60 % while keeping the context coherent for the model, without blowing up storage or cost.

**Action:**  
1. Implemented a sliding‑window summarizer: after every turn we keep only the last 3–4 exchanges (≈200 tokens) and generate a concise summary of earlier dialogue using a lightweight T5 encoder‑decoder.  
2. Added an “anchor” token to the prompt so the LLM can retrieve relevant past snippets via a vector store (FAISS) when needed.  
3. Deployed a caching layer that memoizes the generated summaries per session, invalidating only when user context changes drastically.  
4. Monitored GPU memory and adjusted batch sizes; switched from FP16 to BF16 where possible.

**Result:**  
Response latency dropped from 4 s to 1.2 s (70 % improvement). Memory usage stayed below 8 GB, eliminating the need for costly high‑memory GPUs. The bot maintained 95 % of its original accuracy on intent classification. I learned that balancing summarization quality with retrieval precision is key—over‑compressing can lose nuance, while under‑compressing defeats the purpose.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
