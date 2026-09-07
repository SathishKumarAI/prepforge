---
qid: ing_2d3ee3ca84__aws__local
question: 'Explain: Source(s) and further reading — Hld System Designs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 486
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:07:20-05:00'
sources: []
---

**Answer – Amazon Way**

**S**ituation  
While leading a cross‑functional team that built an end‑to‑end recommendation engine for a global e‑commerce platform, I realized we needed a reference architecture to scale ML inference and training across multiple regions without compromising latency.

**T**ask  
I was tasked with curating a set of high‑level system design resources (books, whitepapers, AWS docs) that could serve as the “source(s)” for future ML projects in our org.

**A**ction  
1. **Ownership & Bias for Action:** I assembled an internal wiki page titled *“ML System Design Playbook.”*  
2. **Dive Deep & Invent & Simplify:** I distilled key concepts from:  
   - *“Designing Data-Intensive Applications”* (Martin Kleppmann) – for data pipelines and event‑driven architecture.  
   - AWS *Machine Learning Reference Architecture* whitepaper – outlining SageMaker Pipelines, Model Registry, and Batch Transform.  
   - *“Building Machine Learning Powered Applications”* (Jeremy Howard & Rachel Thomas) – for best practices in feature engineering and model monitoring.  
3. **AWS Services Mapping:** I mapped each architectural layer to services:  
   - **Data ingestion** → Amazon Kinesis + Glue Catalog.  
   - **Feature store** → SageMaker Feature Store with DynamoDB backing.  
   - **Training** → SageMaker Training Jobs on Spot Instances (cost ↓ ≈ 60%).  
   - **Inference** → SageMaker Endpoints behind Application Load Balancer, auto‑scaling based on CloudWatch metrics.  
4. **Cost & Availability:** I added a cost model (≈$0.12/GB for data transfer + $1.50/hr per instance) and an HA diagram using Multi‑AZ deployments.

**R**esult  
Within two sprints, 8 teams adopted the playbook, reducing design time by **40%** and achieving a **30% lift in model throughput** while keeping costs below budget. The page now serves as the go‑to reference for all ML system designs in our organization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
