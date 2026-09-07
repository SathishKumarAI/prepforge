---
qid: ing_68d90e06ff__aws__local
question: 'Explain: 3.4 Concurrent and Parallel — Concurrency vs Parallelism - by
  Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 481
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:21:32-05:00'
sources: []
---

**Situation & Task (S)**  
While leading a data‑science squad for a real‑time fraud detection service at a fintech startup, we noticed that our nightly batch inference pipeline was bottlenecked by the “concurrent vs parallel” confusion in our engineers. The product owner demanded a 30 % faster throughput without adding infra cost.

**Action (A)**  
I first held a quick workshop to clarify concepts:  

|                     | **Concurrency**                                   | **Parallelism**                                 |
|---------------------|----------------------------------------------------|-------------------------------------------------|
| Goal                | Handle many tasks that share limited resources     | Execute multiple independent tasks simultaneously|
| Typical use         | I/O‑bound (e.g., DB calls, HTTP)                  | CPU‑bound (matrix ops, feature engineering)    |

I mapped our pipeline stages:  
1. **Data fetch** – I/O bound → *concurrency* via async/await + `boto3` SQS.  
2. **Feature extraction & model scoring** – CPU heavy → *parallelism* using `multiprocessing.Pool` on a spot‑instance fleet (p4d.xlarge).  

We added an **AWS Step Functions state machine** to orchestrate the two parallel branches, with retries and dead‑letter queues. Metrics:  
- Before: 12 h nightly run, 1.2 M records processed.  
- After: 8 h run (33 % faster), cost down 18 % due to spot savings.

**Result (R)**  
The product owner approved the release; downstream dashboards now show fraud scores 4 min earlier on average, improving merchant response time by 25 %. The team documented the concurrency/parallelism cheat‑sheet in Confluence, reducing onboarding time for new hires from 2 weeks to 3 days.

**Leadership Principles Highlighted**  
- **Customer Obsession:** Faster fraud detection directly protects users.  
- **Dive Deep & Ownership:** I dissected the pipeline, identified precise bottlenecks, and owned the solution end‑to‑end.  

**Bar‑raiser takeaways** – clear concept mapping, quantifiable impact, and a learning artifact that scales beyond this single project.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
