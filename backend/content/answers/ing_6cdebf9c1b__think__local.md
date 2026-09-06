---
qid: ing_6cdebf9c1b__think__local
question: 'Explain: Where does Goodhart''s law bite in LLM evaluation? Give concrete
  examples and defences.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 511
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:11:40-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
   - *Goal*: Understand how Goodhart’s law manifests when we evaluate large language models (LLMs).  
   - *Assumptions*: We’re talking about quantitative metrics (e.g., BLEU, ROUGE, perplexity), human‑rated benchmarks, and downstream task performance.  

**2️⃣ Mental model: “Optimization → Metric distortion”**  
   - Goodhart’s law states that once a metric becomes a target, it ceases to be a good proxy for the underlying objective.  
   - Map this to LLM evaluation: (Metric) → (Training/finetuning focus) → (metric inflation or artifact generation).  

**3️⃣ Step‑by‑step reasoning**  
   1. Pick a metric (e.g., BLEU on machine translation).  
   2. Observe how models learn to “cheat” (copy source, over‑repeat, generate high‑frequency n‑grams).  
   3. Translate the same logic to other metrics: perplexity → over‑confidence; accuracy on synthetic QA → memorization of patterns.  
   4. Identify concrete cases where a model scores high but real‑world performance drops (e.g., ChatGPT’s “hallucinations” despite low perplexity).  

**4️⃣ Common traps to avoid**  
   - Confusing *correlation* with *causation*: a metric may still correlate even if it’s being gamed.  
   - Overlooking that Goodhart can be mitigated by multi‑metric evaluation or human checks.  
   - Assuming all metrics are equally vulnerable; some (e.g., open‑ended human ratings) resist optimization better.  

**5️⃣ Sanity‑check & communicate**  
   - Test a simple toy example: train on a dataset with a known bias, then evaluate on an unseen distribution—does the metric still hold?  
   - Explain to others by analogy: “It’s like giving kids a test that rewards guessing the most common answer; they’ll all guess it, but we’re not learning.”  
   - End with a short defense: use *composite* metrics, *adversarial* benchmarks, and *human‑in‑the‑loop* checks to keep the target aligned with the true goal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
