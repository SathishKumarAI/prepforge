---
qid: ing_9801830dd8__think__local
question: How do you measure inter-annotator agreement on a human labelling effort,
  and what do you do when your annotators disagree a lot?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 690
total_tokens: 897
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:09:35-05:00'
sources: []
---

**1️⃣ Clarify the question & assumptions**  
- *What is being measured?*  Agreement between two or more people who label the same data set (e.g., sentiment, entity spans).  
- *Scope:* binary vs multi‑class labels; structured outputs; number of annotators.  
- *Goal:* choose a metric that reflects true overlap beyond chance and decide what to do if agreement is low.

**2️⃣ Mental model / framework**  
Use the classic “inter‑annotator agreement” (IAA) pipeline:  
1. **Define the labeling task & schema** → ensures all annotators understand the same criteria.  
2. **Select an IAA statistic** that fits the data type and number of raters (Cohen’s κ, Fleiss’ κ, Krippendorff’s α, percentage agreement, etc.).  
3. **Compute the metric** on a held‑out sample or full set.  
4. **Interpret & act**: if low, revisit training, guidelines, or data quality.

**3️⃣ Step‑by‑step reasoning**  

| Step | Action | Why |
|------|--------|-----|
|1|Gather a representative subset of labeled items from all annotators.|Statistical estimates need variability; too few points inflate variance.|
|2|Choose the appropriate statistic: Cohen’s κ for two raters, Fleiss’ κ or Krippendorff’s α for >2, or percent agreement if chance is negligible.|Different formulas correct for chance and scale.|
|3|Compute the metric using a reliable library (e.g., `sklearn.metrics.cohen_kappa_score`, `statsmodels.stats.inter_rater`).|Avoid implementation bugs.|
|4|Interpret the result: κ > 0.8 = excellent, 0.6–0.8 = good, <0.6 = problematic.|Benchmarks from literature.|
|5|If κ is low: (a) review guidelines & give refresher training; (b) conduct a calibration session with example items; (c) refine the annotation schema; (d) consider adding an adjudication step or a third rater for disputed cases.|Target root cause, not just surface disagreement.|

**4️⃣ Common traps to avoid**  
- **Using raw percent agreement only.**  It ignores chance overlap and can be misleading when classes are imbalanced.  
- **Ignoring the number of raters.**  Cohen’s κ assumes two; using it for many annotators yields incorrect estimates.  
- **Treating low IAA as a data problem.**  Often it signals ambiguous guidelines, not poor data quality.  
- **Over‑fitting the metric to a single sample.**  Validate on multiple folds or hold‑outs.

**5️⃣ Sanity‑check & communicate**  
- Re‑calculate on an independent subset; values should be similar.  
- Visualize confusion matrices per annotator pair to spot systematic patterns (e.g., one annotator consistently labels “neutral” as “positive”).  
- Explain the metric in plain terms: “After accounting for chance, our raters agree about 70 % of the time.”  

By following this structured approach you can reliably measure IAA and systematically address high disagreement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
