---
qid: ing_fef0ee871d__star__local
question: 'Explain: Dynamic Example Selection — Few Shot And Icl'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 360
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:58:45-05:00'
sources: []
---

**Situation:**  
At my previous role as a machine‑learning engineer at a fintech startup, we had to build an AI chatbot that could answer complex regulatory queries with minimal labeled data. The production model was fine‑tuned on a generic language base but struggled when users asked niche questions, leading to a 35 % drop in user satisfaction.

**Task:**  
I needed to improve the chatbot’s accuracy for these rare topics without retraining from scratch or collecting thousands of new examples—essentially, implement dynamic example selection for few‑shot and in‑context learning on the fly.

**Action:**  
1. Built a lightweight semantic search index (FAISS) over our existing FAQ corpus, tagging each entry with intent vectors from Sentence‑BERT.  
2. Developed an inference pipeline that, upon receiving a user query, retrieves the top‑k most relevant past Q&A pairs and injects them as in‑context prompts to the GPT‑4 API.  
3. Implemented a dynamic few‑shot sampling strategy: if the similarity score fell below 0.6, we added a fallback generic example set; otherwise, we used only the retrieved examples.  
4. Added a feedback loop where successful answers were automatically appended to the corpus for future retrieval.

**Result:**  
Within two weeks, accuracy on niche queries rose from 62 % to 92 %, and user satisfaction scores increased by 18 %. I learned that combining semantic retrieval with dynamic prompt engineering can turn limited data into high‑performance few‑shot models in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
