---
qid: ing_8b80db9652__think__local
question: 'Explain: Run experiment with automatic metrics — Ai Evals Complete Guide
  Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 540
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:17:06-05:00'
sources: []
---

**1️⃣ Clarify the goal and scope**  
   - *What is being evaluated?* Identify the AI model (e.g., a language model) and the task(s) it will perform.  
   - *Which metrics are “automatic”?* Common choices: BLEU, ROUGE, METEOR for text generation; Accuracy/Precision/Recall for classification; F1‑score, ROC‑AUC, etc.  
   - *What infrastructure is available?* Langwatch and Langfuse are two monitoring frameworks – decide whether you’ll use one or both.

**2️⃣ Adopt a systematic experiment framework**  
   - **Define hypotheses**: e.g., “Model X will outperform baseline Y on metric Z.”  
   - **Set up data pipelines**: training set, validation set, test set.  
   - **Choose evaluation scripts**: either built‑in Langwatch metrics or custom ones that plug into Langfuse.

**3️⃣ Step‑by‑step reasoning**  
   1. *Data ingestion*: Load the dataset into a Langwatch “Dataset” object (or equivalent).  
   2. *Model inference*: Run the model on each sample, capture outputs and timestamps.  
   3. *Metric calculation*: For each output–ground truth pair, compute automatic metrics; aggregate over the set to obtain mean/median scores.  
   4. *Logging*: Push raw results and metric summaries to Langfuse via its API for traceability.  
   5. *Analysis*: Compare against baselines, plot trends (e.g., accuracy vs. input length).  

**4️⃣ Avoid common pitfalls**  
   - **Metric misuse**: Don’t treat BLEU as a perfect proxy for quality; use it alongside human judgments if possible.  
   - **Data leakage**: Ensure test data never touches the model during training or hyper‑parameter tuning.  
   - **Overfitting to metrics**: Optimize for one metric may degrade overall performance; monitor multiple scores.  

**5️⃣ Sanity‑check & communicate**  
   - *Cross‑validate*: Run the same pipeline on a small held‑out subset manually to confirm automatic results match expectations.  
   - *Explain decisions*: When presenting, state which metrics were chosen and why, how Langwatch/Langfuse captured them, and what conclusions follow from the numbers.  

By following this structured, metric‑centric workflow you can reliably run AI experiments with automatic evaluations while leveraging Langwatch’s monitoring and Langfuse’s analytics capabilities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
