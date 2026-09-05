---
qid: vq_3b56f62724__eli5__local
question: What are the different masking techniques available ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 265
total_tokens: 421
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:08:41-05:00'
sources: []
---

Imagine you’re at a dinner party and someone wants to show you a recipe card, but they don’t want anyone else to see the secret ingredients. They can hide parts of the card in different ways:  
1. **Static masking** – like covering a whole page with tape so it stays hidden forever.  
2. **Dynamic masking** – using a filter that only lets the invited guest see the recipe while everyone else sees a blurred version.  
3. **Tokenization** – swapping each ingredient for a random code (e.g., “Tomato” → “X7A”), keeping the layout but changing the content.  
4. **Redaction** – cutting out the most sensitive words so they’re gone, like scratching out names on a ticket.  
5. **Pseudonymization** – replacing real identities with fake ones that still let you match records (like using “User‑123” instead of a name).  

Each method balances how much detail you keep visible against protecting privacy. Think of them as different kitchen tools—tape, filter, code book, scissors, and aliases—to keep the secret parts safe while still letting people cook with the recipe.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
