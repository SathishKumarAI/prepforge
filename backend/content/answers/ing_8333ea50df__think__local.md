---
qid: ing_8333ea50df__think__local
question: Classify support tickets into 40 categories. LLM API, fine-tuned small model,
  or classical classifier - how do you decide?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 571
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:40:02-05:00'
sources: []
---

**1. Clarify the decision criteria and assumptions**  
   * What is the expected volume of tickets per day/week?  
   * How many distinct labels are truly needed (exact 40 or a hierarchical scheme)?  
   * Are there strict latency, cost, or regulatory constraints (e.g., GDPR on model size)?  
   * Is the data labeled consistently and sufficient for training a supervised LLM?

**2. Adopt a decision‑making framework**  
   * **Cost–Benefit Matrix** – weigh compute costs, maintenance effort, and accuracy gains.  
   * **Data Availability & Quality Grid** – evaluate labeled data quantity, class imbalance, and noise level.  
   * **Operational Constraints Layer** – consider latency, deployment platform (edge vs cloud), explainability needs.

**3. Step‑by‑step reasoning**  

1. **Baseline with classical models**:  
   * Train a lightweight model (e.g., FastText, logistic regression) on TF‑IDF or word2vec features.  
   * Measure macro‑F1 and per‑class precision to gauge feasibility.  
2. **Evaluate data sufficiency for LLM fine‑tuning**:  
   * If < 5k labeled tickets → risk overfitting; classical model may suffice.  
   * If ≥ 20k labeled samples → fine‑tune a small transformer (e.g., DistilBERT) to capture nuanced language.  
3. **Cost analysis**:  
   * Compute inference cost per ticket for each approach.  
   * Factor in training time and storage.  
4. **Explainability & compliance**:  
   * Classical models offer feature importance; LLMs require additional explainers (e.g., SHAP).  
5. **Prototype & A/B test**:  
   * Deploy both pipelines on a subset of live tickets, compare turnaround time and user satisfaction.

**4. Common traps to avoid**  

* Assuming “larger model = better” without checking data size.  
* Ignoring class imbalance – 40 classes may have very sparse categories.  
* Overlooking latency: large LLMs can exceed SLA limits in real‑time support.  
* Neglecting the cost of continuous fine‑tuning versus a one‑off classical training.

**5. Sanity‑check & communicate**  

* Summarize findings in a table: accuracy, latency, cost, explainability per approach.  
* Highlight trade‑offs: “If we need > 95% F1 on rare categories, LLM fine‑tuning is justified; otherwise a classical model keeps costs low.”  
* Present the decision as a flowchart for stakeholders to see the path taken.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
