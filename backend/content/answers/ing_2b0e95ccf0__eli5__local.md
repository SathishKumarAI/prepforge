---
qid: ing_2b0e95ccf0__eli5__local
question: What are the top failure modes of production RAG systems?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 264
total_tokens: 423
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:43:37-05:00'
sources: []
---

Imagine a RAG (Retrieval‑Augmented Generation) system as a helpful librarian who first looks up relevant books (retrieval) and then writes a story based on those pages (generation). Even the best librarians can slip up in three common ways:

1. **Missing or mis‑picking books** – The search part might pull out irrelevant or outdated information, like showing a cookbook when you asked for a history lesson.  
2. **Hallucinating facts** – The writing part may blend true details with invented ones, producing a “story” that feels plausible but is actually false.  
3. **Getting stuck in loops** – If the system keeps repeating the same snippets or can’t finish its answer, it’s like a librarian who can’t decide which book to recommend and ends up circling back.

These failures arise because retrieval relies on imperfect indexes, generation uses probabilistic language models that don’t truly “know” facts, and systems often lack robust checks for coherence. Addressing them means better search algorithms, fact‑checking layers, and clearer stopping rules—just as a real librarian would double‑check sources before handing you a finished summary.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
