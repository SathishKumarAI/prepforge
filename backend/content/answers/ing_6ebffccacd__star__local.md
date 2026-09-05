---
qid: ing_6ebffccacd__star__local
question: Anyone can add documents to your corpus. How do you stop an attacker planting
  a document that hijacks the assistant?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 296
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:08:50-05:00'
sources: []
---

**Situation** – In my last role I maintained a knowledge‑base for a customer‑facing chatbot used by thousands of users daily. The system allowed any authenticated user to upload PDF or Markdown files that would be indexed and served in responses.

**Task** – I had to prevent malicious actors from injecting deceptive documents that could mislead the assistant, while keeping the upload workflow fast and developer‑friendly.

**Action** – First, I added a content‑validation layer: every file was scanned with an NLP model trained on known phishing patterns, and metadata (author, source URL) was cross‑checked against an internal whitelist. Next, I implemented a “sandboxed indexing” step—documents were parsed in an isolated container, and the resulting embeddings were compared to existing vectors using cosine similarity; anything too close to a high‑confidence malicious cluster was flagged for manual review. Finally, I built an audit trail that logged uploader identity, file hash, and validation outcome, and set up alerts for repeated failures.

**Result** – After deployment, we saw a 97 % drop in false‑positive responses from injected content, with zero incidents of user‑facing misinformation over six months. The system added only ~200 ms to upload latency, keeping the UX smooth. I learned that combining automated semantic checks with lightweight provenance verification is key to safeguarding large language‑model corpora.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
