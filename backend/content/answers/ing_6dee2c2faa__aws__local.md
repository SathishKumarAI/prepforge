---
qid: ing_6dee2c2faa__aws__local
question: 'Explain: Scientific Simulations — Concurrency vs Parallelism - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 485
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:32:33-05:00'
sources: []
---

**Situation (S)**  
I led a research group at the University of Delhi that was tasked with running large‑scale climate models on our campus cluster. The team had to cut simulation time from 48 hrs to under 12 hrs without sacrificing accuracy.

**Task (T)**  
Identify whether we should parallelize every numerical routine or merely make them concurrent, and design an AWS‑based architecture that would scale automatically while keeping costs < $5k/month.

**Action (A)**  
1. **Dive Deep into the math:** I profiled each subroutine with `perf` and found that 60 % were CPU‑bound but could be executed independently (concurrency), whereas 40 % required shared state updates (true parallelism).  
2. **Design on AWS:**  
   * **AWS Batch** for job orchestration, automatically scaling EC2 Spot instances.  
   * **ECS Fargate + S3** for stateless sub‑tasks (concurrent).  
   * **Amazon ParallelCluster + Slurm** for tightly coupled MPI kernels (parallelism).  
   * **DynamoDB** to store intermediate state, minimizing lock contention.  
3. **Bias for Action:** I deployed a pilot with 16 vCPU c5.large instances and observed a 4× speed‑up; adding a dedicated shared‑memory node pushed it to 6×.

**Result (R)**  
The final production pipeline reduced simulation time from 48 hrs to 10 hrs, saving ~70 % of compute hours. Monthly spend dropped to $3.8k, below the $5k target. The team now routinely runs 20+ scenarios per week, enabling real‑time policy modeling.

**Leadership Principles Reflected**  
* **Customer Obsession:** Delivered faster, cheaper results for climate policymakers.  
* **Ownership & Dive Deep:** Took full responsibility for profiling, design, and cost control.  

Bar‑raisers look for clear ownership, quantitative impact, deep technical understanding, and learning from early failures—qualities I demonstrated throughout this project.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
