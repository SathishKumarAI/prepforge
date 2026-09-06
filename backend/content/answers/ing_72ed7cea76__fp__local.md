---
qid: ing_72ed7cea76__fp__local
question: 'Explain: Evaluation — GitHub - NVIDIA-NeMo/Guardrails: NeMo Guardrails
  is an open-source toolkit for easily adding programmable guardrails to LLM-based
  conversational systems. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 477
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:08:58-05:00'
sources: []
---

**Why guardrails are needed**

Large language models (LLMs) are *universal sequence generators*: given any prompt they produce a fluent continuation that maximizes likelihood under their learned distribution. That objective is indifferent to safety or policy—every word is chosen solely for statistical plausibility, not for correctness, legality, or ethics. In a conversational system this translates into hallucinations, disallowed content, or subtle bias amplification. To make such systems deployable we must *constrain* the generative process without destroying its core strengths.

**The NeMo Guardrails principle**

Guardrails act as a **post‑generation filter + pre‑prompt conditioning** pipeline. They treat the model’s output \(y\) as a sample from a distribution \(\mathcal{P}\). The guardrail module learns a *policy* \(f(y)\in[0,1]\) that estimates the probability that \(y\) satisfies user and system constraints (e.g., no hate speech, no instructions for wrongdoing). Formally we impose an auxiliary loss

\[
L_{\text{guard}} = \mathbb{E}_{(x,y)\sim \mathcal{D}}\big[ -\log f(y|x) \big]
\]

where \(x\) is the prompt. The policy is trained on labeled data (safe vs unsafe). During inference, any candidate token sequence with \(f<\tau\) is discarded or rescored, effectively projecting \(\mathcal{P}\) onto a *safe sub‑space*. Because this projection happens after sampling, we preserve the model’s fluency; because it uses learned signals rather than hard rules, it adapts to nuanced contexts.

**Non‑obvious insight**

Many guardrail systems treat safety as a binary filter. NeMo Guardrails instead leverages **probabilistic calibration**: by providing a continuous confidence score, downstream components (e.g., rerankers or user‑feedback loops) can decide *how much* uncertainty to tolerate, enabling graceful degradation rather than hard blocking. This subtle shift from “yes/no” to “confidence spectrum” allows safer yet more informative interactions—users see why an answer was withheld and can request clarification instead of being met with a blanket refusal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
