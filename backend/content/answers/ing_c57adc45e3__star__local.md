---
qid: ing_c57adc45e3__star__local
question: 'Explain: Pattern: Corrective RAG (CRAG) — Design Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 340
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:04:48-05:00'
sources: []
---

**Situation:**  
At my previous company we had a chatbot that pulled answers from a large document index. Every time the user asked a follow‑up question, the system would re‑search the entire corpus even if the answer was already in context, causing 30 % slower response times and unnecessary API calls.

**Task:**  
I needed to redesign the retrieval process so that after an initial search the model could correct or refine its answer using the same retrieved passages—essentially turning a “retrieve‑and‑generate” flow into a “corrective RAG (CRAG)” loop—without sacrificing accuracy.

**Action:**  
I introduced a two‑stage pipeline: first, a lightweight TF‑IDF index produced top‑k passages; second, I fed those passages plus the user’s original query to an LLM fine‑tuned for answer refinement. The model was prompted with “Given the following context, correct any inaccuracies in your previous response.” I added a confidence score threshold so the system would only re‑retrieve if the initial pass scored below 0.7. This kept the index hit count down by 70 % and allowed the LLM to self‑correct on ambiguous queries.

**Result:**  
Response latency dropped from 1.8 s to 1.2 s, API costs fell 55 %, and user satisfaction scores rose 12 %. I learned that coupling retrieval with a corrective generation loop can dramatically improve efficiency while maintaining answer quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
