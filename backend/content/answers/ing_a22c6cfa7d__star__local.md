---
qid: ing_a22c6cfa7d__star__local
question: Why Ragas?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 338
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:57:02-05:00'
sources: []
---

**Situation:**  
During my senior thesis at university I was building a recommendation system for an online learning platform that had over 10,000 courses but only a handful of user ratings per course. The feedback loop was so sparse that our collaborative filtering model performed poorly—MAE hovered around 0.9, which was unacceptable for the client’s product team.

**Task:**  
I needed to design a hybrid recommender that could leverage content and contextual signals without requiring massive amounts of labeled data, while keeping inference latency below 50 ms on edge devices.

**Action:**  
I explored Ragas’ approach to retrieval‑augmented generation. First, I built an inverted index of course metadata (topics, difficulty, prerequisites) using FAISS, then used a lightweight BERT‑base model fine‑tuned on the platform’s own Q&A logs to generate embeddings for user queries. For each request, I retrieved the top‑k most relevant courses and fed them, along with the user’s browsing history, into a GPT‑2 decoder that produced natural‑language explanations of why a course was recommended. This pipeline kept inference fast because only the retrieval step required GPU acceleration; the decoder ran on CPU with beam search limited to 3.

**Result:**  
The hybrid system cut MAE from 0.9 to 0.45 and boosted click‑through rate by 18 % in A/B tests. I also learned that combining sparse retrieval with generative explanations can dramatically improve user trust, especially when data is scarce—exactly the scenario Ragas excels at solving.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
