---
qid: ing_e07eadf1ac__faang__local
question: 'Explain: Evaluation Dimensions — Agent Building Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 356
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:21:14-05:00'
sources: []
---

**Evaluation Dimensions – Agent‑Building Guide**

| Dimension | What it Measures | Typical Metrics | Why It Matters |
|-----------|-----------------|-----------------|----------------|
| **Accuracy / Effectiveness** | How often the agent’s actions achieve the goal | Precision, Recall, F1, Success rate | Directly reflects task performance |
| **Robustness** | Stability under varied inputs or environments | Error‑rate vs. noise level, Adversarial accuracy | Ensures real‑world reliability |
| **Latency / Speed** | Time from perception to action | Inference latency, Throughput | Critical for time‑sensitive domains (e.g., robotics) |
| **Resource Footprint** | Compute & memory usage | FLOPs, Model size, Power draw | Determines deployment feasibility on edge devices |
| **Explainability / Interpretability** | Ability to audit decisions | Feature importance, Counterfactual explanations | Builds trust and aids debugging |
| **Scalability** | Performance with larger data or models | Training time vs. dataset size | Guides architecture choices for future growth |

### How to Use It
1. **Define the task & constraints** (e.g., real‑time navigation).  
2. **Prioritize dimensions**: latency + accuracy > explainability if safety is critical.  
3. **Collect benchmarks** across each dimension during validation.  
4. **Iterate**: adjust model size or algorithm until trade‑offs meet the target.  

By systematically evaluating these axes, you can objectively compare agents and communicate strengths/weaknesses to stakeholders—exactly what FAANG interviewers look for in a well‑structured answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
