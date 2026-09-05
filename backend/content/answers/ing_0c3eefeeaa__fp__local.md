---
qid: ing_0c3eefeeaa__fp__local
question: 'Explain: Coding: given annotation sessions as (start, end) timestamps,
  return the peak number of concurrent annotators, and the intervals during which
  the platform was at peak load.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 506
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:31:51-05:00'
sources: []
---

**Why the problem is interesting**

An annotation platform keeps a stream of sessions \((s_i,e_i)\).  
At any instant \(t\) the *load* is the number of intervals covering \(t\).  
We want two things:

1. The maximum load \(L_{\max}\).  
2. Every contiguous interval where the load equals \(L_{\max}\).

This is a classic “maximum overlapping intervals” problem, but we must return the **time ranges** that sustain the peak.

---

### First‑principle solution

1. **Events are all start/end points.**  
   For each session create two events:
   - \((s_i,\ +1)\) – one annotator joins.  
   - \((e_i,\ -1)\) – one annotator leaves.  

2. **Sort by time, breaking ties with the rule “end before start”.**  
   If a session ends exactly when another starts we do not double‑count; the platform never had both simultaneously.

3. **Sweep line**:  
   ```
   cur = 0
   Lmax = 0
   intervals = []
   last_time = None

   for (t, delta) in sorted_events:
       if last_time is not None and cur == Lmax:
           # we are inside a peak interval
           intervals.append((last_time, t))
       cur += delta
       if cur > Lmax:               # new peak discovered
           Lmax = cur
           intervals = []            # discard old peaks
       last_time = t
   ```

4. **Post‑processing**  
   The list `intervals` now contains every maximal stretch where the load equals \(L_{\max}\).

---

### Non‑obvious insight

Many solutions only return the *value* of \(L_{\max}\).  
The subtlety is that a peak can persist over multiple events; by recording intervals **during** the sweep (not after), we capture exactly when the platform was at its highest load. This avoids an extra pass and guarantees correctness even when many sessions share identical boundaries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
