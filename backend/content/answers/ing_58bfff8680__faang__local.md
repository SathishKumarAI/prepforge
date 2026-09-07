---
qid: ing_58bfff8680__faang__local
question: 'Explain: Core Dimensions — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 481
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:09:54-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the *core dimensions* used when evaluating a large language model (LLM).  
Assumptions:  
1. The evaluation is for an internal benchmark, not just user‑feedback.  
2. We care about quantitative metrics that map to real‑world use cases.

**Approach**  
1. List each dimension.  
2. For each, describe what it measures, why it matters, and a typical metric or test.  
3. End with how they interact in a holistic assessment.

**Depth**

| Dimension | What it captures | Typical metrics / tests |
|-----------|------------------|------------------------|
| **Accuracy / Correctness** | Ability to produce factually correct outputs | Fact‑check datasets (e.g., TruthfulQA), BLEU/ROUGE for generation |
| **Relevance / Contextual Fit** | Staying on topic and using user intent | Intent‑matching scores, cosine similarity with gold responses |
| **Robustness / Adversarial Resistance** | Performance under noisy or malicious prompts | Adversarial prompt suites, drop‑out tests |
| **Safety / Bias & Hallucination** | Avoiding harmful or biased content | OpenAI Safety‑Eval, bias detection benchmarks |
| **Efficiency / Latency** | Runtime and resource usage | Inference time per token, GPU memory footprint |
| **Scalability / Transferability** | Generalization to new domains | Zero‑shot/few‑shot prompt tests across multiple datasets |

**Edge Cases**  
- Models that excel on one metric but fail safety (e.g., high accuracy but hallucinate).  
- Benchmarks with domain bias; a model may look great on curated data yet underperform in real traffic.  
- Latency trade‑offs: larger models score higher on accuracy but break SLAs.

**Optimize & Communicate**  
Start by defining the business objective (e.g., chat assistant vs. code generator). Weight each dimension accordingly and plot results on a radar chart to visualize trade‑offs. Iterate with A/B tests in production, feeding real‑world feedback back into the evaluation loop. This structured pipeline mirrors FAANG’s data‑driven decision making and ensures transparent, actionable insights for model improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
