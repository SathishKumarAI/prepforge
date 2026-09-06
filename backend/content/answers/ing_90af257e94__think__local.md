---
qid: ing_90af257e94__think__local
question: 'Explain: Level 1: Unit Tests — Your AI Product Needs Evals \u2013 Hamel\u2019s
  Blog'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 447
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:38:52-05:00'
sources: []
---

**1️⃣ Clarify the goal & scope**  
   *What is the user asking?* They want an explanation of a blog post titled “Level 1: Unit Tests — Your AI Product Needs Evals.”  
   *Assumptions:* The reader knows basic software testing but not how it applies to AI. The answer should bridge that gap and highlight why unit tests are vital for AI products.

**2️⃣ Adopt the “test‑first, evaluate‑later” mental model**  
   • Treat each AI component (data loader, model forward pass, loss computation) as a black box with inputs/outputs.  
   • Unit tests assert that given known inputs the outputs match expected values or distributions.  
   • Evaluation (“evals”) is the next layer: measuring performance on held‑out data, checking bias, and ensuring reproducibility.

**3️⃣ Step‑by‑step reasoning**  
   a. **Identify core units** – preprocessing, model inference, post‑processing.  
   b. **Define deterministic expectations** – e.g., a fixed seed should produce the same predictions.  
   c. **Write tests that catch regressions** – if a refactor changes output shape or introduces NaNs, the test fails immediately.  
   d. **Integrate evals** – after unit stability, run broader metrics (accuracy, F1, fairness) on validation sets.

**4️⃣ Avoid common traps**  
   *Don’t test randomness.* Use fixed seeds or mock random functions.  
   *Avoid over‑testing* entire pipelines; focus on isolated logic.  
   *Ignore data drift.* Tests should be repeatable but also alert when underlying data changes.

**5️⃣ Sanity‑check & communicate**  
   • Run a quick example: change a layer’s weight initialization and watch the unit test fail.  
   • Explain that unit tests give confidence in code correctness, while evals confirm real‑world performance.  
   • Emphasize that both layers together ensure an AI product is reliable, maintainable, and trustworthy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
