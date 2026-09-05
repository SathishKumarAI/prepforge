---
qid: ing_e185fe42f5__eli5__local
question: 'Explain: "Long-context models made RAG obsolete." Argue both sides, then
  give your actual position.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 277
total_tokens: 446
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:32:52-05:00'
sources: []
---

Think of a library where you want to answer questions.  
*RAG (Retrieval‑Augmented Generation)* is like having a librarian who first pulls the exact books that might contain the answer and then writes a short summary for you.  

Now imagine the books themselves have grown huge—each one contains thousands of pages, all stitched together into one gigantic tome. That’s what *long‑context models* do: they can read an entire story at once instead of looking up snippets. Because the model can remember more text internally, it no longer needs a separate librarian to fetch bits; it can “pull” information from its own memory and generate the answer directly.  

**Pro RAG:** Even with long context, you still get fresh, up‑to‑date facts that the base model might have forgotten or never seen.  
**Pro long context:** The model becomes self‑sufficient, faster (no extra retrieval step), and can weave information smoothly across a longer span.

I lean toward *long‑context models* being more efficient for many tasks, but RAG remains valuable when you need the very latest data or want to keep the core model smaller. Both approaches are useful, just like choosing between a quick librarian and a massive personal library.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
