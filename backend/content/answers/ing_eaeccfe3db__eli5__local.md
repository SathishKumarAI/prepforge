---
qid: ing_eaeccfe3db__eli5__local
question: 'Explain: Database Storage — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 256
total_tokens: 419
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:47:05-05:00'
sources: []
---

Imagine Instagram as a giant library that needs to keep every book (photo) and its notes (likes, comments, tags) organized so readers can find them instantly.

**1. Users table** – the “membership card” for each reader: id, name, email.  
**2. Posts table** – each photo is a “book copy”: post_id, user_id (who owns it), image_url, timestamp.  
**3. Likes table** – a small “check‑in list”: like_id, post_id, user_id, time.  
**4. Comments table** – similar to the likes but with text: comment_id, post_id, user_id, content, time.  
**5. Feeds table** – pre‑computed lists of recent posts for each user (or a “recommended shelf”) so the app can pull them fast.

The key trick is *indexing*: just like a library’s card catalog, indexes let the database jump straight to the right rows instead of scanning everything. This keeps Instagram’s feed snappy even when millions of users add photos every second.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
