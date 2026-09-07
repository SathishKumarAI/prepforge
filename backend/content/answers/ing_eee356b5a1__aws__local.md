---
qid: ing_eee356b5a1__aws__local
question: 'Explain: Basic Prompting — Prompt Engineering | Lil''Log'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 369
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:17:48-05:00'
sources: []
---

**Prompt Engineering – “Lil’ Log” case**

*Situation:*  
At a fintech startup I was tasked to reduce the time it took data scientists to prototype NLP models for customer support tickets from **3 days → 30 minutes**.

*Task:*  
I owned the end‑to‑end prompt‑engineering workflow: define reusable prompt templates, automate validation, and integrate with our ML pipeline.

*Action:*  
1. **Dive Deep** into user logs; identified 4 recurring intent categories that accounted for 78 % of tickets.  
2. Built a lightweight prompt library in Python using **AWS SageMaker Pipelines** + **Amazon Bedrock** (OpenAI GPT‑3.5). Each template was versioned in CodeCommit and parameterized via Secrets Manager.  
3. Implemented an A/B test harness that automatically scored responses against a labeled set, storing metrics in Amazon CloudWatch and DynamoDB for traceability.  
4. Leveraged **AWS Lambda** to trigger re‑prompting when confidence < 0.7, ensuring 99.5 % coverage of high‑impact tickets.

*Result:*  
- Prototype turnaround dropped from **3 days → 30 minutes** (an **85 %** time savings).  
- Model accuracy improved by **12 pts** F1 score on the test set.  
- Operational cost fell by **$2k/month** due to reduced SageMaker training hours.

*Learnings:*  
Owning the end‑to‑end prompt pipeline taught me that small, reusable components can scale rapidly—exactly what Amazon expects from a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
