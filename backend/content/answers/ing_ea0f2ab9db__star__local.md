---
qid: ing_ea0f2ab9db__star__local
question: How does RAG work? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 329
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:16:34-05:00'
sources: []
---

**Situation** – In the summer of 2023 I was leading a prototype for an internal knowledge‑base chatbot at my startup. Our existing LLM could answer generic questions but struggled with niche policy documents that were updated weekly; users complained about stale answers.

**Task** – Build a system that could pull the latest policy text and incorporate it into generated responses, while keeping latency under 1 second for production traffic.

**Action** – I chose a Retrieval Augmented Generation (RAG) pipeline. First, I indexed all PDFs with Pinecone, using embeddings from OpenAI’s `text-embedding-ada-002`. At query time the bot sent the user prompt to an embedding model, retrieved top‑5 passages via cosine similarity, and concatenated them as context. Then I fed this augmented prompt into GPT‑4 Turbo, instructing it to reference the provided excerpts. To keep latency low I pre‑cached embeddings in a local Redis cache and used batching for the retrieval step.

**Result** – The bot’s answer accuracy improved from 68 % to 93 % on our internal QA set, and user satisfaction scores rose by 25 %. We reduced the average response time to 0.8 seconds, meeting SLA requirements. I learned that careful indexing, caching, and prompt engineering are key to making RAG production‑ready.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
