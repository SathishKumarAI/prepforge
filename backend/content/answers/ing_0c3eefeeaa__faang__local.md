---
qid: ing_0c3eefeeaa__faang__local
question: 'Explain: Coding: given annotation sessions as (start, end) timestamps,
  return the peak number of concurrent annotators, and the intervals during which
  the platform was at peak load.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 566
total_tokens: 824
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:12:28-05:00'
sources: []
---

**Clarify**  
We receive a list of annotation sessions, each as `[start, end)` timestamps (inclusive‑exclusive). We must:  
1. Find the maximum number of annotators that overlap at any instant (the *peak load*).  
2. Return all time intervals during which this peak load is maintained.  
Assumptions: times are integers or comparable; sessions may touch but not overlap if one ends exactly when another starts.

**Approach**  
Use a sweep‑line algorithm:  
- Create events `(time, delta)` where `delta = +1` at each start and `-1` at each end.  
- Sort events by time; for ties, process `+1` before `-1` so that back‑to‑back sessions count as concurrent.  
- Iterate, maintain `current`, update `max`. When `current == max`, record the interval’s start; when it drops below `max`, close the current interval.

**Depth**  
```python
def peak_load(intervals):
    events = []
    for s,e in intervals:
        events.append((s, 1))
        events.append((e, -1))
    events.sort(key=lambda x:(x[0], -x[1]))   # +1 before -1

    cur = max_cur = 0
    start = None
    peaks = []

    for t, d in events:
        prev = cur
        cur += d
        if cur > max_cur:          # new peak discovered
            max_cur = cur
            start = t
            peaks = []             # reset earlier intervals
        elif cur == max_cur and prev < cur:  # entering peak
            start = t
        elif prev == max_cur and cur < max_cur:  # exiting peak
            peaks.append((start, t))
    return max_cur, peaks
```
Time complexity `O(n log n)` (sorting); space `O(n)` for events.

**Edge Cases**  
- Empty list → peak = 0, intervals = [].  
- Single session → peak = 1, interval = that session.  
- Adjacent sessions: ensure they don’t merge unless truly overlapping.  

**Optimize & Communicate**  
If timestamps are integers in a small range, we could use a counting array (`O(range)` time). For streaming data, maintain a balanced BST of active intervals to update `cur` in `O(log n)`. In an interview, I’d highlight the sweep‑line’s simplicity, discuss tie handling, and confirm assumptions about inclusivity before coding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
