---
qid: ing_e73e73f54f__eli5__local
question: 'Explain: 60: Break Into Google Spanner Architecture (5 Minutes)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 312
total_tokens: 475
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:41:40-05:00'
sources: []
---

Imagine a giant library that is open all day, every day, for people around the world.  
**Spanner** is like that library, but instead of books it stores data, and instead of one librarian it has many—each one watching a different section.

1. **Shards (splits)** – The library’s floor plan is cut into rooms; each room holds a slice of the whole collection.  
2. **Nodes** – Every room has a dedicated team of librarians who keep its books tidy and answer questions about them.  
3. **Replication** – For safety, every book in one room is copied to two other rooms on different floors so that if one room floods, the information survives.  
4. **TrueTime** – All librarians carry synchronized watches (Google’s TrueTime) that let them know exactly when a book was added or changed, so everyone sees the same order of events no matter where they are.  
5. **Transactions** – If someone wants to move several books at once, Spanner tells all the relevant rooms to hold their books until every librarian agrees—ensuring the move is atomic (all‑or‑nothing).  

So, in five minutes, think of Spanner as a worldwide library where data is split into rooms, duplicated for safety, and coordinated by perfectly synced clocks so every reader sees consistent, up‑to‑date information.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
