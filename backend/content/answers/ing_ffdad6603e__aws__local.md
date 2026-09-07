---
qid: ing_ffdad6603e__aws__local
question: 'Explain: Increasing utilization through elastic compute'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 488
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:56:17-05:00'
sources: []
---

**Situation / Task**  
At a previous e‑commerce company I was charged to lift the utilization of our nightly recommendation engine from ~30 % to >80 % without adding hardware.

**Action**  
I re‑architected the workflow into a *serverless, elastic* pipeline:

| Step | AWS Service | Why |
|------|-------------|-----|
| Ingest & preprocess | **Amazon S3 + Glue** | Durable storage and schema discovery. |
| Feature calculation | **AWS Lambda (15 s timeout)** | Spin‑up per batch; no idle EC2 cost. |
| Model inference | **Amazon SageMaker Neo on spot instances** | Auto‑scales with **SageMaker Batch Transform**; Spot reduces compute spend 70 %. |
| Orchestration | **Step Functions** | Visual state machine, retries & metrics. |

I added an **Auto Scaling Group (ASG)** for the spot fleet, set a *target utilization* of 80 % and used **CloudWatch alarms** to trigger new capacity only when the queue length exceeded 100 jobs.  

**Result**  
Utilization rose from 30 % → 85 % within two weeks. Compute cost fell by **$12K/month** (≈65 %) while inference latency stayed <200 ms. The system now auto‑scales during traffic spikes, giving us true elasticity.

**Reflection**  
- *Ownership*: I drove the end‑to‑end redesign and monitored KPIs post‑deployment.  
- *Dive Deep*: We profiled Lambda memory and spot instance failures to tune the batch size (3 GB → 1 GB).  
- *Learned*: Initial over‑provisioning of spot instances caused 30 % idle time; we corrected by tightening queue thresholds.

**Bar‑raiser cues I’d listen for**  
- Clear ownership narrative.  
- Quantified impact (utilization %, cost savings).  
- Technical depth: trade‑offs between Lambda vs EC2, Spot vs On‑Demand.  
- Lessons from missteps and how they informed the final solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
