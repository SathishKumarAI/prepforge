---
qid: ing_923b282739__faang__local
question: 'Explain: Flight Booking design problem - Search — Apachecasandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 498
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:24:35-05:00'
sources: []
---

**Clarify**  
We need a scalable search service for flight bookings that stores itineraries in **Apache Cassandra**. The key questions:  

1. What query patterns will be used? (e.g., *search by origin/destination/date*, *filter by price/airline*)  
2. How many writes vs reads per second?  
3. Do we need strong consistency or eventual is fine?  

**Approach**  
1. **Schema design** – create a time‑partitioned table keyed on `origin`, `destination`, and `date` (or a composite key) to localize read traffic.  
2. **Denormalization** – duplicate data for each supported filter (price, airline) so that no joins are required at query time.  
3. **Secondary indexes or materialized views** only for infrequently used filters; otherwise use pre‑computed tables.  
4. **Query patterns** – a single SELECT with the composite key returns all flights for that leg/date; client side paging handles large result sets.  

**Depth**  
- Partition key: `(origin, destination, date)` → ensures uniform distribution across nodes.  
- Clustering columns: `price`, `airline_id` → sorted to support range queries on price or airline.  
- Replication factor (RF) = 3; consistency level QUORUM for writes, ONE for reads to trade off latency vs durability.  
- Use *cassandra-driver*’s paging and async queries to keep throughput high.  

**Edge Cases**  
- Hot partitions if a popular route has too many flights on a single day → shard by hour or use a secondary partition key.  
- Flights spanning midnight → store both departure and arrival dates in separate rows.  
- Schema evolution (new filters) → add new tables rather than altering existing ones to avoid downtime.  

**Optimize & Communicate**  
- Measure read/write latency with realistic load; if reads dominate, add read‑optimized secondary indexes or a materialized view for price ranges.  
- Use compaction strategies tuned for write-heavy workloads (Size-Tiered).  
- Document the rationale: denormalization reduces query complexity, partitioning balances load, and replication guarantees high availability. This clear trade‑off narrative satisfies FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
