---
qid: ing_6e14fb05ce__aws__local
question: 'Explain: Platforms — GitHub - langwatch/langwatch: The platform for LLM
  evaluations and AI agent testing \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 411
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:32:49-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the migration of our internal LLM‑evaluation suite (LangWatch) from a monolithic test harness to a fully managed, scalable platform on AWS. The goal was to cut evaluation time by 70 % while ensuring every new model version got automated, reproducible testing.

**Action – Design & Implementation**  
- **Architecture:** Built an event‑driven pipeline using **Amazon EventBridge** → **AWS Lambda** for lightweight orchestration and **Step Functions** for long‑running evaluation workflows.  
- **Compute:** Leveraged **Amazon SageMaker Processing Jobs** to run inference on GPU instances, auto‑scaling via Spot Fleet to keep costs < $0.15/hr per job.  
- **Storage & Metrics:** Persisted raw logs in **S3** and aggregated results into **Amazon Athena** for ad‑hoc queries; visualized dashboards with **QuickSight**.  
- **CI/CD:** Integrated with GitHub Actions, pushing new evaluation scripts to a **Lambda layer** that automatically updates all running jobs.  

**Result**  
- Reduced average evaluation latency from 45 min to 12 min (≈ 73 % improvement).  
- Cut compute spend by 60 %, saving ~$25k annually.  
- Enabled every model commit to trigger automated tests, raising our defect detection rate from 4 % to 18 %.  

**Leadership Principles Highlighted**  
- **Customer Obsession:** Delivered faster, cheaper insights for data scientists and ML engineers.  
- **Ownership & Dive Deep:** Handled every layer—from event routing to cost optimization—while continuously monitoring performance metrics.  

**Bar‑raiser Takeaway**  
I owned the end‑to‑end pipeline, quantified impact with clear KPIs, and learned from a failed initial spot‑instance strategy by shifting to managed SageMaker jobs, illustrating iterative learning and bias for action.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
