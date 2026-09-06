---
qid: ing_b67cdccc01__fp__local
question: 'Two-part coding warm-up: given a stream of user actions, return the k most
  engaged-with items. Then: why might your heap solution be the wrong choice in production?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 370
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:31:52-05:00'
sources: []
---

**Solution sketch (heap‑based)**  
We maintain a min‑heap of size *k* keyed by an engagement score \(E_i\) for each item \(i\).  
1. Scan the stream once, accumulating \(E_i\) in a hash map.  
2. When the map grows beyond *k*, push the new \((E_i,i)\) pair onto the heap; if the heap size exceeds *k*, pop the smallest.  
After the scan, the heap holds the top‑*k* items.

**Why this is optimal from an information‑theoretic view**  
The problem reduces to selecting the *k* largest elements in a stream—an instance of **top‑k selection**, which has a lower bound of \(O(n \log k)\) comparisons. The heap achieves that bound: each insert costs \(O(\log k)\), and we perform one per distinct item, not per action.

**Non‑obvious production pitfall**  
A min‑heap assumes *static* scores; in practice engagement evolves (e.g., recency decay). Updating a key inside the heap requires **decrease/increase‑key**, which is \(O(\log k)\) but also necessitates locating the element—an extra hash map lookup that can become a bottleneck. Moreover, if the stream is *high‑velocity* and the distinct item count far exceeds memory, the in‑memory hash map will thrash, causing GC pauses or out‑of‑memory errors. A streaming **reservoir** or probabilistic counting (e.g., Count‑Sketch) may be more robust under such conditions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
