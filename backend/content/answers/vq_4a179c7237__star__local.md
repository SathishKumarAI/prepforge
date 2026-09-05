---
qid: vq_4a179c7237__star__local
question: In which construct should this calculation be placed?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 468
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:58:03-05:00'
sources: []
---

**Situation** – I was working on a real‑time sales dashboard for an e‑commerce client that pushed updates to the UI every second. The backend had to calculate a rolling 5‑minute average of transaction totals. Initially we embedded the averaging logic directly inside the HTTP handler that served each request.

**Task** – My goal was to reduce latency and make the calculation testable, while keeping the code clean as the service grew to handle thousands of concurrent users.

**Action** – I refactored the code by moving the calculation into a dedicated `RollingAverageService`. The service maintained a fixed‑size circular buffer (a deque from the collections module) and updated it on each new transaction. It exposed a single method, `get_average()`, which performed O(1) summation using a running total. I also added a Redis cache layer to store precomputed averages for the last minute, reducing CPU usage when no new data arrived.

**Result** – The change cut average response time from 120 ms to 75 ms (a 37% improvement) and lowered CPU load by 22%. It also made unit testing trivial, as I could mock the buffer. I learned that isolating algorithmic logic in its own construct not only improves performance but also enhances maintainability and testability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
