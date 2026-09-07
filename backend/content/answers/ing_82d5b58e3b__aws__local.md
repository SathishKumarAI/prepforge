---
qid: ing_82d5b58e3b__aws__local
question: 'Explain: Components — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 462
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:20:44-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a project to build a *Computer‑Use Agent* (C‑UA) that could autonomously interact with legacy desktop applications for data extraction and reporting. The goal was to reduce manual effort by 70 % and cut error rates from 5 % to <1 %.  

**Action**  
I split the system into three core components:  
1. **Perception Layer – OCR & UI‑Recognition** (AWS Textract, Rekognition + custom S3‑based image store).  
2. **Decision Engine – Policy & Intent Matching** using Amazon SageMaker for a fine‑tuned BERT model that maps screen states to actions.  
3. **Execution Layer – Agent Control** built on AWS Lambda orchestrated by Step Functions; each step calls an RDP/SSH session via AWS Systems Manager Session Manager, ensuring secure, auditable access.  

I chose serverless to scale elastically: 1 k concurrent sessions cost <$0.10/hr vs a dedicated VM cluster costing $12/hr. We added CloudWatch metrics and automated rollback on failures, achieving 99.9 % availability.  

**Result**  
After deployment, manual processing time dropped from 5 hrs/day to 30 min (84 % reduction), error rate fell to 0.8 %, and the team saved $18k/month in labor.  

**Leadership Principles**  
- **Customer Obsession**: Built a solution that directly addressed end‑user pain points.  
- **Ownership & Dive Deep**: I owned every layer, from model training to execution, and iterated on telemetry until performance hit targets.  

**Bar‑raiser take‑away**  
Showed ownership by driving the full stack, deep technical dive into each AWS service, quantified impact with real metrics, and learned from an initial 15 % latency spike that led to better throttling logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
