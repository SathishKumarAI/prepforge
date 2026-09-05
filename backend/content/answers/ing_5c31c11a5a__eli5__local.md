---
qid: ing_5c31c11a5a__eli5__local
question: 'Q: When would you choose Long Context over RAG?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 253
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:02:10-05:00'
sources: []
---

**Long‑Context vs. Retrieval‑Augmented Generation (RAG)**  

Imagine you’re writing a story.  
* **Long‑Context** is like carrying a big notebook with all the plot details inside your hand. The model reads the whole notebook at once, so it remembers every character, setting, and twist as it writes. Use this when the information you need is already part of a single, continuous text—like a novel or a long report—because the model can keep everything in its “memory” without extra help.

* **RAG** is like having a huge library outside your desk. When you write, you pull out just the relevant books from the shelf and glance at them to answer a question. RAG works best when the data you need is spread across many documents (news articles, product specs, research papers). The model fetches only what matters, then writes an answer using that fresh material.

So choose **Long‑Context** if your content fits neatly in one continuous piece; pick **RAG** when the needed facts are scattered and you want to pull in new information on demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
