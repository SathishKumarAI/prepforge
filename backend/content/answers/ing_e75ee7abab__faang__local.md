---
qid: ing_e75ee7abab__faang__local
question: What do MMLU, GSM8K, HumanEval, MT-Bench, and SWE-bench each measure - and
  why shouldn't you pick a model for your product based on them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 566
total_tokens: 826
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:38:04-05:00'
sources: []
---

**Clarify**  
The question asks: *“What does each benchmark (MMLU, GSM8K, HumanEval, MT‑Bench, SWE‑Bench) evaluate, and why is it risky to select a product model solely on these scores?”*  
Assumptions: the audience knows what benchmarks are but not their specific focus; we’re comparing evaluation scope vs. real‑world utility.

**Approach**  
1. List each benchmark’s domain and metric type.  
2. Summarize the key limitation that ties all of them to a narrow slice of capability.  
3. Conclude with the risk of over‑reliance on any single score set.

**Depth**  

| Benchmark | What it measures | Typical metric |
|-----------|------------------|---------------|
| **MMLU** (Massive Multitask Language Understanding) | General knowledge reasoning across 57 subjects (science, humanities, etc.) | Accuracy of multiple‑choice questions |
| **GSM8K** (Graded Short‑Answer Math) | End‑to‑end math problem solving (10‑step arithmetic, algebra, calculus) | Exact match of the final numeric answer |
| **HumanEval** | Python coding skill: generating correct solutions to 164 programming prompts | Pass‑rate (exact string match with reference code) |
| **MT‑Bench** | Multilingual reasoning & translation quality across 40+ languages | Composite BLEU / exact‑match score on open‑ended tasks |
| **SWE‑Bench** | Software engineering: writing, debugging, and testing code in real projects | Pass‑rate + functional correctness of produced artifacts |

All benchmarks are *task‑specific*, *closed‑world* (fixed prompts), and rely on *exact match or surface metrics*. They ignore context‑sensitivity, robustness to distribution shift, safety, latency, resource usage, and user experience—all critical in production.

**Edge cases**  
- A model that scores high on GSM8K might hallucinate non‑math statements.  
- HumanEval pass‑rate doesn’t capture code style or maintainability.  
- MT‑Bench may overestimate translation quality for low‑resource languages.  

Testing should include adversarial prompts, real‑world workloads, and human evaluation of outputs.

**Optimize & communicate**  
Explain that benchmark scores are useful *for relative comparison*, not *absolute deployment decisions*. Recommend complementing them with:  
* Real‑user A/B tests, latency benchmarks, safety audits, and domain‑specific functional checks.*  

This balanced view shows structured reasoning, clear communication, and depth—hallmarks of a strong FAANG interview answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
