---
qid: ing_d5f1cc62eb__aws__local
question: 'Q: Why use Continued Pretraining instead of just putting domain data in
  the SFT set?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 435
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:23:09-05:00'
sources: []
---

**Why I choose continued pre‑training over a plain SFT set**

*Leadership Principles:* **Customer Obsession & Ownership** – my goal is to deliver a model that truly understands the customer’s domain without compromising generality.  

**Situation**  
In 2024 I led a project for a financial‑services client who needed a question‑answering bot that understood regulatory language. The initial SFT set contained only 5 k labeled examples, which caused over‑fitting and poor recall on unseen clauses.

**Task**  
I had to improve domain coverage while keeping inference latency <30 ms on an edge device.

**Action**  
1. **Continued pre‑training (CPT)**: I fine‑tuned the base LLM on 200 M unlabeled regulatory documents, leveraging AWS SageMaker for distributed training across 8 g4dn.xlarge instances (≈$0.90/hr each).  
2. **SFT**: Afterwards I performed supervised fine‑tuning on the 5 k labeled set to calibrate output quality.  
3. **Evaluation**: Measured F1‑score and latency on a held‑out test set.  

*AWS services used*: SageMaker, S3 for data lake, ECR for container images, Lambda for inference (cold start <25 ms).

**Result**  
CPT raised the model’s recall from 68 % to **87 %** while maintaining precision >90 %. Latency stayed within budget, and cost per training epoch dropped by 35 % compared with a full SFT on the same data volume.

**Learnings**  
*Dive Deep*: Profiling showed that CPT reduced vocabulary mismatch errors by 42 %, confirming the benefit of unsupervised exposure.  
Bar‑raiser focus: I demonstrated ownership (budget control), depth (analysis of error types), quantified impact (F1 jump), and lessons from initial over‑fitting failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
