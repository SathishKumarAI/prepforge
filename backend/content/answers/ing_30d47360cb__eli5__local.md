---
qid: ing_30d47360cb__eli5__local
question: 'Explain: Kimi K2 uses Multi-head Latent Attention (MLA). Explain what it
  does and how it compares to GQA for KV-cache reduction.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 222
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:53:15-05:00'
sources: []
---

Imagine a giant library where every book is an “attention head.” In Kimi K2’s **Multi‑Head Latent Attention (MLA)**, each head only reads the most important chapters of the books it needs, skipping over the rest. It does this by first summarizing (“latent”) all chapters into a few key ideas and then letting every head focus on those summaries instead of every single page.  

With **KV‑cache** (Key–Value cache) in models like GQA, you store every word’s key and value so you can reuse them later—like keeping a copy of each book’s index card for quick lookup. This quickly grows large as the model sees more text.

MLA cuts that growth: because each head works from compressed summaries, the number of keys/values it needs to cache shrinks dramatically. It’s like having a single index card per book instead of one per page—fewer cards, same useful information, and less memory use.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
