---
qid: ing_428e41d29d__aws__local
question: 'Explain: Per-PR eval budget — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 800
total_tokens: 1032
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:56:29-05:00'
sources: []
---

**Scenario – Per‑PR Eval Budget in a GitHub‑Ops driven ML pipeline**

> *“When we introduced an automated “Eval Gated CI/CD” step that runs inference on every pull request (PR), the team was concerned about cost and latency.”*

---

### **Situation**
Our model registry held 12 GB of training artifacts. Every PR would normally trigger a full‑pipeline run (train → test → deploy) costing ~$120 per run and taking ~45 min. Stakeholders demanded faster feedback without blowing the budget.

### **Task**
Design a *per‑PR eval budget* that limits compute while still catching regressions early, and embed it into our GitHub Actions CI/CD flow.

### **Action**

| Step | Implementation | AWS Services |
|------|----------------|--------------|
| 1️⃣ **Budget definition** | Set a hard cap of **$2.50 per PR** (≈ 10 min GPU time). | — |
| 2️⃣ **Trigger** | GitHub Action `on: pull_request` → invoke Lambda to check budget. | AWS Lambda, CloudWatch Events |
| 3️⃣ **Eval job** | Spin up a **spot‑t3.medium EC2** (GPU‑free) with Docker image containing the inference script. Use *ECS Fargate* for portability. | Amazon ECS/Fargate, Spot Instances |
| 4️⃣ **Metrics & throttling** | Lambda queries CloudWatch to see remaining budget; if exhausted, short‑circuit job and comment “Budget exceeded.” | Amazon CloudWatch, SNS |
| 5️⃣ **Results** | Inference metrics (accuracy, latency) are pushed to **Amazon SageMaker Model Monitor** for trend analysis. | Amazon SageMaker, S3 |

*Trade‑offs*:  
- **Scalability**: Spot instances auto‑scale with PR volume; Fargate removes capacity planning.  
- **Availability**: If spot is interrupted, fallback to on‑demand instance (cost ↑ but still < $5).  
- **Cost**: Average spend per PR dropped from ~$120 to <$3, saving ~95 % annually (~$200k for 10K PRs).

### **Result**
Within two weeks we saw:
* **PR turnaround time** ↓ from 45 min to 12 min (×4 speed).  
* **Cost savings** of **$210k/yr**.  
* Regression detection rate remained at **98%** (only 2 false negatives in 1,200 PRs).

---

### **Leadership Principles Highlighted**

| Principle | How it Shaped the Solution |
|-----------|----------------------------|
| **Ownership** | I took full responsibility for redesigning the pipeline and negotiated budget limits with finance. |
| **Dive Deep** | Analyzed per‑PR logs to identify the largest cost drivers; chose spot‑based Fargate after profiling CPU/GPU usage. |
| **Bias for Action** | Deployed a minimal viable solution in 3 days, then iterated based on real metrics. |
| **Deliver Results** | Delivered measurable savings and faster feedback loop within SLA constraints. |

---

### **Bar‑raiser Checklist**

* **Quantified Impact?** ✔️ $210k/year savings, 4× speedup.  
* **Depth of Dive?** ✔️ Detailed cost/latency trade‑offs, fallback strategy.  
* **Learning from Failure?** ❌ (No major failures; plan to monitor spot interruptions and auto‑retry).  

> *“This project taught me that a small, well‑defined budget constraint can unlock massive efficiency gains without compromising quality.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
