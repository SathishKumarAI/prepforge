---
qid: ing_0660395ab7__aws__local
question: 'Explain: Voice type affects latency — Understanding latency | ElevenLabs
  Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 452
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:40:22-05:00'
sources: []
---

**Situation / Task**  
At a fintech startup I led the migration of our real‑time voice‑to‑text pipeline from a legacy on‑prem stack to an AWS‑native architecture. The core requirement was to keep end‑to‑end latency under 200 ms so that users could receive instant feedback during live customer support calls. We discovered that different **voice codecs** (e.g., Opus vs. PCM) dramatically altered processing time because of the varying computational load on our inference containers.

**Action**  
1. **Dive Deep into Metrics** – I instrumented each codec path with CloudWatch custom metrics and observed a 70 % latency spike for raw PCM compared to compressed Opus.  
2. **Design & Services** –  
   - *AWS Lambda* (Python) for lightweight decoding, triggered by S3 uploads.  
   - *Amazon SageMaker Endpoint* (GPU‑optimized) for inference; we created two variants: a “fast” model with reduced precision and a “full” model for higher accuracy.  
   - *Amazon Kinesis Data Streams* to buffer audio chunks and route them to the appropriate endpoint based on codec metadata.  
3. **Bias for Action** – Implemented an autoscaling rule that spun up additional inference instances only when Opus traffic exceeded 60 % of total calls, keeping costs low during off‑peak hours.

**Result**  
- Reduced average latency from **320 ms (PCM)** to **145 ms (Opus)**.  
- Maintained a **99.8 % SLA** on latency while cutting inference cost by **35 %** due to selective scaling.  
- Received a 10‑point improvement in Net Promoter Score for the voice feature.

**Learning & Ownership**  
I documented the codec‑specific trade‑offs and built an automated dashboard that alerts engineers when a new codec is introduced, preventing future latency regressions. This experience reinforced my commitment to **Customer Obsession**, ensuring users get instant, reliable service, and **Ownership**, by proactively managing performance across the entire stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
