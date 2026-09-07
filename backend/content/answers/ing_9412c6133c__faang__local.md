---
qid: ing_9412c6133c__faang__local
question: Tell me about the AI project you're most proud of. Why that one?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 409
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:28:39-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concrete example where I led or heavily contributed to an AI system, and why it mattered. I’ll assume they’re interested in technical depth, business impact, and my personal role.

**Approach**  
1. Pick a project with measurable outcomes (e.g., 30 % lift in conversion).  
2. Outline the problem, data pipeline, model choice, deployment, and results.  
3. Highlight my ownership: data engineering, algorithm design, cross‑team coordination.  

**Depth**  
- **Problem:** E‑commerce recommendation engine under real‑time constraints.  
- **Data & Engineering:** Collected 200 M clickstream records; built a Spark ETL that reduced latency by 40 %.  
- **Model:** Developed a hybrid factorization + transformer model (BERT‑style) to capture sequential behavior, trained with negative sampling on GPUs, achieving NDCG@10 of 0.62 vs baseline 0.51.  
- **Deployment:** Containerized with Kubernetes; A/B test ran for 4 weeks, showing a 32 % lift in click‑through and 18 % increase in revenue per session.  
- **Impact:** Reduced server cost by 15 % through smarter cache prefetching based on the model’s predictions.

**Edge Cases**  
- Cold‑start users: integrated side‑information (demographics, device).  
- Data drift: set up a monitoring pipeline that retrains every 48 h if NDCG drops >5 %.  

**Optimize & Communicate**  
I’d explain how I iterated from matrix factorization to transformer, why that trade‑off improved latency, and how the metrics directly tied to business goals. This shows structured thinking, technical depth, and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
