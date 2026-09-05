---
qid: ing_92b41e6b69__star__local
question: What is RAG, and what problem does it actually solve?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 328
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:26:21-05:00'
sources: []
---

**Situation** – In early 2025 I led the upgrade of our internal knowledge‑base chatbot for the customer support team at a fintech startup. The bot’s accuracy was only 58 % on complex queries because it relied solely on a pre‑trained language model that had no access to the latest compliance documents and product updates.

**Task** – My goal was to increase response relevance by integrating real‑time document retrieval so that the assistant could pull in specific clauses from PDFs, internal wiki pages, and regulatory filings before generating an answer.

**Action** – I chose a Retrieval‑Augmented Generation (RAG) pipeline: first, indexed all 3,200 documents using ElasticSearch with BM25 scoring; then used a dense retriever (Sentence‑BERT fine‑tuned on our domain) to fetch the top‑5 passages per query. These snippets were concatenated and fed into GPT‑4 Turbo via a prompt template that highlighted key facts. I added a confidence score threshold so low‑confidence answers triggered a fallback to human agents.

**Result** – After rollout, accuracy jumped to 87 % on the same test set, and average customer satisfaction scores rose from 3.9 to 4.6/5. The team also saved ~1,200 support hours per month. I learned that combining retrieval with generation turns a static model into a dynamic, domain‑aware assistant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
