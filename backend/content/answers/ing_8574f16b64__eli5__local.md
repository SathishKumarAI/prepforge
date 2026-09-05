---
qid: ing_8574f16b64__eli5__local
question: 'Explain: 5.5 Get User Feed — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 284
total_tokens: 452
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:08:17-05:00'
sources: []
---

**Designing an Instagram‑style “Get User Feed”**

Think of the feed like a personal radio station that plays only songs (posts) you’ll enjoy.  
*Posts* are the tracks; each has a *timestamp* (when it was uploaded) and a list of *followers* who can hear it.  

When a user asks for their feed, the system does three simple steps:

1. **Collect** all posts from accounts they follow.  
   *Followers* is just a set that tells us which users’ posts to consider.

2. **Score** each post by how recent it is and how many of the user’s friends liked or commented on it.  
   The score is a single number that lets us rank everything in order.

3. **Return** the top N scored posts, sorted from highest to lowest.  
   This list is what you see scrolling through your feed.

The trick is to keep the *followers* lists and the most recent posts in fast, searchable storage (like Redis). Then, when a user opens Instagram, the system pulls only the latest few hundred posts, scores them on the fly, and streams that sorted list back instantly—just like flipping to the next song you’re excited about.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
