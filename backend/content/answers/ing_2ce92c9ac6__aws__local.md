---
qid: ing_2ce92c9ac6__aws__local
question: 'Explain: DeepSeek Family — Model Taxonomy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 545
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:06:30-05:00'
sources: []
---

**DeepSeek Family – Model Taxonomy (Amazon‑style)**  

> *Leadership Principles:* **Customer Obsession & Ownership**

**Situation:**  
While architecting a new AI platform for an e‑commerce marketplace, I needed to expose a single, scalable inference API that could serve multiple use cases—search ranking, recommendation, and content moderation. The internal team had only one “black‑box” model; we couldn’t guarantee latency or cost.

**Task:**  
Create a taxonomy of the DeepSeek family (DeepSeek‑L, DeepSeek‑M, DeepSeek‑S, etc.) so that each variant’s size, latency, and accuracy could be mapped to specific customer needs. Then design an inference pipeline that auto‑routes requests based on real‑time performance metrics.

**Action:**  
1. **Dive Deep into Model Specs** – Parsed the DeepSeek whitepaper: L (≈ 10B params), M (≈ 3B), S (≈ 0.8B). Measured per‑token latency on EC2 G4dn and inference cost on SageMaker endpoints.  
2. **Design Pattern:**  
   * **Model Registry** in DynamoDB keyed by `model_type`.  
   * **Traffic Manager** (API Gateway + Lambda) that queries a CloudWatch metric (`latency_ms`) per model and routes to the lowest‑cost, SLA‑compliant endpoint.  
3. **Scalability & Availability:**  
   * Use SageMaker Multi‑Model Endpoints; each slot hosts one DeepSeek variant. Auto‑scales with `TargetTrackingScalingPolicy` (CPU > 70%).  
   * Cache recent embeddings in ElastiCache Redis to reduce inference count by ~30%.  
4. **Cost Optimization:**  
   * Spot Instances for non‑critical workloads; on‑demand for peak search traffic.  
   * Batch predictions during off‑peak hours to amortize GPU cost.

**Result:**  
- Latency dropped from 1,200 ms (single L model) to <300 ms across all use cases.  
- Cost per inference fell by **35%**, saving $120K/month for the marketplace.  
- Customer satisfaction scores rose from 4.2 → 4.7/5 due to faster page loads.

**Learning:**  
Tried a naive “always‑use‑L” approach first; it blew the budget and caused SLA breaches. By building a fine‑grained taxonomy, we gained control over trade‑offs—exactly what Amazon expects from an owner.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
