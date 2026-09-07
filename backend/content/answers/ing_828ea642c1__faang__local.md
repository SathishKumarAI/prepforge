---
qid: ing_828ea642c1__faang__local
question: 'Explain: Code-based evals (fast, cheap, deterministic)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 490
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:48:34-05:00'
sources: []
---

**Clarify**  
We’re asked what *code‑based evaluation* means in the context of AI model assessment—quick, inexpensive, and deterministic tests that run programmatically rather than human judgment.

**Approach**  
1. Identify typical code‑based metrics (accuracy, BLEU, F1, perplexity).  
2. Explain why they’re fast/cheap: they operate on pre‑computed ground truth.  
3. Highlight determinism: same inputs → identical outputs every run.  
4. Contrast with human evals (time, cost, subjectivity).

**Depth**  

| Metric | What it measures | How it works | Complexity |
|--------|------------------|--------------|------------|
| **Accuracy / Exact Match** | % of predictions exactly equal reference | Compare strings/labels | O(n) |
| **BLEU / ROUGE** | Fluency & overlap for generation tasks | Token n‑gram counts, weighted sum | O(n * k) (k = max n‑gram size) |
| **F1 / Precision–Recall** | Classification quality | Confusion matrix from predictions vs labels | O(n) |
| **Perplexity** | Language model fit | Compute log‑probability of test set | O(n) |
| **Runtime / Memory** | Efficiency of the model | Instrumented profiling during inference | O(1) per request |

All require only deterministic operations (hashes, counts). No human labels are needed beyond the static reference set.

**Edge Cases**  
- *Ambiguous references*: exact match penalizes valid paraphrases.  
- *Domain shift*: metrics can be misleading if test data distribution differs from training.  
- *Adversarial inputs*: a deterministic metric may over‑reward surface tricks.

Testing: run on diverse benchmark datasets, sanity‑check with random predictions (should yield baseline scores), and verify reproducibility across machines.

**Optimize & Communicate**  
To improve coverage while staying cheap, augment code metrics with lightweight oracle checks (e.g., grammar parsers) that add negligible cost. Explain to stakeholders that code evals provide rapid iteration signals; they’re the first line of assessment before allocating resources for costly human studies. This structured pipeline balances speed, determinism, and actionable insight—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
