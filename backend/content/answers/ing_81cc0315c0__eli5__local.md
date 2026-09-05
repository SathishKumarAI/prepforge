---
qid: ing_81cc0315c0__eli5__local
question: 'Explain: RAD-O: Retrieval Augmented Decoding — Kv Cache And Context Caching'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 221
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:02:24-05:00'
sources: []
---

Imagine your brain as a library that’s always learning new books (the model). When you ask it a question, it first looks up the relevant chapters in its “quick‑reference shelf” (the KV cache) so it can answer fast. But sometimes the answer needs more detail than what’s on that shelf, so it pulls out the full book from the main library (retrieval augmentation). While it reads, it writes a short summary of key points onto a sticky note (context caching), which it keeps handy for any follow‑up questions.

**Key terms**  
- **KV cache**: a fast memory store that holds recent word pairs (key–value) the model has processed.  
- **Context caching**: saving important parts of retrieved text so they can be reused without re‑searching.  

Thus, Retrieval Augmented Decoding lets the AI combine quick‑look answers with deeper, freshly fetched knowledge, all while keeping useful snippets ready for later use.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
