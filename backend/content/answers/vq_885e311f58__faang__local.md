---
qid: vq_885e311f58__faang__local
question: Name Job control options specified by mapreduce?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 480
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:20:45-05:00'
sources: []
---

**Clarify**  
You’re asking which *job‑control* properties a MapReduce job can be configured with—those that let you influence scheduling, resource usage, and execution semantics.

**Approach**  
List the key categories: *resource allocation*, *fault tolerance & retries*, *execution order*, and *monitoring*. For each, give the specific Hadoop configuration keys or API methods that set them. Keep it concise but complete enough for a senior interview.

**Depth**

| Category | What it controls | Typical config / API |
|----------|------------------|----------------------|
| **Resource allocation** | CPU/memory per mapper/reducer, container size | `mapreduce.map.memory.mb`, `mapreduce.reduce.memory.mb`, `mapreduce.map.cpu.vcores`, `mapreduce.reduce.cpu.vcores` |
| **Job scheduling & placement** | Queue, priority, speculative execution | `mapreduce.job.queuename`, `mapreduce.job.priority`, `mapreduce.map.speculative`, `mapreduce.reduce.speculative` |
| **Fault tolerance / retries** | Max failures before aborting | `mapreduce.task.max.failures.per.tracker`, `mapreduce.job.reduces`, `mapred.task.timeout` |
| **Execution order & dependencies** | Sequential vs. parallel stages, dynamic allocation | `mapreduce.job.maps`, `mapreduce.job.reduces`, `mapreduce.map.output.compress` (compresses intermediate data) |
| **Monitoring / logging** | Counters, progress reports | `mapreduce.task.profile`, `mapreduce.job.user.classpath.first` |

**Edge Cases**  
- Over‑allocating memory can cause OOMs; under‑allocating hurts throughput.  
- Speculative execution is useful on heterogeneous clusters but may waste resources on fast nodes.  
- Setting a high retry count can mask underlying bugs.

**Optimize & Communicate**  
Explain that most of these knobs are tuned per cluster policy; in production, we expose only the essential ones (queue, priority, memory). Mention how you’d use YARN’s ResourceManager metrics to validate settings and iterate. Conclude by highlighting that mastering these controls is critical for scalable, cost‑effective data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
