---
qid: ing_dd9bc4ae9b__aws__local
question: 'Q: What metrics would you track for a production LLM system?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 560
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:40:16-05:00'
sources: []
---

**Answer (Amazon Way)**  

*Leadership Principles:* **Customer Obsession**, **Dive Deep**, **Deliver Results**.

**Situation / Task**  
I was tasked with launching a production LLM serving 200k daily queries across multiple products. The goal was to ensure reliability, speed, and cost‑efficiency while keeping user experience top‑notch.

**Action**  
I defined a KPI set that maps directly to customer outcomes:

| Metric | Why it matters | AWS Service(s) | Scale / Cost Trade‑off |
|--------|----------------|---------------|------------------------|
| **Latency (95th %ile)** | Users notice delays before the 90th %ile. | CloudFront + Lambda@Edge, App Runner | Adds edge compute but slashes end‑user latency by ~30 %. |
| **Availability (% Uptime)** | Guarantees service continuity for SLA (99.9 %). | Route 53 health checks, ALB with Auto Scaling | Multi‑AZ deployment; costs ≈ $0.025/hr per AZ. |
| **Throughput (QPS)** | Measures capacity to handle traffic spikes. | Elastic Load Balancer + DynamoDB Streams | Horizontal scaling keeps QPS > 5k during peaks. |
| **Cost per Token** | Directly tied to revenue and margin. | Cost Explorer, Savings Plans | Enables weekly cost reviews; 15 % savings via Reserved Instances. |
| **Error Rate (per endpoint)** | Early detection of model drift or bugs. | CloudWatch Alarms + X-Ray traces | Triggers auto‑rollback in CodePipeline. |

I automated dashboards in **Amazon Managed Grafana** and set up alerts that auto‑trigger a rollback pipeline if latency > 200 ms for > 5 % traffic.

**Result**  
Within 3 months, we reduced the 95th percentile latency from 350 ms to 180 ms (48 % improvement) while keeping cost per token down by 12 %. Uptime hit 99.98 %, exceeding SLA. The data‑driven approach also uncovered a hidden memory leak in one inference endpoint, saving $8k/month.

**Bar‑raiser Takeaway**  
- **Ownership:** I owned end‑to‑end monitoring and cost control.  
- **Dive Deep:** Chose metrics that surface root causes (latency + error rate).  
- **Quantified Impact:** Reported real numbers tied to business outcomes.  
- **Learning from Failure:** The memory leak fix was a direct lesson in continuous observability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
