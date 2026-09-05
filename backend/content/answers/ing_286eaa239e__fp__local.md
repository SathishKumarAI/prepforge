---
qid: ing_286eaa239e__fp__local
question: 'Q: What is the "Over-Reliance" risk in HITL, and how do you mitigate it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 402
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:31:11-05:00'
sources: []
---

**Why “over‑reliance” is a problem**

Human–in‑the‑loop (HITL) systems aim to combine the speed of automation with human judgment.  
From an information‑theoretic view, the overall uncertainty \(U\) in a decision is

\[
U_{\text{total}}=U_{\text{auto}}\times U_{\text{human}}
\]

when the two sources are independent.  If the system’s confidence threshold is set too low, the human will almost always defer to the algorithm; then \(U_{\text{human}}\) remains high while the automation’s uncertainty dominates, yielding a *composite* uncertainty that is no better than the raw model.

**The risk**

When operators habitually trust the machine, they develop *automation complacency*:  
1. **Skill decay** – their own diagnostic acumen erodes because critical errors are rarely caught.  
2. **Feedback loop collapse** – the algorithm never receives corrective signals to improve, so its error surface stays unchanged.

Thus, the system’s performance plateaus or even deteriorates while the perceived reliability grows—a classic “illusion of safety.”

**Mitigation**

1. **Adaptive confidence thresholds** that vary with context (e.g., higher uncertainty in edge cases).  
2. **Forced‑review windows**: randomly sample a fraction of low‑confidence predictions for human audit, ensuring continuous calibration.  
3. **Human‑feedback channels** that quantify the *impact* of each correction on model updates (gradient‑based fine‑tuning), closing the loop.

A non‑obvious insight: *over‑reliance is mathematically equivalent to a biased estimator.* By deliberately injecting bias—through occasional forced reviews—you actually reduce variance and improve long‑term accuracy, turning complacency into a self‑correcting mechanism.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
