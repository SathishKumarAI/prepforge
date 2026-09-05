---
qid: ing_e9c99c4351__eli5__local
question: 'Q: Your RAG evaluation pipeline costs $500/day in LLM judge calls. How
  do you reduce it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 269
total_tokens: 439
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:45:31-05:00'
sources: []
---

Imagine your RAG (Retrieve‑Augment‑Generate) system as a library where every time a book is checked out, a librarian (the LLM judge) spends a few minutes reading and rating it. If you’re paying $500 each day for that librarian’s time, you can cut the bill by making the checkout process faster and smarter.

1. **Use a cheaper “preview” model first** – let a smaller, cheaper AI skim the book and flag only the most promising ones for the expensive judge.  
2. **Batch requests** – group many books together so the judge processes them in one call instead of 100 separate calls.  
3. **Cache answers** – keep a local copy of previous judgments; if the same passage appears again, you skip the judge entirely.  
4. **Set a hard limit** – stop the judge after a few quick hints (e.g., “I’m not sure”) so it doesn’t run full‑scale on low‑value items.

In short, give the expensive LLM only the truly valuable content, ask fewer questions at once, and remember past answers. That’s how you trim the daily cost while keeping the system sharp.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
