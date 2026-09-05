---
qid: ing_5c62839759__eli5__local
question: 'Explain: Personalization at Spotify using Cassandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 217
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:02:29-05:00'
sources: []
---

Imagine Spotify as a giant library where every song is a book and every listener has their own “reading list.”  
When you open the app, it quickly pulls your personalized playlist from a special shelf called **Cassandra**—a database that stores many copies of each book in different rooms so no single room gets overloaded.  

Each time you play a track, Spotify writes a tiny note (“User 123 liked Song 456”) to Cassandra. Because Cassandra can add notes instantly and keep them spread out across its rooms, the next time you open the app it reads all your recent notes at once, mixes them with millions of other listeners’ notes, and builds a playlist that feels like it was made just for you.  

**Cassandra** is simply a fast, distributed storage system that keeps data in many copies so it never slows down when millions of people are listening simultaneously.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
