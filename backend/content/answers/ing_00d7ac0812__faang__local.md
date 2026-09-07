---
qid: ing_00d7ac0812__faang__local
question: 'Explain: Evaluation and Benchmarks — Llm Papers Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 522
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:46:17-05:00'
sources: []
---

**Evaluation & Benchmarks – LLM Papers Cheat‑Sheet**

| Section | What It Covers | Typical Metrics |
|---------|----------------|----------------|
| **Task Suites** | Standard NLP benchmarks (GLUE, SuperGLUE, SQuAD, etc.) + domain‑specific ones (e.g., *LAMBADA*, *OpenAI‑WebGPT*) | Accuracy, F1, Exact Match |
| **Human‑Eval Style** | Automated code‑generation tests; few‑shot prompting | Pass@k (percentage of problems solved in k attempts) |
| **Commonsense & Reasoning** | *Winograd Schema*, *ARC*, *RACE* | Accuracy, AUC |
| **Long‑Context / Retrieval** | *BigBench Hard*, *OpenBookQA* | BLEU, ROUGE, Precision@k |
| **Robustness & Bias** | Adversarial paraphrases, demographic bias tests | Degradation rate, Fairness metrics (Equal Opportunity) |
| **Efficiency** | FLOPs, latency, memory footprint | Throughput, Energy‑per‑token |

### How to Use It

1. **Clarify the goal** – Are you measuring *raw performance*, *fairness*, or *resource usage*?  
2. **Pick the right suite** – Align with your target use case (e.g., conversational AI → OpenAI‑WebGPT).  
3. **Report comprehensively** – Include absolute scores, relative gains vs. baselines, and any trade‑offs observed (higher accuracy ↔ higher latency).  

### Edge Cases

- *Domain shift*: a model may score high on GLUE but fail in medical text.  
- *Prompt dependence*: few‑shot prompts can inflate results; always report prompt details.  

### Optimizing & Communicating

- **Normalize** across models (e.g., use relative improvement over a standard baseline).  
- **Visualize** with bar charts or radar plots to show multi‑dimensional trade‑offs.  
- **Narrate**: “Our model achieves 92 % on GLUE, a 3 % lift over GPT‑3, but incurs a 30 ms latency increase due to the larger context window.”

This cheat‑sheet keeps evaluation consistent, transparent, and comparable—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
