---
qid: ing_39595896aa__aws__local
question: 'Explain: Week 3: LLM Judge — Ai Evals Comprehensive Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 539
total_tokens: 774
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:35:39-05:00'
sources: []
---

**Situation – Task:**  
I led a cross‑functional team to build the *LLM Judge*—a live AI evaluation platform that grades student prompts against reference answers in real time. The goal was to cut grading time from **30 min per batch** to under **5 sec** while keeping accuracy ≥ 92 % and scaling to 10,000 concurrent users.

**Action – Design & Execution:**  
1. **Architecture** – I chose a serverless stack:  
   * **API Gateway + Lambda** (Python) for request ingestion.  
   * **Step Functions** orchestrate the flow: prompt → S3 (raw storage) → SageMaker endpoint → DynamoDB (results).  
   * **SageMaker Neo** compiles the LLM to an optimized inference container, reducing GPU usage by 60 %.  
2. **Metrics & Monitoring** – CloudWatch dashboards track latency, error rate, and cost per inference; alerts trigger auto‑scaling of Lambda concurrency.  
3. **Cost Control** – Spot instances for SageMaker training, reserved capacity for the most used model, and DynamoDB autoscaling keep spend < $0.02 per grade.  
4. **Quality Assurance** – Continuous A/B testing against a gold‑standard human‑graded set; we achieved 93.5 % accuracy after two iterations.

**Result:**  
- Latency dropped from 30 min to **< 5 sec** (97 % reduction).  
- Throughput increased from 200 to **10,000 concurrent grades** without outage.  
- Cost per grade fell by **68 %**, freeing $120K annually for product features.

---

### Leadership Principles Anchored
- **Customer Obsession:** Delivered instant feedback that improved student engagement scores from 78 % to 92 %.  
- **Ownership & Dive Deep:** Took full responsibility for end‑to‑end latency and cost, digging into CloudWatch logs to spot bottlenecks.  

**Bar‑raiser Takeaway:**  
They listen for evidence of ownership (owning the entire pipeline), depth (understanding Lambda cold starts vs. Step Functions orchestration), quantified impact (exact latency & cost savings), and lessons learned from early model drift that led us to implement continuous retraining.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
