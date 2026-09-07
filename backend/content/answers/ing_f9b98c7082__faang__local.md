---
qid: ing_f9b98c7082__faang__local
question: 'Explain: Data hygiene: splits, cross-validation, leakage'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 412
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:20:19-05:00'
sources: []
---

**Clarify**  
You’re asking how to keep data “clean” when building ML models—specifically why we split datasets, use cross‑validation, and guard against leakage. I’ll assume supervised learning on tabular data where the goal is accurate generalization.

**Approach**  
1. Partition the data into training/validation/test sets.  
2. Use k‑fold cross‑validation (or nested CV) to estimate performance robustly.  
3. Identify any source of information that could leak from future to past and remove it before modeling.

**Depth**  
- **Splits**: Train → validation → test. The test set is untouched until final evaluation, ensuring an unbiased error estimate.  
- **Cross‑validation**: k folds let each sample serve as validation once; reduces variance compared to a single split. In nested CV you tune hyperparameters on inner folds and evaluate on outer folds—critical for honest performance when tuning.  
- **Leakage**: Happens when features contain future labels, data from the test set, or derived statistics computed on the full dataset (e.g., mean encoding). Prevent by performing all preprocessing inside each fold’s training split and applying the same transformation to validation/test.

**Edge Cases**  
- Time‑series data: use forward‑looking splits instead of random.  
- Imbalanced classes: stratified folds preserve class ratios.  
- Very small datasets: leave‑one‑out CV or bootstrap may be preferable.

**Optimize & Communicate**  
Explain that proper hygiene keeps the model’s error estimate realistic, which is vital for deployment decisions. Emphasize that every preprocessing step must be “fold‑aware” to avoid inadvertent leakage, and that cross‑validation plus a held‑out test set together give both stability and an unbiased benchmark. This narrative shows clear structure, technical depth, and practical insight—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
