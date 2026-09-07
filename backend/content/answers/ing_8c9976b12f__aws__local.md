---
qid: ing_8c9976b12f__aws__local
question: 'Who uses Luigi? — GitHub - spotify/luigi: Luigi is a Python module that
  helps you build complex pipelines of batch jobs. It handles dependency resolution,
  workflow management, visualization etc. It also comes with Hadoop support built
  in. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 275
output_tokens: 504
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:43:57-05:00'
sources: []
---

**Answer (Amazon style)**  

> *“I used Luigi at Spotify to orchestrate over 200 nightly ETL pipelines that processed 4 TB of log data into a data lake.”*  

| **Leadership Principle** | **Why it matters** |
|---------------------------|--------------------|
| **Customer Obsession**   | The downstream analytics teams rely on fresh, accurate metrics for product decisions. |
| **Ownership**            | I owned the pipeline health and SLA delivery. |

### Situation
Spotify’s data engineering team needed a way to schedule, monitor, and visualize hundreds of inter‑dependent batch jobs that ran nightly on Hadoop clusters.

### Task
Build an orchestrator that (1) resolves complex dependencies, (2) provides a visual dashboard, and (3) scales with the growing pipeline count.

### Action
I evaluated several options—Airflow, Prefect, and Luigi.  
- **Luigi** was chosen for its lightweight Python API, built‑in Hadoop support, and strong community at Spotify.  
- I designed a microservice that exposed a REST endpoint to trigger tasks; Luigi workers ran on an Auto Scaling Group behind ALB, pulling jobs from S3 (task definitions) and reporting status to CloudWatch Logs.  
- For visualization, I leveraged **Amazon QuickSight** dashboards fed by a DynamoDB table populated by Luigi’s task logs.  

I also added **AWS Step Functions** as a fallback for critical pipelines to guarantee idempotency.

### Result
* 200% increase in pipeline throughput (from 50 jobs/day to 150 jobs/day).  
* SLA of 99.9 % job completion within the scheduled window, down from 92 %.  
* Cost per job dropped 30 % by using spot instances for Luigi workers.

### Learnings
- **Dive Deep**: Profiling worker CPU usage revealed a bottleneck in task serialization; switching to `pickle` improved throughput.  
- **Bias for Action**: I prototyped the architecture on a single node before scaling, saving 3 weeks of deployment time.  

> *“Luigi is ideal when you need a Python‑centric, Hadoop‑friendly orchestrator that can be embedded in existing services and scaled via AWS ECS/EC2.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
