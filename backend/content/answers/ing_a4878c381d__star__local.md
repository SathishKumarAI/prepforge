---
qid: ing_a4878c381d__star__local
question: 'Explain: Contextual Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 290
total_tokens: 520
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:02:27-05:00'
sources: []
---

**Situation:**  
At my last company we were building a chatbot for the customer‑support portal. The support tickets spanned multiple product lines, and our initial keyword‑matching engine returned generic answers that users flagged as irrelevant—only about 35 % satisfaction.

**Task:**  
I had to redesign the retrieval system so it could understand the context of each query (product version, user intent, prior conversation) and pull in the most relevant knowledge‑base articles or FAQ snippets, aiming for a 20 % lift in first‑touch resolution.

**Action:**  
First, I introduced a lightweight BERT encoder to generate dense embeddings for every support article and every incoming question. Then I built a contextual similarity layer that weighted each embedding by user metadata (product ID, ticket priority) using learned attention scores. For speed, I cached the top‑k nearest neighbours in an FAISS index, updating it nightly. Finally, I added a confidence threshold; if the top match fell below 0.75 cosine similarity, the bot escalated to a human agent.

**Result:**  
After deployment, first‑touch resolution jumped from 35 % to 53 %, and overall CSAT improved by 12 percentage points. I learned that blending semantic embeddings with explicit contextual signals can dramatically improve relevance without sacrificing latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
