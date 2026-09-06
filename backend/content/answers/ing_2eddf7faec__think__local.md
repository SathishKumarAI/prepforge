---
qid: ing_2eddf7faec__think__local
question: 'Explain: Accuracy Requirements — Content Moderation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 460
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:45:12-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - *What is “accuracy” here?* We’re talking about how often a moderation system correctly flags or lets through content relative to human judgment.  
   - *Who are the users?* Moderators, platform owners, end‑users—all have different tolerance levels for false positives/negatives.  
   - Assume we’re evaluating a machine‑learning classifier trained on labeled data.

**2. Adopt a framework**  
   - Treat it as an *information retrieval* problem: precision (true positives / all positives) and recall (true positives / actual positives).  
   - Map these to business KPIs: user safety, content volume, compliance cost.

**3. Step‑by‑step reasoning**  
   1. Define the acceptable false‑positive rate (e.g., ≤ 5 % of legitimate posts flagged).  
   2. Determine the critical false‑negative threshold (e.g., ≤ 0.1 % harmful content missed).  
   3. Translate these into precision/recall targets using the confusion matrix.  
   4. Use cross‑validation on a representative dataset to estimate error rates.  
   5. Iterate: adjust thresholds, retrain, or add human‑in‑the‑loop for borderline cases.

**4. Avoid common traps**  
   - Don’t equate accuracy with overall correctness; a high‑accuracy model can still miss rare but dangerous content.  
   - Beware of class imbalance: rare harmful posts can skew metrics if not handled properly.  
   - Ignore the cost of moderation errors—economic and reputational impacts matter.

**5. Sanity‑check & communicate**  
   - Verify that precision/recall targets align with stakeholder risk appetite.  
   - Present a trade‑off curve (ROC or Precision–Recall) to illustrate how tightening thresholds affects throughput vs safety.  
   - Summarize: “We need at least 95 % precision on user‑generated text and 99.9 % recall for flagged categories, achievable by a two‑stage ML + human review pipeline.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
