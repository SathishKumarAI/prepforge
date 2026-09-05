---
qid: ing_264b614c8b__eli5__local
question: 'Explain: Classification/Extraction: ROC, PR, class distributions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 306
total_tokens: 465
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:36:34-05:00'
sources: []
---

Think of a spam‑filter as a guard at the mailbox gate.  
* **ROC (Receiver Operating Characteristic)** is like asking, “If I let people through based on how confident I am, how often do I let in real spammers (false positives) versus how many real messages get caught (true positives)?” Plotting these two rates for every confidence level gives a curve; the higher it sits above the diagonal line, the better the guard is at separating spam from good mail.

* **PR (Precision‑Recall)** focuses on what happens after the guard has let something through. Precision asks, “Of all the messages I flagged as spam, how many really were spam?” Recall asks, “What fraction of all real spammers did I catch?” The PR curve shows the trade‑off between catching more spammers and keeping false alarms low.

* **Class distributions** are just the guard’s knowledge about how many mailers are actually spammers versus regular. If only 1% of letters are spam, a filter that flags everything as spam will have high recall but terrible precision—just like a guard who opens the gate for everyone because they think most people are bad.

Together, ROC and PR let you see how well your filter works under different thresholds, while class distributions remind you that rare classes (spam) make the job harder.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
