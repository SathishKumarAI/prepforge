---
qid: ing_ea7e1520cd__fp__local
question: 'Q74: A candidate claims their AI system achieves 95% accuracy. What questions
  do you ask to assess whether this is meaningful?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 468
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:17:41-05:00'
sources: []
---

**Why “95 % accuracy” matters only if the problem’s structure and evaluation protocol are understood**

1. **What is being classified?**  
   *Is it a binary decision (e.g., spam vs. not‑spam) or multi‑class (ten handwriting digits)?*  
   A single number collapses rich class distributions into one metric.

2. **How is the dataset constructed?**  
   *Are training, validation, and test splits drawn from the same distribution?*  
   If the test set contains data that are easier or harder than typical deployment data, accuracy can be misleading.

3. **What is the prevalence of each class?**  
   *Is it balanced or heavily skewed?*  
   In a 99 % “negative” scenario, a naïve model predicting every instance as negative attains 99 % accuracy yet offers no utility.

4. **Which metric truly captures business value?**  
   *Precision‑recall trade‑off, ROC AUC, or F1 score might be more relevant than raw accuracy.*  
   Accuracy hides the cost of false positives vs. false negatives.

5. **How is uncertainty handled?**  
   *Does the model output calibrated probabilities?*  
   A high accuracy can coexist with poorly calibrated confidence scores that mislead downstream decisions.

6. **What about adversarial or distribution‑shift robustness?**  
   *Can the system maintain performance when inputs deviate from training data (e.g., noisy images, different demographics)?*  

7. **Is there an external baseline?**  
   *How does 95 % compare to a simple heuristic or human performance on the same task?*  
   Without context, “95 %” offers no guarantee of superiority.

---

### Non‑obvious insight

> **Accuracy is only informative when the class prior in evaluation matches that in deployment.**  
> Even a perfect classifier will appear weak if evaluated against an unrepresentative test set, whereas a mediocre model may look strong on an over‑simplified benchmark. Always align data distributions and cost structures before interpreting a single accuracy figure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
