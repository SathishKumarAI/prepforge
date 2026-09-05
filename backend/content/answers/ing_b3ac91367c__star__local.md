---
qid: ing_b3ac91367c__star__local
question: 'Explain: Static vs. Dynamic Batching — Batching Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 335
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:31:15-05:00'
sources: []
---

**Situation:**  
When I joined a startup building a real‑time recommendation engine, our GPU cluster was underutilized because each user request hit the model with a single example. The latency budget was 50 ms, but we were averaging 120 ms per inference.

**Task:**  
I had to redesign the batching strategy so that we could keep the GPUs busy without exceeding the latency limit and still support variable batch sizes coming from millions of users.

**Action:**  
I first implemented **static batching**: a fixed queue size of 32 requests. The scheduler would wait until the queue filled, then launch a single GPU kernel. This cut throughput by 40 % because many queues never reached capacity during low traffic. Next, I introduced **dynamic batching** with TensorRT’s “adaptive” mode. It aggregates incoming requests in real time, launching kernels whenever the cumulative latency hits 30 ms or the batch reaches 64. We added a small FIFO buffer and a timeout of 15 ms to guarantee no request waits too long. I also tuned kernel launch parameters (shared memory size, block count) for our ResNet‑50 model.

**Result:**  
Dynamic batching increased GPU utilization from 35 % to 78 %, slashing average inference latency to 38 ms and boosting throughput by 3×. I learned that a hybrid approach—static for predictable high traffic periods and dynamic for bursts—yields the best balance between efficiency and responsiveness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
