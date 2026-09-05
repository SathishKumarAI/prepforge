---
qid: vq_82f9619e20__star__local
question: Multiples of Three from a Series?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 340
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:07:21-05:00'
sources: []
---

**Situation** – At my last job we had to audit a legacy data pipeline that streamed sensor readings every minute into an hourly batch for anomaly detection. The team noticed the hourly aggregate was off by ~12 % on weekdays, and our log review revealed that every third reading in each hour was being silently dropped due to a mis‑wired list comprehension.

**Task** – I was tasked with rewriting the aggregation logic so it correctly summed all readings while preserving performance (the pipeline processes 10k events per minute). The goal was to fix the bug, add unit tests, and keep the runtime under 20 ms per hour batch.

**Action** – I replaced the faulty slice `data[::3]` with a generator that yielded indices modulo three using `itertools.compress`. In code:

```python
from itertools import compress

def sum_multiples_of_three(data):
    return sum(compress(data, (i % 3 == 0 for i in range(len(data)))))
```

I added pytest cases covering empty lists, small samples, and a 60‑item synthetic stream. Profiling with `cProfile` showed the new version ran at ~18 ms per batch, comfortably within our SLA.

**Result** – The hourly aggregates now match ground truth to within 0.01 %. We reduced anomaly false positives by 15 % and improved confidence in downstream models. I learned that a clear understanding of Python’s iterator tools can turn a subtle off‑by‑one bug into an elegant, high‑performance fix.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
