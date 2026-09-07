---
qid: ing_f4963f79ec__faang__local
question: 'Explain: Here is a scheduler class from a small LLM inference engine. One
  method, `_admit_requests`, is left as a stub - no spec, no docstring, no tests.
  Walk me through your first thirty minutes.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 754
total_tokens: 1023
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:08:48-05:00'
sources: []
---

## 1️⃣ Clarify  
*What’s the goal of `_admit_requests`?*  
- It probably decides which inference requests to accept into the GPU queue vs. reject or defer.  
- Likely balances **throughput**, **latency guarantees** and **resource constraints** (memory, compute).  
- Ask:  
  - What metrics are we optimizing?  
  - Is there a max batch size / concurrent request limit?  
  - Are requests prioritized by user/tenant?  
  - Do we have soft deadlines or SLA windows?  
  - How is memory tracked (per‑token, per‑model)?  

## 2️⃣ Approach  
1. **Define the admission policy**: FIFO with optional priority queue.  
2. **Model resource consumption**: each request → `(tokens × model_mem_per_token)`.  
3. **Maintain state**: current GPU usage, pending queue length.  
4. **Admission logic**:  
   - If `usage + req ≤ capacity`, admit immediately.  
   - Else if queue has space and request is low‑priority, enqueue.  
   - Otherwise reject with an error code.  
5. **Return** a tuple of admitted list & rejected list for downstream handling.

## 3️⃣ Depth (Pseudo‑code)  

```python
class Scheduler:
    def __init__(self, gpu_mem: int, max_queue: int):
        self.gpu_mem = gpu_mem
        self.max_queue = max_queue
        self.usage = 0
        self.queue: Deque[Request] = deque()

    def _admit_requests(self, requests: List[Request]) -> Tuple[List[Request], List[Request]]:
        admitted, rejected = [], []

        for r in requests:
            req_mem = r.tokens * r.model.mem_per_token

            # 1. Try immediate admission
            if self.usage + req_mem <= self.gpu_mem:
                admitted.append(r)
                self.usage += req_mem
                continue

            # 2. Queue fallback (FIFO)
            if len(self.queue) < self.max_queue:
                self.queue.append(r)
                rejected.append(r)   # queued, not processed yet
                continue

            # 3. Hard reject
            rejected.append(r)

        return admitted, rejected
```

- **Complexity**: `O(n)` per call, constant‑time queue ops.  
- **Trade‑offs**: FIFO may starve high‑priority jobs; can swap to a priority heap if needed.

## 4️⃣ Edge Cases  
| Case | What breaks? | Test |
|------|--------------|------|
| Request size > GPU capacity | Immediate reject, but queue may still accept smaller ones | Submit oversized request → should be rejected. |
| Queue full while usage free | Queued request denied even though resources exist | Simulate queue at `max_queue`; ensure new requests are admitted if space frees. |
| Rapid churn of short jobs | Potential thrashing | Stress test with bursty traffic. |

## 5️⃣ Optimize & Communicate  
- **Optimization**: Batch multiple admission decisions to reduce lock contention in a multithreaded setting.  
- **Narration**: “First I formalized the policy—admit if memory permits, otherwise queue up to a cap, else reject. I kept it linear for speed and added clear return groups so downstream can handle each case.”  

This plan satisfies FAANG’s emphasis on clarity, structured reasoning, and depth while leaving room for future enhancements (priority queues, deadline‑aware admission).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
