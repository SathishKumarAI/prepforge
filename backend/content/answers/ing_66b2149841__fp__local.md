---
qid: ing_66b2149841__fp__local
question: 'Explain: Supported LLMs — GitHub - NVIDIA-NeMo/Guardrails: NeMo Guardrails
  is an open-source toolkit for easily adding programmable guardrails to LLM-based
  conversational systems. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 475
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:43:34-05:00'
sources: []
---

**Why a “guardrail” for large language models (LLMs) is necessary**

Large transformer‑based models learn from massive corpora and can generate fluent, context‑aware text.  
Their objective is *predicting the next token*, not *adhering to user intent or policy*. Consequently, when deployed in real‑world conversations they may:

1. **Generate disallowed content** (hate speech, medical misinformation).
2. **Misinterpret user requests**, leading to hallucinations.
3. **Exhibit unsafe behavior** (e.g., offering legal advice).

A guardrail is a *conditional filter* that intercepts the model’s output before it reaches the end‑user. It must satisfy two core principles:

| Principle | Why it matters |
|-----------|----------------|
| **Decoupling** | The LLM remains a black‑box generator; we add constraints without retraining, preserving performance and reducing compute costs. |
| **Probabilistic safety** | Guardrails approximate a *posterior* over safe outputs, trading off precision for coverage—exactly the kind of risk management seen in Bayesian decision theory. |

**NeMo Guardrails implements this by:**

1. **Defining guardrail policies** (e.g., “no profanity”, “keep response length under 200 words”) as *regular expressions or neural classifiers*.
2. **Embedding them into a pipeline** that receives the raw LLM output, applies each policy sequentially, and either accepts, modifies, or rejects the text.
3. **Providing an API for custom rules**, so developers can encode domain‑specific constraints (e.g., “do not mention drug X”).

A non‑obvious insight: *Guardrails act as a form of implicit curriculum learning.*  
By continuously filtering out undesirable generations during inference, they expose the model to a curated distribution that discourages risky patterns—effectively nudging the LLM toward safer behavior without explicit retraining. This mirrors how supervised fine‑tuning shapes policy networks in reinforcement learning.

In short, NeMo Guardrails is an open‑source, plug‑and‑play layer that enforces safety, compliance, and intent alignment on any LLM‑based chatbot while preserving the generative power of the underlying transformer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
