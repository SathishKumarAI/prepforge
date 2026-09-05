---
qid: ing_55c6e1c303__star__local
question: 'Explain: Sliding Windows — Context Window Management for Long-Running Agents:
  Strategies and Tradeoffs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 346
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:19:28-05:00'
sources: []
---

**Situation:**  
While working on a conversational AI that runs continuously in customer support chat, the model’s GPU memory could only hold 4 k tokens of conversation history. Yet users often sent multi‑turn dialogues spanning over 30 k tokens before resolving their issue.

**Task:**  
I had to design a sliding‑window strategy so the agent could maintain contextual relevance without exceeding memory limits, while keeping latency low for real‑time responses.

**Action:**  
1. Implemented a *dynamic context window* that kept the last 2 k tokens and selectively archived earlier turns into an on‑disk cache using LevelDB.  
2. Added a *semantic pruning* step: every time a new turn arrived, I embedded all past turns with Sentence‑BERT, computed similarity to the current query, and removed the least relevant turns until the in‑memory window fit 4 k tokens.  
3. Built a lightweight “context‑summarizer” using GPT‑2 fine‑tuned on our logs; it compressed discarded turns into concise summaries (≈200 tokens) stored alongside the cache.  
4. Deployed an async background worker to refresh embeddings and summaries, ensuring real‑time inference stayed under 150 ms.

**Result:**  
User satisfaction scores rose from 78% to 92% because the bot understood long conversations better. Memory usage dropped by 35%, and latency improved by 20%. I learned that balancing semantic relevance with computational overhead is key—over‑pruning hurts accuracy, while too much buffering spikes cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
