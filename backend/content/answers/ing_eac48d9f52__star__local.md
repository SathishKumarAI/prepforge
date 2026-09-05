---
qid: ing_eac48d9f52__star__local
question: 'Explain: You''re receiving an unbounded stream of event IDs. Return the
  k most frequent IDs seen so far, at any point, with bounded memory.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 409
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:17:43-05:00'
sources: []
---

**Situation:**  
While leading a real‑time analytics platform for a streaming video service, we started receiving an unbounded flow of user click IDs. The product team needed to surface the top 10 most popular content pieces at any moment without storing every ID in memory.

**Task:**  
Design and implement a bounded‑memory solution that continuously returns the k (k = 10) most frequent IDs seen so far, with minimal latency for each incoming event.

**Action:**  
I chose a Count‑Min Sketch (CMS) to approximate frequency counts using O(1/ε·log 1/δ) memory. I configured 4 hash functions and 1024 counters per row, giving <0.5% error with 99% confidence. For the top‑k extraction I maintained a min‑heap of size k that stored candidate IDs along with their CMS estimates. On each event, I updated the CMS counters, queried the heap for the ID’s current estimate, and if it exceeded the root of the heap, I replaced the root—ensuring O(log k) time per update. To keep memory strictly bounded, I discarded any counter that fell below a threshold via periodic decay, preventing stale counts from bloating the sketch.

**Result:**  
The system handled 2 M events/sec with <5 ms latency per event and consistently returned the correct top‑10 IDs within a 0.7% error margin. Memory usage stayed under 3 MB regardless of stream length. I learned that combining probabilistic sketches with lightweight heaps can deliver near‑real‑time analytics on unbounded data streams while respecting strict memory constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
