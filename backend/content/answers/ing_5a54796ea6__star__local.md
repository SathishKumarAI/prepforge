---
qid: ing_5a54796ea6__star__local
question: 'Explain: Heap (3 Problems) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 385
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:28:16-05:00'
sources: []
---

**Situation**  
During my last role I was tasked with revamping our recommendation engine. The existing priority queue for user events was a simple list that caused O(n) inserts and removals, leading to a 35 % slowdown during peak traffic. My manager asked me to replace it with an efficient heap structure.

**Task**  
I had to design a binary min‑heap that could handle up to 1 M queued items, support three core operations—`insert`, `extractMin`, and `decreaseKey`—and integrate it into our Go microservice without breaking the existing API.

**Action**  
I implemented a slice‑based binary heap in Go, using zero‑based indexing. For `insert`, I appended the new element and sifted up to restore order; for `extractMin`, I swapped the root with the last node, popped it, and sifted down. The tricky part was `decreaseKey` for our “hot” events: I stored a map from event ID to its index in the heap so I could locate it in O(1) time before sifting up again. I benchmarked against the list implementation, measured latency under load with `go test -bench`, and tuned the underlying slice capacity to reduce reallocations.

**Result**  
The new heap cut insert/remove latency from 8 ms to 0.4 ms on average, a 95 % improvement. Under simulated peak traffic (10k ops/sec), we saw a 30 % reduction in CPU usage and a smoother response time curve. I learned how subtle data‑structure choices—like maintaining an index map for `decreaseKey`—can dramatically impact real‑world performance, and the importance of rigorous benchmarking before deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
