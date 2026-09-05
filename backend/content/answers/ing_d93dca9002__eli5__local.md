---
qid: ing_d93dca9002__eli5__local
question: 'Explain: The Retrieval Architecture Spectrum — Late Interaction Colbert'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 234
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:18:46-05:00'
sources: []
---

Imagine you’re looking for a book in a huge library. **Early‑stage** methods are like asking the librarian to give you a list of titles that might match your topic and then you pick the best one yourself. **Late‑interaction** is different: you first hand over a rough idea of what you want, and only after the librarian has narrowed down a few books do they ask you questions—“Did this book cover the part about X?”—to decide exactly which one to give you.

In AI, the *retrieval architecture spectrum* shows how much the system interacts with your query at the end.  
- **Early interaction**: retrieve documents first, then rank them separately (like the librarian’s list).  
- **Late interaction**: let the model ask follow‑up questions while it’s still selecting documents (the librarian’s clarifying chat).  

The later you interact, the more precise the final answer can be. Think of it as moving from a static shelf search to a live conversation that hones in on exactly what you need.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
