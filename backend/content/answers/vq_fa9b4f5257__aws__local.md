---
qid: vq_fa9b4f5257__aws__local
question: What is the difference between Array and List in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 444
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:23:40-05:00'
sources: []
---

**Situation / Task**

At my last role I was tasked with refactoring a nightly ETL that processed 1 TB of JSON logs into Parquet for downstream BI. The codebase used `List` for intermediate collections, causing memory churn and slow GC.

**Action**

I benchmarked `Array[Int]`, `ArrayBuffer[Int]`, and immutable `List[Int]` in Scala on an EMR cluster (Spark 3.x). I also profiled the job with **X-Ray** to trace GC pauses. The key design decisions were:

| Collection | Memory (MB) | CPU (ms) | GC pause (ms) |
|------------|-------------|----------|---------------|
| List       | 1 200       | 48 000   | 350           |
| ArrayBuffer| 300         | 8 500    | 35            |
| Array      | 250         | 7 800    | 30            |

I replaced the `List` with an `ArrayBuffer`, then switched to a pre‑allocated `Array` once sizes were known. I also wrapped the transformation in a Spark UDF and used **S3 Select** to pull only needed columns, cutting input size by 60 %.

**Result**

The job runtime dropped from **4 h → 1.2 h** (75 % faster), CPU usage fell 30 %, and GC overhead was <5 %. Costs on EMR were reduced by ~$300/month.

**Reflection**

*Ownership*: I owned the entire refactor, documented the trade‑offs in a README, and mentored juniors.  
*Dive Deep*: The micro‑benchmarks uncovered the real bottleneck (GC pauses).  
*Bias for Action*: I acted within 48 h, delivered measurable savings, and iterated based on metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
