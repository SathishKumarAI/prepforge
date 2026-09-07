---
qid: ing_1d0c6261c9__aws__local
question: 'Explain: Getting started — Cody - Sourcegraph docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 585
total_tokens: 815
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:32:08-05:00'
sources: []
---

**Situation (S)**  
When I joined the *ML Ops* team at a fintech startup, we had an internal code search tool called **Cody** that was built on Sourcegraph but lacked any ML‑driven insights for developers. The product roadmap demanded a recommendation engine to surface relevant docs and snippets in real time.

**Task (T)**  
I was tasked with prototyping a lightweight pipeline: ingest Cody’s query logs, train embeddings, expose an inference endpoint, and measure impact on developer productivity.

**Action (A)**  
1. **Data‑driven ingestion** – I used **AWS Glue** to crawl the Sourcegraph index, transform raw search logs into a Parquet dataset in S3, and schedule nightly jobs via **EventBridge**.  
2. **Model training** – Leveraging **Amazon SageMaker** (Notebook + Processing), I fine‑tuned an open‑source sentence‑embedding model on our domain data, storing the checkpoint in S3.  
3. **Inference** – Deployed the model as a *SageMaker Endpoint* behind an Application Load Balancer, integrated with Cody’s API gateway using **AWS Lambda** for request routing.  
4. **Observability & scaling** – Enabled CloudWatch metrics (latency, error rate) and auto‑scaling based on CPU usage; set up **Amazon SageMaker Model Monitor** to detect drift every 12 hrs.  
5. **Cost control** – Reserved 1‑year instances for the endpoint and leveraged spot training jobs, cutting inference cost by 30% versus on‑demand.

**Result (R)**  
Within two weeks of launch, developer click‑through rate on recommended docs rose from 4.2 % to 18.7 % (a **4× lift**), and the average time to find a solution dropped from 9 min to 3.5 min—an overall productivity gain quantified at ~12 h per engineer per month. The system ran with <1 % SLA violations, keeping monthly spend under $2k.

---

### Leadership Principles Highlighted  
- **Ownership** – I drove the full stack (data, model, deployment) from scratch.  
- **Dive Deep** – Built custom ingestion pipelines, tuned hyperparameters, and monitored drift.  

### What a Bar‑Raiser Listens For  
- Concrete ownership: “I owned the end‑to‑end flow.”  
- Depth & metrics: “4× lift in click‑through; 12 h productivity gain.”  
- Learning from failure: After an initial spike in latency, I tuned batch size and switched to spot instances—showing iterative improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
