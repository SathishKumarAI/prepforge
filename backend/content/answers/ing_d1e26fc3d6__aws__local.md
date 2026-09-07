---
qid: ing_d1e26fc3d6__aws__local
question: 'Q: A team prototyped on Ollama and wants to ship it as a shared API. What
  changes and why?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 426
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:15:27-05:00'
sources: []
---

**Situation & Task**  
The prototype runs on Ollama locally; the product team wants a production‑grade API that can serve millions of requests per day while keeping latency < 200 ms and cost <$0.01/req.

**Action – Architecture & Services**  
1. **Containerize with Docker** → immutable images, versioned in ECR.  
2. **Deploy to Amazon ECS (Fargate)** with an Application Load Balancer.  
   *Auto‑scales on CPU/memory; guarantees 99.95 % availability.*  
3. **Use Amazon SageMaker Edge Manager** for model packaging and inference optimization (quantization, ONNX).  
4. **Cache hot embeddings in ElastiCache‑Redis** to cut GPU usage by ~60 %.  
5. **Expose API via API Gateway + Lambda@Edge** for throttling & request validation; pay per invocation.

**Result – Metrics**  
- Latency dropped from 350 ms (local) to 120 ms (prod).  
- Throughput scaled from 50 req/s to 10k req/s with 0.99 SLA.  
- Cost reduced by 45 % compared to a fixed GPU cluster.

**Why These Changes?**  
- **Customer Obsession:** Deliver low‑latency, highly available service for developers.  
- **Ownership & Dive Deep:** Containerization and edge inference give full control over performance knobs; caching addresses hidden bottlenecks.  
- **Bias for Action:** Quick migration to managed services eliminates ops overhead.  
- **Deliver Results:** Quantified latency, throughput, and cost savings validate the decision.

**Bar‑raiser Notes** – The candidate demonstrates ownership (full end‑to‑end pipeline), dives deep into performance trade‑offs, quantifies impact, and shows learning from a prototype’s limitations to design a scalable, cost‑effective production system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
