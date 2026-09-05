---
qid: ing_60dafaab89__star__local
question: How would you chunk and embed heterogeneous enterprise content - Slack threads,
  Jira tickets, Google Docs, PDFs?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 330
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:41:50-05:00'
sources: []
---

**Situation:** At my last company we had a knowledge‑base of over 70 GB of unstructured content—Slack thread archives, Jira tickets, Google Docs, and PDF contracts—all in different formats and with varying levels of noise.

**Task:** Build an internal search system that could surface the most relevant document snippets for any engineer’s query within two seconds, while keeping storage costs under budget.

**Action:** I started by normalizing each source: used `pydantic` schemas to map Slack messages, Jira fields, Google Docs paragraphs, and PDF pages into a unified JSON structure. Then I chunked the text with a sliding window of 500 words and 50‑word overlap, stripping Markdown and URLs. For embeddings I chose OpenAI’s GPT‑4‑embeddings (1536 d) because it handled domain jargon better than smaller models. I stored vectors in Pinecone, tagging each vector with metadata (`source`, `doc_id`, `last_modified`). To speed up retrieval I indexed the metadata for exact match filtering and used cosine similarity to rank candidates.

**Result:** The system returned relevant snippets in 1.8 s on average, reducing support tickets by 37% and cutting manual triage time from 4 hrs/week to under 30 min. I learned that careful chunk sizing plus source‑specific metadata is key to balancing recall and precision in heterogeneous corpora.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
