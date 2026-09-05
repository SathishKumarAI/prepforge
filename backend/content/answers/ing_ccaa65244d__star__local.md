---
qid: ing_ccaa65244d__star__local
question: 'Explain: Chain-of-Thought (CoT) — Prompt Engineering | Lil''Log'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 304
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:18:16-05:00'
sources: []
---

**Situation**  
At my previous role I was tasked with improving the accuracy of our fraud‑detection model on a dataset that had over 1 million transactions, but the baseline precision lagged at 78% because the model kept flagging legitimate purchases.

**Task**  
I needed to design a prompt‑engineering strategy for a large language model (LLM) that could reason through each transaction’s context and produce higher‑confidence predictions without retraining the underlying ML pipeline.

**Action**  
I built a chain‑of‑thought prompt template that first asked the LLM to outline key risk indicators, then evaluate each indicator against the transaction data, and finally output a probability score. I integrated this with our existing feature store using LangChain, passing in relevant fields (merchant category, time of day, user history). To keep latency low, I cached intermediate reasoning steps for similar transactions and set a token limit to 300 tokens per prompt.

**Result**  
The CoT approach raised precision from 78% to 85% while maintaining recall above 92%, cutting false‑positive alerts by 35%. It also reduced engineer effort because the LLM handled the feature‑engineering reasoning, freeing time for model hyperparameter tuning. I learned that structuring prompts as a stepwise thought process can unlock deeper reasoning in LLMs without heavy computation overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
