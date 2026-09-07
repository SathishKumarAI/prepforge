---
qid: ing_fb6797f1a1__aws__local
question: 'Explain: Your voice agent both cuts users off mid-sentence and leaves awkward
  dead air. Diagnose and fix.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 398
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:46:55-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
At a consumer‑voice startup I led the voice‑agent team when customers reported that the agent would cut them off mid‑sentence and then stay silent for 2–3 s before responding. The issue hurt retention—our NPS fell from **+45 to +28** in two weeks.

**Action (Dive Deep & Bias for Action)**  
1. **Telemetry & Analysis** – Instrumented the ASR pipeline with Amazon Transcribe’s `PartialResults` and CloudWatch metrics. 80 % of cuts happened during “long‑pauses” (>700 ms) where confidence dropped below 0.6.
2. **Model Tuning** – Retrained the intent classifier on a balanced dataset (10k utterances) using Amazon SageMaker, raising average F1 from .78 to .91.
3. **Timeout & Prompt Logic** – Implemented an adaptive timeout in Lambda: if no new partial result arrives within 400 ms, send “I’m listening” prompt; if still silent for 1 s, emit “Sorry, I didn’t catch that.” This reduced dead‑air from 2.3 s to **0.4 s**.
4. **Deployment** – Rolled changes via SageMaker Endpoint with A/B testing (10% traffic). Monitored latency in CloudWatch; SLA kept <150 ms.

**Result (Deliver Results)**  
- NPS rebounded to +43 within a week.  
- User‑reported interruptions dropped 70 %.  
- System cost increased only **3 %** due to additional Lambda invocations.

**Learning** – Early telemetry is critical; a small timeout tweak saved user trust and kept infrastructure lean.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
