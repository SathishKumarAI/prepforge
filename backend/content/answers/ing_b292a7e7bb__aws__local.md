---
qid: ing_b292a7e7bb__aws__local
question: 'Q: When would you recommend self-hosting vs using APIs?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 471
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:08:33-05:00'
sources: []
---

**Situation & Task**  
I was leading a fintech client who wanted to embed an NLP model for fraud detection in their mobile app. The product owner asked: “Should we self‑host the model or call a third‑party AI API?” I had to balance latency, cost, data privacy and compliance.

**Action (Dive Deep + Ownership)**  
I built a quick proof‑of‑concept on **Amazon SageMaker** (self‑host) and compared it with **AWS Bedrock** (API).  
| Metric | Self‑host (SageMaker) | API (Bedrock) |
|--------|-----------------------|---------------|
| Avg inference latency | 35 ms | 120 ms |
| Monthly data egress cost | $0.02/GB | $0.10/GB |
| Data residency control | ✔ | ❌ |
| Model retraining time | 2 hrs | N/A |

I also mapped compliance requirements: the client’s GDPR audit required all user data to stay in EU. Bedrock would route traffic through US endpoints unless a local region was available, adding risk.

**Result (Deliver Results)**  
We chose self‑hosting on **SageMaker** with an auto‑scaling **ECS Fargate** cluster. The solution cut inference latency by 70 % and monthly egress costs by 80 %, while keeping data in the EU. Post‑deployment, fraud detection accuracy improved from 92 % to 97 % due to our ability to fine‑tune locally.

**Learning & Bar‑raiser notes**  
- Ownership: I owned the end‑to‑end pipeline and presented a clear cost/latency trade‑off.  
- Dive Deep: I quantified latency, costs, and compliance impacts instead of relying on anecdotes.  
- Failure: A prior project over‑reliance on an external API caused a 30 % SLA breach; this time I built in monitoring dashboards (CloudWatch) to catch anomalies early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
