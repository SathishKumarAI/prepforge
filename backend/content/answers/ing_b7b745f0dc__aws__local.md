---
qid: ing_b7b745f0dc__aws__local
question: 'Explain: Unacceptable Risk: Prohibited AI Practices'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 388
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:19:31-05:00'
sources: []
---

**Situation / Task**  
While leading the “Safe‑AI” initiative at my previous firm, I was tasked with defining a policy that would prevent any AI model from violating privacy, safety, or bias guidelines before it reached production.  

**Action**  
I built a *Prohibited‑Practice Engine* that ingests every training artifact and inference request through an **AWS Step Functions** orchestration. Each step runs a containerized rule set on **Amazon SageMaker Processing Jobs** that checks for:  
1. *Privacy leaks* – using Amazon Macie to scan embeddings for PII patterns.  
2. *Safety violations* – employing custom classifiers hosted in **Amazon Comprehend Medical** and an open‑source toxicity model, all running on **AWS Fargate** for zero‑maintenance scaling.  
3. *Bias & fairness* – executing a *Fairness Checker* script on SageMaker that compares demographic subgroup metrics against the global baseline (Δ≤5 %).  

If any rule fails, Step Functions triggers an alert in Amazon SNS and routes the data to **Amazon SQS** for manual review; otherwise it forwards the payload to the production endpoint via API Gateway.  

**Result**  
The policy cut downstream compliance incidents by **87 %** within 90 days and reduced manual review time from 12 hrs to **45 min per batch**, saving $48k/month in engineering hours.  

*Leadership Principles*: **Customer Obsession** (protecting user data), **Ownership** (end‑to‑end policy enforcement).  

*Bar‑raiser focus*: depth of technical design, measurable impact, and continuous learning from early false positives that led to refining the rule set.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
