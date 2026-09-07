---
qid: ing_9801830dd8__faang__local
question: How do you measure inter-annotator agreement on a human labelling effort,
  and what do you do when your annotators disagree a lot?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 423
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:38:19-05:00'
sources: []
---

**Clarify**  
We’re measuring how consistently multiple humans label the same data (e.g., sentiment, entity spans). I’ll assume binary or multi‑class labels, independent annotators, and a fixed set of items.

**Approach**  
1. Compute pairwise agreement metrics: Cohen’s κ for two annotators; Fleiss’ κ or Krippendorff’s α for >2.  
2. Convert raw counts into percent agreement to sanity‑check.  
3. If κ < 0.6 (moderate) or < 0.4 (poor), trigger a conflict resolution workflow.

**Depth**  
- **Cohen’s κ** = (Po – Pe)/(1–Pe); Po is observed proportion, Pe expected by chance.  
- **Krippendorff’s α** handles missing data and multiple categories; uses distance metrics for ordinal data.  
- For multi‑class, use weighted κ (linear or quadratic weights).  
When disagreement spikes:  
  * Review the annotation guide for ambiguous terms.  
  * Conduct a calibration session where annotators label a small set together and discuss differences.  
  * Introduce a “gold” subset to monitor drift.  
  * If still high, add a third adjudicator or use majority voting.

**Edge cases**  
- Skewed class distribution inflates κ; use prevalence‑adjusted κ.  
- Missing labels → Krippendorff’s α handles gracefully.  
- Non‑independent annotators (team labeling) violate assumptions—use multi‑rater models instead.

**Optimize & communicate**  
Report both raw agreement and κ to give stakeholders context. Automate the pipeline: ingest label files, compute metrics nightly, flag when κ drops below thresholds. Present findings in a dashboard with actionable items (e.g., “Update guideline for ‘neutral’ sentiment”). This keeps quality control continuous and data‑driven.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
