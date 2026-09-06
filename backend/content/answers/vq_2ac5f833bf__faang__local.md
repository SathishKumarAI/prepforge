---
qid: vq_2ac5f833bf__faang__local
question: when would you use each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 524
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:03:39-05:00'
sources: []
---

**1️⃣ Clarify**  
The question asks *“When would you use each?”* – I interpret “each” as the major AI paradigms: **Supervised Learning**, **Unsupervised Learning**, **Reinforcement Learning**, and **Transfer/Meta‑Learning**. I’ll assume we’re deciding which to pick for a new project, given data availability, task type, and operational constraints.

---

### 2️⃣ Approach  
1. List the core strengths & prerequisites of each paradigm.  
2. Match those to typical business scenarios (prediction, clustering, decision‑making, adaptation).  
3. Summarize in a quick reference table.  

---

### 3️⃣ Depth  

| Paradigm | Use‑case | Key Assumptions |
|----------|----------|-----------------|
| **Supervised** | Predicting labels: fraud score, churn probability, image classification. | Labeled data abundant; target variable well defined. |
| **Unsupervised** | Discover hidden structure: customer segmentation, anomaly detection, dimensionality reduction. | No labeled data; patterns are latent but informative. |
| **Reinforcement** | Sequential decision making: recommendation engines, robotics, game AI. | Environment can be simulated or interacted with; reward signal defined. |
| **Transfer/Meta‑Learning** | Rapidly adapt to new tasks with few examples: personalized medicine, low‑resource NLP. | Pre‑trained model exists on related data; target task shares underlying representation. |

---

### 4️⃣ Edge Cases  
- *Data scarcity*: default to unsupervised or transfer learning.  
- *Real‑time constraints*: prefer lightweight supervised models over heavy RL loops.  
- *Non‑stationary distributions*: meta‑learning can help but may still need continual supervision.

---

### 5️⃣ Optimize & Communicate  
When interviewing, emphasize that the choice is driven by **data availability**, **task dynamics**, and **deployment latency**. Clarify trade‑offs: supervised models deliver high accuracy but cost labeling; RL offers autonomy but requires safe simulation. Conclude with a recommendation flowchart that starts with “Do we have labels?” → “Are decisions sequential?” → “Can we fine‑tune an existing model?” This demonstrates structured reasoning and keeps the answer concise yet complete.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
