---
qid: ing_a803f2f249__aws__local
question: 'Explain: A bad and a good example — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 621
total_tokens: 854
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:46:43-05:00'
sources: []
---

**Bad Example – “Just Push a Model to the Phone”**

- **Situation:** A startup wanted instant image‑recognition on iOS/Android.  
- **Task:** Deliver a “ready‑to‑use” SDK in 2 weeks.  
- **Action:** The team lifted a pre‑trained ResNet‑50, bundled it (≈250 MB) into the app, and added a simple UI. No data pipeline, no monitoring, no A/B testing.  
- **Result:** Within a month users reported >30 % misclassifications on low‑light photos. The app crashed on older devices; memory usage spiked to 500 MB, causing battery drain. We spent $120K in support tickets and lost 12 % of the user base.

*Why it failed:* Lack of **Ownership** (no post‑launch monitoring), **Dive Deep** (ignored device constraints), and **Bias for Action** without validation.

---

**Good Example – “Adaptive Mobile ML Service”**

- **Situation:** Same startup, but now with a 6‑month roadmap.  
- **Task:** Build a scalable mobile‑first image‑recognition system that adapts to user context and stays under 50 MB per device.  
- **Action:**  
  1. **Model**: Distill ResNet‑50 → MobileNetV3 (~4 M parameters).  
  2. **Edge inference** with AWS Amplify + TensorFlow Lite; fallback to server via API Gateway + Lambda if confidence <0.7.  
  3. **Data pipeline**: Device logs → S3 → Glue ETL → SageMaker training jobs (weekly retraining).  
  4. **Monitoring**: CloudWatch metrics, X-Ray traces; automated rollback on >5 % error spike.  
  5. **Cost**: Lambda cold start cost ≈$0.20 per inference, edge inference free after initial download.

- **Result:** Accuracy ↑45 % (from 70 % to 95 %), latency <150 ms average, battery impact <2 %. User retention improved by 18 %, and we reduced support tickets by 60 %. The end‑to‑end pipeline is fully automated—no manual intervention needed.

*Leadership Principles Highlighted:*  
- **Customer Obsession** – delivering reliable, low‑latency experience.  
- **Ownership & Dive Deep** – building a self‑healing system with end‑to‑end observability.  
- **Bias for Action** – iterative model distillation and A/B testing before rollout.  

Bar‑raiser focus: Did the candidate own the full lifecycle? Did they quantify performance gains? And how did they learn from early failures to iterate faster?

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
