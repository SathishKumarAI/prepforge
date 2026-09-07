---
qid: ing_d7179921e3__faang__local
question: 'Explain: Prompt Engineering with Llama 2&3 - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 513
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:59:25-05:00'
sources: []
---

**Prompt Engineering with LLaMA 2/3 – A DeepLearning.AI Lens**

| Step | What I’d do |
|------|-------------|
| **Clarify** | *Problem:* How can we craft prompts to make Meta’s LLaMA‑2/3 models output accurate, context‑aware responses? <br>*Assumptions:* 1) Models are fine‑tuned for open‑domain QA; 2) We have API access (token limits, latency); 3) Evaluation metric is BLEU/F1 on a dev set. |
| **Approach** | 1️⃣ Define a prompt template hierarchy (system + user). <br>2️⃣ Experiment with instruction length and specificity. <br>3️⃣ Use few‑shot examples to anchor style/format. <br>4️⃣ Iterate: measure impact of each change on metrics. |
| **Depth** | *Template:* `"<SYSTEM>\nYou are a helpful assistant trained on LLaMA‑2/3.\n<USER> {question}\n<INSTRUCTIONS> Provide a concise answer with citations."`  <br>*Few‑shot:* prepend 1–3 Q&A pairs.  <br>*Token budget:* keep prompt ≤ 128 tokens to stay under latency limits.  <br>*Evaluation:* compute ROUGE‑L and human sanity checks. Complexity is O(n) per request; memory overhead negligible. |
| **Edge Cases** | • Extremely long user queries → truncate or chunk.<br>• Ambiguous questions → add clarifying prompt “Could you specify…?”<br>• Sensitive content → prepend a safety filter sentence.  Testing: stress‑test with 10k random prompts, monitor hallucination rate. |
| **Optimize & Communicate** | • Cache repeated system prompts to save tokens.<br>• Use temperature=0.2 for deterministic QA; increase for creative tasks.<br>Explain trade‑offs: higher temperature → more variance but risk of errors; lower → safer but potentially dull. Summarize findings in a slide deck, highlighting prompt‑size vs. accuracy curve and recommending a 120‑token template with two few‑shot examples for best F1. |

*Result:* A reproducible prompt‑engineering pipeline that boosts LLaMA‑2/3 QA performance while respecting API constraints—ready for production at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
