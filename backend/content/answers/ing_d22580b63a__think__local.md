---
qid: ing_d22580b63a__think__local
question: 'Explain: Filtering — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 472
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:50:30-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Confirm “Filtering” refers to message filtering in a publish‑subscribe (Pub/Sub) system, e.g., routing messages to subscribers based on predicates.  
- Assume we’re designing for high throughput, low latency, and eventual consistency (common in event‑driven architectures).  

**2️⃣ Pick a mental model / framework**  
- Use the classic *producer–broker–consumer* pipeline of Pub/Sub.  
- Think of “filtering” as an additional layer between broker and consumer: either broker‑side filtering (topic/queue partitions) or consumer‑side filtering (subscriptions with selectors).  

**3️⃣ Reason step‑by‑step toward a design**  
1. **Define requirements** – message volume, latency, filter expressiveness, scaling needs.  
2. **Choose filter placement** – broker‑side gives lower cost per message; consumer‑side offers flexibility but increases network traffic.  
3. **Model data structures** – inverted indexes for topic‑based filters, Bloom filters for fast membership tests.  
4. **Consider state management** – stateless vs. stateful filters (e.g., pattern matching over streams).  
5. **Add fault tolerance & replay** – store filter metadata in a replicated config service; ensure idempotent delivery.  

**4️⃣ Common traps to avoid**  
- *Assuming all filters can be expressed as simple topics* – many real use‑cases need complex predicates (regex, ranges).  
- *Ignoring the cost of copying messages to multiple consumers* – leads to bandwidth spikes.  
- *Over‑optimizing for latency at the expense of consistency* – may drop or duplicate events.  

**5️⃣ Sanity‑check & verbalize**  
- Sketch a diagram: producers → broker (with filter engine) → topic partitions → consumer groups.  
- Run through a sample flow: a message arrives, broker evaluates predicates, routes to matching queues; consumers pull from their queue.  
- Verify edge cases: dynamic filter updates, scaling out brokers, back‑pressure handling.

By following these steps you can articulate a clear, robust filtering strategy for a Pub/Sub system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
