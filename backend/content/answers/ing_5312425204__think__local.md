---
qid: ing_5312425204__think__local
question: 'Explain: Step 3: Split Data (Train / Dev / Test) — Ai Evals Comprehensive
  Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 528
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:29:08-05:00'
sources: []
---

**1️⃣ Clarify the request & set assumptions**  
- *What* is being asked? A meta‑explanation of how you’d think through “Step 3: Split Data (Train / Dev / Test)” in an AI evaluation context.  
- *Assume* the audience knows basic ML terminology but may not be familiar with evaluation pipelines or why splits matter.  
- *Scope*: focus on reasoning, not the actual code.

**2️⃣ Adopt a mental framework**  
Use the **“Purpose → Process → Pitfalls”** triad:  
- Purpose: Why do we split?  
- Process: How to decide split ratios, random seeds, stratification, etc.  
- Pitfalls: Common mistakes (data leakage, class imbalance, non‑representative splits).

**3️⃣ Step‑by‑step reasoning toward the answer**  
1. *Define objectives*: training improves model parameters; dev tunes hyperparameters; test estimates final performance.  
2. *Determine dataset size and composition*: total samples, class distribution, temporal aspects.  
3. *Choose split ratios* (e.g., 70/15/15) based on data volume and project constraints.  
4. *Decide on stratification or group‑wise splits* to preserve label balance or avoid leakage.  
5. *Select a random seed* for reproducibility; consider cross‑validation if data is scarce.  
6. *Document the procedure*: record ratios, seeds, and any preprocessing that happens before splitting.

**4️⃣ Common traps & how to dodge them**  
- **Leakage**: Applying preprocessing (e.g., scaling) before splitting can bake test information into training.  
- **Imbalanced splits**: Random splits may yield dev/test sets with skewed class ratios; enforce stratification.  
- **Temporal leakage**: In time‑series data, shuffling destroys chronology—use a chronological split instead.  
- **Over‑fitting on dev**: Too many hyperparameter tweaks can make the dev set “look” like training data.

**5️⃣ Sanity‑check & verbalise**  
- Re‑explain each step in plain language to ensure no hidden assumptions.  
- Ask: “If I were explaining this to a teammate, would they understand why we chose 70/15/15 and not 80/10/10?”  
- Confirm that the explanation covers purpose, process, pitfalls, and reproducibility—then share it confidently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
