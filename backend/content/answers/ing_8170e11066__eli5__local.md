---
qid: ing_8170e11066__eli5__local
question: What is AUC–ROC Curve? — Machine Learning Interview Questions and Answers
  - GeeksforGeeks
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 263
total_tokens: 432
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:01:56-05:00'
sources: []
---

Imagine a doctor who wants to decide whether a test can spot a disease. The **AUC–ROC curve** is like the doctor’s “skill chart” that shows how well the test separates sick patients from healthy ones.

* **True Positive Rate (TPR)** – the fraction of sick people correctly identified (also called sensitivity).  
* **False Positive Rate (FPR)** – the fraction of healthy people incorrectly flagged as sick.  

Plot TPR on the vertical axis and FPR on the horizontal axis for every possible threshold you could set on the test. The resulting curve tells you: “If I accept a higher false alarm rate, how many more true cases do I catch?”  

The **Area Under Curve (AUC)** is a single number summarizing this trade‑off. Think of it as the total “goodness” of the test: 1 means perfect separation (no false alarms when all sick are caught), while 0.5 means the test is no better than flipping a coin.  

So, AUC–ROC gives you an easy, visual way to judge how reliably a model distinguishes between two classes without picking one threshold in advance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
