---
qid: q050
question: "What is data leakage in machine learning and how do you prevent it?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Define leakage crisply: information available in training that would *not* exist at prediction time (or the target itself) sneaks in, inflating validation scores that then collapse in production. Assume the interviewer wants both diagnosis and prevention.

2. **Mental model.** Ask one guarding question of every feature and every preprocessing step: *would I truly have this information, computed this way, at the moment of prediction?* If no, it is leakage.

3. **Reason step by step.** Enumerate the common forms: target leakage (a feature is a proxy for the label, e.g., 'account closed date' for churn), train-test contamination (fitting scaling/imputation/encoding on the full data before splitting), temporal leakage (using future to predict past), and duplicate records spanning splits.

4. **Traps to avoid.** The subtle one is preprocessing leakage, people split correctly but fit the scaler/imputer on everything. Prevent it by splitting *first* and learning all transforms inside a pipeline, per fold. Respect time order with time-based splits. Be suspicious of too-good-to-be-true metrics.

5. **Sanity-check and communicate.** Re-audit each feature with the step-2 question. Frame your answer as: definition, then forms, then prevention, and end by noting leakage is one of the most common and damaging real-world ML mistakes, which shows maturity.
