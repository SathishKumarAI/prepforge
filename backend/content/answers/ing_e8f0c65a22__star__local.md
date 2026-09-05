---
qid: ing_e8f0c65a22__star__local
question: 'Explain: Customer Obsession — Leadership Principles'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 320
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:14:00-05:00'
sources: []
---

**Situation:**  
At a mid‑size fintech startup, our recommendation engine was delivering loan offers that were technically sound but customers reported feeling “generic” and “not tailored.” The churn rate for new accounts rose from 3% to 7% over two quarters.

**Task:**  
I had to redesign the model so it reflected individual customer preferences, reduce churn by at least 30%, and maintain a prediction latency under 200 ms for real‑time decisions.

**Action:**  
First, I ran an A/B test on user segments to quantify pain points, then introduced a fine‑tuned BERT encoder trained on customer chat logs to capture intent nuances. I added a lightweight feature vector of recent transaction categories and used CatBoost to handle categorical churn data efficiently. For latency, I distilled the model into a 12‑layer Transformer with knowledge distillation, deploying it behind a FastAPI microservice with GPU inference on AWS Lambda. I also set up a feedback loop: every new loan approval updated the user profile vector in real time.

**Result:**  
After three months, churn dropped to 4%, a 43% improvement. Customer satisfaction scores jumped from 78 /100 to 92 /100. The model latency stayed below 180 ms, keeping the checkout flow smooth. I learned that true customer obsession means turning qualitative feedback into measurable features and balancing performance with real‑time constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
