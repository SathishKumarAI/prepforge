---
qid: ing_dd93c85df9__eli5__local
question: An enterprise customer wants to deploy your RAG system but has no labelled
  data. How do you evaluate it before and after launch?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 269
total_tokens: 442
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:25:12-05:00'
sources: []
---

Think of a RAG (Retrieval‑Augmented Generation) system like a smart assistant that reads a huge library (the retrieval part) and then writes answers in its own voice (the generation part).  
**Before launch:**  
1. **Build a small test set** – pick a handful of questions the business cares about, write or gather simple expected answers (even if not formally “labelled”).  
2. **Run the assistant on those questions** and compare its replies to the expected ones; note any obvious gaps in understanding or missing facts.  
3. **Check retrieval quality** by sampling the documents it pulls—are they relevant?  

**After launch:**  
1. **Collect real user queries** (log them with timestamps).  
2. **Spot‑check a random sample** of answers against the same simple expected responses, scoring accuracy and relevance.  
3. **Measure response time and failure rate** (e.g., “I can’t find an answer”).  

Repeat this cycle monthly, refining the retrieval index or fine‑tuning the generator as you gather more real feedback. This keeps the system honest and useful without needing a huge labelled dataset from the start.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
