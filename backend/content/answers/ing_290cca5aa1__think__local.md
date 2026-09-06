---
qid: ing_290cca5aa1__think__local
question: 'Explain: ​ Evaluator inputs — Evaluation concepts - Docs by LangChain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 479
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:23:31-05:00'
sources: []
---

**1️⃣ Clarify the ask and set assumptions**  
   • Identify that the user wants a *how‑to* explanation of “Evaluator inputs – Evaluation concepts – Docs by LangChain.”  
   • Assume they’re familiar with LangChain basics but need concrete guidance on building an evaluator.  

**2️⃣ Adopt a mental model: “Evaluation pipeline”**  
   • Map the components: **Prompt → Model output → Evaluator function → Score & feedback**.  
   • Treat the docs as the *rulebook* that defines each component’s signature and constraints.

**3️⃣ Step‑by‑step reasoning**  
   1. **Read the LangChain docs** – locate the `langchain.evaluation` module.  
   2. **Identify required inputs** – e.g., a reference answer, the generated answer, optional metadata (model name, temperature).  
   3. **Choose an evaluator class** (`ScoreEvaluator`, `SimilarityEvaluator`, etc.).  
   4. **Instantiate with parameters** (`metric="cosine"`, `threshold=0.8`).  
   5. **Call `.evaluate()`** passing the inputs; capture the numeric score and explanation.  
   6. **Wrap in a loop or chain** if you need batch processing.

**4️⃣ Common pitfalls to avoid**  
   • Forgetting that evaluators expect *strings*, not raw tensors.  
   • Mixing up `ReferenceEvaluator` vs. `SelfEvaluator`.  
   • Ignoring the optional `metadata` field that can bias scoring.  
   • Assuming a high score always means correctness; check the evaluation metric.

**5️⃣ Sanity‑check & verbalize**  
   • Run a quick test: give the evaluator a trivial question/answer pair and confirm the score matches intuition.  
   • Explain in plain terms: “The evaluator compares your model’s answer to a gold standard, using cosine similarity (or BLEU, etc.), returning a 0–1 score.”  

Follow this scaffold whenever you need to explain LangChain evaluation concepts—clear assumptions → structured pipeline → stepwise execution → watch for traps → validate and communicate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
