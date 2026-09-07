---
qid: ing_a0211f4123__faang__local
question: 'Explain: Cost estimate (rough token math) — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 474
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:56:26-05:00'
sources: []
---

**Clarify**  
You’re asking for a rough cost estimate in tokens for building an AI‑powered meeting assistant that transcribes audio, summarizes key points, and answers follow‑up queries. I’ll assume: 1) the assistant runs on OpenAI’s GPT‑4 model (32k context), 2) each meeting averages 30 minutes, 3) we’ll use Whisper for transcription, and 4) a single user per meeting.

**Approach**  
1. Estimate tokens for transcription output.  
2. Add prompt engineering overhead.  
3. Add response generation tokens.  
4. Sum and multiply by token cost.

**Depth**  
- **Transcription (Whisper)**: Roughly 0.5 tokens per second of audio → 30 min × 60 s/min × 0.5 = **900 tokens**.  
- **Prompt & context**: Intro + meeting metadata ≈ 200 tokens.  
- **Summary generation**: Target 150‑200 tokens for a concise recap.  
- **Question answering**: Each user query ~30 tokens input + 60 tokens output; assume 3 queries → (90 + 180) = **270 tokens**.  
Total per meeting ≈ **900 + 200 + 200 + 270 = 1,570 tokens**.

Using GPT‑4 pricing ($0.03/1K input, $0.06/1K output), split roughly 60% input / 40% output:  
- Input: 940 tokens → $0.028  
- Output: 630 tokens → $0.0378  
**Total ≈ $0.066 per meeting**.

**Edge Cases**  
- Longer meetings or multi‑speaker overlap increase transcription tokens.  
- Very verbose summaries inflate output cost.  
- Batch processing could reduce per‑meeting overhead but increases latency.

**Optimize & Communicate**  
We can trim prompt length, cache common metadata, and use chunked summarization to keep token usage low. I’d explain these trade‑offs to stakeholders: lower cost vs. fidelity, and the impact of model choice on pricing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
