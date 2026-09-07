---
qid: ing_04eceb466f__aws__local
question: 'Explain: Resource Estimation — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 654
total_tokens: 887
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:37:12-05:00'
sources: []
---

**Customer Obsession | Dive Deep**

**Situation (S)**  
In Q2 2024 I led a cross‑functional team to launch an on‑demand ML inference service for retail recommendation. The product had to scale from 10k requests/day to 1M+ without compromising latency (<100 ms) or cost.

**Task (T)**  
We needed a quick “back‑of‑the‑envelope” resource estimate to prove feasibility to stakeholders and guide the architecture design before any code was written.

**Action (A)**  

| Step | What I did | Why |
|------|------------|-----|
| 1️⃣ | **Define workload** – 10 k requests/day → ~0.12 req/s; target peak 100× during sales → 12 req/s. | Establish baseline and burst scenario. |
| 2️⃣ | **Model inference cost** – 50 ms GPU per request, 4 GPU‑vCPU per instance, $0.90/hr on `p3.2xlarge`. | Estimate compute requirement. |
| 3️⃣ | **Compute instances needed** – \(12 \text{ req/s} × 0.05\text{s} = 0.6\) GPU‑seconds per second → 216 GPU‑seconds/hour. <br>Divide by 4 GPU‑vCPU → 54 GPU‑vCPU‑hrs/day. | Translate to EC2 hours. |
| 4️⃣ | **Add redundancy & autoscaling** – target 1.5× capacity → 81 GPU‑vCPU‑hrs/day. | Ensure high availability. |
| 5️⃣ | **Cost projection** – $0.90/hr × 81 h ≈ **$73/day**; annual ~$26k. | Provide ROI to leadership. |
| 6️⃣ | **Validate with simulation** – used AWS Compute Optimizer + Spot Instances to confirm savings (≈30% vs On‑Demand). | Reduce risk before deployment. |

**Result (R)**  
The estimate convinced the executive team, and we launched the service in 3 weeks. Production traffic grew to 600 k requests/day, achieving <90 ms latency while staying under $120/day—an **18 % cost saving** over our baseline plan. I documented assumptions, updated them quarterly, and built a lightweight dashboard (Amazon CloudWatch + QuickSight) for continuous monitoring.

---

### What the bar‑raiser looks for

- **Ownership**: I drove the entire estimation loop from data gathering to stakeholder approval.  
- **Dive Deep**: Each metric (GPU‑seconds, instance count, cost) was derived from real model benchmarks and AWS pricing APIs.  
- **Quantified Impact**: 18 % cost saving, 600 k requests/day lift.  
- **Learning from Failure**: Early simulation exposed a potential bottleneck; we pre‑empted it with autoscaling rules, turning a risk into an opportunity for optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
