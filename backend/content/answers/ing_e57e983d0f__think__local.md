---
qid: ing_e57e983d0f__think__local
question: 'Explain: Step 3: Split Data (Train / Dev / Test) — Ai Evals Complete Guide
  Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 583
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:07:33-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**  
- The user wants a *metacognitive* outline, not a direct explanation of the split process.  
- Assume they’re familiar with basic ML terminology but need guidance on how to think through splitting.  
- They mention “Ai Evals Complete Guide Langwatch Langfuse” – treat it as context, not part of the answer.

**2️⃣ Choose a mental‑model framework**  
Use a *step‑by‑step reasoning scaffold*:  
1. Identify the goal (why split?).  
2. List constraints (dataset size, class balance, temporal aspects).  
3. Define the splits and ratios.  
4. Decide on randomization vs stratification.  
5. Validate with sanity checks.

**3️⃣ Reason through each step**  

| Step | What to think about | Typical decisions |
|------|---------------------|-------------------|
| **Goal** | Why do we need separate sets? | Avoid leakage, estimate generalisation. |
| **Constraints** | Size of data, class imbalance, time‑series? | Small data → larger dev/test; imbalanced → stratify. |
| **Ratios** | Common 60/20/20 or 70/15/15? | Depends on project urgency and data volume. |
| **Randomisation** | Pure shuffle vs stratified shuffle split? | Stratification preserves class distribution. |
| **Temporal splits** | For forecasting, use chronological order. | Train on past → validate on future → test on latest. |

**4️⃣ Common traps to avoid**  
- Mixing dev and test data → over‑optimistic metrics.  
- Not stratifying with imbalanced classes → biased performance.  
- Random shuffling time‑series data → leakage of future information.  
- Using the same random seed across projects → hidden bias.

**5️⃣ Sanity‑check & verbalise**  

1. *Re‑explain*: “I split the data to keep training, validation, and testing separate so I can tune hyper‑parameters without leaking test performance.”  
2. *Verify ratios*: “With 10 k samples, a 70/15/15 split gives 7 k train, 1.5 k dev, 1.5 k test – enough for stable estimates.”  
3. *Check stratification*: “I’ll use `StratifiedShuffleSplit` to maintain class proportions across all sets.”  
4. *Confirm no leakage*: “For time‑series, I’ll keep the chronological order intact: train on years 1–3, dev year 4, test year 5.”

By following this metacognitive checklist, you can systematically decide how to split data for any AI evaluation pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
