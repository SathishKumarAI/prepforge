---
qid: ing_e9dfb07283__fp__local
question: 'Explain: Transcription models — Pricing | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 412
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:16:20-05:00'
sources: []
---

**Why the price of a transcription request is what it is**

At its core a transcription model turns audio (a sequence of samples) into text (a different sequence).  
Mathematically this is a *sequence‑to‑sequence* problem that can be framed as maximizing a probability
\(P(\text{text}\mid\text{audio})\).
The model learns this distribution by optimizing the log‑likelihood over millions of hours of labeled data,
which in turn requires massive GPU training, storage for weights (≈ 20 GB), and a continuous pipeline of inference servers.

The cost per request is therefore derived from two linear‑time components:

| Component | What it does | Why it scales with input |
|-----------|--------------|--------------------------|
| **Compute** | Decoding the audio into tokens via transformer layers. | Each token requires ∼ 1 ms GPU time on a V100; longer audio → more tokens → more compute. |
| **Storage/IO** | Fetching the model weights and streaming the audio/text to/from disk. | Larger files mean higher network bandwidth and memory usage. |

OpenAI fixes a *base rate* that covers the marginal cost of running one GPU second for decoding, then multiplies by the number of tokens generated (≈ audio length in seconds).  
They also include a fixed “server‑maintenance” surcharge to amortize infrastructure.

**Non‑obvious insight:**  
The price is **not** proportional to raw audio duration alone; it’s proportional to *token count* after acoustic‑to‑text conversion.  
Short, noisy clips can still be expensive if the model produces many tokens (e.g., with filler words or repeated pauses).  
Thus, users who want cost control should pre‑trim silence and use a higher‑threshold confidence filter before sending requests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
