---
qid: ing_332e7010c8__eli5__local
question: 'Explain: Discord Migrates Trillions of Messages from Cassandra to ScyllaDB
  - InfoQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 217
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:57:00-05:00'
sources: []
---

Imagine a huge library (Discord’s chat history) where every book is stored in a particular type of shelf called **Cassandra**. Over time, the shelves get crowded and slow; librarians want faster access for readers who are flipping pages all day.

So they decide to move the books to a new set of shelves named **ScyllaDB**, which works like Cassandra but is built on modern hardware so it can pull out any book almost instantly. The migration process is like carefully packing each book into a cart, transporting it across campus, and placing it in its new spot without losing any pages.

Key terms:  
- **Cassandra** – an older database that stores data in many distributed tables.  
- **ScyllaDB** – a newer, faster database with the same structure but better performance.  

Discord’s move means all trillions of messages (books) are now stored on these quicker shelves, making chatting smoother for everyone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
