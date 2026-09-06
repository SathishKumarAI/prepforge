---
qid: vq_54d18035da__faang__local
question: what are the parameters of mappers and reducers?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 703
total_tokens: 936
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:10:50-05:00'
sources: []
---

**Clarify**

You’re asking about the *configuration knobs* that control how a Hadoop **Mapper** or **Reducer** runs in a MapReduce job.  
Assumptions I’d confirm:  
• We’re talking about Hadoop‑YARN (not Spark/Beam).  
• The goal is to tune performance and resource usage, not just default values.

---

**Approach**

1. List the key parameters per component.  
2. Explain what each controls.  
3. Mention how they interact (e.g., mapper memory → number of map slots).  
4. Show typical trade‑offs.

---

**Depth**

| Component | Parameter | Effect |
|-----------|-----------|--------|
| **Mapper** | `mapreduce.map.memory.mb` | Heap size for a task JVM; higher = more data per map, but limits #parallel maps. |
| | `mapreduce.map.cpu.vcores` | Number of CPU cores allocated; influences scheduling and throughput. |
| | `mapreduce.map.java.opts` | JVM flags (e.g., Xmx) to fine‑tune GC or heap. |
| | `mapreduce.task.timeout` | Max time a map can run before YARN kills it. |
| **Reducer** | `mapreduce.reduce.memory.mb` | Heap for reducers; usually larger than maps because of shuffle/merge. |
| | `mapreduce.reduce.cpu.vcores` | CPU allocation per reducer. |
| | `mapreduce.reduce.java.opts` | JVM flags for GC tuning (often more aggressive). |
| | `mapreduce.reduce.shuffle.parallelcopies` | # of parallel connections to fetch map outputs; higher = faster shuffle, but network‑bound. |
| | `mapreduce.reduce.max.sort.buckets` | Limits number of intermediate buckets; affects merge time. |
| **Common** | `mapreduce.job.maps`, `mapreduce.job.reduces` | Target counts (YARN may adjust). |
| | `mapreduce.input.fileinputformat.split.minsize` / `maxsize` | Controls split size → #maps and IO locality. |

Typical trade‑off: increasing memory allows more data per task but reduces parallelism; more CPU cores speed up a single map/reduce, but YARN may throttle if cluster is saturated.

---

**Edge Cases**

* Too high `mapreduce.map.memory.mb` → OOM on the node or throttled by YARN.  
* Setting `mapreduce.reduce.shuffle.parallelcopies` > network capacity causes packet loss and retries.  
* Mismatched JVM opts (e.g., Xmx < memory param) leads to GC thrashing.

---

**Optimize & Communicate**

1. **Profile first** – use Tez/Drill metrics or YARN UI to see CPU vs. memory usage.  
2. **Iterate** – adjust one knob at a time, e.g., increase `mapreduce.map.memory.mb` by 256 MB and observe map throughput.  
3. **Document** – keep a run‑book of “good‑to‑bad” ranges per workload.  

By following this structured path—clarifying the scope, planning the knobs, diving into details, anticipating edge cases, and iteratively optimizing—you’ll demonstrate the analytical rigor and communication skills that FAANG interviewers prize.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
