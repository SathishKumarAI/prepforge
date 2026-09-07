---
qid: ing_a948dfd583__aws__local
question: 'Explain: Step 10 - 14: The executions are returned to the client.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 437
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:49:14-05:00'
sources: []
---

**Situation & Task**  
I was leading the rollout of a real‑time fraud‑detection model for our payments platform. Steps 10–14 in the pipeline were “execute inference → transform → serialize → return to client.” My goal was to deliver sub‑200 ms latency while keeping cost under $0.05 per request.

**Action**  
1. **Inference (Step 10)** – Deployed the model as a SageMaker real‑time endpoint with *Multi‑Model* hosting, enabling on‑demand scaling.  
2. **Transformation (Step 11–12)** – Wrote a lightweight Lambda function that pulls raw predictions, normalizes confidence scores, and enriches them with contextual metadata from DynamoDB.  
3. **Serialization & Return (Step 13–14)** – Used API Gateway REST to expose the Lambda as `/detect`. The response was marshalled into JSON, compressed with GZIP, and signed with a short‑lived JWT for client authentication.

**Result**  
- 95 % of requests completed in <150 ms, meeting SLA.  
- Through autoscaling, peak traffic (10k RPS) incurred only $0.12 per hour vs the $1.20 baseline on an EC2‑based approach.  
- Error rate dropped from 4.7 % to 0.8 % after adding a retry queue in SQS.

**Learnings**  
I practiced *Ownership* by iterating on latency metrics and *Dive Deep* into Lambda cold‑start profiling, which led to the decision to pre‑warm containers during high‑traffic windows.

> **Bar‑raiser cues:** ownership of cost/latency trade‑offs, depth in performance diagnostics, quantified impact (latency & cost), and continuous learning from production data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
