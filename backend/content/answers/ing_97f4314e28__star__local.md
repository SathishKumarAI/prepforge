---
qid: ing_97f4314e28__star__local
question: 'Mid-round I tell you your answer is wrong: I think you should fine-tune
  here, not use retrieval. You disagree with me. What do you do?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 366
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:36:36-05:00'
sources: []
---

**Situation:**  
During a mid‑round interview for a senior ML engineer role at a fintech startup, the interviewer pointed out that my solution to improve fraud detection should rely on fine‑tuning a transformer model rather than implementing a retrieval‑augmented system. They cited their recent success with large‑scale LLMs and claimed fine‑tuning would be more cost‑effective.

**Task:**  
I needed to respectfully challenge the assumption, present evidence from my past work, and persuade the panel that a hybrid retrieval‑fine‑tune approach could deliver higher precision without prohibitive compute costs.

**Action:**  
I began by acknowledging their point, then shared a concise case study: in a prior project I reduced false positives by 35 % using a retrieval‑augmented BERT model that queried a curated knowledge base of transaction patterns. I explained the trade‑offs—fine‑tuning alone risked overfitting to noisy data, while pure retrieval could miss nuanced context. I suggested an incremental prototype: first fine‑tune on a 10 % subset, then add a lightweight retrieval module powered by ElasticSearch to surface domain facts, keeping GPU usage under 8 hrs per iteration.

**Result:**  
The interviewers agreed to pilot the hybrid pipeline. Within two weeks, we achieved a 28 % lift in fraud detection accuracy while cutting inference latency by 20 %. I learned that framing disagreements as collaborative problem‑solving—and backing them with concrete metrics—turns potential conflicts into opportunities for innovation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
