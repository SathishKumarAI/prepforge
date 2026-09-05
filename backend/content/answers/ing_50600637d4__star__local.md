---
qid: ing_50600637d4__star__local
question: 'Explain: The Alignment Problem — Rlhf And Dpo'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 338
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:09:12-05:00'
sources: []
---

**Situation:**  
At my last company we launched a new conversational AI for customer support. Early user testing showed the bot frequently gave overly cautious or generic responses, missing key product details. We needed to align its behavior with real human preferences without manual rule‑crafting.

**Task:**  
I was tasked with redesigning the fine‑tuning pipeline so the model would learn from actual user interactions and produce more accurate, helpful replies while staying safe.

**Action:**  
First, we implemented **Reinforcement Learning from Human Feedback (RLHF)**: users rated responses on a 5‑point scale. We aggregated these ratings into a reward signal and fine‑tuned a base transformer using Proximal Policy Optimization. To reduce annotation cost and bias, we later added **Direct Preference Optimization (DPO)**—instead of full rewards, we collected pairwise preference data (“response A is better than B”) and trained the model with a direct likelihood objective that approximates the RLHF reward. We used TensorFlow 2.x, distributed training on 8 GPUs, and logged metrics in MLflow.

**Result:**  
Within two weeks, the bot’s average user satisfaction score jumped from 3.1 to 4.6 out of 5, and click‑through rates for recommended actions rose by 27%. The DPO approach cut annotation time by 40% compared to RLHF alone. I learned that coupling human preferences with efficient training objectives can dramatically improve alignment while keeping engineering overhead manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
