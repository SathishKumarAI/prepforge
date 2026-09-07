---
qid: ing_73453aec89__aws__local
question: 'Explain: So when we install django, django brings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 407
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:46:16-05:00'
sources: []
---

**Situation / Task**  
When I first built a recommendation engine for a SaaS startup, the team installed Django to scaffold the web layer. I noticed that *“django”* pulls in **Django‑core**, **Django‑contrib** (auth, admin, sessions), and **Django‑settings** automatically—an implicit dependency chain we hadn’t documented.

**Action**  
I performed a **dependency audit** with `pipdeptree` to visualize the graph. Using this data I refactored the project into three micro‑services:  
1. **Auth Service (Python/Flask)** – only auth libs, deployed on **AWS Lambda + API Gateway** for instant scale and cost control.  
2. **Web UI (React)** – served from **Amazon S3 + CloudFront**; no Django runtime needed.  
3. **ML Inference (PyTorch)** – packaged in a **ECR container**, run by **AWS Fargate** behind an Application Load Balancer.

I removed the heavy `django.contrib.admin` and replaced it with a lightweight admin panel on React, cutting memory usage by 35 % per instance. I also added **Amazon CloudWatch** metrics to track cold‑start times; post‑refactor latency dropped from 480 ms to 120 ms (80 % reduction).

**Result**  
The new architecture lowered monthly spend from $1,200 to $520 while improving reliability (99.97 % uptime). The team now follows a documented “dependency hygiene” policy, reducing onboarding time by 30 %.  

---

*Leadership Principles:* **Ownership**, **Dive Deep**, and **Deliver Results**.  
*Bar‑raiser cues:* clear ownership of the refactor, deep dive into dependency graphs, quantifiable cost/latency impact, and learning from initial over‑dependency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
