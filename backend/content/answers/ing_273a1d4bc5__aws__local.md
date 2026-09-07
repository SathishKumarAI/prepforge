---
qid: ing_273a1d4bc5__aws__local
question: 'Explain: Rapid Fire Comparison Sorts: — OG CS61B Data Structures and Sorting
  Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 395
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:54:30-05:00'
sources: []
---

**Situation & Task**  
While leading the ML infrastructure team for a recommendation engine, we needed to benchmark sorting algorithms that would process nightly user‑interaction logs (~5 TB). The goal was to identify an in‑house sort that could outperform the built‑in AWS Glue Spark job by at least 30% while keeping costs under $200/day.

**Action (Technical)**  
I mapped each classic algorithm—QuickSort, MergeSort, Radix, and IntroSort—to a distributed implementation on Amazon EMR with Apache Spark.  
* **QuickSort** → broadcast pivot selection; *MergeSort* → pairwise shuffle joins; *Radix* → bucket sort using S3 object keys; *IntroSort* → hybrid of QuickSort + HeapSort for worst‑case safety.  
I used CloudWatch metrics to capture shuffle bytes, executor time, and RDS read/write ops, then automated the run with AWS Step Functions.

**Result (Quantified)**  
Radix on EMR processed 5 TB in **1h 12m**, a **35% speedup** over Glue. Cost was $165/day—$35 below budget. The system now supports daily re‑ranking without SLA impact.

**Leadership Principles Demonstrated**  
- *Customer Obsession*: Delivered faster, cheaper recommendations to end users.  
- *Dive Deep & Ownership*: Built custom distributed sorts, tuned each step, and continuously monitored performance.

**Bar‑raiser Takeaway**  
I own the full loop: problem definition → algorithm selection → AWS service mapping → cost/latency trade‑offs → measurable impact. I learned that even proven algorithms can be re‑engineered for cloud scale when you understand both the theory and the platform nuances.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
