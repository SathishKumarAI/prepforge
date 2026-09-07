---
qid: ing_e63521a7c2__aws__local
question: 'Explain: Your team extended a model from 32k to 256k with YaRN plus a short
  fine-tune. Long-context evals improved, but users say it got worse on ordinary short
  prompts and it''s noticeably more verbose. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 446
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:58:39-05:00'
sources: []
---

**Situation & Task**  
We were asked to scale our LLM from 32k to 256k token context using YaRN + a brief fine‑tune. Post‑deployment, long‑context accuracy jumped 18 % (BLEU‑like score), but users reported *slower* responses and *verbosity* on short prompts. I owned the debugging effort.

**Approach & Analysis**  
1. **Instrumentation** – Instrumented request logs to capture prompt length, token count, latency, and output length.  
2. **Hypothesis 1 (Token‑budget bleed)** – The larger context window caused the decoder to consume more of its budget on padding tokens introduced by YaRN’s segment embeddings.  
3. **Hypothesis 2 (Fine‑tune overfitting)** – The short fine‑tune biased the model toward longer outputs because the validation set skewed toward longer contexts.

**Testing & Findings**  
- Ran A/B with a *token‑budget cap* of `max_output_tokens = min(256, prompt_len + 64)`. Latency dropped from 1.8 s to 1.2 s and verbosity decreased by ~30 %.  
- Re‑trained the fine‑tune on a balanced dataset (50/50 short vs long prompts). Resulting model improved F1 on short prompts by 12 % without hurting long‑context BLEU.

**Result & Impact**  
Implemented token‑budget logic and re‑fine‑tuned; user satisfaction scores rose from 3.2 to 4.5/5, and overall response time fell 30 %. The change cost < $200/month on SageMaker inference endpoints.

**Learning**  
- Always monitor prompt length distribution when scaling context windows.  
- Fine‑tune data must reflect the full operational mix; otherwise, performance regressions surface in production.  

*Leadership Principles*: **Ownership** – took end‑to‑end responsibility; **Dive Deep** – dissected logs and model internals; **Deliver Results** – measurable lift in user metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
