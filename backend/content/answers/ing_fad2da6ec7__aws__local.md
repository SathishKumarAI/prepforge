---
qid: ing_fad2da6ec7__aws__local
question: What is WhatsApp? — Design WhatsApp | System Design Interview | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 495
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:45:39-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** In a recent project I led the migration of a legacy instant‑messaging app to an AWS‑native architecture while maintaining > 95 % uptime and scaling from 10 M to 100 M concurrent users in 3 months.  
> **Task:** Redesign the core “WhatsApp” system—message delivery, media storage, group chats, end‑to‑end encryption—using cloud services that meet strict latency (< 200 ms) and cost targets (< $0.02/message).  
> **Action:**  
> * **Compute & Messaging** – Deployed a stateless microservice layer on **Amazon ECS (Fargate)** behind an **Application Load Balancer**; used **Amazon SNS** for push notifications and **SQS** for asynchronous media processing.  
> * **Data Store** – Chose **DynamoDB** with global tables for low‑latency reads/writes, enabling real‑time chat state replication across AZs.  
> * **Media** – Stored files in **Amazon S3** (standard + Glacier) and served them via **CloudFront**, caching thumbnails to cut egress by 70 %.  
> * **Security** – Implemented per‑message encryption keys stored in **AWS KMS**, with a custom key‑rotation policy.  
> * **Observability** – Traced requests through **X-Ray**, monitored metrics on **CloudWatch**, and automated scaling via **Application Auto Scaling**.  
> * **Cost & Reliability Trade‑offs** – Leveraged spot instances for background jobs, achieving 35 % cost savings while maintaining a 99.999 % SLA.  
> **Result:** Delivered the new platform with a 4× throughput increase, reduced message latency to 120 ms on average, and cut operational costs by 28 %. The architecture now supports seamless global expansion and has been adopted as a reference for future messaging services.  

**Leadership Principles Highlighted:** *Ownership* – drove end‑to‑end delivery; *Dive Deep* – performed detailed cost/latency trade‑offs; *Deliver Results* – quantified performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
