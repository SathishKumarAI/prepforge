---
qid: ing_1341687ddc__faang__local
question: 'Explain: Introduction — Context Window Management for Long-Running Agents:
  Strategies and Tradeoffs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 475
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:28:20-05:00'
sources: []
---

**Clarify**  
The interview asks how a long‑running conversational agent can keep track of context when the conversation length exceeds the model’s native token window (e.g., GPT‑4’s ~8k tokens). We need strategies for *context‑window management* and their tradeoffs.

---

**Approach**  
1. **Sliding Window** – keep only the most recent N tokens.  
2. **Hierarchical Summarization** – periodically compress older dialogue into a summary token block.  
3. **Retrieval‑Augmented Generation (RAG)** – store past turns in an external vector DB and retrieve relevant snippets on demand.  
4. **Chunked Prompting** – split the prompt into logical sections, feeding each to the model separately and merging responses.

---

**Depth**  

| Strategy | Complexity | Pros | Cons |
|----------|------------|------|------|
| Sliding Window | O(1) shift | Simple, fast | Loses distant context; may miss earlier constraints. |
| Summarization | O(n log n) (for hierarchical merge) | Retains gist of whole conversation | Summary drift; extra compute & risk hallucination. |
| RAG | Retrieval cost + model inference | Keeps full history accessible; dynamic relevance | Requires index maintenance, latency spikes, potential privacy issues. |
| Chunked Prompting | O(k) where k = #chunks | Parallelizable; can handle > window size | Model may not see global coherence; merging logic needed. |

---

**Edge Cases**  
- **Long‑term dependencies** (e.g., user’s initial preference).  
- **Frequent policy changes** requiring re‑summarization.  
- **Memory constraints** on edge devices.  
Test with conversations of 20k tokens, varying topic shifts, and with/without privacy filters.

---

**Optimize & Communicate**  
Combine hierarchical summarization for the *bulk* history with RAG for *critical* facts (e.g., user name). Use a lightweight LRU cache to keep top‑k most relevant chunks in the sliding window. Communicate this hybrid plan clearly, emphasizing that we trade off absolute recall for scalability and latency while still preserving key context via retrieval.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
