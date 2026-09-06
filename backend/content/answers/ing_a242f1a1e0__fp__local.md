---
qid: ing_a242f1a1e0__fp__local
question: Beyond text in a chat box, what channels can indirect prompt injection arrive
  through, and how do you sanitise them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 657
total_tokens: 840
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:50:46-05:00'
sources: []
---

**Indirect Prompt Injection: the hidden vectors**

When a model receives *any* data that is interpreted as part of its input, it becomes a potential “prompt” channel. Besides the visible chat box, these channels include:

| Channel | How it feeds a prompt | Typical source |
|---------|----------------------|----------------|
| **File uploads** (PDFs, images with OCR, spreadsheets) | The extracted text is concatenated to the system prompt. | User‑generated documents |
| **Audio/video transcription** | Transcribed speech becomes part of the prompt. | Voice assistants, meeting recordings |
| **Metadata & headers** (e.g., file names, titles, EXIF tags) | Concatenated or used as additional context tokens. | Image uploads, PDFs |
| **API payloads** (JSON keys/values, URL query strings) | Keys are treated as instructions; values as data. | RESTful interfaces |
| **Embedding‑based retrieval** | Retrieved passages are inserted verbatim into the prompt. | Semantic search systems |
| **User profile/context** (location, preferences, past chats) | Stored context is auto‑appended for personalization. | Recommendation engines |

### Why sanitisation matters

Every injected fragment becomes part of the *conditioning* distribution. Even a single malicious token can shift the posterior over outputs if it aligns with high‑probability continuations, exploiting the model’s autoregressive nature.

### Sanitising strategy (from first principles)

1. **Token‑level filtering**  
   - Map every input to a token sequence.  
   - Reject or neutralise tokens that match known adversarial patterns (e.g., “/system”, “<|assistant|>”).  
2. **Context‑window control**  
   - Enforce a hard limit on the number of tokens contributed by indirect channels; anything beyond is truncated or hashed into a summary token.  
3. **Semantic validation**  
   - Run a lightweight LLM (or rule‑based) classifier to detect instruction‑like structures within the input text and flag them for review.  
4. **Metadata isolation**  
   - Strip non‑text metadata unless explicitly approved; convert remaining fields into a safe, canonical format (e.g., “Filename: <hash>”).  
5. **Embedding moderation**  
   - Before injecting retrieved passages, pass them through a content filter that scores for policy violations and optionally replaces or removes offending sections.

### Non‑obvious insight

*The attack surface is proportional to the entropy of the channel.*  
A short, high‑entropy string (e.g., a random hash in a filename) can carry more injection power than a long, predictable sentence because it occupies fewer tokens while still influencing the model’s attention. Therefore, sanitisation must target **token density**, not just length.

By treating every indirect input as a potential prompt and applying token‑aware, entropy‑sensitive filters, we close the covert pathways that would otherwise let attackers steer an AI system without ever touching the chat box.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
