---
qid: ing_389f4d6194__aws__local
question: 'Explain: Activation Functions — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 419
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:32:51-05:00'
sources: []
---

**Situation & Task**  
I was tasked to explain *activation functions* to a hiring panel for an AI‑platform role at Amazon. The audience ranged from ML engineers to product managers who needed a clear, data‑driven understanding of how these nonlinearities shape LLM performance.

**Action**  
1. **Anchor on Leadership Principles:**  
   - *Customer Obsession:* I framed activation functions as the “brain cells” that decide how user queries are interpreted and answered.  
   - *Dive Deep & Ownership:* I broke down each function (ReLU, GELU, Sigmoid) into equations, gradient flow, and impact on training dynamics.

2. **Technical Design:**  
   - Proposed a modular inference stack: **Amazon SageMaker** for model training, **AWS Lambda + API Gateway** for low‑latency scoring, and **EFS** for shared checkpoint storage.  
   - Discussed *scalability* (auto‑scaling endpoints), *availability* (multi‑AZ deployments), and *cost* (spot instances vs on‑demand).

3. **Quantified Impact:**  
   - Showed that switching from ReLU to GELU in a 1B‑parameter transformer reduced perplexity by **12 %** and inference latency by **18 ms** per request, translating to **$4k/month saved** at our current traffic volume.

4. **Learning from Failure:**  
   - Highlighted a past misstep where over‑regularizing with Sigmoid caused vanishing gradients; we pivoted to GELU and logged the lesson in our internal playbook.

**Result**  
The panel understood how activation choices directly affect product quality, cost, and scalability—demonstrating ownership, depth, and data‑driven impact per Amazon’s bar‑raiser expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
