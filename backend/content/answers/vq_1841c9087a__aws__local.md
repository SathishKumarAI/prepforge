---
qid: vq_1841c9087a__aws__local
question: '50 Question 50: What challenges do LLMs face in deployment?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 379
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:40:42-05:00'
sources: []
---

**Situation / Task**  
When I led the migration of our internal chatbot from a legacy rule‑based engine to a fine‑tuned GPT‑4 model, we discovered that “deployment” was not just about pushing code; it involved data drift, latency, and cost control.

**Action**  
1. **Model Drift & Data Quality** – We set up continuous monitoring using SageMaker Model Monitor and built an automated pipeline in Step Functions to re‑train the LLM whenever the error rate on live queries exceeded 2 %.  
2. **Latency & Availability** – Leveraging Lambda@Edge with Amazon CloudFront, we cached the most common responses at edge locations, reducing average response time from 1.8 s to 350 ms for 95 % of requests while keeping a warm inference endpoint in us‑east‑1 (using SageMaker RealTime Inference).  
3. **Cost & Scaling** – We introduced a two‑tier architecture: a lightweight DistilBERT model for high‑volume, low‑complexity queries and the full GPT‑4 tier behind an API Gateway with a request‑based billing strategy. This cut inference spend by 38 % while maintaining 99.9 % uptime.

**Result**  
- Query latency dropped to <400 ms (vs. 1.8 s baseline).  
- User satisfaction rose from 82 % to 94 %.  
- Monthly inference cost decreased by $45K, freeing budget for new feature development.

**Reflection**  
I learned that *Ownership* means anticipating operational issues before they surface, and *Dive Deep* requires continuous measurement of every metric—from latency to cost—to iterate quickly. This mindset turned a simple model deployment into a resilient, customer‑centric service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
