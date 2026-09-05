---
qid: ing_1e2a943b43__star__local
question: 'Explain: Python — How does Garbage Collection work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 319
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:30:04-05:00'
sources: []
---

**Situation**  
While training a deep‑learning model for real‑time fraud detection, our nightly job kept crashing after a few hours with “Out of Memory” errors in TensorFlow on an EC2 spot instance.

**Task**  
I had to identify why the memory wasn’t being reclaimed and ensure the pipeline ran continuously without manual restarts, all while keeping latency under 200 ms for the inference service.

**Action**  
First I profiled the process with `tracemalloc` and discovered that many large NumPy arrays persisted because they were still referenced in a global cache. To trigger Python’s garbage collector, I added explicit `del` statements on those tensors after each training epoch and called `gc.collect()` manually. I also switched to using TensorFlow’s `tf.data.experimental.AUTOTUNE` with a bounded prefetch buffer so that the dataset pipeline didn’t hold onto more than 2 GB of memory. Finally, I wrapped the model in a context manager that resets variables on exit, ensuring no stale references survive between runs.

**Result**  
The job ran uninterrupted for over 72 hours, cutting peak memory usage from 8 GB to 4.5 GB and eliminating crashes. Latency stayed below 180 ms, meeting SLA. I learned that proactive GC management—clearing unused references and controlling data pipeline buffers—is essential in ML workloads where large tensors can easily outlive their usefulness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
