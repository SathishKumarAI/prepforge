---
qid: ing_e8106175c5__star__local
question: 'Explain: Clarifying questions & assumptions — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 336
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:12:36-05:00'
sources: []
---

**Situation**  
At my previous company we were building a Retrieval‑Augmented Generation (RAG) chatbot for the legal department. The first sprint revealed that our knowledge base was growing at 15 % per month, and the QA team complained that answers often lacked citations or seemed generic.

**Task**  
I had to design an interview process to surface hidden user expectations and data constraints so the RAG model could reliably retrieve and cite up-to‑date documents while staying within compliance limits.

**Action**  
I organized a “clarification workshop” with lawyers, IT auditors, and data stewards. I asked open‑ended questions: *What types of documents do you trust most? How often can we refresh the index? What legal thresholds must citations meet?* I mapped assumptions—e.g., assuming all PDFs are machine‑readable—and challenged them by showing sample OCR failures. We documented constraints in a shared Confluence page, then built a lightweight schema that tagged each document with version, sensitivity level, and last reviewed date. This guided the retrieval pipeline to prioritize recent, compliant sources.

**Result**  
The refined assumptions cut answer latency from 2.3 s to 1.1 s and increased citation accuracy from 68 % to 94 %. The legal team reported a 40 % reduction in manual review time, and we avoided potential compliance violations. I learned that early, structured questioning turns vague requirements into precise engineering constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
