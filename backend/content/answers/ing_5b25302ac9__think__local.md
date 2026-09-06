---
qid: ing_5b25302ac9__think__local
question: 'Explain: What is data leakage? Give me three subtle examples you''ve seen
  or could imagine, and how you''d detect them.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 612
total_tokens: 814
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:00:53-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- *What is “data leakage” in ML?*  It’s any inadvertent flow of information from the test (or future) data into the training process that inflates performance metrics.  
- *Scope*: focus on classification/regression pipelines, not domain‑specific quirks.  
- *Goal*: give three subtle, realistic examples and how to spot them.

**2️⃣ Adopt a mental model**  
Think of the pipeline as a series of “data‑processing boxes” (pre‑proc → feature engineering → model fitting). Leakage occurs when a box uses information that shouldn’t be available at its point in time.  
Use the *“train‑test boundary”* rule: every operation must be performed **inside** the training fold only, then applied unchanged to the test set.

**3️⃣ Reason step‑by‑step for each example**

| # | Example | Why it leaks | Detection strategy |
|---|---------|--------------|--------------------|
| 1 | **Feature derived from target after splitting** – e.g., creating a binary flag “high_sales” by thresholding the sales column, then using that flag as an input. | The flag is *directly* computed from the label; the model learns to predict the label via its own engineered feature. | Run a sanity check: compute correlation between the new feature and the target on the training set. If >0.9, suspect leakage. |
| 2 | **Using future‑dated external data in time‑series forecasting** – e.g., feeding next‑month’s marketing spend into a model predicting current month’s sales. | The predictor contains information that wouldn’t exist at prediction time. | Inspect feature timestamps: any feature timestamp > target date indicates leakage. |
| 3 | **Imbalanced cross‑validation with grouped IDs** – e.g., splitting by random fold but the same customer ID appears in both train and test. The model memorizes id‑specific patterns. | Data from the same entity leaks across splits. | Use a *group‑by* CV scheme; check that `train_id ∩ test_id = ∅`. |

**4️⃣ Avoid common traps**

- Assuming “naïve” splits are safe; always audit feature construction steps.  
- Overlooking derived features (e.g., log transforms of the target).  
- Ignoring external data sources that may be time‑dependent.

**5️⃣ Sanity‑check & communicate**

- *Quick sanity*: run a baseline model with no engineered features; if performance drops dramatically, leakage likely existed.  
- *Explain clearly*: describe each step in plain language (“I looked at the timestamps” or “I verified no target‑derived columns”).  

By looping through this checklist—clarify, model, reason, trap‑avoid, and sanity‑check—you can systematically uncover subtle data leakage scenarios.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
