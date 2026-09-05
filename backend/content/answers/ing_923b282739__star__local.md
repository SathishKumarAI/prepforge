---
qid: ing_923b282739__star__local
question: 'Explain: Flight Booking design problem - Search — Apachecasandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 338
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:25:24-05:00'
sources: []
---

**Situation:**  
At my last company we launched a global flight‑booking platform that needed to handle millions of daily search queries while keeping latency below 120 ms for every user.

**Task:**  
Design the search subsystem using Apache Cassandra so it could scale horizontally, provide eventual consistency across regions, and support fast lookup by destination, date, and price range.

**Action:**  
I began by modeling data with a wide‑row schema: `search_results (destination, departure_date, flight_id)` as partition key and clustering columns for cabin class and fare. I used time‑UUIDs to keep inserts ordered without hotspots. To enable efficient range queries on price, I created a secondary index table (`price_index`) that mapped price buckets to flight IDs, allowing me to fetch the cheapest results first. For fault tolerance, I set up a multi‑DC replication factor of 3 and enabled read repair with a consistency level of QUORUM for critical searches. To keep latency low, I tuned compaction strategy to Leveled and used lightweight transactions only for booking confirmation, not search.

**Result:**  
The new design handled 4 M search requests per day with an average response time of 95 ms across three continents. The system’s throughput grew from 500 req/s to 3,200 req/s without any hardware changes. I learned that thoughtful data modeling in Cassandra—choosing the right partition key and leveraging secondary indexes for specific use cases—is critical for balancing scalability with low latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
