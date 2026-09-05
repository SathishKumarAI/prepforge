---
qid: ing_2ba3cfe354__star__local
question: 'Explain: Retrieval as a Step in Context Construction'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 335
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:55:11-05:00'
sources: []
---

**Situation:**  
While leading a prototype for an internal knowledge‑base chatbot at my previous company, we noticed that user satisfaction dropped from 85 % to 62 % after we introduced the new document‑embedding engine. Feedback indicated the bot was returning irrelevant answers.

**Task:**  
I had to redesign the context construction pipeline so that the retrieval step would surface only the most pertinent documents for each query, boosting relevance and overall accuracy.

**Action:**  
First, I mapped the existing flow: raw query → tokenization → embedding → nearest‑neighbor search in Faiss → full‑text extraction. The issue was that we were retrieving a fixed top‑10 set without considering query intent. I introduced an adaptive retrieval layer:  
1. Generate two embeddings—one for “topic” and one for “specificity.”  
2. Query Faiss with a weighted combination, adjusting the weight based on user’s question length (short queries get higher topic weight).  
3. Apply a semantic similarity threshold to filter out low‑confidence hits.  
4. Pass only the top 5 filtered documents to the context window of GPT‑4, limiting token usage and reducing noise.

**Result:**  
Post‑deployment, relevance scores rose from 0.42 to 0.78 (cosine similarity), and user satisfaction climbed back to 88 %. I learned that retrieval isn’t just a lookup; it’s a dynamic filter that shapes the entire AI context and must be tuned to the query’s intent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
