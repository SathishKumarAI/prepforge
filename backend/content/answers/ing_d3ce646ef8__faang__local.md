---
qid: ing_d3ce646ef8__faang__local
question: What are the three types of data models?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 458
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:52:49-05:00'
sources: []
---

**Clarify**  
The interviewer is asking for the three broad categories of machine‑learning data models—i.e., how we represent and learn from data. I’ll assume they mean *model families* rather than algorithmic subclasses, and that we’re discussing supervised, unsupervised, and reinforcement settings.

**Approach**  
1. Identify each family’s purpose and typical use cases.  
2. Highlight representative algorithms or architectures within each.  
3. Mention key assumptions (e.g., labeled data availability).

**Depth**  

| Category | Core Idea | Representative Models | Typical Use Cases |
|----------|-----------|------------------------|------------------|
| **Supervised Learning** | Predict a target \(y\) from inputs \(\mathbf{x}\) using labeled pairs \((\mathbf{x}, y)\). | Linear regression, decision trees, neural nets (CNNs, RNNs), SVMs. | Image classification, spam detection, sales forecasting. |
| **Unsupervised Learning** | Discover latent structure without labels—cluster, reduce dimensionality, or learn generative patterns. | K‑means, hierarchical clustering, PCA, t‑SNE, GANs, VAEs. | Customer segmentation, anomaly detection, data compression. |
| **Reinforcement Learning** | Learn a policy \(\pi(a|s)\) that maximizes cumulative reward through interaction with an environment. | Q‑learning, SARSA, DQN, Policy Gradient methods, Actor–Critic. | Robotics control, game playing (AlphaGo), recommendation systems. |

**Edge Cases**  
- Semi‑supervised or self‑supervised hybrids blur boundaries.  
- Transfer learning can shift a supervised model into an unsupervised regime by pretraining on unlabeled data.

**Optimize & Communicate**  
I’d emphasize that the choice hinges on label availability and task goals, and I’d suggest evaluating sample complexity and computational cost for each family. Concluding with: “In practice we often start with a simple supervised baseline, then augment with unsupervised feature learning or RL if interaction data is available.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
