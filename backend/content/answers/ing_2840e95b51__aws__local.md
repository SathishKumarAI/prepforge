---
qid: ing_2840e95b51__aws__local
question: 'Explain: Interview Walkthrough — Code Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 481
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:56:40-05:00'
sources: []
---

**Interview Walk‑Through – Building a “Code Assistant” on AWS**

> **Leadership Principles:** *Customer Obsession* & *Ownership*

---

### Situation
Our client, a SaaS platform with 200k active developers, needed an in‑house AI assistant that could auto‑complete code snippets and suggest refactors. They required near‑real‑time responses (<50 ms) and zero data leakage.

### Task
Design a scalable, secure architecture that ingests source files, runs inference on the fly, and returns suggestions via a VS Code extension.

### Action
1. **Data Pipeline**  
   * Use **Amazon S3** for immutable code snapshots; trigger **AWS Lambda** to extract ASTs and push to **Amazon Kinesis Data Streams**.  
2. **Model Serving**  
   * Deploy the fine‑tuned GPT‑4 model in a **SageMaker endpoint** behind an **Application Load Balancer (ALB)** with autoscaling based on CPU usage.  
3. **Inference Layer**  
   * A microservice in **ECS Fargate** receives the AST, calls SageMaker, and streams results back via **WebSocket API Gateway** to the VS Code client.  
4. **Security & Compliance**  
   * All data stays within a VPC; use **KMS** for encryption at rest and TLS 1.3 for transit.  
5. **Cost Control**  
   * Spot instances + reserved capacity on SageMaker reduce inference costs by 30 % vs on‑demand.

### Result
- Latency dropped to **35 ms** average, beating the target by 30 %.  
- First‑month usage hit **150k requests/day**, with a **$12K/month** cost saving over the legacy in‑house model.  
- No data breaches; compliance audit passed with zero findings.

> *Bar‑raiser takeaway:* I owned the entire end‑to‑end flow, dove deep into latency bottlenecks, quantified impact (latency & cost), and iterated after a failure in the first prototype that leaked temporary files—resolved by tightening IAM scopes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
