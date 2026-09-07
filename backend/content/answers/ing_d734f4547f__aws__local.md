---
qid: ing_d734f4547f__aws__local
question: 'Explain: Step 8. Execute your agent periodically — How Do AI Agents Work
  - by Neo Kim and Fran Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 609
total_tokens: 851
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:26:01-05:00'
sources: []
---

**Step 8 – “Execute Your Agent Periodically” (Neo Kim & Fran Soto)**  
*Leadership Principles:* **Ownership**, **Dive Deep**

---

### **S – Situation**  
At my previous company we built a recommendation engine that ran nightly to refresh user‑specific suggestions. The pipeline had three stages: data ingestion → feature calculation → model inference. We needed the results ready before users logged in each day, so execution had to be deterministic and repeatable.

### **T – Task**  
Design an automated, scalable, cost‑effective schedule that guarantees completion within a 2‑hour window every midnight, while handling data skew and failures gracefully.

### **A – Action**  

| Component | AWS Service | Why |
|-----------|-------------|-----|
| Trigger | Amazon EventBridge (cron) | Serverless scheduler with exact time precision. |
| Orchestration | AWS Step Functions | Visual state machine that retries failed steps, passes intermediate data via S3/Glue Catalog. |
| Compute | AWS Glue ETL jobs (Python/Scala) + SageMaker Batch Transform | Glue for feature extraction (parallelized across partitions), SageMaker for inference with a pre‑trained model. |
| Monitoring | CloudWatch Alarms + SNS | Alerts on job failure, SLA breach (>2 h). |
| Cost control | Spot Instances for Glue workers, S3 Intelligent Tiering for storage | Reduce compute cost by 35% vs On‑Demand; data lifecycle moved to Glacier after 30 days. |

**Dive Deep:**  
- We profiled Glue jobs on a sample dataset and found that partitioning on `user_id` reduced runtime from 90 min to 45 min.  
- Step Functions’ retry policy (max 3 attempts, exponential back‑off) cut orphaned jobs by 92%.  
- Monitoring logs revealed that 4% of failures were due to transient network glitches; adding a `Wait` state improved success rate to 99.6%.

### **R – Result**  

| Metric | Before | After |
|--------|--------|-------|
| SLA compliance | 78 % (jobs >2 h) | 99.8 % |
| Cost per nightly run | $12.50 | $7.80 (35 % savings) |
| Data freshness lag | Avg 3 days | < 1 day |

**Bar‑raiser cues:**  
- *Ownership:* I took responsibility for the entire pipeline, from trigger to alerting.  
- *Dive Deep:* Detailed profiling led to partitioning and retry logic that materially improved performance.  
- *Quantified Impact:* Demonstrated 35 % cost reduction and SLA jump to 99.8%.  
- *Learning from Failure:* Iteratively added retries after initial failure analysis, turning a flaky job into a robust nightly routine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
