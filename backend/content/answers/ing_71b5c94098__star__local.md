---
qid: ing_71b5c94098__star__local
question: 'Explain: The model was trained to guess — That Is Embarrassing: Why Frontier
  AI Still Makes Things Up, and What to Do About It'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 313
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:14:34-05:00'
sources: []
---

**Situation** – At a fintech startup we built an NLP chatbot to auto‑summarize customer support tickets. Our first model was a GPT‑3 fine‑tuned on 50k labeled examples, but during beta it started fabricating facts—“the user’s account balance is $10,000” when it wasn’t true—causing confusion and potential compliance issues.

**Task** – I needed to identify why the model kept hallucinating, reduce its “made‑up” outputs by at least 70%, and keep latency under 300 ms per request so we could ship a production feature.

**Action** – First, I introduced *retrieval‑augmented generation*: the model now queries an ElasticSearch index of verified ticket logs before generating. I added a confidence score layer that flags low‑certainty outputs for human review. Then I re‑trained on a curated subset with stricter labeling rules and used prompt engineering to embed “verify first” instructions. Finally, I set up a monitoring pipeline in Grafana to track hallucination rates and response times.

**Result** – Hallucinations dropped from 28% to 4%, while latency stayed at ~250 ms. The bot’s accuracy improved from 82% to 94% on our test suite. I learned that combining retrieval, confidence scoring, and tighter training data can tame frontier models without sacrificing speed or requiring huge compute budgets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
