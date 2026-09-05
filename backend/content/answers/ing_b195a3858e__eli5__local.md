---
qid: ing_b195a3858e__eli5__local
question: 'Explain: Do Not Confuse Routing with Rebalancing — Consistent Hashing |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 222
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:18:27-05:00'
sources: []
---

Think of a huge library that must keep its books in many shelves across the city.  
**Routing** is like telling each patron exactly which shelf their book lives on: “Go straight to Shelf 12.”  
**Rebalancing** is when the library decides to move some books to other shelves so no shelf gets too crowded, but the patrons still use the same shelf‑number address.

Consistent hashing is a special way of assigning shelf numbers. It uses a circle where each book’s title hashes to a spot on that circle; the nearest shelf clockwise holds it. When a new shelf appears (or one disappears), only books near that point change shelves—most books stay exactly where they were, so patrons’ routes remain unchanged.

So don’t mix routing (the address you use) with rebalancing (moving items). Consistent hashing keeps routing stable while allowing the system to grow or shrink gracefully.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
