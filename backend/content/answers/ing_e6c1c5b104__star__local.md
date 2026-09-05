---
qid: ing_e6c1c5b104__star__local
question: 'Explain: Your PM wants AI-powered summarization in the app. Walk me through
  the on-device vs cloud decision.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 371
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:09:35-05:00'
sources: []
---

**Situation:** In mid‑2023 I was leading a mobile health app that logged daily patient notes. The product manager requested an AI‑powered summarization feature so clinicians could quickly review progress without scrolling through raw text.

**Task:** My job was to decide whether the summarization model should run on-device or in the cloud, ensuring low latency, high accuracy, and compliance with HIPAA regulations while keeping battery usage acceptable.

**Action:** I started by profiling the app’s data size (average note 1.2 KB) and user bandwidth patterns; most users were in rural areas with intermittent connectivity. I benchmarked two open‑source transformer models: a distilled BERT (~12 M params, 0.4 s inference on iPhone 14) and a larger GPT‑2 variant (50 M params, 1.8 s). Using Core ML conversion, the distilled model fit within 30 MB and used <3% CPU during idle periods. I also added an encryption layer to cache summaries locally for offline use. For privacy, all data was tokenized before any cloud call; if a user opted in, we streamed anonymized logs to a HIPAA‑compliant AWS SageMaker endpoint for continuous model improvement.

**Result:** We launched the on-device summarizer with 92% F1‑score versus the baseline 85%, and latency dropped from 2.5 s (cloud) to 0.4 s (device). Battery impact was <1% over a typical day, and compliance audit passed without any data breaches. I learned that balancing model size, inference speed, and privacy often means hybrid solutions: edge for instant user experience, cloud for heavy learning updates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
