---
qid: ing_b67cdccc01__star__local
question: 'Two-part coding warm-up: given a stream of user actions, return the k most
  engaged-with items. Then: why might your heap solution be the wrong choice in production?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 347
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:36:02-05:00'
sources: []
---

**Situation**  
While working on a real‑time recommendation engine at a media startup, we received a high‑volume stream of user interactions (clicks, plays, likes) and needed to surface the top k most engaged items for each user within a 5‑second window.

**Task**  
Implement an efficient algorithm that updates the top k items on the fly and evaluate its suitability for production use.

**Action**  
I built a min‑heap of size k keyed by engagement count. For every incoming action I incremented the item’s counter in a hash map; if the heap had fewer than k elements I pushed the new item, otherwise I compared the new count to the heap root and replaced it when larger. This kept the heap balanced and allowed O(log k) updates per event. After the window closed I extracted the heap into a sorted list for display.

**Result**  
The solution processed 200k actions/second with < 10 ms latency, keeping memory usage under 5 MB. However, in production it proved fragile: when an item’s count dropped (e.g., due to a rollback), the heap didn’t automatically remove stale entries, leading to inflated top‑k lists. Additionally, the O(log k) overhead became significant for k≈1000, and garbage collection spikes hurt latency. I learned that while heaps are great for small k, in high‑throughput, mutable streams a sliding window with a frequency table or approximate counting (Count‑Min Sketch) can be more robust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
