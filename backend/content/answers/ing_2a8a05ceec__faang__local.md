---
qid: ing_2a8a05ceec__faang__local
question: 'Explain: Get the local cluster information — GitHub - confluentinc/kafka-rest:
  Confluent REST Proxy for Kafka \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 461
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:22:05-05:00'
sources: []
---

**Clarify**  
You want to programmatically discover the **local Kafka cluster topology** (broker IDs, host/port, zookeeper nodes) that a Confluent REST‑Proxy instance is talking to.  
Assumptions:  
* The REST‑Proxy runs on the same machine as the client code.  
* You have network access to the Proxy’s admin endpoint (`/v3/clusters`).  

**Approach**  
1. Call `GET /v3/clusters` (Kafka REST v3) – it returns cluster metadata.  
2. Parse the JSON: `cluster_id`, list of brokers (`id`, `host`, `port`), and zookeeper connection string if present.  
3. Optionally, query `/v3/metadata` for topic‑level info to validate connectivity.  

**Depth**  
```http
GET http://localhost:8082/v3/clusters
```
Response example:
```json
{
  "data": [
    {
      "cluster_id":"kafka-cluster",
      "broker_ids":[0,1,2],
      "brokers":[{"id":0,"host":"10.0.0.1","port":9092}, …],
      "zookeeper_connect":"zk-01:2181"
    }
  ]
}
```
Use a JSON library (e.g., Jackson) to deserialize into POJOs.  
Time complexity is O(1) network round‑trip; memory usage is linear in broker count.

**Edge Cases**  
* REST‑Proxy not reachable → return error or fallback to default config.  
* Empty `broker_ids` → cluster down.  
* Multiple clusters (multi‑tenant) – handle array of data.

**Optimize & Communicate**  
Cache the result for a short TTL (e.g., 30 s) to avoid hammering the Proxy during high‑traffic periods. Log any discrepancies between advertised and actual broker addresses. Explain that this method is version‑agnostic (works with v2/v3 endpoints) and relies solely on the REST API, avoiding direct ZooKeeper or Kafka client introspection.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
