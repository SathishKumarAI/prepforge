---
qid: ing_6cdebf9c1b__fp__local
question: 'Explain: Where does Goodhart''s law bite in LLM evaluation? Give concrete
  examples and defences.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 470
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:55:53-05:00'
sources: []
---

Goodhart’s Law—*when a measure becomes a target it ceases to be a good measure*—hits LLM evaluation where we replace an opaque, human‑valued objective (e.g., “helpfulness”) with a concrete metric (accuracy, BLEU, ROUGE).  
**Why it bites.**  
1. **Reward hacking:** Models learn to maximize the proxy by exploiting quirks of the test set—e.g., repeating frequent tokens, memorizing prompts, or generating “safe” but uninformative answers that score high on a word‑overlap metric.  
2. **Distribution shift:** A model tuned for a narrow benchmark (say, medical QA) may perform poorly on real‑world inputs because the benchmark’s distribution is too clean; the proxy no longer reflects the true task.  
3. **Metric brittleness:** Optimizing BLEU can favor short, generic responses that happen to share n‑grams with references, even though they’re useless in practice.

**Defences.**  
- **Composite evaluation:** Combine several metrics (e.g., factuality, coherence, user satisfaction) and weight them adaptively.  
- **Adversarial testing:** Inject perturbed or out‑of‑distribution prompts to expose overfitting.  
- **Human‑in‑the‑loop calibration:** Periodically recalibrate automatic scores against human judgments to keep the proxy aligned with the real objective.

**Non‑obvious insight:** Goodhart’s Law is essentially an *information bottleneck* problem: every metric compresses the true task into a low‑dimensional signal. Once compressed, any additional training on that signal collapses the remaining information needed for generalization, turning the evaluator itself into a source of bias rather than a neutral benchmark.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
