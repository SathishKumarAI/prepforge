---
qid: ing_7cf7f83007__fp__local
question: What system design questions does OpenAI ask?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 405
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:31:19-05:00'
sources: []
---

When OpenAI frames a system‑design interview it starts from the *core challenge*: **build an AI service that is safe, scalable, and usable at global scale**.  
From this problem it derives three orthogonal axes that must be interrogated:

| Axis | Why it matters | Typical question |
|------|----------------|-----------------|
| **Robustness & safety** | The model’s outputs influence real‑world decisions; failures can propagate catastrophically. | *How would you architect monitoring and rollback for a policy‑guided language model deployed to millions of users?* |
| **Scalability & latency** | Large models cost billions of GPU hours; user experience depends on sub‑second inference. | *Design an inference pipeline that supports 10 k concurrent queries with <100 ms latency while keeping per‑token compute under X.* |
| **Data & training economics** | Training data is expensive and noisy; efficient use of compute reduces environmental impact. | *Propose a curriculum‑learning strategy that maximizes performance per FLOP for a transformer trained on 1 TB of text.* |

The interviewer then probes deeper:  
* How do you partition the model across devices? (communication‑compute trade‑off)  
* What cache or pre‑fetch strategy would reduce tail latency? (queueing theory, Poisson processes)  
* Which failure modes are most likely to violate user privacy or model alignment? (information‑theoretic leakage bounds)

**Non‑obvious insight:** The *feedback loop between inference and training* is often overlooked. A production system that collects user interactions can be viewed as an online bandit problem; the design must ensure exploration–exploitation trade‑offs while preserving safety constraints. This subtle coupling dictates how you version models, schedule retraining, and allocate compute budget—an insight that distinguishes a solid architecture from a mediocre one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
