---
qid: ing_a72bb3004c__aws__local
question: The VP saw a flawless demo and now expects 100% accuracy in production.
  How do you manage that expectation without killing the deal?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 402
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:44:30-05:00'
sources: []
---

**Situation & Task**  
When the VP showcased a demo that achieved 99.9 % accuracy on a curated dataset, he asked for *“100 % accuracy in production.”* I needed to temper expectations without jeopardizing the partnership.

**Action**  
1. **Own the data story** – I gathered real‑world metrics from our pilot: 94 % precision/recall on production traffic and a 12 % false‑positive rate during peak load (2 M requests/day).  
2. **Dive deep into root causes** – Using SageMaker Debugger, we identified distribution shift between dev and prod data.  
3. **Show a cost–benefit plan** – Proposed an incremental rollout:  
   * Deploy the current model behind a 5 % weighted traffic using Lambda@Edge for low latency.  
   * Enable continuous monitoring with CloudWatch Alarms; trigger retraining via SageMaker Pipelines every week.  
4. **Bias for action & deliver results** – I presented a 30‑day roadmap that guarantees at least 97 % accuracy while allowing us to iterate and meet the VP’s ultimate goal.

**Result**  
The VP approved the phased plan. After 8 weeks, we achieved 98.5 % precision/recall on live traffic—meeting business KPIs—and the client signed a long‑term contract worth $3M. I learned that transparent metrics and a clear iteration path are essential when managing ambitious technical expectations.  

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivering measurable, reliable performance for the client.  
- **Ownership & Dive Deep** – Taking responsibility for data quality and uncovering hidden issues.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
