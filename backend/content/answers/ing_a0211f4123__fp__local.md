---
qid: ing_a0211f4123__fp__local
question: 'Explain: Cost estimate (rough token math) — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 371
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:45:56-05:00'
sources: []
---

**Why a token‑budget matters**

Every prompt you send to an LLM is first broken into *tokens*—subword units that the model actually sees. The total number of tokens processed in one request (prompt + model output) determines compute time, memory usage, and thus cost on most cloud APIs. For a meeting‑assistant that ingests transcripts, generates summaries, and answers follow‑up questions, we can derive a rough budget by counting tokens per component.

| Component | Typical token count |
|-----------|---------------------|
| Transcript chunk (≈ 500 words) | 750–900 tks |
| Prompt template & metadata | ~200 tks |
| System instruction | ~50 tks |
| Assistant reply (summary, Q&A) | 150–300 tks |

A single round‑trip for a 30‑minute meeting (~15 k words) would therefore involve **≈ 10 000 tokens**. If the model’s per‑token price is $0.02/1 k tokens, that’s about **$0.20** per meeting. Scaling to thousands of meetings yields a linear cost curve.

**Non‑obvious insight**

Most people treat token count as a flat fee, but the *entropy* of the input matters: highly repetitive or low‑information transcripts inflate token usage without adding value. By pre‑filtering silence and merging consecutive identical speakers (a simple run‑length encoding), you can cut tokens by 20–30 % while preserving semantic content—dramatically lowering cost with minimal engineering effort.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
