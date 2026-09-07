---
qid: ing_427d83939c__aws__local
question: 'Explain: Frontend — ''The Open Source AI Stack'''
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 389
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:56:26-05:00'
sources: []
---

**Situation / Task**  
I led the front‑end team for an internal “Open Source AI Stack” portal that let data scientists prototype models in real time. The goal was to cut model iteration from **2 days → 4 hours** while keeping the UI responsive for 5,000 concurrent users.

**Action**  
- Adopted a **React + Vite** build pipeline (Amazon CloudFront + S3) for fast bundle delivery and zero‑downtime deploys.  
- Implemented **WebSocket‑based live tensor viewer** using Amazon API Gateway WebSockets + Lambda authorizers to stream GPU metrics from SageMaker endpoints.  
- Integrated **OpenAI’s Whisper** as a micro‑service behind an ECS Fargate task, exposed via App Mesh for service discovery and resilience.  
- Used **Amazon DynamoDB (on‑demand)** for experiment metadata; added TTLs to auto‑expire old runs, cutting storage costs by 35 %.  
- Employed **CloudWatch dashboards** + automated alerts to surface latency spikes before they hit users.

**Result**  
- User satisfaction score rose from **78 % → 92 %** (NPS).  
- Model iteration time dropped **84 %**, freeing 120 h of engineer time per month.  
- Infrastructure cost stayed under $2,500/month vs projected $4,800 with a monolithic stack.

**Reflection**  
I practiced *Ownership* by owning the end‑to‑end experience and *Dive Deep* by profiling every latency hotspot. The biggest learning was that real‑time streaming of tensors required a separate WebSocket layer; adding it early avoided a costly redesign later.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
