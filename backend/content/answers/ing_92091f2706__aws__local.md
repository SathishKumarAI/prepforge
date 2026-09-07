---
qid: ing_92091f2706__aws__local
question: 'Explain: When to Use Each Pattern — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 429
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:56:24-05:00'
sources: []
---

**When to use each pattern for a “RAG at scale” system?**

*Situation*: My team built an internal knowledge‑base assistant that must retrieve documents (R) and generate answers (G) in real time for 10 k concurrent users during peak hours.

*Task*: Design a production architecture that guarantees sub‑second latency, high availability, and cost control while supporting continuous model updates.

*Action*  
1. **Retrieval‑First** – Use an inverted‑index search (OpenSearch) with vector embeddings stored in S3/Glacier for cold data. The “Retriever” runs on EC2 spot instances behind a load balancer, scaling via Auto Scaling groups triggered by CloudWatch metrics.  
2. **Generator‑First** – Deploy the LLM as a containerized inference service on SageMaker endpoints (multi‑model). Warm pools keep 5 replicas; autoscaling is based on GPU utilization.  
3. **Hybrid (Chunk‑and‑Score)** – For highly dynamic content, chunk documents into 512‑token pieces, score them with a lightweight bi‑encoder on Fargate, then pass top‑k to the generator.  

*Result*: Latency dropped from 1.2 s to 0.4 s (30 % improvement), cost fell by 25 % due to spot‑based retrieval scaling, and we achieved 99.9 % SLA. We logged every request in DynamoDB for audit and retraining.

**Leadership Principles**  
- *Customer Obsession*: Delivered instant answers that users expected.  
- *Ownership & Dive Deep*: Continuously profiled latency, tuned embeddings, and re‑architected when cost thresholds were breached.  

**Bar‑raiser takeaways**: The answer shows clear ownership, dives into metrics (latency, cost), explains trade‑offs between retrieval vs generator first, and demonstrates learning from failure by iterating on the hybrid pattern.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
