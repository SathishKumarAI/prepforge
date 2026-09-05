---
qid: ing_05f753e1b1__star__local
question: 'Explain: You''re using LLM-as-judge. Why should I trust the judge? Walk
  me through calibrating it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 347
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:40:42-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a code‑review bot that used an LLM to decide whether pull requests passed the quality gate. Early runs showed a 35 % false‑positive rate – the bot was approving buggy commits, which could have slipped into production.

**Task:**  
I had to make the LLM “judge” trustworthy so developers would rely on its decisions and the CI pipeline wouldn’t slow down with manual checks.

**Action:**  
First, I built a labeled dataset of 5,000 PRs annotated by senior engineers (pass/fail). I fine‑tuned GPT‑4 on this set using instruction‑tuning to emphasize safety signals. Next, I introduced a confidence threshold: the model’s probability for “fail” had to be >0.8 before auto‑rejecting. For borderline cases (0.5–0.8), it flagged them for human review. I also added an audit log that stored the LLM’s rationale tokens and the final decision, so we could trace back any misclassification. Finally, I set up a continuous calibration loop: every week the bot’s decisions were cross‑checked against actual merge outcomes, and the loss function was updated with the new labels.

**Result:**  
Within two months the false‑positive rate dropped to 4 %. The automated approvals increased by 28 % while the manual review load fell by 60 %. I learned that transparent thresholds, continuous re‑labeling, and audit trails are key to building trust in LLM judges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
