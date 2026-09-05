---
qid: ing_751209996e__eli5__local
question: 'Explain: Schema & Table Visibility — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 220
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:42:33-05:00'
sources: []
---

Think of your database like a library and each **schema** is a separate wing—say “Books” or “Authors.” Inside each wing are the **tables**, which are the bookshelves holding individual shelves (rows). In GraphQL with Supabase, you decide which wings and shelves the public can see.

- **Schema visibility**: Imagine giving a visitor card that lets them walk into only certain wings. If you hide the “Admins” wing, no one outside the admin team can ask for its books.
- **Table visibility**: Once inside a wing, you can choose which shelves are open. A shelf might be locked so regular visitors can’t read or add items.

Supabase lets you set these permissions in one place, and GraphQL automatically reflects them—so your API only shows the wings and shelves you’ve approved. It’s like controlling library access with simple doors and locks, keeping everything clear and secure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
