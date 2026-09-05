---
qid: ing_3817e6ccd5__eli5__local
question: 'Explain: Cold starts and scale-to-zero — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 203
total_tokens: 365
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:04:43-05:00'
sources: []
---

Imagine a library that only opens when someone asks for a book.  
When the first person arrives, the librarian (the **LLM serving platform**) has to wake up from sleep, pull out the heavy bookshelves, and get ready—this is a **cold start**. It takes a few seconds before anyone can read.  

If no one visits for a while, the librarian shuts down, turning off lights and locking doors so the building uses no electricity. That’s **scale‑to‑zero**: the system stops running entirely when idle, saving cost.

The **LLM Gateway** is like a front desk that takes your request (which book you want) and sends it to the right librarian in the right section. It hides whether the librarian is just waking up or already working, so you always get an answer smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
