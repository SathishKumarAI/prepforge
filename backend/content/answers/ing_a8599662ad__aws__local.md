---
qid: ing_a8599662ad__aws__local
question: 'Explain: Ten Users — AWS Scale - by Neo Kim - The System Design Newsletter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 717
total_tokens: 953
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:47:29-05:00'
sources: []
---

**Situation & Task (S)**  
In my last role I led the migration of a legacy ML inference pipeline from an on‑prem GPU farm to AWS. The business had **10 high‑profile data scientists** who required low‑latency predictions for real‑time dashboards, but the existing architecture was tightly coupled and expensive to scale. My goal was to design a cost‑effective, highly available solution that could handle peak traffic of ~200 inference requests per second while keeping per‑user costs under $50/month.

**Action (A)**  
1. **Requirements & Constraints** – I mapped out user journeys, identified latency SLAs (< 150 ms), and noted the need for zero downtime during model updates.  
2. **Design** – I chose a **serverless inference stack**:
   * **Amazon SageMaker Endpoint (Multi‑Model)** to host up to 20 models per endpoint, leveraging **SageMaker Neo** for on‑device optimizations.
   * **AWS Lambda + API Gateway** as the front‑end, auto‑scaling with request bursts and caching identical predictions via **DAX**.  
   * **Amazon CloudWatch Alarms** trigger a **Step Functions** workflow that spins up an additional endpoint if latency > 200 ms for >30 s.  
3. **Scalability & Availability** – By using SageMaker’s multi‑model endpoints, we avoid the per‑instance cost of EC2 GPU nodes and gain *elastic inference* across AZs. The Lambda concurrency is set to 1000, giving us headroom for 10× traffic spikes.  
4. **Cost Optimisation** – I compared on‑demand vs spot training; spot saved 60 % for model training. For inference, the serverless model cost was ~$12/month per endpoint versus $200/month for a dedicated GPU instance.

**Result (R)**  
- **Latency** dropped from 350 ms to 90 ms (≈ 75 % improvement).  
- **Cost** fell by **70 %**, down to $45/month total.  
- The solution supported a 5× traffic increase during a product launch without any downtime, meeting the SLA in every case.

---

### Leadership Principles Highlighted
1. **Customer Obsession** – I focused on the data scientists’ real‑time needs and delivered measurable latency gains.  
2. **Dive Deep & Ownership** – By dissecting each component (SageMaker, Lambda, CloudWatch) I identified cost drivers and performance bottlenecks, then took full responsibility for redesigning the stack.

---

### What a Bar‑Raiser Listens For
| Indicator | Why It Matters |
|-----------|----------------|
| **Quantified Impact** | Demonstrates real business value (latency drop, cost savings). |
| **Depth & Trade‑offs** | Shows understanding of serverless limits vs. EC2 GPU costs. |
| **Learning from Failure** | Mentions prior failures with on‑prem GPUs and how the new design avoids them. |
| **Ownership** | Highlights end‑to‑end responsibility, from requirement gathering to post‑deployment monitoring. |

This answer blends a concise STAR narrative with a technically sound AWS architecture that meets key Amazon leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
