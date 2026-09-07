---
qid: ing_ce19afcf41__faang__local
question: 'Explain: Step 3: Design core components — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 546
total_tokens: 813
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:39:52-05:00'
sources: []
---

**Clarify**  
You’re asked to explain the *“Design core components”* step from the System‑Design‑Primer’s Twitter walkthrough.  
Assumptions I’d confirm:  
- We’re focusing on the high‑level service decomposition (Tweet, Timeline, Notification, etc.).  
- The audience knows basic Twitter features (tweeting, following).  
- We ignore infra details (databases, caching) for this explanation.

**Approach**  
1. List the key functional units that enable core user flows.  
2. Map each unit to its responsibilities and interfaces.  
3. Highlight how they compose: who calls whom, data flow, and eventual consistency concerns.

**Depth**  

| Component | Responsibility | Key APIs / Data |
|-----------|----------------|----------------|
| **Tweet Service** | Create, delete, edit tweets; store tweet metadata (id, author, timestamp). | `POST /tweets`, `DELETE /tweets/:id` |
| **Follow Service** | Maintain follower‑followee relationships. Handles “follow/unfollow” actions. | `PUT /users/:id/follow`, `GET /followers/:id` |
| **Timeline Service** | Build a user’s home feed by aggregating tweets from followed accounts. Uses push (fan‑out) or pull strategy. | `GET /timeline/:userId` |
| **Notification Service** | Push alerts for mentions, retweets, likes. Decouples from timeline to avoid latency spikes. | WebSocket/Push API |
| **Search Service** | Full‑text search over tweets, hashtags. Uses inverted index or external search engine. | `GET /search?q=` |

- *Data flow*: User → Tweet → Timeline (push) → Notification.  
- *Consistency*: Write‑through cache for tweet storage; eventual consistency in timeline.

**Edge Cases**  
- High fan‑out when a celebrity tweets → sharded push queues or batch feeds.  
- Deleted tweets must be removed from all timelines and notifications.  
- Cyclic follows? Not an issue but can inflate feed size.

**Optimize & Communicate**  
To scale, we’d shard by user ID, use Redis for hot follower lists, and employ a message broker (Kafka) for fan‑out. I’d explain that these choices trade off latency vs. complexity. Finally, I’d summarize the architecture in a diagram and reassure interviewers that this decomposition satisfies core Twitter requirements while remaining extensible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
