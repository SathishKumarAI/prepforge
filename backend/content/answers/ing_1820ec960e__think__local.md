---
qid: ing_1820ec960e__think__local
question: 'Q: Why have benchmarks like MMLU and HumanEval stopped being useful for
  ranking frontier models, and what replaced them?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 511
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:19:02-05:00'
sources: []
---

We need to explain reasoning process: clarify question, assumptions, framework, stepwise reasoning, traps, sanity-check. Provide 150-220 words. Use markdown.**1️⃣ Clarify the ask & set assumptions**  
- The user wants an explanation *why* MMLU/HumanEval are now less useful and *what has taken their place*.  
- Assume “frontier models” means state‑of‑the‑art LLMs (GPT‑4, Claude‑3, etc.) and that “benchmarks stopped being useful” refers to ranking performance or guiding research.  

**2️⃣ Mental model / framework**  
- **Benchmark lifecycle**: introduction → wide adoption → saturation → diminishing returns.  
- **Evaluation dimensions**: difficulty, diversity, alignment with real tasks, reproducibility, bias, cost of execution.  

**3️⃣ Step‑by‑step reasoning**  
1. Identify what MMLU/HumanEval measure (synthetic knowledge, code generation).  
2. Note how frontier models now exceed the upper bound of these tests; scores plateau or even saturate.  
3. Highlight that high scores no longer discriminate between models—most get near‑perfect results.  
4. Discuss the practical gaps: lack of real‑world applicability, over‑fitting to test prompts, and limited insight into safety/robustness.  
5. Trace the community shift toward *larger, more diverse* benchmarks (e.g., BIG-bench, MT-Bench, OpenAI’s “HardBench”) that cover broader domains, adversarial settings, or downstream tasks.  

**4️⃣ Common traps to avoid**  
- Assuming all models are equal; ignore variations in prompt tuning or instruction following.  
- Overlooking the role of cost and reproducibility (running huge benchmarks is expensive).  
- Forgetting that new benchmarks still face their own saturation issues over time.

**5️⃣ Sanity‑check & verbalize**  
- Verify each claim with recent papers or release notes (e.g., BIG-bench results, OpenAI’s “Evaluation of GPT‑4”).  
- Explain the transition logically: as performance hits a ceiling on old tests, researchers seek richer tasks that better capture nuanced abilities.  
- Conclude by summarizing: MMLU/HumanEval are now less discriminative; newer benchmarks like BIG‑Bench and downstream task suites have taken over.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
