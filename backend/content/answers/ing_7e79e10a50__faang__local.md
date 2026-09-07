---
qid: ing_7e79e10a50__faang__local
question: 'Explain: Your LLM endpoint''s p99 latency doubled after a deploy. The model
  weights didn''t change. Walk me through your debugging.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 526
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:39:17-05:00'
sources: []
---

**Clarify**

We’re seeing the *p99* request‑latency of our LLM endpoint jump from ~200 ms to ~400 ms after a recent deployment, while the model weights and inference code stayed identical.  
Assumptions I’d confirm:  

1. The same hardware (GPU/CPU, network) is still in use.  
2. No new feature flags or middleware were added.  
3. Traffic patterns (QPS, request size) are unchanged.  
4. Metrics collection didn’t shift to a different sampling window.

**Approach**

1. **Baseline comparison** – pull latency histograms from before/after.  
2. **Instrumentation audit** – check for new async tasks or logs that could block the event loop.  
3. **Resource profiling** – GPU memory, CPU usage, I/O waits.  
4. **Model serving stack** – version of inference engine (e.g., ONNX Runtime), batch size, queue depth.  
5. **Deployment artefacts** – verify container image layers and config files.

**Depth**

- If the same Docker image was used but a new side‑car (e.g., Prometheus exporter) was added, its CPU usage could starve the inference thread, increasing p99.  
- A change in *batching* policy (from per‑request to batched) can inflate tail latency if batch size is too large or queue timeout is high.  
- Inspect *torch.cuda.synchronize()* calls; missing syncs lead to hidden GPU wait times that surface only at the tail.  
- Check for a new *asyncio* loop policy that blocks on I/O, adding context‑switch overhead.

Complexity: O(1) per request to read metrics; profiling is O(n) over all requests.

**Edge Cases**

- Sudden spike in concurrent requests → queue buildup.  
- Memory fragmentation causing slower GC pauses.  
- Network jitter between model server and cache layer.

**Optimize & Communicate**

Once the culprit (e.g., increased batch timeout) is identified, I’d:

1. Reduce the queue timeout or adjust batch size to balance throughput vs tail latency.  
2. Profile again to confirm p99 drops below 250 ms.  
3. Add a guard‑rail in CI: run latency tests after every deploy.

I’d document findings and next‑step recommendations in a concise post‑mortem, ensuring the team understands the root cause and mitigation path.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
