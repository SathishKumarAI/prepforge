---
qid: ing_32667a166e__faang__local
question: 'Explain: LLM Evaluation and Guardrails — Ml Interview Prep'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 487
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:41:32-05:00'
sources: []
---

**LLM Evaluation & Guardrails – Quick FAANG‑style Primer**

| Step | What I’d do |
|------|-------------|
| **Clarify** | “We’re building a production LLM service that must be *accurate, safe, and compliant*.  Key assumptions: we have labeled data for downstream tasks, we can instrument logs, and we’ll deploy in multi‑tenant environments.” |
| **Approach** | 1. Define quantitative metrics (BLEU/F1 for text generation, perplexity for language modeling). 2. Create *human‑in‑the‑loop* evaluation suites that surface hallucinations, toxicity, or bias. 3. Embed guardrails: token filters, prompt sanitization, and policy classifiers. 4. Continuous monitoring with A/B tests and drift alerts. |
| **Depth** | • **Evaluation** – Use *prompt‑level* metrics (e.g., ROUGE for summarization) plus *system‑level* safety scores from a fine‑tuned toxicity classifier. Compute per‑token entropy to flag low‑confidence outputs. <br>• **Guardrails** – Implement *content moderation pipelines*: a pre‑filter that blocks disallowed tokens, a post‑filter that rewrites or truncates unsafe content, and a policy model that assigns risk scores. Use ensemble voting for robustness. Complexity: evaluation is O(N) over batch size; guardrail inference adds ~10–15 ms latency per request. |
| **Edge Cases** | • Prompt injection attacks (e.g., “Ignore safety”). Test with adversarial prompts. <br>• Data drift causing hallucinations – monitor perplexity spikes. <br>• Multi‑language support: ensure tokenizers don’t introduce bias. |
| **Optimize & Communicate** | • Cache policy model outputs for repeated prompts to cut latency. <br>• Use reinforcement learning from human feedback (RLHF) to fine‑tune safety policies over time. <br>Explain trade‑offs: stricter filters reduce hallucinations but may hurt fluency; we’ll balance via tunable thresholds and A/B testing. |

*Result:* A systematic, measurable pipeline that guarantees LLM outputs stay within acceptable quality and safety bounds while remaining scalable for production use.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
