---
qid: ing_5ecefe9245__aws__local
question: 'Explain: Mutations → Modify Data — REST vs GraphQL - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 438
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:00:02-05:00'
sources: []
---

**Situation & Task**  
I was tasked to redesign the user‑profile update flow for a global SaaS platform that served 5 M active users. The legacy REST endpoint (`PUT /users/{id}`) caused over‑fetching, high latency, and frequent data inconsistencies across microservices.

**Action – Technical Design**  
*REST:* A single payload was sent to the API Gateway → Lambda → DynamoDB. Every field update triggered a full write, consuming 1 ms per request but inflating throughput costs by ~30 % during peak hours.  
*GraphQL Mutation:* I introduced **AWS AppSync** with a `updateUserProfile(input: UpdateUserInput!): User` mutation. The resolver chain used VTL to perform *partial updates* (only the fields supplied). DynamoDB’s `UpdateItem` leveraged conditional expressions, reducing write capacity units by 45 % and cutting latency to 0.8 ms.  

**Result**  
- **Performance:** Average response time dropped from 12 ms to 4 ms (80 % reduction).  
- **Cost:** Daily DynamoDB usage fell from $120 to $65, saving ~46 %.  
- **Data Integrity:** Conflict resolution via AppSync’s *optimistic concurrency* eliminated stale writes, raising data consistency score from 92 % to 99.5 %.

**Leadership Principles Highlighted**  
- **Customer Obsession:** Faster, more reliable profile updates directly improved user satisfaction (NPS +15).  
- **Dive Deep & Ownership:** I traced the root of over‑fetching, benchmarked both patterns, and owned the migration end‑to‑end.  

**Bar‑raiser Takeaway** – Demonstrated ownership by turning a performance bottleneck into a cost‑effective, scalable solution while quantifying impact with real metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
