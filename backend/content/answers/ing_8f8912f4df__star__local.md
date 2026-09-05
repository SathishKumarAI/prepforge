---
qid: ing_8f8912f4df__star__local
question: 'Explain: Title: From Local to Global: A Graph RAG Approach to Query-Focused
  Summarization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 364
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:19:54-05:00'
sources: []
---

**Situation:**  
At my previous company we built a news‑aggregation app that served users with concise answers to their questions. Our content team noticed that the automatic summaries were often generic and missed key entities relevant to the user’s query, hurting engagement.

**Task:**  
I was tasked with redesigning the summarization pipeline so it could surface entity‑centric information tailored to each question, without blowing up latency or storage costs.

**Action:**  
I implemented a Retrieval‑Augmented Generation (RAG) model that first constructed a local graph for every article: nodes were sentences and entities extracted via spaCy; edges represented co‑occurrence within the same paragraph. I then merged these local graphs into a global knowledge graph per topic, weighting edges by TF‑IDF of entity mentions. For each user query, I ran a personalized subgraph traversal using Dijkstra’s algorithm to find the most relevant sentences (shortest path to query entities). These snippets were fed as context to a fine‑tuned T5 encoder‑decoder model, which generated a concise, query‑focused summary. I also added an attention mask over graph edges to keep inference fast.

**Result:**  
The new system cut user‑reported confusion scores by 35 % and increased click‑through on summary links from 12 % to 27 %. Latency stayed below 300 ms per request, and we reduced GPU usage by 22 % compared to the previous pipeline. I learned how graph structures can bridge retrieval and generation in a scalable way, and that careful edge weighting is key to balancing relevance with speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
