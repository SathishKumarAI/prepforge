---
qid: vq_2ac5f833bf__aws__local
question: when would you use each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 566
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:44:38-05:00'
sources: []
---

**When to pick a particular AI technique – a quick play‑book**

| AI type | When it shines | Typical AWS services |
|---------|----------------|----------------------|
| **Supervised learning** (e.g., XGBoost, SageMaker Linear Learner) | Predictive tasks with labeled data (fraud detection, demand forecasting). | SageMaker Training Jobs, SageMaker Endpoint |
| **Unsupervised learning** (K‑means, Autoencoders) | Discover hidden structure or anomalies in unlabeled logs. | SageMaker Processing, EMR |
| **Reinforcement learning** (RLlib on SageMaker) | Optimizing sequential decisions (dynamic pricing, robotics). | SageMaker RL, Step Functions |
| **Transfer learning / LLM fine‑tuning** (SageMaker Neo, Bedrock) | Rapid deployment of NLP or vision models with limited data. | Bedrock, SageMaker Inference |
| **Generative AI** (Stable Diffusion, GPT‑4 via Bedrock) | Content creation, personalization at scale. | Bedrock, Lambda + S3 |

---

### STAR Example

**Situation:** Our e‑commerce catalog had 1M+ SKUs; search relevance dropped by 18 % after a seasonal update.

**Task:** Restore CTR and conversion within two weeks while keeping cost < $5k/month.

**Action:**  
- Adopted **supervised learning** (XGBoost on SageMaker) to predict click‑through scores from user‑behavior features.  
- Trained 10 models, selecting the top performer via A/B testing in real traffic.  
- Deployed the model as a **SageMaker Endpoint** behind API Gateway; used Lambda for inference caching to reduce latency to < 50 ms.  
- Leveraged **Spot Instances** for training and **SageMaker Neo** for edge deployment, cutting inference cost by 35 %.  

**Result:** CTR rose 22 % (exceeding the target), conversion up 9 %, and monthly inference spend fell from $7k to $4.2k—directly contributing $1.8M incremental revenue in Q3.

---

**Leadership Principles Reflected**

- **Customer Obsession & Deliver Results:** We prioritized user experience, achieving measurable uplift.  
- **Ownership & Dive Deep:** I owned the end‑to‑end pipeline and dissected every bottleneck to optimize cost and performance.  

This structured decision framework ensures we choose the right AI technique, deliver business value, and keep our solutions scalable and cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
