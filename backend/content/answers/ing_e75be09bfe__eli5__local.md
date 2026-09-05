---
qid: ing_e75be09bfe__eli5__local
question: 'Explain: Search API — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 240
total_tokens: 402
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:41:52-05:00'
sources: []
---

Think of Airbnb’s Search API like a smart library catalog that instantly tells you which books (listings) fit exactly what you’re looking for—price, location, dates, and special features.

When you ask the search “I want a place in Paris from June 1‑7, under €200/night with a kitchen,” the system does three things:

1. **Quick filter** – it first checks simple rules (date availability, price range) using tiny “bookmarks” that let it skip whole sections of its catalog.
2. **Ranking engine** – among the filtered books, it scores each one by how well it matches extra wishes (good reviews, recent cleaning). The score is like a popularity badge.
3. **Result delivery** – it sends back the top‑scoring listings in pages so you can scroll.

Just as a librarian pulls out only the relevant shelves and arranges them by relevance, Airbnb’s Search API filters, scores, and returns listings fast enough that guests feel they’re browsing a personalized library in real time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
