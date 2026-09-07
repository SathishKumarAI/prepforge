---
qid: ing_884f78d321__aws__local
question: 'Explain: CS324 - Large Language Models — Home | CS324'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 477
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:32:27-05:00'
sources: []
---

**S – Situation (Amazon Leadership Principle: Customer Obsession)**  
While leading the “CS324 – Large Language Models” course at my university, I noticed students struggled to deploy their models on campus servers—slow inference and high latency frustrated both instructors and learners.

**T – Task (Ownership)**  
I was tasked with creating a scalable, low‑cost deployment pipeline that would let every student run inference in under 200 ms while keeping the per‑student cost below $0.02/hour.

**A – Action (Dive Deep + Bias for Action)**  

| Step | AWS Service | Reasoning |
|------|-------------|-----------|
| 1 | **Amazon SageMaker Endpoint** (Inference Endpoint) | Handles auto‑scaling, spot instances for cost savings |
| 2 | **AWS Lambda** + **API Gateway** | Exposes a lightweight REST API; serverless keeps idle costs near zero |
| 3 | **Elastic Load Balancing** | Distributes traffic across multiple endpoints to reduce latency |
| 4 | **CloudWatch & X-Ray** | Continuous monitoring and tracing for root‑cause analysis |

I wrote a CI/CD pipeline in Terraform that automatically packages the HuggingFace model, deploys it to SageMaker, and exposes it via API Gateway. Students could hit the endpoint from any browser or Jupyter notebook.

**R – Result (Deliver Results)**  
- **Latency:** 180 ms average on a single GPU spot instance (vs. 650 ms on campus).  
- **Cost:** $0.015/hour per student, a 75% reduction compared to the previous on‑prem setup.  
- **Adoption:** 98 % of enrolled students used the endpoint within the first week; survey scores for “ease of use” rose from 3.2/5 to 4.7/5.

**Bar‑raiser Takeaway** – I demonstrated ownership by automating the entire flow, dove deep into AWS’s managed services to optimize cost and performance, quantified impact with concrete metrics, and learned that continuous monitoring (X‑Ray) was essential for sustaining low latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
