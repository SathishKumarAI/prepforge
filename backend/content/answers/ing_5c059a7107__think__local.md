---
qid: ing_5c059a7107__think__local
question: You have 10M unlabelled examples and budget for 20k labels. How do you spend
  it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 618
total_tokens: 819
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:03:30-05:00'
sources: []
---

**1️⃣ Clarify the goal & constraints**  
- *Goal:* maximize downstream model performance (or business metric).  
- *Constraints:* 10 M unlabeled, only 20 k labels available; labeling cost fixed.  
- Assume a supervised task where labeled data is the primary driver of accuracy.

**2️⃣ Adopt a sampling + semi‑supervised framework**  
Treat the problem as an active learning loop on top of a self‑training pipeline: first pick the most informative examples, then let the model bootstrap labels for the rest.

**3️⃣ Reason step‑by‑step**  

| Step | Action | Rationale |
|------|--------|-----------|
| **A. Pre‑train feature extractor** | Train an unsupervised encoder (e.g., SimCLR, BERT‑style) on all 10 M unlabeled samples. | Provides strong representations that make downstream labeling more efficient. |
| **B. Initial seed pool** | Randomly pick ~5 k examples for manual annotation. | Gives the model a baseline to start from; keeps cost low while ensuring diversity. |
| **C. Train a lightweight classifier** | Fine‑tune the encoder on the 5 k labels. | Generates probability estimates for all unlabeled data. |
| **D. Active selection** | Use uncertainty (e.g., entropy, margin) or diversity (cluster centroids) to pick ~10 k most “valuable” examples from remaining pool. | Focuses labeling budget where it changes model decisions the most. |
| **E. Label & augment** | Annotate these 10 k examples. | Now we have 15 k labeled samples total. |
| **F. Self‑training loop** | Train a stronger model on all 15 k labels; then generate pseudo‑labels for the remaining 9.985 M data (confidence thresholded). | Leverages unlabeled data without extra cost. |
| **G. Final fine‑tune** | Retrain on the union of real + high‑confidence pseudo‑labels, optionally using curriculum learning. | Maximizes utilization of all available data while respecting budget. |

**4️⃣ Avoid common traps**  
- *Over‑labeling low‑value samples:* Random or naïve selection wastes labels.  
- *Ignoring representation quality:* A weak encoder forces the model to learn from scratch, hurting performance.  
- *Too many pseudo‑labels:* Low‑confidence predictions pollute training data; use a strict threshold.

**5️⃣ Sanity‑check & communicate**  
- Verify that each step improves validation metrics (e.g., accuracy or loss).  
- Present the pipeline as “pre‑train → seed → active selection → self‑training” and show expected label efficiency gains.  

By following this structured approach, you spend 20 k labels where they matter most while leveraging the vast unlabeled corpus for maximal benefit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
