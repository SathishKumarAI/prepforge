---
qid: ing_1441b2014f__eli5__local
question: 'Explain: Database Design — Design Instagram | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 245
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:07:30-05:00'
sources: []
---

Imagine Instagram as a giant photo‑gallery built on a city of shelves (the database).  
**Users** are the people who walk into the gallery; each user gets their own shelf where they keep their profile picture, bio and list of friends (followers/following).  
A **post** is like a framed photograph that goes onto a special “timeline” shelf. Every post has three parts: the image file itself, a short caption, and the time it was taken. We store these on separate shelves so we can add many photos quickly without slowing down user profiles.

When someone likes or comments, those reactions are tiny notes attached to the photo’s shelf—just like sticky‑notes that can be read instantly.  
**Feeds** are built by reading only the latest few shelves (the most recent posts) for each friend and putting them together on a virtual “wall” in the user’s window.

By separating data into logical shelves—users, posts, likes, comments—we keep the gallery organized, fast to browse, and easy to grow as more visitors upload pictures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
