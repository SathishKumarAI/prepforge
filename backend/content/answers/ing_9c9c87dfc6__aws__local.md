---
qid: ing_9c9c87dfc6__aws__local
question: 'Explain: With the compound key, it makes removal — FAANG System Design
  Interview: Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 451
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:18:49-05:00'
sources: []
---

**Situation & Task**  
In a recent project I led the redesign of a location‑based recommendation engine for an internal “Yelp‑style” app used by over 1 M daily active users. The original schema stored each review in a single table keyed only by `review_id`, which caused hot‑spotting and made bulk deletions (e.g., removing all reviews for a defunct venue) painfully slow.

**Action**  
I introduced a **compound key** (`venue_id | timestamp`) in DynamoDB, splitting the data into two tables: `ReviewsByVenue` (for fast reads by location) and `ReviewEvents` (a stream‑based audit table). This change:

1. **Eliminated hot spots** – write traffic per venue dropped from 200 req/s to <5 req/s.  
2. **Enabled efficient deletions** – a single batch delete on `ReviewsByVenue` removes all reviews for a venue in under 3 s, cutting manual cleanup time by 95%.  
3. Leveraged **DynamoDB Streams + Lambda** to propagate deletes to the recommendation cache (Redis) and S3 analytics logs.

I also added a **global secondary index** on `user_id | timestamp` to support “recent reviews” queries without scanning.

**Result**  
Post‑migration, read latency for location queries fell from 250 ms to <30 ms, and the system handled a 4× traffic spike during a promotional event with no throttling. Cost decreased by ~12% due to lower provisioned throughput.

**Leadership Principles**  
- **Ownership & Deliver Results** – I owned the end‑to‑end redesign and delivered measurable performance gains.  
- **Dive Deep** – I dissected access patterns, quantified hot spots, and iterated on the key design until metrics met SLA targets.  

This approach showcases how a thoughtful compound key can transform scalability, availability, and operational efficiency in a high‑traffic location‑based service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
