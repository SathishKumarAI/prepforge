---
qid: vq_e007d04c8d__faang__local
question: How will you write custom partitioner?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 463
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:39:11-05:00'
sources: []
---

**Clarify**  
You’re building a Kafka/Hadoop stream where the default hash partitioning doesn’t preserve order or load balance for your key space. I’ll assume we need deterministic placement of keys to specific partitions, minimal shuffling, and support for dynamic re‑partitioning.

**Approach**  
1. **Define the partitioning rule** (e.g., `hash(key) % N` but with a custom hash or range logic).  
2. **Implement a reusable class** that extends Kafka’s `org.apache.kafka.clients.producer.Partitioner` (or Hadoop’s `Partitioner<K, V>`).  
3. **Cache any expensive look‑ups** (e.g., a mapping of key prefixes to partitions) for O(1) decisions.  
4. **Handle rebalancing** by returning the same partition for a given key across restarts.

**Depth**  
```java
public class RangePartitioner implements Partitioner {
  private final Map<String,Integer> prefixToPart = new HashMap<>();

  @Override public void configure(Map<String, ?> configs) {
    // load mapping from config or external service
  }

  @Override public int partition(String topic, Object keyObj,
                                 byte[] keyBytes, Object value,
                                 byte[] valueBytes, Cluster cluster) {
    String key = (String)keyObj;
    return prefixToPart.getOrDefault(key.substring(0,1), 0);
  }
}
```
*Complexity*: O(1) per message; memory cost is the mapping size.  
*Trade‑offs*: Harder to rebalance if partitions change; requires external coordination.

**Edge Cases**  
- Keys with unexpected prefixes → default partition.  
- Empty or null keys → throw exception or route to a safe bucket.  
- Partition count changes → rebuild mapping and notify producers.

**Optimize & Communicate**  
Explain that this design keeps the producer lightweight, offloads heavy logic to a cache, and can be upgraded to a range‑based algorithm for skewed data. I’d highlight how the custom partitioner improves throughput by reducing network hops and preserves ordering within partitions—key metrics for any streaming pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
