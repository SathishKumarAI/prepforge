---
qid: ing_fd32f0b11d__aws__local
question: 'Explain: Design — Agentic AI Use Cases - by Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 436
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:50:40-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was asked to prototype “Agentic AI” for a smart‑home platform: an autonomous agent that learns user preferences and manages devices without explicit commands. The goal was to increase user engagement by 25 % while keeping latency < 200 ms.

**Action (Design)**  
1. **Data Layer:** Used **Amazon Kinesis Data Streams** + **DynamoDB** for real‑time state persistence.  
2. **Model Training:** Trained a reinforcement‑learning policy in **SageMaker** on historical interaction logs, exporting the model to an **ECR container**.  
3. **Inference & Orchestration:** Deployed the container as a **Fargate task** behind an **Application Load Balancer**; invoked via **Step Functions** for multi‑step decision logic (device control → safety check → confirmation).  
4. **Observability:** Integrated **CloudWatch Logs/Events** and **X-Ray** to capture latency and failure paths, feeding back into a nightly retraining job.

**Result**  
- User engagement rose 32 % (target +25 %).  
- Latency averaged 140 ms; 99th‑percentile < 200 ms.  
- Cost per inference <$0.002, below the $0.005 baseline.

**Reflection & Learning**  
I owned the end‑to‑end pipeline and iterated on reward shaping after a 3‑day failure where the agent over‑controlled devices. By diving deep into Step Function traces I identified a bottleneck in the safety check step and replaced it with an async Lambda, reducing latency by 30 %. This experience sharpened my bias for action and reinforced the importance of continuous monitoring—principles that align tightly with **Ownership** and **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
