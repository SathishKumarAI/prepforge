---
qid: ing_dd9bc4ae9b__fp__local
question: 'Q: What metrics would you track for a production LLM system?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 460
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:50:41-05:00'
sources: []
---

**Why metrics matter for a production LLM**

A language model is an *optimization engine* that maps user inputs to textual outputs. In production it must satisfy three hard constraints: **accuracy**, **efficiency**, and **trustworthiness**. To guarantee all three we need a minimal set of observables that jointly encode the system’s performance, resource consumption, and safety.

| Category | Metric | First‑principle justification |
|----------|--------|--------------------------------|
| **Accuracy** | *Perplexity* (or token‑level log‑loss) on live traffic | Measures expected negative log‑probability; lower perplexity means the model assigns higher probability to correct continuations, directly correlating with user satisfaction. |
| | *Task‑specific BLEU/F1* (on a held‑out calibration set that mirrors production prompts) | Captures domain‑aware semantic correctness beyond raw likelihood, aligning with human intent. |
| **Efficiency** | *Latency distribution* (95th percentile) | Reflects the tail of inference time; by first‑principles queueing theory, the 95th percentile bounds user wait times under heavy load. |
| | *Compute cost per token* (GPU‑seconds) | Normalizes throughput against hardware; a convex relationship between model size and compute explains diminishing returns. |
| **Trustworthiness** | *Hallucination rate* (percentage of responses flagged by a hallucination detector) | Ensures the model’s output distribution is not drifting toward high‑confidence but incorrect claims, tying to calibration theory. |
| | *User‑reported toxicity score* | Directly measures compliance with policy constraints; an increase signals a drift in the learned prior. |

**Non‑obvious insight:**  
The *joint distribution* of perplexity and hallucination rate is the true health indicator. A model can maintain low perplexity yet exhibit high hallucinations if its confidence calibration fails. Monitoring their covariance reveals whether the system’s uncertainty estimates are trustworthy, a nuance that pure accuracy metrics overlook.

By tracking this minimal set, you observe the three pillars—accuracy, efficiency, trustworthiness—and catch subtle degradations before they affect users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
