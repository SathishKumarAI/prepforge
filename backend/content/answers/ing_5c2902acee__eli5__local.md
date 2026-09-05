---
qid: ing_5c2902acee__eli5__local
question: 'Explain: sort between two ranges of keys means — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 289
total_tokens: 465
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:02:06-05:00'
sources: []
---

Think of a giant pizza‑shop map where every slice has a label (a *key*).  
To find all slices that fall inside a rectangular kitchen window, you first give each slice a short code called a **geo‑hash**—just like giving a house a brief street name. When two geo‑hashes start with the same letters, they’re in the same neighborhood; when they differ early, they’re far apart.

Now imagine you want all slices whose codes lie between “AB12” and “AC34”. That’s **sorting between two ranges of keys**: you pick the first code as a lower bound and the second as an upper bound, then grab everything that falls inside. In Doordash, this lets the system quickly pull every restaurant or delivery driver within a given area.

Once those slices are selected, Doordash opens a **WebSocket**—a live, two‑way conversation channel—to each user’s device. It streams updates (new orders, traffic changes) instantly, just as a pizza chef might shout “Hot pie ready!” directly to the kitchen without waiting for a call. This combination of geo‑hash range queries and WebSockets gives location‑based services that are both fast and real‑time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
