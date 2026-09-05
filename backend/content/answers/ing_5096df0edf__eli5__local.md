---
qid: ing_5096df0edf__eli5__local
question: 'Explain: Feed Reads — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 254
total_tokens: 417
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:44:53-05:00'
sources: []
---

**Imagine a giant library where every book is a post and every reader has a “favorite shelf” of authors (people they follow).**  
When someone opens the library’s app, it must quickly pull the latest books from all those shelves and arrange them by newest first – that’s the **feed read**.  

To do this fast, the system usually keeps two things in mind:  
1. **Who follows whom?** → a “followers list” so we know which shelves to look at.  
2. **When was each book published?** → a timestamp that lets us sort by recency.

The app can either (a) pull all those shelves on demand, or (b) pre‑build the reader’s feed and store it somewhere quick like Redis.  
If we pre‑build, every time a new post is added, we push it to all followers’ cached feeds; if we pull on demand, we merge the shelves in real time.  

Both ways aim for the same goal: show the newest posts from followed users with minimal delay, just as a librarian hands you the freshest books right away.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
