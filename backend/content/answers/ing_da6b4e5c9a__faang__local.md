---
qid: ing_da6b4e5c9a__faang__local
question: 'Explain: Use case: User enters a block of text and gets a randomly generated
  link'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 462
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:06:34-05:00'
sources: []
---

**Clarify**  
The goal is a system that accepts arbitrary user‑supplied text, transforms it into a *short*, random‑looking URL (e.g., `https://x.com/3f9a7b`), and stores the mapping for future redirection. Assumptions:  
- Text length ≤ 2 kB, ASCII only.  
- No semantic validation required; we only care about uniqueness & scalability.  
- Redirection latency < 100 ms.  

**Approach**  
1. **Generate a candidate key** – hash the text (SHA‑256) → base62 encode → truncate to 6–8 chars.  
2. **Deduplication** – check if the key already exists in a distributed KV store; if collision, append a counter or use UUIDv4 and retry.  
3. **Persist mapping** – write `(key → text)` into a sharded NoSQL DB (Cassandra/Redis) with TTL=0.  
4. **Return URL** – concatenate domain + key.  

**Depth**  
- *Complexity*: O(1) expected lookup/write; hashing is O(n).  
- *Collision handling*: 62⁶ ≈ 56 billion keys → negligible for < 10M users; still use a counter suffix if needed.  
- *Scalability*: Each shard handles ~10k writes/sec; horizontal scaling keeps throughput linear.  

**Edge Cases**  
- Extremely long input → truncate or stream hash.  
- Same text submitted concurrently → race condition resolved by atomic write (compare‑and‑set).  
- Key exhaustion in a region → rotate to longer keys or use UUIDs.  

**Optimize & Communicate**  
Future improvements:  
- Use a Bloom filter to pre‑check for existing keys, reducing DB hits.  
- Cache popular URLs in Memcached for sub‑10 µs latency.  
When presenting, walk through the flow diagramically, emphasize trade‑offs (hash length vs collision probability), and finish with a quick demo of complexity numbers to show you understand scalability constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
