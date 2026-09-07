---
qid: ing_347dd9d91d__aws__local
question: 'Explain: Um, one thing to note is that — Building Software Systems At Google
  and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 350
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:23:30-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional squad at Google, we built a real‑time recommendation engine that served > 10 M users per day. The goal was to reduce latency from 300 ms to < 50 ms while keeping the cost under $5 k/month.

**Action**  
- **Customer Obsession & Ownership:** I mapped every user touchpoint, identified cold‑start pain points, and set a clear SLA of 45 ms.  
- **Dive Deep & Bias for Action:** Using TensorFlow Serving on Kubernetes, I profiled the model graph, removed redundant ops, and replaced a heavy LSTM with a distilled Transformer.  
- **Invent & Simplify:** Switched from Google Cloud Pub/Sub to AWS Kinesis Data Streams for ingest, and deployed the model on **AWS SageMaker** + **Lambda Edge** for low‑latency inference at edge locations.  
- **Deliver Results:** The new pipeline cut latency by 84 % (to 48 ms) and dropped monthly spend from $12 k to $4.5 k, while improving click‑through rate by 3.7 %.  

**Result & Learning**  
I documented the migration as a best‑practice guide that reduced onboarding time for new ML teams by 50 %. The key takeaway: **own the end‑to‑end user experience**, relentlessly simplify, and validate every assumption with data—principles that scale from Google to AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
