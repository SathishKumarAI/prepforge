---
qid: ing_4b87af765b__aws__local
question: 'Explain: Production patterns (the other half of the interview)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 424
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:15:54-05:00'
sources: []
---

**Situation & Task**  
At a fintech startup I was responsible for moving an on‑prem ML model (predicting fraud risk) into a fully managed production pipeline that could serve ~200 k requests/day with <10 ms latency.

**Action – Design & AWS Services**  
1. **Model Packaging** – Used SageMaker *model package groups* to version and store the 120 MB TensorFlow graph in ECR.  
2. **Inference Layer** – Deployed a *SageMaker Real‑Time Endpoint* behind an Application Load Balancer, auto‑scaling on CPU utilization (target 70 %).  
3. **Feature Store** – Built a DynamoDB table + Kinesis Data Streams for real‑time feature updates; used Lambda to transform and push to the endpoint.  
4. **Observability** – Integrated CloudWatch Metrics, X-Ray traces, and SageMaker Debugger for drift detection.  
5. **Cost & Availability** – Leveraged Spot Instances for batch re‑training (30 % cost reduction) and Multi‑AZ RDS for feature persistence.

**Result**  
- Latency dropped from 120 ms to <9 ms; error rate fell 4×.  
- Throughput increased by 150 %, allowing a 3× increase in user traffic before scaling.  
- Operational cost decreased by 28 % year‑over‑year while maintaining 99.95 % SLA.

**Reflection & Learning**  
I took ownership of the end‑to‑end flow, diving deep into performance bottlenecks (CPU vs GPU). The biggest lesson: early observability prevents “unknown unknowns” – we caught a feature drift before it impacted revenue. This aligns with *Customer Obsession* (better experience) and *Ownership* (continuous improvement).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
