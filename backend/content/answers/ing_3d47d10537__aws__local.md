---
qid: ing_3d47d10537__aws__local
question: 'Explain: Recap: consider these characteristics — Do you have too many microservices?
  - Five Design Attributes that can\u00a0Help - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 517
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:44:28-05:00'
sources: []
---

**Situation**  
I was leading a data‑science team building an ML inference platform for a global e‑commerce retailer. The architecture had **15+ microservices** (data ingestion, feature store, model registry, inference gateway, monitoring, etc.). After a spike in traffic during holiday sales, latency doubled and cost surged by 40 %.  

**Task**  
Determine whether the service count was excessive and redesign for high scalability while keeping costs under control.  

**Action**  
1. **Audit & Consolidate** – mapped each microservice to its core responsibility; merged services that shared identical runtimes or database connections, reducing from 15 to 7.  
2. **Apply Five Design Attributes** (Amazon‑style):  
   * **Modularity** – keep distinct concerns (feature store vs inference).  
   * **Elasticity** – use **AWS Lambda + API Gateway** for stateless inference; auto‑scales to thousands of concurrent requests.  
   * **Resilience** – deploy in multiple AZs, enable **ALB health checks** and **DynamoDB Global Tables** for the feature store.  
   * **Observability** – centralize metrics with **Amazon CloudWatch**, trace calls via **X‑Ray**.  
   * **Cost Efficiency** – shift batch training to **SageMaker Processing** on spot instances; use **AWS Savings Plans** for Lambda.  

3. Re‑architected the feature store as a **DynamoDB + S3 cache** with **Global Accelerator** for low‑latency reads.  

**Result**  
- Latency dropped from 800 ms to 150 ms (5× improvement).  
- Quarterly inference cost fell by **32 %** while throughput increased to 20k RPS.  
- Operational overhead reduced, freeing the team to focus on model research.

---

### Leadership Principles Highlighted
* **Customer Obsession** – delivered faster, cheaper predictions for millions of shoppers.  
* **Dive Deep & Ownership** – dissected microservice stack, owned end‑to‑end cost/latency trade‑offs, and iterated until metrics met SLA.  

### Bar‑raiser Takeaway  
Look for evidence that the candidate *owns* a problem, *dives deep* into metrics, quantifies impact, and learns from failure—exactly what I demonstrated above.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
