---
qid: ing_4c0d39b06d__faang__local
question: 'Explain: Tokenizers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 485
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:41:14-05:00'
sources: []
---

**Tokenizers in NLP**

| Step | What I’ll do |
|------|--------------|
| **Clarify** | *Problem:* Describe what a tokenizer is, its role in ML pipelines, and why it matters. *Assumptions:* We’re talking about text‑based models (BERT, GPT), not speech or image tokenizers. |
| **Approach** | 1️⃣ Define “token” & the two main families: word‑level vs subword. <br>2️⃣ Explain common strategies: whitespace, regex, Byte‑Pair Encoding (BPE), WordPiece, SentencePiece. <br>3️⃣ Show how tokens map to embeddings and why tokenization affects downstream performance. |
| **Depth** | - **Token definition:** smallest unit fed into the model; can be a word, subword, or character. <br>- **Whitespace/regex tokenizers:** fast but suffer OOV (out‑of‑vocabulary). <br>- **Subword methods:** BPE merges frequent pairs → vocabulary ~10k–50k tokens, balances coverage & sequence length. WordPiece (BERT) adds “##” prefixes to indicate suffixes; SentencePiece is language‑agnostic and works on raw bytes. <br>- **Impact on training:** Poor tokenization inflates sequence length, increases memory use, hurts context capture. Good tokenizers reduce OOV to ~1–2% for English. |
| **Edge cases** | • Highly inflected languages (Arabic, Finnish) → subword better.<br>• Code‑mixed or emoji‑heavy texts → SentencePiece handles arbitrary byte sequences.<br>• Rare proper nouns → can still appear as unknown tokens if not in vocab; fallback to character splits. |
| **Optimize & Communicate** | • Use a tokenizer that balances vocabulary size and coverage (≈30k for English). <br>• Profile tokenization time vs model latency; switch to SentencePiece for multilingual models. <br>• When presenting, start with intuition (“splitting text into manageable pieces”), then walk through examples, show metrics (OOV %, average tokens per sentence), and finish with trade‑offs (speed vs accuracy). This demonstrates structured thinking, depth, and clear communication—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
