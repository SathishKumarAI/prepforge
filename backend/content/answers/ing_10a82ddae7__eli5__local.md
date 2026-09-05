---
qid: ing_10a82ddae7__eli5__local
question: 'Explain: Encoding Phase — Late Interaction Colbert'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 316
total_tokens: 472
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:01:54-05:00'
sources: []
---

**Encoding Phase – Late‑Interaction “ColBERT”**  
Imagine you’re building a huge library of books and you want to find the most relevant ones when someone asks a question. First, each book is read once and turned into a compact “summary card” (the **encoding phase**). In ColBERT this happens by feeding every passage through BERT—a powerful language model that turns words into 768‑dimensional vectors. Each word gets its own vector, so you end up with a list of cards, one for each token in the passage.

Later, when a user types a query, we **don’t** compare the whole book to the query all at once. Instead, we let every word in the query “search” against every word in each card and keep only the strongest matches (the *late interaction*). Think of it like shining a flashlight on a page: you don’t need to read the entire text again; you just see which words light up the most.

So, the encoding phase is simply turning raw text into reusable, token‑by‑token vector cards. The late‑interaction part then lets us quickly spot the best matches without re‑encoding anything, making search fast and accurate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
