---
qid: ing_a45322a829__aws__local
question: 'Explain: Database Schema — Mapserviceyelpgooglemap'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 424
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:38:57-05:00'
sources: []
---

**Situation / Task**  
I was tasked with building a unified geospatial layer that could ingest restaurant data from **Yelp** (reviews, ratings, user tags) and overlay it onto **Google Maps** for a mobile app. The goal was to deliver a single source of truth while keeping latency under 200 ms for end‑users.

**Action**  
*Customer Obsession & Ownership*: I defined a **canonical schema** in DynamoDB with the following key structure:

| Partition Key | Sort Key | Attributes |
|---------------|----------|------------|
| `restaurant_id` (Yelp or Google ID) | `source#timestamp` | `name`, `address`, `coords(geojson)`, `rating`, `review_count`, `tags[]`, `source` |

*Dive Deep & Invent*:  
- **Data ingestion**: AWS Glue crawlers parse Yelp’s JSON feeds; Amazon Kinesis Data Streams ingest Google Places API snapshots.  
- **Deduplication**: A Lambda function uses a SHA‑256 hash of `(name, address)` to detect duplicates and reconciles conflicts by favoring the higher rating source.  
- **Geospatial indexing**: I enabled DynamoDB’s **Geo Library** for efficient radius queries and leveraged Amazon Location Service for map rendering.

*Bias for Action & Deliver Results*:  
After 3 weeks, query latency dropped from 600 ms to **180 ms**, while storage cost was < $0.02 per 1k requests. User satisfaction (NPS) rose by **12 points** after the launch.

**Result**  
The unified schema reduced data silos, cut API calls by 35 %, and enabled real‑time analytics on combined Yelp/Google metrics. I documented failure modes (e.g., missing coordinates) and added automated alerts via CloudWatch to ensure continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
