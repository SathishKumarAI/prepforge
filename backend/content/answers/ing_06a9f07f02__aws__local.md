---
qid: ing_06a9f07f02__aws__local
question: 'Explain: Title: Large Language Models Often Know When They Are Being Evaluated'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 479
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:40:55-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a recent project I led the design of an in‑house LLM that needed to self‑diagnose when it was being evaluated. The goal: **“Reduce manual QA cycles by 40 % while keeping error rates below 2 %.”**  

**Situation & Task**  
Our model was used for customer support tickets; each evaluation round involved a human annotator scoring outputs. I owned the pipeline and wanted to shift the burden from humans to the model itself.

**Action**  
1. **Built an “evaluation‑aware” layer** that injects a hidden flag token (`<EVAL>`) into the input whenever the request originates from the QA system.  
2. The LLM was fine‑tuned with contrastive loss to recognize this token and generate a confidence score in its own logits.  
3. Deployed on **Amazon SageMaker** for scalable inference, using **Endpoint Autoscaling** to keep latency < 200 ms.  
4. Logged flags and scores to **CloudWatch Logs**, feeding a Lambda that triggers an SNS alert if the confidence drops below 0.75—this was our “self‑evaluation” trigger.

**Result**  
- Manual QA time dropped from 3 hrs/day to 1.8 hrs/day (40 % reduction).  
- Confidence‑based filtering removed 18 % of low‑quality responses, keeping overall error < 2 %.  
- Cost per inference fell by 12 % thanks to the autoscaling configuration.

**Leadership Principles**  
*Customer Obsession*: We delivered a smoother customer support experience.  
*Ownership*: I drove end‑to‑end design, from data labeling to deployment and monitoring.  

**Bar‑raiser notes**  
The interviewers will look for evidence that I *dove deep* into the token‑injection technique, quantified the impact with real numbers, and learned from a failed early trial where we mis‑estimated confidence thresholds—leading to a revised loss function that improved stability by 15 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
