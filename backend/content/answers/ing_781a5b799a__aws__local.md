---
qid: ing_781a5b799a__aws__local
question: 'Explain: Diagnostic Questions Interviewers Actually Ask'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 564
total_tokens: 792
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:57:06-05:00'
sources: []
---

**Diagnostic questions are the “why‑did‑you‑do‑that” that surface the true depth of a candidate’s ML chops.**  
In an interview I’d break them into three layers:

| Layer | Typical Question | Why it matters |
|-------|------------------|----------------|
| **Problem framing** | *“What would you do if the dataset is 10× larger than your model can handle?”* | Tests ownership & scalability thinking. |
| **Algorithmic choices** | *“Why did you pick X over Y for this classification task? What trade‑offs did you consider?”* | Reveals bias for action, dive deep into metrics and theory. |
| **Operationalization** | *“How would you deploy the model in production with 99.9 % uptime?”* | Measures deliver results & invent & simplify – architecture using SageMaker, Lambda, CloudWatch, etc. |

### STAR (Data‑driven)

- **Situation:** In a prior role, our churn predictor lagged behind because we trained on stale data.  
- **Task:** Reduce prediction latency from 30 s to <1 s while keeping F1 >0.78.  
- **Action:** Built an incremental learning pipeline in **SageMaker** with **Feature Store**; used **AWS Glue** for nightly ETL and **Step Functions** to orchestrate the flow. Deployed the model via **Lambda@Edge** behind a CloudFront CDN, cutting inference time by 95 %.  
- **Result:** Latency dropped to 0.8 s, F1 improved to 0.81, and cost fell from $12k/month to $4.5k/month (≈63 % savings).  

### What a bar‑raiser listens for

| Trait | How I demonstrate it |
|-------|----------------------|
| **Ownership** | Took full responsibility for data quality, model drift monitoring, and cross‑team alignment. |
| **Dive Deep** | Quantified impact of each component (ETL time, inference latency) and iterated until thresholds met. |
| **Quantified Impact** | Showed exact metrics (latency, F1, cost). |
| **Learning from Failure** | After an initial 2× slower prototype, I debugged with CloudWatch logs, discovered a serialization bottleneck, and refactored to solve it—documenting the lesson in our repo wiki. |

By framing diagnostic questions this way, I keep the conversation grounded in real customer outcomes while showcasing deep technical expertise and AWS‑centric solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
