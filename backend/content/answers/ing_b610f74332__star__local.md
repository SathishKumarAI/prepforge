---
qid: ing_b610f74332__star__local
question: 'Explain: Summarization: Consistency, relevance, length'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 367
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:35:25-05:00'
sources: []
---

**Situation** – While leading the NLP team at a fintech startup, we were asked to build an AI‑driven email summarizer for our customer support portal. The inbox handled over 12,000 tickets per day and managers complained that manual triage was too slow and inconsistent.

**Task** – I needed to design a system that produced concise summaries (≤ 50 words), stayed on point with the ticket’s main issue, and maintained high consistency across different product lines, all while keeping inference latency below 300 ms.

**Action** – I first defined a multi‑objective loss: a relevance term using ROUGE‑L against manually curated “gold” summaries, a consistency penalty that aligned token embeddings of successive sentences (to avoid contradictory points), and a length regularizer that capped the summary length via a length‑aware beam search. We trained a transformer encoder–decoder on 200k tickets, fine‑tuned with reinforcement learning to maximize a custom metric combining ROUGE and a “no contradiction” score. I integrated it into our microservice stack using TensorFlow Serving; we added caching for repeated queries and used GPU batching to hit the latency target.

**Result** – Deployment cut ticket triage time by 45 % (from 3 min to 1.5 min). The ROUGE‑L score rose from 0.32 to 0.58, while our custom consistency metric improved from 0.70 to 0.88. I learned that balancing competing objectives—relevance, length, and consistency—requires both careful loss design and runtime optimizations to meet real‑world constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
