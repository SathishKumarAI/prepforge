---
qid: ing_cc1c492c79__star__local
question: 'Explain: The model takes a lot of notes — Rebuilding Devin for Claude Sonnet
  4.5: Lessons and Challenges | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 343
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:17:09-05:00'
sources: []
---

**Situation:**  
At my previous startup we had a proprietary chatbot called Devin that was used by our support team to triage customer queries. When we decided to upgrade it to Claude Sonnet 4.5, the new model required us to ingest thousands of internal notes and logs to maintain its contextual knowledge base.

**Task:**  
I needed to rebuild Devin’s knowledge ingestion pipeline so that the new LLM could understand and recall those notes while staying within our API usage budget and keeping latency under 200 ms per request.

**Action:**  
First, I parsed all note files with spaCy, extracting entities, timestamps, and sentiment scores. Then I used LangChain to chunk the text into context windows of 4,096 tokens, applying a TF‑IDF weighting scheme to prioritize high‑value sentences. To reduce API calls, I built a local vector store in Pinecone and implemented prompt caching with retrieval augmentation. Finally, I set up an automated CI pipeline that ran nightly embeddings updates and performed A/B testing against the old Devin.

**Result:**  
The rebuilt system reduced per‑request latency from 350 ms to 180 ms, cut Claude API calls by 42%, and improved first‑contact resolution rates from 68% to 81%. I learned how to balance LLM context size with real‑world performance constraints and the importance of iterative testing when migrating to a new model architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
