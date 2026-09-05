---
qid: ing_e513c4fc52__star__local
question: PHI is in every audio file, transcript, and note you touch. How does that
  shape the architecture, and what can you send to a third-party model API?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 315
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:05:51-05:00'
sources: []
---

**Situation:** In my last role at a healthcare analytics firm, we built an AI‑driven voice assistant for clinicians that transcribed patient visits in real time. Every audio clip, transcript, and note contained PHI, so compliance was non‑negotiable.

**Task:** I had to design the system so that sensitive data never left our secure environment while still leveraging a powerful third‑party NLP model for intent extraction and summarization.

**Action:** First, I implemented end‑to‑end encryption (AES‑256) on all recordings before they hit the network. On ingestion, a lightweight local tokenizer stripped PHI tokens from transcripts using a custom regex + spaCy NER model trained on medical entities. The de‑identified payload—just intents, slots, and summary sentences—was then batched and sent over HTTPS to the external API. I also added a token‑based rate limiter and audit logs to track each request. For any data that required richer context (e.g., longitudinal trends), we routed it through our own on‑prem LLM cluster instead of the third‑party service.

**Result:** The solution passed HIPAA audit with zero PHI leaks, reduced external API calls by 40% thanks to local preprocessing, and cut response latency from 1.2 s to 0.7 s per user query. I learned that secure data partitioning combined with selective feature extraction can preserve privacy without sacrificing AI performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
