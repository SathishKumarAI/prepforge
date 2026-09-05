---
qid: vq_74dbe981e5__star__local
question: does it enhance LLMs?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 344
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:04:54-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, our in‑house chatbot, built on GPT‑3, was struggling to handle complex loan‑application queries; the accuracy dropped from 78 % to 63 % during peak hours because it couldn’t resolve ambiguous user intents.

**Task** – I was tasked with boosting the bot’s precision by at least 10 percentage points and reducing average response time under load, all while staying within our existing API budget.

**Action** – I implemented a hybrid AI stack: first, I fine‑tuned the base model on a curated dataset of 12k annotated loan‑application dialogues. Next, I added an intent‑classification layer powered by a lightweight BERT encoder that pre‑filters user messages, routing only high‑confidence intents to the LLM and falling back to rule‑based responses for low‑confidence cases. Finally, I deployed model quantization (int8) on our edge servers, cutting inference latency by 35 % without sacrificing accuracy.

**Result** – Post‑deployment metrics showed a jump from 63 % to 83 % intent‑resolution accuracy and a 28 % reduction in average response time. User satisfaction scores climbed from 4.1/5 to 4.6/5, and we cut API usage costs by 18 %. I learned that combining fine‑tuning, lightweight classifiers, and quantization can make large models both smarter and more efficient in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
