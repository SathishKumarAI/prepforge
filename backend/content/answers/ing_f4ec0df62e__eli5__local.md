---
qid: ing_f4ec0df62e__eli5__local
question: 'Explain: 5.2 Follow a User — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 512
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:02:35-05:00'
sources: []
---

Imagine you’re building a smart “follow” button for an Instagram‑style app, the kind of thing interviewers love to ask about in system design questions.

**What it does:**  
When User A clicks *Follow* on User B’s profile, the system must:  
1. Record that A now follows B.  
2. Let A see B’s new posts in A’s feed.  
3. Notify B that someone followed them (optional).

**How it works – a concrete analogy:**  
Think of the app as a library where each user has a shelf of books (their posts). When A follows B, the system writes a note on A’s “reading list” saying “Add every new book from B to my list.” The next time A opens their feed, the system pulls that note and fetches the latest books from B’s shelf.

**Key parts you’ll need to design:**

| Part | What it is | Why it matters |
|------|------------|----------------|
| **Follow table** (user_id → followed_user_id) | Stores every follow relationship | Needed for quick “does A follow B?” checks |
| **Post stream** (post_id, author_id, timestamp) | Holds all posts | Allows retrieving newest content |
| **Feed generator** | Builds a list of posts for each user | Keeps feeds fresh and fast |
| **Notification service** | Sends alerts when someone follows you | Improves engagement |

**Performance tricks**

- *Caching*: Keep the most recent followers/following lists in memory so you don’t hit the database every time.
- *Batching*: When a new post appears, instead of updating millions of feeds instantly, schedule background jobs that push the post to each follower’s queue later.

**Scalability concerns**

- As users grow, the follow table can become huge. Use sharding (splitting data across machines) or a graph database that naturally handles relationships.
- Feeds must be served in milliseconds; therefore, pre‑compute them or use a publish/subscribe system to push updates instantly.

In short, designing “Follow” is about linking two simple tables, then making sure the link can be queried quickly and the resulting content reaches followers fast—even when millions of people are following each other. The interviewers want you to think about data storage, caching, background work, and scaling—just like a librarian ensuring every reader gets the newest book on their shelf without delay.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
