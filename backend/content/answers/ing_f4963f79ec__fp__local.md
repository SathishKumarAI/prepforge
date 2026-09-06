---
qid: ing_f4963f79ec__fp__local
question: 'Explain: Here is a scheduler class from a small LLM inference engine. One
  method, `_admit_requests`, is left as a stub - no spec, no docstring, no tests.
  Walk me through your first thirty minutes.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 553
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:39:29-05:00'
sources: []
---

**First‑30 min: turning a void method into a principled admission rule**

1. **Identify the optimization objective**  
   The scheduler is a *resource allocator* for an inference engine.  
   Its primary goal is to maximise *throughput* while keeping each request’s latency below its SLA.  
   This turns into a *knapsack‑like* problem: choose a subset of pending requests whose cumulative token budget fits the current GPU capacity, prioritising those that will finish earliest.

2. **Formulate constraints**  
   - `available_tokens` (GPU memory) must not be exceeded.  
   - Each request has an *estimated runtime* (`tokens × latency_per_token`).  
   - Optional per‑user or per‑model quotas.

3. **Derive the admission policy**  
   Treat each pending request as an item with weight = token count and value = 1/latency (higher value = higher priority).  
   Solve a *fractional* knapsack greedily: sort by decreasing value, admit until capacity runs out.

4. **Edge‑case handling**  
   - If no request fits, drop the longest one to free space for future arrivals.  
   - Periodically re‑evaluate when tokens are released (after completion).

5. **Implementation sketch**  

```python
def _admit_requests(self):
    self.available_tokens = self.total_tokens
    # estimate latency per token from recent runs
    lpt = self.avg_latency_per_token or DEFAULT_LPT

    pending = sorted(
        self.queue, key=lambda r: -r.tokens / (r.tokens * lpt)
    )
    admitted, rejected = [], []

    for req in pending:
        if req.tokens <= self.available_tokens:
            admitted.append(req)
            self.available_tokens -= req.tokens
        else:
            rejected.append(req)

    # optional eviction policy
    if not admitted and rejected:
        rejected.sort(key=lambda r: r.tokens, reverse=True)[0].drop()

    return admitted, rejected
```

6. **Non‑obvious insight**  
   *Latency per token is the true “price” of GPU memory.*  
   Two requests may consume equal tokens, but a request with longer context (higher latency per token) should be deprioritised; otherwise a single heavy job can starve the queue, reducing overall throughput.  

This plan gives you a deterministic, testable admission rule grounded in resource‑allocation theory and ready for unit‑tests that check throughput and SLA compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
