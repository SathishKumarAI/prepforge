---
qid: ing_ccb45fbabf__aws__local
question: 'Explain: Turn taking — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 392
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:03:46-05:00'
sources: []
---

**Situation / Task** – I led a cross‑functional team to build a *turn‑taking* real‑time voice agent for an e‑commerce chatbot that had to keep latency < 200 ms while handling up to 10k concurrent users.

**Action** –  
1. **Ownership & Bias for Action**: I scoped the problem, wrote a backlog of “silence detection”, “speaker diarization” and “real‑time inference” features, and set a sprint goal of 90 % success in turn‑completion.  
2. **Dive Deep & Technical Design** –  
   * Used Amazon Transcribe Streaming for low‑latency speech‑to‑text.  
   * Implemented a custom WebSocket gateway (API Gateway + Lambda@Edge) to buffer and merge partial transcripts, triggering the NLP model only when silence > 300 ms.  
   * Deployed the inference model on **Amazon SageMaker Edge**, packaging it as an ONNX runtime for sub‑50 ms inference per utterance.  
   * Added a Redis‑cluster (Elasticache) to store speaker state, ensuring idempotent turn handling and high availability.  
3. **Deliver Results** – After 4 sprints we achieved 98 % correct turn detection with <180 ms end‑to‑end latency under peak load, cutting customer support tickets by 35 %.  

**Result** – The agent improved average handle time from 12 s to 7 s and increased upsell revenue by $120k/month. I documented lessons (e.g., over‑optimistic buffer size) and iterated the design in a “post‑mortem” sprint, reinforcing a culture of continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
