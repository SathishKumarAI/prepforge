---
qid: ing_0b7cec39b4__aws__local
question: 'Explain: The PM wants "point your camera at a plant and the app tells you
  about it." Architect it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 504
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:52:05-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team to launch a mobile app that lets users point their camera at any plant and instantly receive botanical information—an “AI plant assistant.” The goal was to deliver real‑time, accurate identifications with < 2 s latency while keeping the user experience seamless.

**Action**  
1. **Data pipeline** – Collected 500k labeled images (various lighting, angles) and stored them in S3.  
2. **Model training** – Used SageMaker to train a CNN (EfficientNet‑B4) with transfer learning; achieved 92 % top‑5 accuracy on the validation set.  
3. **Inference architecture** – Deployed the model as a Lambda@Edge function behind API Gateway, scaling automatically from 10 k TPS to > 1 M TPS during peak usage.  
4. **Caching & CDN** – Cached common plant IDs in DynamoDB (TTL 24 h) and served static metadata via CloudFront for ultra‑low latency.  
5. **Observability** – Integrated X-Ray, CloudWatch metrics, and automated alerts; rolled out feature flags to A/B test new model versions.

**Result**  
- First month: 120k unique users, < 1.8 s average response time, 95 % user satisfaction (NPS +45).  
- Cost optimized to $0.12 per inference vs. $0.30 on a generic GPU instance.  
- Scalable to 10× traffic with no code changes.

**Leadership Principles**  
*Customer Obsession*: Built a feature‑flag system to iterate quickly based on real user feedback.  
*Dive Deep*: Trained and tuned the model until accuracy plateaued; monitored every metric post‑deployment.  

**Bar‑raiser takeaways**  
- Demonstrated ownership by owning the full ML lifecycle, from data ingestion to production monitoring.  
- Showed depth through concrete metrics (accuracy, latency, cost).  
- Learned from early over‑provisioning: shifted to Lambda@Edge after profiling cold starts, saving 40 % in compute spend.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
