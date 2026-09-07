---
qid: ing_48ed4cd078__faang__local
question: 'Explain: Pitfall 17: Not Drawing — Common Pitfalls'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 391
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:33:34-05:00'
sources: []
---

**Clarify**  
Pitfall 17 (“Not Drawing”) refers to the tendency of AI practitioners to rely solely on textual or tabular explanations when communicating model behavior, ignoring visual diagnostics that reveal hidden biases, mis‑classifications, or distribution shifts. I’ll assume we’re discussing supervised ML in a production setting and that stakeholders expect evidence‑based insights.

**Approach**  
1. Identify key visual artifacts (confusion matrices, ROC curves, SHAP plots).  
2. Map each artifact to a concrete insight: class imbalance, feature importance gaps, or overfitting patterns.  
3. Integrate visuals into regular reporting and model review cycles.

**Depth**  
- **Confusion Matrix + Heatmap**: Highlights asymmetric errors; complexity O(n) per batch.  
- **Precision‑Recall & ROC Curves**: Show trade‑offs across thresholds; useful when positives are rare.  
- **Feature Attribution (SHAP/Integrated Gradients)**: Quantifies individual feature impact, revealing spurious correlations.  
- **Distribution Shifts (t‑SNE/PCA embeddings over time)**: Detect drift before retraining.

These visuals expose issues that text alone masks, enabling targeted remediation (e.g., re‑sampling, regularization).

**Edge Cases**  
- Extremely high dimensionality can make heatmaps unreadable; use clustering or hierarchical grouping.  
- Sparse classes may produce misleading ROC curves; prefer PR curves.  
- SHAP on deep nets is expensive; approximate with sampling.

**Optimize & Communicate**  
Automate visual generation in CI pipelines and present them in stakeholder dashboards. Emphasize that “drawing” turns opaque metrics into actionable narratives, reducing the risk of deploying biased or fragile models. This structured communication satisfies FAANG interviewers’ emphasis on clarity, depth, and impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
