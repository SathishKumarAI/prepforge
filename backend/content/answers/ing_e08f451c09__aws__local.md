---
qid: ing_e08f451c09__aws__local
question: 'Explain: Latency Budgets — Realtime Voice Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 465
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:47:15-05:00'
sources: []
---

**Situation & Goal (Customer Obsession, Deliver Results)**  
At my previous role I led the rollout of a real‑time voice assistant for a telecom client. The SLA required < 200 ms round‑trip latency from microphone to response, yet our baseline model scored 500 ms on a single instance.  

**Task & Approach (Ownership, Bias for Action)**  
I owned the end‑to‑end pipeline: ASR → intent inference → NLU → text‑to‑speech. I introduced *latency budgets* per stage, breaking the 200 ms into 120 ms for ASR, 50 ms for inference, and 30 ms for TTS, with a 10 ms safety margin.

**Action (Dive Deep, Invent & Simplify)**  
- **ASR:** Switched to Amazon Transcribe Streaming with *Custom Vocabulary* and *Streaming Callbacks*, reducing transcription time by 35 %.  
- **Inference:** Deployed the model as an AWS Lambda@Edge function in the nearest region; added a lightweight pre‑filter (AWS WAF + CloudFront) to reject low‑confidence requests, cutting cold starts.  
- **TTS:** Leveraged Amazon Polly’s *Neural* voices with *Streaming Output*, enabling pipelined playback while decoding continues.  

I instrumented each hop with X-Ray and CloudWatch metrics; the final latency averaged 170 ms (95th percentile 190 ms) at a cost of $0.02 per call, down from $0.08.

**Result & Learnings (Deliver Results, Bar‑raiser focus)**  
The solution achieved the SLA for 99.9% of calls, boosting customer satisfaction scores by 12 points and reducing churn by 3%. I documented trade‑offs: Lambda’s statelessness increased cost but eliminated VM boot overhead; we considered Fargate for future scaling but rejected due to higher latency in warm starts. The key takeaway was that *explicit latency budgets* turned a nebulous requirement into measurable, actionable goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
