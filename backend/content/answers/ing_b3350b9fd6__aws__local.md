---
qid: ing_b3350b9fd6__aws__local
question: 'Explain: AI-Augmented Obfuscation: Evasion and Polymorphism'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 424
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:09:52-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a threat‑intel team tasked with detecting AI‑generated evasion malware that used polymorphic obfuscation to slip past signature engines. The goal was to reduce false negatives by 30 % while keeping the alert volume below 5 % of our baseline.

**Action**  
I owned the solution architecture:  

1. **Data pipeline** – Ingested 2 TB/day of binaries into an S3 bucket, triggered a Lambda that ran *Cuckoo Sandbox* on each sample.  
2. **Feature extraction** – Extracted opcode n‑grams and control‑flow graph metrics; stored vectors in DynamoDB for low‑latency lookups.  
3. **Model** – Trained a Gradient‑Boosting model (XGBoost) on 1 M labeled samples, deployed via SageMaker Endpoint with auto‑scaling to 8 vCPUs.  
4. **Polymorphism detection** – Added a graph neural network (GraphSAGE) that scored structural similarity; flagged samples with >0.85 similarity as “polymorphic.”  

We wrapped the entire flow in Step Functions, ensuring *high availability* (99.9 %) and *cost control* (~$1.2K/month).  

**Result**  
Within three months we cut false negatives from 12 % to **8 %**, a 33 % improvement, while alert volume dropped by 4 %. The model’s precision rose from 78 % to 88 %, directly reducing analyst toil.

**Reflection**  
I learned that *Bias for Action* can be balanced with *Dive Deep*: building an end‑to‑end pipeline surfaced hidden data quality issues early. I also practiced the bar‑raiser habit of quantifying impact—every iteration was measured against the same KPI set in the sprint backlog.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
