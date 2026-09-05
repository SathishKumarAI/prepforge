---
qid: vq_60584eb692__star__local
question: What is High Water Mark?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 314
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:01:08-05:00'
sources: []
---

**Situation**  
At my last role on the real‑time analytics platform, our JVM heap usage was spiking during peak traffic windows—every time we hit a new data surge, the garbage collector would pause for over two seconds, pushing us past SLA thresholds.

**Task**  
I needed to identify why the pauses were happening and reduce them so that latency stayed below 150 ms even under the heaviest load.

**Action**  
After profiling with VisualVM, I discovered the application was constantly allocating large transient objects. I introduced a *high water mark* approach: we set a threshold for the heap’s “live” data—once usage exceeded this mark, the GC would trigger an early minor collection instead of waiting for the default cycle. I calibrated the mark by running load tests and observed that keeping live data below 70 % of the maximum heap size kept pause times under 80 ms. I also refactored the code to reuse buffers, lowering the peak allocation.

**Result**  
The new high water mark policy cut GC pause times from an average of 2.3 s to 0.07 s during traffic spikes—an 85% reduction—and improved overall request latency by 30 %. I learned that setting a dynamic threshold based on real‑world load can turn garbage collection from a bottleneck into a predictable, controllable process.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
