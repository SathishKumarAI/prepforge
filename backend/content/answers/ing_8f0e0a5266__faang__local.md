---
qid: ing_8f0e0a5266__faang__local
question: 'Explain: Multiple Dimensions of Quality — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 550
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:17:05-05:00'
sources: []
---

**Clarify**  
We’re asked to describe the *multiple dimensions of quality* used when evaluating large‑language models (LLMs). The goal is to show we understand that “quality” isn’t a single metric but a set of orthogonal criteria. I’ll assume we’re comparing two or more LLMs on the same prompt set, and that the evaluation framework must be reproducible and actionable for product teams.

**Approach**  
1. List core quality dimensions (accuracy, coherence, safety, fairness, efficiency).  
2. Explain each dimension’s definition, measurement method, and typical trade‑offs.  
3. Show how to combine them into a composite score or decision matrix.  

**Depth**  
| Dimension | What it captures | Typical metric(s) | Trade‑offs |
|-----------|-----------------|-------------------|------------|
| **Accuracy (Relevance)** | Correctness of factual content | BLEU, ROUGE, Exact Match on fact‑check sets | High accuracy may hurt creativity |
| **Coherence & Fluency** | Logical flow and grammaticality | Perplexity, human fluency ratings | Over‑optimization for grammar can reduce nuance |
| **Safety / Toxicity** | Absence of harmful or biased content | Toxicity classifiers, bias audits | Strict filters may suppress legitimate discourse |
| **Fairness / Inclusivity** | Balanced representation across demographics | Demographic parity tests | Mitigation can lower overall performance |
| **Efficiency (Latency & Compute)** | Speed and resource usage | Tokens/sec, GPU‑hrs per inference | Faster models often smaller → less accuracy |
| **Robustness** | Stability to prompt variation | Adversarial prompt tests | Robustness tuning may reduce expressiveness |

Composite evaluation can be a weighted sum or a Pareto frontier; product teams choose weights based on business priorities (e.g., safety > latency for medical assistants).

**Edge Cases**  
- Domain‑specific jargon: accuracy metrics may mislabel correct answers as wrong.  
- Adversarial prompts that trigger safe‑guards: may inflate safety scores but hurt user experience.  
- Multi‑language models: coherence metrics must be language‑agnostic.

**Optimize & Communicate**  
Explain the trade‑offs clearly to stakeholders, showing how a higher safety weight can lower throughput. Suggest iterative tuning: start with baseline weights, run A/B tests, then refine. Finally, document all metric definitions and thresholds so future engineers can reproduce results. This structured approach satisfies FAANG interviewers’ emphasis on clear communication, depth of technical understanding, and pragmatic problem‑solving.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
