---
qid: ing_c38733c428__star__local
question: 'Explain: Zero-Shot vs. Programmatic CoT — Chain Of Thought'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 362
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:00:57-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup we were building an NLP service to auto‑classify loan applications. The baseline BERT model was 78% accurate, but the business required >90% because of regulatory scrutiny.

**Task:**  
I needed to boost accuracy without incurring massive annotation costs or retraining from scratch. The goal was to test whether a zero‑shot chain‑of‑thought (CoT) prompt could outperform our existing programmatic CoT pipeline that explicitly encoded decision rules in Python.

**Action:**  
First, I crafted a zero‑shot prompt: “Given the applicant’s profile, think step by step and decide approval.” I ran it on GPT‑4 with temperature 0.2 and evaluated on a held‑out set of 5k applications. Next, for the programmatic CoT I wrote a rule engine in Go that parsed intermediate reasoning strings (e.g., “income > threshold → approve”) into decision trees, then fed those to the model. I benchmarked both using latency, cost per inference, and accuracy.

**Result:**  
The zero‑shot CoT lifted accuracy to 91% with an average latency of 120 ms and cost $0.0004/inference—25% cheaper than the programmatic version (150 ms, $0.0006). I learned that while programmatic CoT offers fine‑grained control, a well‑crafted zero‑shot prompt can deliver comparable performance with less engineering overhead, especially when regulatory compliance demands rapid iteration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
