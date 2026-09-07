---
qid: ing_519947a4bc__faang__local
question: How do you evaluate an LLM? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 537
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:54:09-05:00'
sources: []
---

**1️⃣ Clarify**  
> *Problem:* We need a systematic way to judge the quality of a large language model (LLM).  
> *Assumptions I’d confirm:*  
> • Target domain (general‑purpose vs. specialized).  
> • Constraints: latency, memory, cost, regulatory compliance.  
> • End‑users: developers or consumers?  

**2️⃣ Approach**  
1. Define evaluation dimensions (accuracy, coherence, safety, efficiency).  
2. Build a benchmark suite covering representative prompts and edge cases.  
3. Run both automated metrics and human studies for each dimension.  
4. Aggregate scores into a composite index weighted by business priorities.

**3️⃣ Depth**  

| Dimension | Metric(s) | Tool/Method |
|-----------|-----------|-------------|
| **Accuracy / factuality** | BLEU, ROUGE, F1 on curated QA pairs; Fact‑Checking via external knowledge bases | GPT‑4 prompt to verify answers |
| **Coherence & fluency** | Perplexity, Human Rating (5‑point Likert) | Annotator panel with guidelines |
| **Safety / bias** | Adversarial prompts + toxicity classifiers (e.g., Perspective API); Bias audits across demographics | Automated pass/fail thresholds |
| **Latency & throughput** | Inference time per token; GPU/CPU FLOPs | Profiling on target hardware |
| **Robustness** | Perturbation tests (paraphrases, misspellings) | Random noise injection |

*Complexity:*  
- Automated metrics: O(N) over dataset.  
- Human studies: O(M) annotators × N prompts; cost‑driven trade‑off.

**4️⃣ Edge Cases**  

- **Hallucinations on niche topics:** test with domain‑specific queries.  
- **Adversarial attacks:** include prompt injection tests.  
- **Resource limits:** simulate low‑precision inference to gauge degradation.

**5️⃣ Optimize & Communicate**  

1. Automate metric pipelines; use CI/CD for continuous evaluation.  
2. Visualize composite scores via dashboards (e.g., Grafana).  
3. Iterate on weighting: e.g., safety ≥ 30% if product is consumer‑facing.  
4. Present findings in a concise report: top‑level summary + drill‑down charts.

*Result:* A repeatable, transparent framework that balances quantitative rigor with qualitative nuance—exactly what FAANG interviewers look for.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
