---
qid: ing_6f838ae7b6__fp__local
question: LLMs are non-deterministic, but a refund over $200 must never be auto-approved.
  Where's the line between prompting and code?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 398
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:01:14-05:00'
sources: []
---

### Why an AI‑based refund system can’t “auto‑approve” high‑value claims

At the heart of a large language model (LLM) is **stochastic sampling**: given a prompt, it returns one of many possible continuations weighted by learned probabilities.  
- **Deterministic code** executes the same instruction set every time; its output depends solely on its input data.  
- **Probabilistic prompting** injects randomness into the decision surface; even with identical inputs, different runs can yield divergent verdicts.

When a refund policy demands *zero* false positives for amounts over \$200, the system’s error budget is effectively zero. A purely probabilistic model cannot guarantee this because its confidence scores are themselves estimates subject to sampling variance. Even if you set a high threshold (e.g., 0.99 probability of “deny”), the underlying distribution can still produce a rare but possible “approve” event.

**Thus, the line is drawn at risk tolerance:**  
- **Low‑risk, high‑cost decisions** must be handled by deterministic code that enforces hard rules or triggers human review.  
- **High‑probability, low‑impact tasks** (e.g., flagging suspicious patterns) can safely rely on LLM outputs.

#### Non‑obvious insight  
The *variance* of the model’s confidence, not just its mean, determines reliability. Two models with identical average scores may differ in how often they cross a critical threshold. Therefore, any system that treats an LLM output as a deterministic decision must first quantify and control this variance—e.g., by running multiple independent samples and aggregating their predictions or by bounding the confidence interval before approving a claim.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
