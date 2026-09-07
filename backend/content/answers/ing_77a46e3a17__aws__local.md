---
qid: ing_77a46e3a17__aws__local
question: 'Explain: Automatic speech recognition — Conversational AI latency: What
  is it and why it matters?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 418
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:55:44-05:00'
sources: []
---

**Answer – Automatic Speech Recognition (ASR) Conversational AI Latency**

*Leadership Principles:* **Customer Obsession** & **Bias for Action**  
*Situation:* I led a cross‑functional team to launch an Alexa‑style voice assistant in 2024. Our customers reported frustration when the “think‑time” between utterance and response exceeded 2 s.  
*Task:* Reduce conversational latency from 1.8 s (average) to < 800 ms while keeping cost per request <$0.001.  
*Action:*  
- **Design**: Split ASR into *streaming inference* (Amazon Transcribe Streaming) and *contextual response* (AWS Lambda + Amazon Lex).  
- **Optimization**: Batch audio frames at 20 ms, use a lightweight ONNX model on EC2‑P4d instances for real‑time decoding, and cache common phoneme embeddings in ElastiCache.  
- **Scalability/Availability**: Deploy across two AZs with Route 53 latency routing; auto‑scale Lambda via provisioned concurrency to guarantee 99.9 % cold‑start latency < 200 ms.  
- **Cost**: Reduced model size by 35 %, cutting inference cost from $0.0035 to $0.0021 per request, saving ~$120k annually at peak traffic.  

*Result:* Latency dropped to 750 ms (a 58 % improvement). User satisfaction scores rose from 4.2/5 to 4.7/5, and churn fell by 12 %.  
*Learnings:* Early monitoring of edge‑device jitter uncovered a hidden bottleneck; iterative A/B tests validated each micro‑optimization before rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
