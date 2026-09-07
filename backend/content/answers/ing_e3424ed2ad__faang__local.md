---
qid: ing_e3424ed2ad__faang__local
question: 'Explain: Your provider deprecates the model your product depends on, with
  90 days'' notice. Walk me through what you''d do - or a migration you actually ran.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 499
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:27:35-05:00'
sources: []
---

**Clarify**  
We’re told the ML model our product relies on will be deprecated in 90 days. I’d confirm: (1) which features of the model are critical for business KPIs? (2) Are there alternative models offered by the provider or open‑source equivalents? (3) What data pipelines, inference latency, and cost constraints must we preserve?  

**Approach**  
1. **Impact audit** – quantify performance drop if we stop using the model (precision/recall, revenue impact).  
2. **Candidate selection** – shortlist replacement models (provider’s newer version, third‑party, or in‑house retraining).  
3. **Pilot & validation** – run parallel inference for 1–2 weeks to compare metrics and latency.  
4. **Data & infrastructure alignment** – ensure feature schema matches, update feature store, and scale GPU/CPU resources accordingly.  
5. **Rollout plan** – blue‑green deployment with weighted traffic shifting (start at 10 % → 30 % → …).  
6. **Monitoring & rollback** – set up alerts on drift, latency, or KPI degradation; have a quick rollback script ready.  

**Depth**  
During my last migration I replaced a deprecated image‑classification model with an ONNX version trained on the same dataset but fine‑tuned for our domain. The pipeline was refactored to ingest pre‑processed tensors via Kafka → Spark → TensorFlow Serving. Latency dropped from 350 ms to 120 ms, and accuracy improved by 3 %. Complexity: O(N) inference per request; training cost ~\$5k GPU time. Trade‑off: higher storage for larger model (~200 MB vs 50 MB).  

**Edge Cases**  
- Feature drift causing misclassification → monitor feature distributions.  
- Sudden traffic spike during rollout → have autoscaling thresholds pre‑set.  
- Provider’s new API changes incompatible with existing SDK → keep legacy wrapper until migration completes.  

**Optimize & Communicate**  
I’d document the migration in Confluence, share a live demo of the pilot results, and present a risk register to stakeholders. Post‑deployment, I’d schedule quarterly reviews to reassess model performance and plan for future deprecations proactively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
