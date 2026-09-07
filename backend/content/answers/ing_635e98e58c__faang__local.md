---
qid: ing_635e98e58c__faang__local
question: 'Explain: NoSQL Data Models — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 585
total_tokens: 819
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:34:36-05:00'
sources: []
---

**Clarify**

You want a high‑level view of how a social network (e.g., Facebook/Instagram) might model its data in a NoSQL store.  
Assumptions to confirm:  
- Scale: billions of users, trillions of posts/comments.  
- Access patterns: read‑heavy feed generation, write‑heavy posting.  
- Consistency tolerance: eventual consistency acceptable for feeds.

**Approach**

1. Pick a document or wide‑column DB (MongoDB, Cassandra).  
2. Design per‑entity collections/tables that match the dominant queries.  
3. Use denormalization and pre‑aggregation to avoid joins.  
4. Separate hot data (feeds) from cold data (archive).

**Depth**

| Entity | Store | Schema & Key |
|--------|-------|--------------|
| **User profile** | Documents | `user:{id}` → `{name, bio, friends:[ids], settings}` |
| **Posts** | Wide‑column | Row key: `post:{timestamp}:{authorId}` → columns: `content`, `likes`, `commentsCnt` |
| **Comments** | Sub‑collection under post | `post:{postId}:comment:{seq}` → `{userId, text, timestamp}` |
| **Friendships / follows** | Edge table (Cassandra) | Partition key: `userId`; clustering key: `friendId` → `since` |
| **Feed cache** | Key‑value | `feed:{userId}:{page}` → list of postIds (pre‑computed by background job) |

*Complexity*: Reads for a feed are O(1) to fetch the cached list + O(k) to load posts. Writes to a post cost O(log N) in Cassandra; comment inserts are append‑only, O(1).  
*Trade‑offs*: Denormalization increases storage but eliminates expensive joins and supports horizontal scaling.

**Edge Cases**

- **Hotspotting**: over‑loaded post keys (e.g., viral posts) → use compound keys or time bucketing.  
- **Consistency gaps**: a new comment may not appear immediately in the feed; handle with eventual consistency guarantees.  
- **Schema evolution**: adding fields to user profiles without downtime.

**Optimize & Communicate**

1. Use **materialized views** for reverse lookups (e.g., posts by hashtag).  
2. Employ **compaction strategies** to keep comment tables lean.  
3. Explain the trade‑off between consistency and latency, highlighting why eventual consistency is acceptable for social feeds.  

Narrate: “We first map our access patterns to a NoSQL model, then denormalize aggressively to serve reads fast, while background jobs handle freshness.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
