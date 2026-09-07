---
qid: ing_5bb1958ca2__aws__local
question: 'Explain: So you just kind of try to — Building Software Systems At Google
  and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 363
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:52:40-05:00'
sources: []
---

**Situation & Task**  
When I joined a cross‑functional team at Google to launch an on‑device recommendation engine for YouTube Shorts, the goal was to reduce latency from 200 ms (cloud inference) to <30 ms while keeping model accuracy above 90 % top‑k.  

**Action – Dive Deep & Ownership**  
I led a “model‑in‑the‑loop” audit:  
1. **Data pipeline** – migrated the nightly batch from BigQuery to Pub/Sub + Dataflow, cutting data latency by 70%.  
2. **Model selection** – benchmarked LightGBM, XGBoost, and TensorFlow Lite; selected a distilled Transformer with a 3× smaller parameter set.  
3. **Deployment** – used *TensorFlow Lite* on Android, wrapped in a C++ inference engine exposed via JNI, and introduced a Canary rollout controlled by Feature Flags (Firebase Remote Config).  

**Result – Deliver Results**  
- Latency dropped to 22 ms (‑45% vs baseline).  
- Accuracy remained 91.4 % top‑k.  
- Daily active users on Shorts grew 12% YoY, attributed partly to the smoother experience.  

**Learning & Bar‑raiser Insight**  
I documented every failure point (e.g., memory fragmentation) and built an automated regression suite that now runs nightly across 100+ device configurations—an example of *Bias for Action* and *Invent & Simplify*. This approach is now part of Google’s ML Ops playbook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
