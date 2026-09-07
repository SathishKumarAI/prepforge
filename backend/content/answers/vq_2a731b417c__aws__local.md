---
qid: vq_2a731b417c__aws__local
question: How to tune spark executor, cores and executor memory?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 439
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:44:29-05:00'
sources: []
---

**Situation & Task**  
I was leading a migration of our nightly ETL from on‑prem Hadoop to **Amazon EMR** for a financial services client that processes ~3 TB of log data each night. The goal was to cut job run time by 40% while keeping the cost below $1,200 per day.

**Action**  
1. *Dive Deep into Resource Utilization*: I enabled Spark UI and CloudWatch metrics (CPU %, memory usage, GC pause). I found that executors were spilling ~25 % of data to disk due to insufficient memory.  
2. *Iterative Tuning* – Using the “executor‑core = 4” default on EMR, I increased cores to **8** and reduced executor count from 50 to 30, reallocating memory per executor from 7 GB to **12 GB** (total ~360 GB).  
3. *Bias for Action*: Ran three pilot jobs; the 8‑core/12 GB configuration cut GC pauses by 70% and overall runtime dropped from 4:15 h to **2:30 h**.  
4. *Ownership & Deliver Results*: I scripted the new config into our CI pipeline, added alerts for executor failures, and documented a “Spark Tuning Playbook” for future teams.

**Result**  
- Runtime decreased by **42%**, meeting the 40% target.  
- Daily cost fell from $1,400 to **$950** (≈30 % savings).  
- The tuning framework is now part of our EMR launch template, ensuring consistent performance across environments.

**Key AWS Services Used**: Amazon EMR, CloudWatch, S3 for artifact storage.  

*Leadership Principles highlighted*: **Customer Obsession** (faster data availability), **Ownership** (end‑to‑end pipeline responsibility), and **Dive Deep** (metric‑driven optimization).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
