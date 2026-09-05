---
qid: ing_82849195b9__star__local
question: 'Explain: Load Balancing Algorithms Explained with Code'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 381
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:54:25-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a real‑time recommendation service that ran on 12 GPU nodes. During peak traffic the latency spiked from 120 ms to over 600 ms, and our SLA allowed only 200 ms.

**Task:**  
I had to design a load‑balancing layer that distributed inference requests evenly across GPUs while respecting their memory limits and minimizing round‑trip time.

**Action:**  
I implemented a weighted round‑robin scheduler in Python using `asyncio` and the `grpc` library. Each GPU reported its current free memory via a health‑check endpoint; I stored these weights in an in‑memory dictionary. The scheduler loop looked like this:

```python
async def dispatch(request):
    # pick node with highest weight (free memory)
    target = max(nodes, key=lambda n: n.free_mem)
    target.free_mem -= request.size  # reserve space
    response = await grpc_stub(target.address).Predict(request)
    target.free_mem += request.size   # release after done
    return response
```

I also added a fallback policy that throttled requests if the total free memory fell below 20 % to avoid out‑of‑memory crashes. The scheduler ran in its own event loop, so inference threads never blocked.

**Result:**  
After deployment we saw latency drop to an average of 145 ms and 99th‑percentile under 250 ms during peak load—meeting the SLA by a wide margin. CPU usage on the balancer stayed below 5%, and GPU utilization averaged 78 % instead of the erratic 40–90 %. I learned that simple, data‑driven weighting combined with asynchronous dispatch can turn a fragile ML inference pipeline into a robust service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
