---
qid: ing_5bafcd214b__faang__local
question: 'Explain: Tagging Service — System Design Interview Cheat Sheet - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 509
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:16:31-05:00'
sources: []
---

**Tagging Service – System‑Design Cheat Sheet**

| # | Step | What to Cover |
|---|------|---------------|
| **1️⃣ Clarify** | • Restate: “We need a distributed service that lets clients add, delete, and query tags for arbitrary items (e.g., photos, products).”<br>• Confirm assumptions:  *Max users/items?*  *Read/write ratio?*  *Tag cardinality per item?*  *Consistency needs?* |
| **2️⃣ Approach** | • Identify core entities: `Item`, `Tag`, `User`. <br>• Outline high‑level components: API gateway → load balancer → stateless app servers → caching layer → NoSQL DB (wide‑row) + search index. <br>• Sketch data model and sharding strategy. |
| **3️⃣ Depth** | • **Data Model:** `item_tags[item_id] = {tag1, tag2,…}` stored in a key‑value store (Cassandra/Redis).  Secondary index: `tag_items[tag] → set(item_ids)`. <br>• **API Ops:** Add/Delete → upsert/delete rows; Query by item or by tag. <br>• **Scalability:** Partition by hash of `item_id` for writes, replicate for reads. <br>• **Consistency:** Eventual consistency acceptable; use lightweight transactions if strictness needed. |
| **4️⃣ Edge Cases** | • Extremely popular tags → hot keys → cache + sharding. <br>• Tag explosion per item → size limits & compaction. <br>• Deletion of a tag that still exists on many items → background job to clean references. |
| **5️⃣ Optimize & Communicate** | • Introduce caching (Redis) for frequent queries; use Bloom filters to avoid miss lookups. <br>• Batch writes during bulk imports. <br>• Explain trade‑offs: write latency vs. read amplification, consistency vs. availability. <br>• Narrate decisions in a story‑style “why we chose X over Y” format for interview clarity. |

**Key Takeaway:** Design the tagging service as a horizontally scalable key–value store with secondary indexes, backed by caching and batch processing to handle hot tags and high throughput while keeping complexity manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
