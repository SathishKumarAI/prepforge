---
qid: ing_61800c2f74__faang__local
question: 'Explain: Real-world systems — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 514
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:30:37-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to explain how real‑world social‑networking platforms (Facebook/Instagram) use machine learning in production.  
Assumptions:  
* We focus on core ML services (recommendation, ranking, content moderation).  
* Data volume is petabyte scale; latency < 100 ms for user feed.  

**2️⃣ Approach**  
1. Identify key problems each platform solves with ML.  
2. Map the data pipelines that feed models.  
3. Outline model lifecycle: training → serving → monitoring.  

**3️⃣ Depth**  

| Problem | Typical Models | Input Features | Serving |
|---------|----------------|----------------|---------|
| News‑feed ranking (Facebook) | Gradient‑boosted trees, deep neural nets | User actions, item embeddings, context (time, device) | Multi‑stage: first‑stage GBDT to prune candidates, second‑stage DNN for final score |
| Content recommendation (Instagram) | Collaborative filtering + CNNs on images | Visual tags, user interaction matrix, temporal signals | Real‑time inference via TensorRT; A/B‑tested ranking policy |
| Moderation & abuse detection | Transformer classifiers, object detectors | Text, image, video embeddings | Batch scoring for new posts; flagging pipeline triggers human review |

Training pipelines use distributed Spark/MLflow on petabyte‑scale logs. Models are versioned in a model registry; rolling deployments via Canary to 1 % traffic before full rollout. Monitoring tracks AUC drift, latency, and fairness metrics.

**4️⃣ Edge Cases**  
* Cold‑start users: fallback to demographic or global popularity features.  
* Adversarial content that evades detectors—continuous adversarial training needed.  
* Regulatory constraints (GDPR) require explainability for certain decisions; we expose feature importance via SHAP.

**5️⃣ Optimize & Communicate**  
- **Latency reduction:** quantize models, use edge inference where possible.  
- **Cost control:** prune low‑impact features, schedule nightly retrains during off‑peak.  
- **Explainability:** provide per‑post score breakdowns for moderators and users.  

When explaining this to interviewers, I’d walk through the pipeline diagram, emphasize trade‑offs (accuracy vs latency), and finish with how continuous monitoring ensures system reliability—exactly what FAANG teams expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
