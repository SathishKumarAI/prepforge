---
qid: ing_2e6d05bafc__star__local
question: What chunking strategies do you know, and how do you pick one?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 365
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:01:06-05:00'
sources: []
---

**Situation** – At my last role I was building a summarization pipeline for a legal firm that had to process 10‑million page contracts nightly. The baseline model ate 512 tokens per forward pass, so we were bottlenecked by GPU memory and latency.

**Task** – My job was to design a chunking strategy that would let us feed the full documents into a transformer while keeping inference time under five seconds per contract.

**Action** – I evaluated three approaches: fixed‑size windows (512 tokens), sentence‑boundary chunks, and an adaptive semantic segmentation using spaCy’s `doc.sents` plus a custom BPE tokenizer. I benchmarked each on a validation set of 2,000 contracts, measuring GPU memory, throughput, and Rouge‑L score. The adaptive method, which kept sentences together but capped at 400 tokens per chunk and merged short chunks when possible, gave the best trade‑off: it reduced peak memory by 35 % and maintained a Rouge‑L of 0.47 versus 0.43 for fixed windows.

**Result** – Deploying that strategy cut inference time from 12 seconds to under 4.5 seconds per contract and lowered GPU costs by 30 %. I learned that the right chunking technique depends on the document’s structure, the model’s token limit, and the downstream metric you care about.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
