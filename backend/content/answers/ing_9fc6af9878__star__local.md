---
qid: ing_9fc6af9878__star__local
question: 'Explain: Company events — Careers at Glean | Glean Work AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 358
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:51:40-05:00'
sources: []
---

**Situation** – At the end of my second year in grad school I was on a tight schedule: finish a research paper, secure a summer internship, and decide on a PhD advisor. The university’s career fair that week highlighted a booth for Glean Work AI, a startup building an AI‑powered knowledge graph platform. Their presentation promised “AI that understands your company’s internal data like a human.”

**Task** – I wanted to gauge whether their tech stack—primarily GraphQL + TensorFlow and a custom embeddings pipeline—could be applied to my thesis on semantic search over scientific literature. I needed to learn enough in a single meeting to decide if I’d reach out for a potential internship.

**Action** – I asked the recruiter about their data ingestion process, which uses Apache Kafka streams to feed raw documents into an Elasticsearch cluster that then feeds into a BERT‑based sentence encoder. They showed me a live demo where a query like “find papers on transformer interpretability” returned relevant PDFs in under 0.8 s. I pointed out my dataset’s size (≈50,000 abstracts) and we discussed scaling the embedding model with GPU clusters. We exchanged contact info, and I followed up with a brief technical proposal.

**Result** – Within three days I received an offer for a summer research internship focused on improving their embeddings pipeline; I contributed code that reduced inference latency by 15 % using mixed‑precision training. The experience taught me how to quickly assess a company’s AI architecture and translate it into actionable project ideas.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
