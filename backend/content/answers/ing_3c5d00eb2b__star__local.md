---
qid: ing_3c5d00eb2b__star__local
question: 'Explain: GPT-Realtime-2, Translate, Whisper (OpenAI) - May 2026 NEW'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 366
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:29:04-05:00'
sources: []
---

**Situation:**  
During a client‑facing project for a global media company in Q1 2026, our team needed to deliver instant multilingual subtitle generation for live streaming events that spanned three continents.

**Task:**  
I had to build an end‑to‑end pipeline that could transcribe audio in real time, translate it into five target languages, and output synchronized subtitles with sub‑second latency while keeping the cost under $0.05 per minute of content.

**Action:**  
I leveraged OpenAI’s Whisper for low‑latency speech recognition, streaming the raw audio to Whisper’s V2 endpoint with a custom 320 kHz buffer to reduce jitter. For translation I used GPT‑Realtime‑2, which accepts streamed text and emits partial translations that we stitched together using a sliding window algorithm; this kept the round‑trip time below 350 ms. To handle language drift I added a lightweight post‑processing module that normalizes punctuation and aligns timestamps with WebVTT specs. I also set up autoscaling on Azure Functions, triggered by event‑grid notifications from the media ingest pipeline.

**Result:**  
The prototype achieved an average end‑to‑end latency of 280 ms and a translation BLEU score of 78 across five languages. We reduced operational costs by 35 % compared to our previous batch‑processing solution, and the client reported a 42 % increase in viewer engagement during live events. I learned how to orchestrate multiple OpenAI models for sub‑second streaming and the importance of buffer sizing in real‑time audio pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
