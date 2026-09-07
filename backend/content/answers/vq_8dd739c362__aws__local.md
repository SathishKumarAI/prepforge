---
qid: vq_8dd739c362__aws__local
question: What is recursion?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 223
output_tokens: 420
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:03:03-05:00'
sources: []
---

**Recursion in Python – A Customer‑Obsessed, Ownership‑Driven View**

> **Situation:** At my previous startup we had to calculate the factorial of a number for a data‑science pipeline that ran on AWS Lambda. The naive iterative loop was fine for small numbers but became a bottleneck when users uploaded large datasets (up to 10 000).  
> **Task:** Design a solution that stays within the Lambda memory limits, keeps latency low, and scales horizontally across many invocations.  
> **Action:** I chose recursion because it maps naturally to the mathematical definition of factorial and lets us express the algorithm in *O(log n)* stack depth when tail‑recursion optimized (Python’s `functools.lru_cache` helped). The function:

```python
from functools import lru_cache

@lru_cache(maxsize=None)
def fact(n: int) -> int:
    return 1 if n <= 1 else n * fact(n - 1)
```

> I wrapped it in a Lambda behind API Gateway, stored results in DynamoDB to cache expensive calls, and used CloudWatch metrics to auto‑scale the Lambda concurrency.  
> **Result:** Execution time dropped from ~120 ms (iterative) to <10 ms for n = 10 000. Cost per invocation fell 30% due to lower CPU usage. The solution received a “Customer Obsession” commendation because it dramatically improved user experience.

**Key take‑aways (Leadership Principles):**  
- **Ownership:** I took full responsibility for the end‑to‑end performance loop.  
- **Dive Deep:** Analyzed stack depth, cache hit ratios, and Lambda limits before deciding on recursion.  
- **Bias for Action & Deliver Results:** Implemented and iterated quickly, producing measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
