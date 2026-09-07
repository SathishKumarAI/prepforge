---
qid: ing_d6a2639b85__faang__local
question: 'Q: What is "Label Bias" in In-Context Learning?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 526
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:58:26-05:00'
sources: []
---

**Clarify**  
You’re asking about *label bias* that can creep into an in‑context learning (ICL) prompt: when the distribution of target labels in the few examples skews the model’s predictions toward those labels, even if they’re not truly representative of the underlying task. I’ll assume we’re dealing with a classification setting where the prompt contains several labeled demonstrations followed by an unlabeled query.

**Approach**  
1. Define label bias formally.  
2. Explain why it matters in ICL.  
3. Illustrate with a simple example.  
4. Mention mitigation strategies.

**Depth**  
Label bias arises because the language model interprets the prompt as a joint distribution over *context* and *label*. If the demonstration set contains, say, 80 % “positive” labels, the model will assign higher prior probability to “positive” when predicting the query, regardless of its features. This is distinct from data‑level bias; it’s a *prompt‑induced* skew.

Mathematically:  
\(P(y|x,\text{prompt}) \propto P(x,y|\text{prompt})\).  
If \(P_{\text{demo}}(y)\) is heavily weighted toward one class, the posterior inherits that bias. In practice, this can lead to systematic over‑prediction of the majority label, reducing recall for minority classes.

Example: Prompt with 5 demos—4 “spam”, 1 “ham”. A new email containing typical ham cues will still be classified as spam because the prompt’s prior dominates.

Mitigation:  
- **Balanced demonstrations** (equal class counts).  
- **Class‑aware weighting** in the prompt.  
- **Calibration tokens** (“Note: labels are balanced”) to nudge the model.  
- **Post‑hoc correction** using a small validation set.

**Edge Cases**  
If the true distribution is highly skewed, forcing balance may hurt overall accuracy. Extremely long prompts can dilute the bias effect but increase token cost. Testing should involve varying demo proportions and measuring precision/recall per class.

**Optimize & Communicate**  
Highlight that label bias is a *prompt design* problem rather than a model flaw. Emphasize that careful prompt engineering—balancing demos, adding explicit calibration cues—can mitigate it with negligible computational overhead. Conclude by noting the trade‑off: more demos improve robustness but consume tokens; find the sweet spot empirically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
