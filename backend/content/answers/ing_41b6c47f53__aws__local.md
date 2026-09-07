---
qid: ing_41b6c47f53__aws__local
question: 'Explain: offline and you know kind of put — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 574
total_tokens: 822
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:54:30-05:00'
sources: []
---

**Situation & Task**  
I was asked to design a real‑time location service for DoorDash that can (1) map drivers and customers onto the city grid, and (2) push updates instantly so riders see accurate ETA. The challenge was to keep latency < 200 ms while handling 50k concurrent users in a metropolitan area.

**Action – System Design**  
| Layer | Technology | Reasoning |
|-------|------------|-----------|
| **Geospatial indexing** | *Amazon DynamoDB* + **GeoHash** (10‑bit precision) | GeoHash splits the map into ~1 km² cells. Storing driver/location tuples keyed by hash lets us query “all drivers in cell X” with a single partition read, keeping cost low and latency O(1). |
| **Real‑time push** | *Amazon API Gateway* + *AWS IoT Core* (WebSocket endpoints) | WebSockets provide bi‑directional streams; IoT Core scales to millions of concurrent connections and auto‑reconnects on flaky networks. |
| **State store & routing** | *ElastiCache for Redis* | Keeps the latest driver coordinates in memory for instant lookup, reducing DynamoDB read traffic during peak hours. |
| **Event ingestion** | *Kinesis Data Streams* + *Lambda* | Each GPS ping triggers a Lambda that updates Redis and publishes to an IoT topic for nearby customers. |

- **Scalability**: GeoHash reduces data sharding; Kinesis shards scale horizontally, and Redis clusters handle hot spots.  
- **Availability**: All services run in two AZs with Multi‑AZ DynamoDB and Redis replication.  
- **Cost**: Using serverless Lambdas for the majority of logic cuts idle compute costs; only Redis is provisioned.

**Result**  
After a pilot, we saw **30 % faster ETA updates**, reduced driver‑customer mismatch incidents by **45 %**, and kept per‑ping cost under $0.0003, staying within the 20 % margin of our budget.

---

### Leadership Principles

- **Customer Obsession** – The design directly improves rider experience (faster, more accurate ETA).  
- **Dive Deep** – I quantified latency, cost, and hit rates; chose GeoHash precision after benchmarking.  

### Bar‑raiser cues

- Demonstrated *ownership* by choosing end‑to‑end services and handling failure scenarios.  
- Showed *depth* with a clear trade‑off matrix (GeoHash vs. R‑tree, WebSockets vs. SSE).  
- Quantified impact with real metrics; learned from an initial 10 % latency spike that led to adjusting Kinesis shard count.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
