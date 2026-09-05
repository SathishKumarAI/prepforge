---
qid: ing_1b2dfb9c35__star__local
question: 'Explain: Heap / Priority Queue (7 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 352
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:23:48-05:00'
sources: []
---

**Situation:**  
At my last role I led the backend for a real‑time recommendation engine that had to surface the top‑k most relevant items to millions of users per second. The raw scoring pipeline produced a list of 10,000 candidates per request, but we could only return 50 due to latency constraints.

**Task:**  
I needed an efficient way to keep track of the highest‑scoring items while streaming scores in and ensure the response time stayed under 120 ms for every query.

**Action:**  
I implemented a min‑heap (priority queue) using Java’s `PriorityQueue`. As each score arrived, I pushed it onto the heap; when its size exceeded 50, I popped the smallest element. This gave us an O(n log k) solution instead of sorting the full list (O(n log n)).  
To avoid repeated allocations, I reused a fixed‑size array‑backed heap and wrapped it in a thread‑safe wrapper using `ConcurrentLinkedQueue` for incoming streams. I also added lazy deletion logic to handle score updates efficiently.

**Result:**  
The system now returns the top 50 items in ~80 ms on average, a 33% reduction from the previous 120 ms implementation. CPU usage dropped by 15%, and we saw a measurable lift in click‑through rate because users received fresher recommendations. I learned that choosing the right data structure—here a heap for dynamic top‑k selection—can yield dramatic performance gains without overcomplicating the codebase.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
