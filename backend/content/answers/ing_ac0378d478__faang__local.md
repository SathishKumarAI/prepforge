---
qid: ing_ac0378d478__faang__local
question: 'Explain: LLM Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 470
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:23:59-05:00'
sources: []
---

**Clarify**  
The question asks for an explanation of *LLM evaluation*: how we measure the performance and safety of large language models before deployment.  
Assumptions to confirm: (1) The audience knows basic NLP metrics; (2) We focus on both quantitative benchmarks and qualitative human‑judgement tests; (3) Evaluation includes correctness, coherence, alignment, and robustness.

**Approach**  
1. Define the evaluation goal (accuracy, safety, efficiency).  
2. Select a mix of automated benchmarks and human studies.  
3. Run inference under controlled settings to capture latency/throughput.  
4. Aggregate results into a single report for stakeholders.

**Depth**  
- **Automated metrics**: perplexity, BLEU/F1 for generation, ROUGE for summarization, accuracy on GLUE/SuperGLUE tasks.  
- **Safety & alignment tests**: Adversarial prompts, toxicity classifiers (e.g., Perspective API), instruction-following benchmarks like AlpacaEval.  
- **Robustness checks**: Input perturbations (typos, paraphrases), domain shift tests.  
- **Human evaluation**: AMT or expert panels scoring relevance, factuality, and coherence on a Likert scale; inter‑rater agreement (Krippendorff’s alpha).  
- **Resource metrics**: GPU hours, memory footprint, inference latency.

Complexities: balancing statistical significance with cost; ensuring prompt diversity to avoid overfitting. Trade‑off between thoroughness and time-to-market.

**Edge Cases**  
- Models may overfit to benchmark prompts → test on unseen datasets.  
- Toxicity classifiers can be biased → cross‑validate with multiple detectors.  
- Human bias in ratings → anonymize prompts, randomize order.

**Optimize & Communicate**  
Iterate the evaluation pipeline by automating data collection and statistical analysis (e.g., using MLflow). Present findings via a dashboard that visualizes metric trends over training epochs. Explain trade‑offs clearly: higher accuracy may reduce latency; stricter safety filters might lower generation fluency. This structured, transparent process satisfies FAANG interviewers’ emphasis on clear communication and deep technical insight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
