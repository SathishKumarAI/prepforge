---
qid: ing_06ffe2ae3e__faang__local
question: 'Explain: And then a scan allows you to — AWS re:Invent 2021 - Which NoSQL
  database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 527
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:00:48-05:00'
sources: []
---

**Clarify**  
The interview asks you to explain the “scan” operation in a NoSQL context and why choosing the right database matters at AWS re:Invent 2021. I’ll assume they’re referring to *range scans* (e.g., DynamoDB, Cassandra) that read contiguous key ranges.

**Approach**  
1. Define what a scan does versus a point lookup.  
2. List key trade‑offs (latency, throughput, consistency, cost).  
3. Match those to AWS’s NoSQL options: DynamoDB, Amazon Cassandra (via Keyspaces), and Amazon DocumentDB/Elasticsearch.  
4. Summarize when each is optimal.

**Depth**  

| Database | Scan characteristics | Ideal use‑case |
|----------|----------------------|---------------|
| **DynamoDB** | Partition key + optional sort key; scans are *full table* or *filtered* and return at most 1 MB per request. Requires provisioned throughput or on‑demand mode. | High‑throughput, low‑latency key‑value workloads with predictable access patterns (e.g., session store). |
| **Keyspaces (Cassandra)** | Linear scans via secondary indexes or token ranges; no server‑side filtering unless using CQL predicates. Handles write‑heavy workloads and wide rows. | Time‑series data, IoT telemetry where you need to read large contiguous blocks. |
| **DocumentDB / Elasticsearch** | Full document retrieval with rich query language; scans are essentially index lookups. Pay per request and scaling via shards. | Search‑centric or semi‑structured data requiring complex filters. |

**Edge Cases**  
- Scans on very large tables can exhaust provisioned capacity (DynamoDB) or overwhelm token ranges (Cassandra).  
- Cross‑partition scans in DynamoDB incur *scan* costs; consider using Global Secondary Indexes instead.  
- Secondary indexes in Cassandra may become stale if not refreshed.

**Optimize & Communicate**  
Explain that at re:Invent, AWS highlights **capacity provisioning**, **serverless options**, and **integration with Lambda** to mitigate scan overhead. Emphasize that the right choice hinges on *access pattern*, *data model*, and *cost sensitivity*. Conclude by recommending a hybrid approach: use DynamoDB for low‑latency key lookups and Keyspaces for bulk time‑series scans, keeping an eye on read/write capacity and partitioning strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
