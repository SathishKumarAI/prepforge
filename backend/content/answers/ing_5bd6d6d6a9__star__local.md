---
qid: ing_5bd6d6d6a9__star__local
question: 'Explain: Pattern 3: Hybrid (ColBERT + BM25 + Dense)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 320
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:31:12-05:00'
sources: []
---

**Situation** – At my previous company we launched a knowledge‑base search for legal documents. The query latency was under 200 ms but recall was only 68 % on our test set because BM25 missed semantically related cases.

**Task** – I had to design a retrieval pipeline that boosted recall to >90 % without breaking the latency budget, and then integrate it into the production microservice.

**Action** – I built a hybrid system:  
1. **BM25** scored term‑based relevance for quick filtering (top‑200).  
2. For each candidate, I used **ColBERT**, a bi‑encoder that indexes token‑level embeddings; we ran a fast GPU inference to compute dot‑product similarities and re‑rank the top‑50.  
3. Finally, I added a **dense vector** component from Sentence‑Transformer (SBERT) to capture broader semantic similarity, feeding its scores into a weighted linear combiner tuned on a held‑out dev set.  
I wrapped everything in an async pipeline so the overall latency stayed <250 ms.

**Result** – Recall jumped from 68 % to 93 %, precision at top‑10 improved by 4 %. The system handled 5,000 QPS with only a single GPU per node. I learned that careful weighting and async execution let you blend sparse, dense, and neural signals without sacrificing speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
