---
qid: ing_53c352ac81__aws__local
question: 'Explain: Social Network Design Problem - User Entities like Posts, Comments
  etc.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 639
total_tokens: 874
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:34:12-05:00'
sources: []
---

**Situation (S)**  
While leading a cross‑functional team at my last company, we were tasked with building a new social‑network layer that could support millions of users posting text, images, and videos while keeping latency under 200 ms for the top‑10% of traffic. The existing monolith was choking on read/write spikes during viral events.

**Task (T)**  
Architect a highly available, scalable system to store *User*, *Post*, *Comment* entities and their relationships, ensuring fast reads for feeds and resilient writes under bursty traffic, all within a $1M annual budget.

**Action (A)**  
- **Data model & storage**: Used DynamoDB with a composite key `(PK, SK)` – e.g., `USER#<id>` / `POST#<timestamp>`. This gives O(1) reads for a user’s feed and natural ordering by time.  
- **Secondary indexes**: Global Secondary Index (GSI) on `PostAuthorId` to power “posts by author” queries; GSI on `CommentParentPostId` for comment threads.  
- **Caching**: Integrated Amazon ElastiCache‑Redis for hot feed data, reducing DynamoDB reads by 70 % and cutting latency from 350 ms to <120 ms during peak hours.  
- **Write flow**: Leveraged AWS Lambda + API Gateway with throttling per user; writes go through a Kinesis Data Stream to an async microservice that batches updates into DynamoDB, smoothing bursty traffic.  
- **Observability & cost control**: CloudWatch metrics + X-Ray tracing to detect hot keys; auto‑scaling on read/write capacity units kept spend within budget.

**Result (R)**  
- Achieved 99.999% availability during a 3 day product launch that saw 5M active users.  
- Reduced average feed latency from 350 ms to 110 ms, improving NPS by 12 points.  
- Controlled monthly spend at $720K, 10 % below the projected budget.

---

**Leadership Principles Highlighted**

| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Ownership** | Took full responsibility for end‑to‑end design, from data modeling to cost monitoring. |
| **Dive Deep** | Analysed traffic patterns, identified hot keys, and tuned DynamoDB indexes accordingly. |

---

**What a Bar‑Raiser Looks For**

1. **Quantified Impact** – Clear metrics (latency, NPS, cost).  
2. **Depth & Trade‑offs** – Choice of DynamoDB vs RDS, caching strategy, and how each decision balances performance, availability, and cost.  
3. **Learning from Failure** – Post‑mortem on a spike where the system initially throttled; we added Kinesis buffering and adjusted provisioned capacity.

This approach showcases both customer obsession (fast feeds) and ownership (from design to budget).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
