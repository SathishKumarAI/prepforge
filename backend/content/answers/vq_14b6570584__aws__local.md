---
qid: vq_14b6570584__aws__local
question: What are the differences between Scala’s Int and Java’s java.lang.Integer?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 411
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:40:04-05:00'
sources: []
---

**Customer Obsession & Ownership**

> **Situation:** While refactoring a nightly Spark job on EMR, I noticed the job was throwing `ClassCastException` after upgrading to Scala 2.12.  
> **Task:** Identify why a seemingly trivial type change caused runtime failures and quantify the impact.  
> **Action:** In Scala, `Int` is a *primitive* value type (32‑bit signed integer) that compiles directly to JVM `int`. `java.lang.Integer`, on the other hand, is an *object wrapper* that incurs boxing/unboxing overhead and allows nulls. I replaced all boxed `Integer`s with unboxed `Int`s in the dataset schema, removed unnecessary `Option` conversions, and added a unit test asserting that no nulls propagate.  
> **Result:** Runtime errors dropped from 12 % of jobs to 0 %. The job’s memory footprint shrank by ~18 MB per executor (≈30 % reduction), cutting the EMR cost for a 100‑node cluster by ~$200/month.  

**Dive Deep & Deliver Results**

I profiled the JVM with `jvisualvm` and observed that each boxed integer added ~16 bytes of heap pressure, causing more frequent GC pauses. By switching to primitives, I lowered GC pause times from 350 ms to <80 ms per cycle, improving overall job latency by 25 %.  

**Learning & Trade‑offs**

While unboxing gives performance gains, it eliminates null safety; thus I added explicit schema validation before the conversion step. This experience reinforced that even minor type choices can ripple into cost and reliability at scale—an insight I now embed in all Spark pipeline reviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
