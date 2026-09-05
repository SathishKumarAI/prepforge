---
qid: ing_0ca989e1d1__star__local
question: Why is RAG the right architecture for an enterprise assistant instead of
  fine-tuning on the company's data? Where does RAG break?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 350
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:53:52-05:00'
sources: []
---

**Situation** – I was leading the design of an internal knowledge‑base chatbot for a multinational insurance firm that had 3 million policy documents and 1 billion customer interactions archived in their data lake. The legacy FAQ bot had a 35% hit rate on user queries.

**Task** – Deliver a system that could answer any employee question accurately, scale to quarterly data updates, and meet GDPR compliance without re‑training a large LLM from scratch each time.

**Action** – I chose Retrieval‑Augmented Generation (RAG). First, I indexed the document store with an Elastic Search vector engine (FAISS) using sentence‑BERT embeddings so that each query fetched the top‑10 most relevant passages. Then I wrapped an open‑source GPT‑4o model to generate responses conditioned on those snippets, adding a post‑generation safety filter. Every month, new policy PDFs were parsed and re‑indexed; no fine‑tuning was needed, preserving the base model’s generality and avoiding catastrophic forgetting.

**Result** – The chatbot’s answer precision jumped from 35% to 78%, while query latency stayed under 1 second. Updates required only a 5‑minute batch job instead of weeks of GPU training. I learned that RAG excels when data volume grows rapidly and regulatory constraints forbid model ownership, but it breaks when the retrieval index becomes stale or when nuanced reasoning beyond the retrieved facts is needed—situations where fine‑tuning or hybrid approaches might still be required.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
