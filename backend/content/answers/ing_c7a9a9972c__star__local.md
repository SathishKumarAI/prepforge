---
qid: ing_c7a9a9972c__star__local
question: 'Explain: Data & context strategy — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 387
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:08:47-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a virtual meeting assistant to surface relevant documents and agenda items in real‑time during client calls. Early feedback showed users were annoyed that the bot kept pulling up outdated files or unrelated notes, especially when multiple projects overlapped.

**Task:**  
I had to design a data‑and‑context strategy that would keep the assistant’s recommendations fresh, project‑specific, and contextually relevant while still being fast enough for live usage.

**Action:**  
First, I built an incremental knowledge graph that linked each meeting transcript to its associated client, project ID, and document repository. Using vector embeddings from a fine‑tuned Sentence‑BERT model, the assistant matched spoken intent with the nearest 5 documents in real time. To keep context, I implemented a sliding window of the last three utterances as a “conversation state” fed into the embedding pipeline, so it could disambiguate terms like “budget” that meant different things across projects. For freshness, we scheduled nightly re‑indexing with a lightweight Spark job that refreshed embeddings only for documents modified in the past 24 hours. Finally, I exposed a lightweight REST endpoint behind an API gateway to serve predictions under 200 ms.

**Result:**  
Within two months, user satisfaction scores rose from 68 % to 91 %, and the average time spent searching for relevant docs dropped by 45 %. The system also reduced server load by 30 % thanks to incremental updates. I learned that a hybrid approach—combining knowledge graphs for metadata with dense embeddings for semantic search—provides both speed and relevance in AI assistants.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
