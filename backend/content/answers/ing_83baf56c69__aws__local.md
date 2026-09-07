---
qid: ing_83baf56c69__aws__local
question: 'Explain: Mock Interviews — Data Science & AI Interview Prep | StrataScratch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 498
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:22:55-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional team that built an internal AI coaching platform for our hiring pipeline, I noticed we were spending **$12 k/month on third‑party interview simulators** and still had >30% candidate drop‑off during the mock‑interview stage. My goal was to replace those tools with a cost‑effective, scalable solution that would increase completion rates by at least 15%.

**Action**  
I owned the project from scratch:  

1. **Requirements & Design** – Defined real‑time question delivery, instant feedback, and analytics dashboards.  
2. **AWS Architecture** –  
   * **Amazon SageMaker** for fine‑tuned GPT‑4 models that generate adaptive interview questions.  
   * **API Gateway + Lambda** to expose stateless endpoints (cold start < 200 ms).  
   * **DynamoDB** for session logs and performance metrics, with TTL cleanup to keep storage lean.  
   * **Amazon CloudWatch & X-Ray** for observability, ensuring 99.9% availability.  
3. **Cost Optimization** – Used **SageMaker On‑Demand** for low volume during beta (≈$0.25/hr per instance) and switched to **Spot Instances** once traffic stabilized, cutting inference costs by 60%.  

**Result**  
- Cut monthly spend from $12 k to **$3.5 k** (≈70% savings).  
- Increased mock‑interview completion from **68% to 83%** (+15%).  
- Generated a data lake of over **100,000 question‑response pairs**, enabling future ML improvements.

**Leadership Principles Highlighted**  

* **Ownership** – Took full responsibility for end‑to‑end delivery and cost control.  
* **Dive Deep** – Analyzed usage logs to identify bottlenecks; tuned model inference latency.  
* **Bias for Action** – Launched a rapid MVP, iterated based on real user feedback.  

**Bar‑raiser Takeaway**  
A strong candidate demonstrates ownership, deep technical reasoning (AWS choices & trade‑offs), and quantifiable impact while learning from early failures (e.g., shifting to Spot Instances after initial cost analysis).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
