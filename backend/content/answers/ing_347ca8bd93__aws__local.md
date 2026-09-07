---
qid: ing_347ca8bd93__aws__local
question: 'Explain: Data modeling decisions — Use vertical partitioning to scale data
  efficiently in Amazon DynamoDB | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 489
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:23:31-05:00'
sources: []
---

**Situation & Task**  
I was leading the migration of our recommendation engine from a legacy MySQL cluster to Amazon DynamoDB for the 2024 Q4 launch. The table held 300 M user‑profile records, each with dozens of optional attributes (preferences, browsing history, telemetry). Our goal: keep read latency < 10 ms while scaling to 50 % traffic growth and staying under a $5k/month budget.

**Action – Vertical Partitioning in DynamoDB**  
1. **Identify hot vs cold columns** – 12 attributes were queried > 80 % of the time; the rest were rarely accessed.  
2. **Create two tables**:  
   * `UserProfileHot` (PK=UserID, sort key=AttributeName) storing only the hot attributes as separate items.  
   * `UserProfileCold` holding the remaining attributes in a single item per user.  
3. **Use Global Secondary Indexes (GSIs)** on `UserProfileHot` for queries that filter by attribute value (e.g., top 10 users with “sports” preference).  
4. **Provisioned throughput**: set RCUs/WCUs based on hot‑attribute access patterns; use DynamoDB Auto Scaling to keep utilization at ~70 %.  

**Results**  
- Read latency dropped from 45 ms to 8 ms (90 % improvement).  
- Cost decreased by 38 %, saving ~$1.9k/month.  
- Capacity headroom for the projected traffic spike was achieved without provisioning extra capacity.

**Amazon Leadership Principles Highlighted**

| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Ownership** | Took full responsibility for the migration, defined partitioning strategy, and tracked performance metrics to validate success. |
| **Dive Deep** | Conducted a detailed analysis of access patterns, quantified attribute hotness, and iteratively tuned throughput settings. |

**Bar‑raiser Takeaway**  
- Show clear ownership and end‑to‑end accountability.  
- Dive deep into data usage stats; present concrete numbers (latency, cost).  
- Learn from the first attempt: initial design used a single table, leading to hot spots; pivoted to vertical partitioning, demonstrating agility and bias for action.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
