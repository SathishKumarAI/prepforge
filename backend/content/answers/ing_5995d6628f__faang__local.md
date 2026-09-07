---
qid: ing_5995d6628f__faang__local
question: Design a real-time voice agent for a citizen helpline in Hindi and three
  regional languages, targeting sub-250ms perceived latency over a phone line. What
  is the architecture?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 658
total_tokens: 915
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:12:10-05:00'
sources: []
---

**Clarify**  
We’re building a live‑call assistant that understands spoken Hindi + 3 other regional languages (e.g., Marathi, Tamil, Gujarati). Calls come over PSTN; we must keep *perceived* latency ≤250 ms end‑to‑end from user utterance to the first agent reply. The system should handle up to 10k concurrent calls and scale with traffic spikes.

**Approach**  
1. **Edge Voice Capture → CDN Edge (e.g., CloudFront) → Low‑latency SBC**: Route audio through a Session Border Controller that performs G.711/G.729 transcoding and forwards packets to the nearest compute node.  
2. **Lightweight ASR at Edge**: Deploy a quantized, 5‑ms VAD + 15‑ms acoustic model (e.g., DistilWhisper) on an edge GPU/TPU for instant transcription.  
3. **Language Detection & Routing**: Use a tiny language ID network to forward text to the appropriate LLM pipeline.  
4. **Serverless Conversational Engine**: Each language has a dedicated *function* (AWS Lambda / Cloud Run) that runs a distilled LLM (e.g., GPT‑4o mini) fine‑tuned on regional FAQs. Functions are pre‑warm; response generation ≤120 ms.  
5. **Text‑to‑Speech (TTS)**: Use a low‑latency neural TTS (Tacotron‑2 + WaveRNN) hosted in the same region; synthesis ≤80 ms.  
6. **Real‑time Audio Stream**: The SBC stitches ASR text → LLM response → TTS audio back to the caller with minimal jitter buffering.

**Depth**  
- *Latency budget*: 5 ms VAD + 15 ms ASR + 10 ms network → 30 ms; 120 ms LLM inference → 150 ms; 80 ms TTS synthesis → 230 ms. Add 20 ms buffering for packet jitter = 250 ms.  
- *Scalability*: Edge SBCs auto‑scale with load balancers; serverless functions maintain warm pool >1k concurrent requests.  
- *Reliability*: Dual path fallback (primary + secondary language model) and error‑correction via confidence thresholds.

**Edge Cases**  
- Noisy environments → robust VAD & noise suppression.  
- Accents or code‑mixing → multi‑lingual ASR models trained on mixed corpora.  
- Sudden traffic spike → pre‑warming strategy for LLM functions; CDN auto‑scaling.

**Optimize & Communicate**  
To shave extra 10–20 ms, we can fuse VAD and language ID into a single network and batch micro‑requests to the LLM (e.g., pipeline parallelism). I’d present this architecture with a latency waterfall diagram and stress‑test plan, highlighting trade‑offs between model size vs. inference speed and how we’ll monitor real‑time metrics to keep perceived latency under 250 ms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
