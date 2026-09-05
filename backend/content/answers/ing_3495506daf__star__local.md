---
qid: ing_3495506daf__star__local
question: 'Explain: RAG Pipelines <a name="rag"></a> — Courses'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 363
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:13:36-05:00'
sources: []
---

**Situation** – At my last startup we had a knowledge‑base API with 150 k technical articles, but our chatbot kept answering “I don’t know” because the language model couldn’t surface the right context. The product team needed an end‑to‑end RAG system to boost accuracy from 45 % to above 80 % within two months.

**Task** – Build a retrieval‑augmented generation pipeline that could ingest the article corpus, index it efficiently, and feed relevant snippets into GPT‑4 for real‑time answers, all while keeping latency under 700 ms per query.

**Action** – I first vectorized the articles with Sentence‑Transformers (SBERT) and stored them in Pinecone, tuning the dimensionality to 384 for a balance of speed and semantic quality. For retrieval I implemented k‑NN with FAISS on GPU to hit <10 ms per search. On top, I wrote a FastAPI service that concatenated the top‑5 vectors’ passages into a prompt template and sent it to OpenAI’s GPT‑4 via the new “ChatCompletion” endpoint, adding a custom system message to enforce concise answers. I added caching for repeated queries using Redis, and set up A/B testing with the old model.

**Result** – After deployment, answer accuracy jumped from 45 % to 82 %, while average latency stayed at 650 ms. The team reported a 30 % drop in support tickets. I learned that careful vector choice, efficient retrieval indexing, and prompt engineering together drive real business impact in RAG systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
