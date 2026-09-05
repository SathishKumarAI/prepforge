---
qid: ing_49aec18900__star__local
question: 'Explain: Q96: Indirect prompt injection (IPI) attacks rose 32% from Nov
  2025 to Feb 2026 per Google. Your RAG agent reads web pages and documents from untrusted
  sources. Design a layered defense.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 274
output_tokens: 357
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:55:48-05:00'
sources: []
---

**Situation** – While building a Retrieval‑Augmented Generation (RAG) assistant for an internal knowledge base, we started pulling content from public blogs and customer‑submitted documents. In late 2025 we noticed that the volume of indirect prompt injection (IPI) attempts had jumped 32 % by February 2026, per Google’s security bulletin.

**Task** – I needed to create a layered defense that would let the agent ingest useful untrusted data while blocking malicious prompts that could steer it toward disallowed content or policy violations.

**Action** – First, I added a sandboxed “content‑scorer” microservice that runs a lightweight LLM (OpenAI’s GPT‑4o) to flag suspicious tokens and compute an IPI risk score. Scores above 0.7 trigger a second filter: a static prompt‑sanitizer that removes or rewrites high‑risk patterns (e.g., “you are a lawyer”, “write code for me”). Third, the RAG pipeline now hashes every fetched page and cross‑checks it against a blocklist of known malicious domains stored in Redis. Finally, I integrated an audit trail: each ingestion event logs the original URL, risk score, sanitizer actions, and a hash of the final cleaned content, all searchable via Kibana for post‑incident review.

**Result** – After deployment, our IPI incident rate dropped from 32 % to under 5 % over three months, while the retrieval latency increased only by 12 %. The exercise taught me that combining ML‑based scoring with deterministic sanitization and domain filtering gives a robust defense without sacrificing usability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
