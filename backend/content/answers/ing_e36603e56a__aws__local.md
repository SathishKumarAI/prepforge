---
qid: ing_e36603e56a__aws__local
question: 'Explain: Figma — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 422
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:53:20-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

*Situation:* I was preparing a mock interview for a senior ML role at a FAANG‑style company that had recently launched a new Figma plugin to auto‑generate code snippets from designs.  
*Task:* Show how we could evaluate the plugin’s effectiveness and scale it to millions of users.

**Action – Technical & Design**

1. **Data Pipeline** – Ingest design metadata (JSON, SVG) → transform with AWS Glue → store in Amazon S3.  
2. **Feature Store** – Persist user interaction metrics (click‑through, edit frequency) in DynamoDB; use SageMaker Feature Store for model input.  
3. **Modeling** – Train a transformer on design tokens → predict code snippets; deploy via SageMaker Endpoint with autoscaling.  
4. **Evaluation** – Use A/B testing in CloudWatch to measure F1‑score and latency (target < 200 ms).  

*Result:* In a 2‑week sprint, we reduced average inference time by **35%** (from 320 ms to 205 ms) while maintaining an F1‑score of **0.92**, boosting user satisfaction scores from 4.3→4.7/5.

**Bar‑raiser Takeaway**

- Demonstrated *ownership* by owning the full ML stack, not just model code.  
- Showed *depth* with a concrete design that balances cost (SageMaker on-demand vs spot), availability (Multi‑AZ endpoints), and scalability (auto‑scaling to 10k RPS).  
- Quantified impact (latency reduction + UX lift) and reflected on a failed pilot where we underestimated token size, leading to a costly redesign.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
