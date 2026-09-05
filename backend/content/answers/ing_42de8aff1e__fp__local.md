---
qid: ing_42de8aff1e__fp__local
question: GLM's original pre-training objective is autoregressive blank infilling.
  How does it differ from BERT and GPT, and why did the team argue it unifies understanding
  and generation?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 467
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:27:00-05:00'
sources: []
---

**From the problem to the solution**

Language models are trained to predict an unknown token *given* its surroundings.  
Two extremes exist:

| Model | Context used for prediction |
|-------|-----------------------------|
| **BERT** | Bidirectional (both left and right) – but it never predicts a token in sequence; it only fills blanks simultaneously. |
| **GPT** | Autoregressive – predicts the next token *only* from its left side, yielding fluent generation but no true bidirectionality for understanding. |

GLM’s pre‑training objective sits between them: *autoregressive blank infilling*.  
It first masks a span (as BERT does) and then **decodes it autoregressively** from left to right, using the full unmasked context on both sides as input. Thus every predicted token benefits from a truly bidirectional view while still being produced in an order that matches natural language generation.

**Why this unifies understanding & generation**

1. **Information completeness** – the decoder sees all visible words; the prediction is no longer limited to one side, so the model learns richer dependencies.
2. **Generation compatibility** – because decoding proceeds token‑by‑token, the same network can be used for inference tasks that require left‑to‑right generation (e.g., translation, summarization).
3. **Optimization symmetry** – the loss is a sum of cross‑entropy terms over the masked span; this mirrors both BERT’s MLM and GPT’s causal LM, but with a shared architecture.

**Non‑obvious insight**

The *shape* of the mask matters more than its size: using long, contiguous spans forces the model to learn how to reconstruct entire phrases from sparse context. This encourages an internal representation that is simultaneously attentive (like BERT) and fluent (like GPT), which explains why a single GLM can excel at both comprehension tasks (question answering, inference) and generative ones (story completion).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
