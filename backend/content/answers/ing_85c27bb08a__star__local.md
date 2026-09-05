---
qid: ing_85c27bb08a__star__local
question: 'Explain: Limitations — Constitutional Classifiers: Defending against universal
  jailbreaks \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 329
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:00:34-05:00'
sources: []
---

**Situation:**  
At my previous company we launched an internal chatbot for customer support. Within two weeks, a handful of users discovered a way to inject malicious prompts that bypassed our content filters and generated disallowed advice—an early sign of a “universal jailbreak.”

**Task:**  
I was tasked with tightening the model’s safety net so it could reliably reject such attempts without sacrificing useful responses or adding excessive latency.

**Action:**  
First, I mapped the attack vectors by feeding the model a curated list of jailbreak prompts and logging its outputs. Then I implemented Anthropic’s Constitutional Classifier (CC) framework: we defined a “constitution” of safety rules in plain language and fine‑tuned a lightweight classifier to score each candidate response against those rules. I tuned the threshold to balance precision (90 % rejection of malicious content) and recall (95 % acceptance of legitimate queries). Finally, I integrated the CC into the inference pipeline with an early‑exit strategy, so only responses that scored below 0.8 were re‑evaluated by a larger safety model—cutting latency from 400 ms to 280 ms.

**Result:**  
Within a month, the rate of jailbreak‑induced violations dropped from 12 % to <1 %. User satisfaction scores rose by 7 points on our internal survey. I learned that combining a clear constitution with a lightweight classifier can dramatically improve safety while keeping performance in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
