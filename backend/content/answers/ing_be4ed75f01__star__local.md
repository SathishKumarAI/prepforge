---
qid: ing_be4ed75f01__star__local
question: 'Explain: Recursive Summarization — Context Window Management for Long-Running
  Agents: Strategies and Tradeoffs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 361
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:51:38-05:00'
sources: []
---

**Situation:**  
At my last role, I was tasked with building a long‑running customer support chatbot that could handle multi‑hour conversations without losing context. The LLM we used had a 4,096‑token window, but typical sessions ran up to 15,000 tokens.

**Task:**  
I needed to design a strategy that preserved conversational history while keeping the prompt size within limits, ensuring the agent remained coherent and responded accurately over time.

**Action:**  
I implemented recursive summarization: after every 1,500‑token chunk of dialogue, the model generated a concise summary (≈200 tokens) using a fine‑tuned “summarizer” prompt. These summaries were stored in a vector index (FAISS) with embeddings from Sentence‑Transformers. During each turn, I retrieved the top‑k most relevant summaries via similarity search and concatenated them to form a new prompt that stayed under 3,500 tokens. To manage trade‑offs, I experimented with varying chunk sizes (1,000 vs. 2,000 tokens) and summary lengths, measuring perplexity and response latency; the optimal balance was 1,500‑token chunks and 200‑token summaries, yielding <30 ms inference per turn.

**Result:**  
The chatbot maintained context accuracy above 92% (vs. 70% without summarization) across 3,000+ test conversations, reduced average prompt size by 45%, and cut response latency from 120 ms to 35 ms. I learned that recursive summarization is a practical compromise between fidelity and resource limits, but requires careful tuning of chunk size, summary length, and retrieval precision.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
