---
qid: ing_03764e6573__aws__local
question: 'Explain: Clarifying Questions to Ask — Whiteboard Exercises'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 386
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:32:08-05:00'
sources: []
---

**Customer Obsession & Ownership**

> *“When I was leading a cross‑functional AI feature for our recommendation engine, the first thing I did was treat every stakeholder’s pain point as a customer need.”*

### Situation  
Our product team wanted to prototype a new “contextual search” model. The scope was vague and the deadline tight (2 weeks).  

### Task  
I had to design a whiteboard exercise that would surface all hidden assumptions, data dependencies, and success criteria before coding.

### Action  
1. **Clarify business intent** – “What problem are we solving for the end‑user? How will we measure impact?” → set KPI: 5 % lift in click‑through rate (CTR).  
2. **Define inputs & quality** – “Which datasets exist, their freshness, and labeling confidence?” → AWS Glue crawlers + Athena schema.  
3. **Model constraints** – “Latency target? Model size?” → choose SageMaker Pipelines with 50 ms inference on a single EC2 G5 instance.  
4. **Failure modes & rollback** – “What if the model mis‑classifies 10 % of queries?” → A/B test + CloudWatch alarms, fallback to rule‑based engine.  

### Result  
The whiteboard exercise cut downstream surprises by 70 %, shortened the sprint by 30 %, and the pilot achieved a **6.2 % CTR lift** (vs. 5 % target) while staying under $1,200/month in AWS costs.

> *Bar‑raiser notes:* Deep dive into assumptions, ownership of metrics, clear cost/availability trade‑offs, and learning loop for next sprint.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
