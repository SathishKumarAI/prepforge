---
qid: ing_051bfd9810__aws__local
question: 'Explain: Why PMs and QAs MUST Do This (Not Just Engineers)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 414
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:37:26-05:00'
sources: []
---

**Why PMs and QAs Must Own the AI Lifecycle (Not Just Engineers)**  

*Situation:* Our team launched a recommendation engine on **SageMaker** that was 30 % slower than expected after production roll‑out. *Task:* As the Product Manager, I needed to pinpoint root causes beyond code bugs.  
*Action:*  
1. **Customer Obsession + Ownership:** Conducted user journey mapping and set up **CloudWatch dashboards** for latency, error rates, and model drift metrics.  
2. **Dive Deep + Bias for Action:** Collaborated with QA to design data‑driven test suites that simulate edge cases (cold starts, skewed feature distributions). Leveraged **S3 event triggers** to auto‑run inference tests on new training datasets.  
3. **Invent & Simplify:** Created a lightweight “model health” microservice using **Lambda + API Gateway**, publishing health scores to an SNS topic for instant alerts.  
4. **Deliver Results:** Reduced median latency from 2 s to 0.8 s within two sprints, cutting compute costs by 18 % and boosting NPS by 12 points.

*Result:* By taking ownership of data quality, test coverage, and real‑time monitoring—tasks traditionally reserved for engineers—we turned a costly performance issue into a scalable, cost‑efficient solution that directly impacted customer satisfaction.  

**Bar‑raiser cues:** Demonstrated deep understanding of ML ops (SageMaker, S3, CloudWatch), quantified impact on latency/cost/CSAT, and learned to pivot from code fixes to process improvements when failures surfaced.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
