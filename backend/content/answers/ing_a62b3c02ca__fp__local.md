---
qid: ing_a62b3c02ca__fp__local
question: What is LLM-as-judge? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 427
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:59:07-05:00'
sources: []
---

### FAQ: What is **LLM‑as‑Judge**?

From the *fundamental problem* of evaluating open‑ended AI outputs—there’s no single ground truth and human annotators are expensive—we need a scalable, consistent arbiter. A large language model (LLM) can act as that arbiter because its objective is to predict the most plausible continuation of text given a prompt.  

1. **Why an LLM?**  
   - *Probabilistic inference*: An LLM assigns probabilities to every token; when asked to judge, it effectively estimates \(P(\text{correct} \mid \text{candidate})\).  
   - *Self‑consistency*: By sampling multiple “opinions” from the same model and aggregating them (majority vote or expectation), we reduce variance—a principle akin to bagging in ensemble learning.  

2. **How it works**  
   - The judge prompt contains the *task*, the *candidate answer*, a set of *rubrics* (accuracy, relevance, style), and optional *reference examples*.  
   - The LLM outputs a score or binary verdict per rubric.  
   - Optional calibration: compare the model’s scores against a small human‑labeled subset to adjust thresholds.

3. **Deeper principle**  
   This is an application of **information bottleneck**: we compress all evidence (task + answer) into a concise decision, preserving only what matters for correctness.  

4. **Non‑obvious insight**  
   The *entropy* of the judge’s output distribution is itself informative—high entropy signals ambiguity; low entropy indicates confident consensus. Tracking this metric can flag cases needing human review without extra cost.

In short, LLM‑as‑Judge turns a probabilistic text predictor into an automated, principled grader that scales with the same data it was trained on.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
