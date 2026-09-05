---
qid: vq_885e311f58__fp__local
question: Name Job control options specified by mapreduce?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 492
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:44:34-05:00'
sources: []
---

In Hadoop’s MapReduce API a **Job** object is the central control point that translates user intent into executable tasks.  
The options are split into two groups:

| Category | Typical methods / properties |
|----------|------------------------------|
| **Execution flow** | `setMapperClass`, `setReducerClass`, `setCombinerClass` |
| **Task parallelism** | `setNumReduceTasks`, `mapred.reduce.tasks`, `mapreduce.job.reduces` (runtime overrides) |
| **Data types** | `setMapOutputKeyClass`, `setMapOutputValueClass`, `setOutputKeyClass`, `setOutputValueClass` |
| **Input / Output formats** | `setInputFormatClass`, `setOutputFormatClass`, plus format‑specific options such as `TextInputFormat.setDelimiter` |
| **Job metadata** | `setJarByClass`, `setJobName`, `setUser`, `setQueueName` |
| **Configuration knobs** | Split size (`mapreduce.input.fileinputformat.split.minsize/maxsize`), buffer sizes, compression codecs, speculative execution flags (`mapreduce.map.speculative`, `mapreduce.reduce.speculative`) |

These settings collectively determine *what* the job does (mapper/reducer logic and data types), *how many* parallel tasks it spawns, *where* it reads/writes data, and *how* Hadoop orchestrates the underlying MapReduce framework.  

**Non‑obvious insight:**  
The `setJarByClass` call is not merely a convenience; it tells the cluster to ship the JAR containing that class, implicitly packaging all user code dependencies. Failing to set it (or using an incorrect class) leads to a silent “class not found” error at runtime—a subtle bug many overlook when debugging job submissions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
