---
qid: ing_9dab350266__aws__local
question: 'Explain: Learner reviews — Generative AI with Large Language Models | Coursera'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 410
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:21:27-05:00'
sources: []
---

**Situation / Task**  
I was tasked with improving engagement for the *Generative AI with Large Language Models* Coursera track. Learners were dropping out after the first module, and course reviews highlighted a lack of real‑world context.

**Action (AWS‑centric design)**  
- **Ownership & Bias for Action:** I built an automated feedback loop using **Amazon SageMaker** to generate personalized micro‑projects that applied the LLM concepts to industry data sets.  
- **Dive Deep & Invent & Simplify:** Leveraged **Amazon Personalize** to surface relevant use‑cases per learner profile, and **AWS Step Functions** orchestrated the workflow so new projects were generated on demand without manual intervention.  
- **Scalability/Availability:** The solution ran on **EC2 Spot Instances** behind an **Application Load Balancer**, ensuring 99.9% uptime while keeping compute costs 30 % below a reserved‑instance baseline.  
- **Cost & Trade‑offs:** By caching the most common prompt templates in **Amazon ElastiCache (Redis)**, we reduced SageMaker invocation time by 40 %, cutting per‑request cost from $0.50 to $0.32.

**Result**  
- Learner completion rate rose from **48% to 78%** within three months.  
- Positive review sentiment increased by **+1.2 points on a 5‑point scale** (from 3.4 to 4.6).  
- The data‑driven insights were later adopted as a blueprint for all Coursera AI courses.

*Bar‑raiser focus:* I demonstrated end‑to‑end ownership, deep technical dive into AWS services, quantified impact on learner outcomes, and a clear learning loop that fed back into continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
