---
qid: ing_5103274790__faang__local
question: 'Explain: Architecture — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 518
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:52:33-05:00'
sources: []
---

**1️⃣ Clarify**  
The interviewer wants a concise cheat‑sheet for *Architecture & System Design* in ML contexts (e.g., training pipelines, inference serving). I’ll assume:  
- Audience is senior engineers preparing for design interviews.  
- Focus on high‑level patterns, not low‑level code.  
- Target platforms: cloud (AWS/GCP/Azure) and edge deployments.

**2️⃣ Approach**  
Create a 5‑section template that can be filled quickly during an interview:  
1. Problem & constraints  
2. High‑level diagram (data flow, components)  
3. Key design decisions (scaling, latency, consistency)  
4. Trade‑offs & alternatives  
5. Metrics & monitoring

**3️⃣ Depth**  
| Section | What to cover | Typical ML example |
|---------|---------------|--------------------|
| **Problem & constraints** | Data volume, velocity, model size, SLA | 10k images/sec → real‑time inference |
| **Diagram** | Ingest → Feature store → Training cluster → Model registry → Serving API (CDN + GPU) | Use Kafka, S3, SageMaker, KFServing |
| **Decisions** | • Batch vs stream training<br>• Auto‑scaling of GPUs<br>• Model versioning strategy | Pick autoscaling groups for GPU nodes; use CI/CD to push new models |
| **Trade‑offs** | Latency vs throughput; storage cost vs retrieval speed | Use SSD for feature store, but cheaper HDD for raw data |
| **Metrics** | Throughput (ops/sec), latency (99th percentile), accuracy drift | Track A/B test AUC and error logs |

**4️⃣ Edge Cases**  
- Sudden traffic spike → burstable compute or spot instances.  
- Model drift → automated retraining triggers.  
- Data privacy → differential privacy layers before feature store.

**5️⃣ Optimize & Communicate**  
- **Narrate**: “First, let’s lay out the data path…”, then justify each component.  
- **Show trade‑offs** with a quick table or two‑column comparison.  
- End with a *next‑steps* slide: “We’ll monitor latency and drift; if drift > 5%, retrain automatically.”  

This cheat sheet keeps you on track, demonstrates structured thinking, and lets interviewers see your depth without getting lost in minutiae.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
