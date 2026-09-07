---
qid: vq_150d74533d__aws__local
question: what is the difference between spark context and spark session?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 467
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:40:11-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *“In a recent migration of our nightly ETL pipeline from on‑prem Hadoop to an EMR cluster, I had to decide how best to expose Spark to our data scientists.”*  
> **Situation:** The team was using legacy `SparkContext` objects in custom libraries that were hard to maintain and caused subtle serialization bugs.  
> **Task:** Refactor the codebase to use a single entry point while preserving performance and compatibility with existing jobs.  
> **Action:** I introduced `SparkSession`, the unified interface that internally creates a `SparkContext`.  I rewrote all imports, added a shared factory method, and updated our unit tests to assert that each session uses the same configuration (`master`, `appName`, and Hadoop credentials).  This eliminated duplicate contexts, reduced memory churn by ~30%, and removed accidental job splits.  
> **Result:** Production jobs now run 25 % faster, and the number of “context‑creation” errors dropped from 12/month to zero. The change also simplified onboarding for new data scientists—one line of code (`SparkSession.builder.getOrCreate()`) is enough to start writing queries.  

**Technical Insight**  
- `SparkContext` is the low‑level engine that manages cluster resources and job scheduling.  
- `SparkSession` wraps a `SparkContext` plus SQL context, DataFrame APIs, and Hive support, providing a single entry point for all Spark workloads.  
- Using `SparkSession` prevents accidental creation of multiple contexts (which can exhaust executors) and aligns with the **Ownership** and **Dive Deep** principles by centralizing configuration management.

**Bar‑raiser cues I’d hear:**  
- Demonstrated ownership: refactored legacy code, quantified performance gains.  
- Dive deep: explained the internal relationship between `SparkSession` and `SparkContext`.  
- Quantified impact: provided concrete metrics (25 % faster, 30 % memory savings).  
- Learning from failure: noted previous context‑duplication bugs and how the new design prevents them.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
