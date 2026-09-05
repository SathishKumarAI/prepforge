---
qid: ing_01f711beaf__star__local
question: 'Explain: Head-to-Head Comparison — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 343
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:32:18-05:00'
sources: []
---

**Situation:**  
At my last company we launched a knowledge‑base app for enterprise support. The existing keyword search returned too many noisy results and missed relevant documents that had similar concepts but different wording.

**Task:**  
I was asked to design a new search layer that would combine the precision of Boolean filtering with the semantic depth of embeddings—essentially a hybrid search—to cut down irrelevant hits by at least 30% while keeping recall high.

**Action:**  
First, I built an Elasticsearch index with two separate fields: one for traditional inverted‑index terms and another storing 384‑dimensional sentence embeddings from Sentence‑BERT. When a query came in, I split it into keyword tokens and a short semantic prompt. I ran a Boolean filter on the token field to narrow the candidate set, then performed a cosine similarity score against the embedding field for those candidates. To balance the two signals, I tuned a weighted sum (0.6 keyword + 0.4 embedding) using a small validation set. I also added a relevance‑ranking pipeline that re‑ranked the top 20 results with BM25 before presenting them.

**Result:**  
After deployment, user click‑through on search results increased by 38%, and the average time to find a solution dropped from 5 minutes to 2.3 minutes. The hybrid approach also reduced the number of “no match” complaints by 27%. I learned that careful weighting between exact and semantic signals can dramatically improve real‑world search without sacrificing speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
