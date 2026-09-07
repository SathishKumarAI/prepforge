---
qid: ing_4c258ac6d3__faang__local
question: 'Explain: Meta (formerly Facebook) — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 577
total_tokens: 812
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:41:24-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise overview of the most recent interview questions that Meta asks in its machine‑learning track. I’ll assume they’re looking for a mix of theoretical concepts, practical coding tasks, and system design problems, all framed around real‑world data challenges.

**Approach**  
1. List the top 4–5 question categories.  
2. For each category, give one concrete example, why it matters at Meta, and the key skills probed.  
3. Keep explanations tight (≈30 words per item) to stay within the word budget.

**Depth**  

| Category | Example Question | Why It’s Asked | Core Skill Tested |
|----------|------------------|---------------|-------------------|
| **Probabilistic Modeling** | “Derive the posterior for a Bayesian linear regression with an ARD prior.” | Meta uses Bayesian methods for feature selection in recommendation engines. | Understanding of conjugate priors, matrix algebra, and regularization. |
| **Deep Learning Architecture** | “Explain how you would modify a ResNet to handle variable‑length video streams.” | Video ads & live feeds are core content; efficient temporal modeling is critical. | Knowledge of 3D convolutions, dilated nets, and computational trade‑offs. |
| **Evaluation Metrics** | “Why might AUC be misleading for an imbalanced ad click dataset?” | Meta’s ad system deals with extreme class imbalance. | Ability to choose metrics (PR‑AUC, F1, log‑loss) that reflect business goals. |
| **Large‑Scale System Design** | “Design a pipeline to compute user embeddings in real time from 10⁹ events/day.” | Real‑time personalization requires low‑latency embedding updates. | Distributed streaming (Kafka), model serving (TensorFlow Serving), and consistency guarantees. |
| **Coding/Algorithmic** | “Implement an efficient K‑means that scales to 100M high‑dimensional points.” | Clustering is used for content recommendation at scale. | Approximate nearest neighbors, mini‑batch updates, and time/space complexity analysis. |

**Edge Cases**  
- For Bayesian questions, test with non‑Gaussian likelihoods.  
- In the ResNet variant, ensure padding choices don’t alter receptive field size.  
- Evaluate metric robustness when label noise spikes.  

**Optimize & Communicate**  
I’d finish by stressing that Meta values *real‑world impact*: each question probes how you translate theory into scalable, production‑ready solutions. I’d also note that a solid answer should mention trade‑offs (e.g., batch vs online learning) and reflect the company’s emphasis on data privacy and efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
