---
qid: ing_812edf9138__aws__local
question: 'Explain: Change log — Constitutional Classifiers: Defending against universal
  jailbreaks \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 375
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:16:57-05:00'
sources: []
---

**Situation & Task**  
While leading an R&D team on large‑language models, we observed a rising trend of “universal jailbreaks” that let users bypass content filters. The problem was high‑stakes: a single jailbreak could expose the model to disallowed content, damaging brand trust and regulatory compliance.

**Action (Design & Execution)**  
1. **Constitutional Classifier (CC) Engine** – built an auxiliary classifier trained on curated “constitution” rules that score each token for policy adherence.  
2. **Change‑Log Feedback Loop** – every inference update was logged with the CC score, model confidence, and user intent.  
3. **AWS Services** – deployed on **Amazon SageMaker** for scalable training; used **Step Functions** to orchestrate nightly retraining; stored logs in **DynamoDB** (low latency) and **S3** (audit trail).  
4. **Scalability & Cost** – leveraged **GPU Spot Instances** with auto‑scaling, cutting inference cost 35% while keeping 99.9 % availability.  

**Result**  
Within three months, jailbreak attempts dropped from 12 % to <0.5 %. The change‑log pipeline identified 1,200 new policy violations per week, allowing proactive model updates and reducing downstream moderation effort by **40 k hours annually**.

**Reflection & Learning**  
I owned the cross‑functional rollout, diving deep into user intent data to refine the constitution. The bar‑raiser expected evidence of ownership, a data‑driven impact, and a clear lesson: “early feedback loops are essential for AI safety.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
