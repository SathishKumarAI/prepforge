---
qid: ing_0c3eefeeaa__star__local
question: 'Explain: Coding: given annotation sessions as (start, end) timestamps,
  return the peak number of concurrent annotators, and the intervals during which
  the platform was at peak load.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 375
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:53:08-05:00'
sources: []
---

**Situation** – While working on a large-scale annotation platform for a medical imaging startup, we noticed that our server logs were showing intermittent timeouts during peak hours. The engineering team suspected that too many annotators were active simultaneously, but the exact load profile was unclear.

**Task** – I had to write an efficient routine that, given a list of (start, end) timestamps for each annotation session, would compute two things: the maximum number of concurrent annotators and the time intervals when this peak occurred. The function needed to handle millions of sessions in under a second so we could feed it into our autoscaling dashboard.

**Action** – I used a sweep‑line algorithm. First, I transformed every session into two events: +1 at start and -1 just after end (to treat ends as exclusive). Sorting these 2 N events by time gave me a linear pass where I maintained a counter of active annotators. Whenever the counter exceeded the current maximum, I updated `max_count` and started a new interval list; when it fell back below `max_count`, I closed the interval. This O(N log N) solution leveraged Python’s built‑in sort and simple integer arithmetic, avoiding nested loops.

**Result** – The function processed 3 million sessions in 0.42 seconds on a single core, revealing that peak concurrency was 1,245 annotators between 14:32–14:37 UTC. We used this insight to pre‑scale our GPU pool by 20% during those windows, cutting timeout rates from 8% to <0.5%. I learned how sweep‑line tricks turn a seemingly complex scheduling problem into a clean, scalable solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
