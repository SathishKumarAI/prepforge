---
qid: ing_900d1f1b1e__star__local
question: 'Explain: Prompt format — Text generation \u00b7 Hugging Face'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 382
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:20:52-05:00'
sources: []
---

**Situation** – While leading the NLP team at a fintech startup, we had to build an automated report generator that turned raw transaction data into natural‑language summaries for compliance officers. The existing pipeline was rule‑based and produced brittle text; our quality score dropped from 92 % to 78 % after a new regulatory update.

**Task** – I needed to replace the hand‑crafted templates with a transformer model that could adapt to new phrasing while staying within our latency budget (<200 ms per document). The challenge was to design a prompt format that would give the model clear context without inflating inference cost.

**Action** – Using Hugging Face’s `transformers` library, I crafted a structured prompt template:  
```
[START] Generate a concise compliance summary for the following transactions: {transactions_json} [END]
```  
I wrapped the JSON payload in a single token pair (`[START]…[END]`) to keep the context window tight. Then I fine‑tuned `distilroberta-base` on 10 k labeled summaries, applying gradient checkpointing and mixed‑precision training. During inference, I used the Hugging Face `pipeline` with `max_new_tokens=64` and `do_sample=False` for deterministic output.

**Result** – The new system cut average latency to 150 ms while improving compliance score from 78 % to 93 %. Additionally, we reduced manual review time by 40 %, freeing analysts to focus on higher‑value tasks. I learned that a simple, well‑structured prompt can dramatically simplify model behavior and keep inference efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
