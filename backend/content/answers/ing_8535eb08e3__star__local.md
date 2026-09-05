---
qid: ing_8535eb08e3__star__local
question: 'Explain: Act II — Agents (when AI acts) — That Is Embarrassing: Why Frontier
  AI Still Makes Things Up, and What to Do About It'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 369
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:59:29-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a voice‑assistant prototype that answered technical support questions for our software product. The beta release launched to a small group of users, and the logs showed that while most answers were accurate, about 15 % of the responses contained fabricated details—claims about features that didn’t exist or citing nonexistent documentation.

**Task:**  
I had to reduce hallucinations so that the assistant could be released to production without misleading customers. The goal was a <5 % hallucination rate and a measurable improvement in user satisfaction scores.

**Action:**  
First, I set up an “audit trail” by logging every model output along with its source prompt and internal confidence score. Using those logs I built a lightweight post‑processing filter: if the confidence score dropped below 0.7 or the answer referenced a nonexistent API endpoint, the system would instead return a safe fallback (“I’m not sure about that”) and flag the query for human review. I also incorporated retrieval‑augmented generation (RAG) by feeding the model with up-to-date product docs via an Elasticsearch index, which anchored responses to real content. Finally, I ran A/B tests comparing the baseline model versus the RAG+filter pipeline.

**Result:**  
Hallucination rates fell from 15 % to 3 %, and user satisfaction scores rose by 12 percentage points. The audit logs also enabled us to continuously refine the filter thresholds. I learned that combining confidence‑based filtering with retrieval‑augmented generation is a practical, low‑latency solution for keeping frontier AI honest in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
