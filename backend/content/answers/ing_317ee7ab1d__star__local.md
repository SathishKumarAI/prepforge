---
qid: ing_317ee7ab1d__star__local
question: 'Explain: Cost estimate — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 423
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:07:24-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, our product team was pushing to launch an AI‑powered customer support bot that could handle live calls in real time. The CFO asked me to produce a cost estimate for the entire voice agent stack before we committed any money.

**Task:**  
I had to deliver a detailed budget covering infrastructure, data pipelines, model training, and ongoing inference costs, while also proposing a scalable architecture that would keep latency under 200 ms and support up to 10,000 concurrent calls per day.

**Action:**  
First, I broke the stack into three layers: speech‑to‑text (STT), intent classification, and text‑to‑speech (TTS). For STT I benchmarked Google Cloud Speech-to-Text vs. an on‑prem Whisper model; I ran a 24‑hour test with 500 k utterances and measured CPU usage, GPU memory, and accuracy. Using the results, I sketched a hybrid approach: batch inference on GPUs for high‑volume periods and edge inference via TensorRT for latency spikes.  
I then estimated cloud compute costs (g4dn.xlarge instances), storage (S3 10 TB/month), and API calls (1 M STT calls/ month). For the model pipeline I factored in a one‑time $15k GPU cluster for training, plus $5k/year for fine‑tuning. Finally, I built a cost‑per‑call spreadsheet and added a 20 % buffer for unexpected traffic.

**Result:**  
The estimate came to roughly **$42,000/month**, with peak inference costs capped at $12,000 for GPU usage. The CFO approved the budget, and we rolled out the agent on schedule. I learned how to translate raw model performance into real‑world operational cost, balancing cloud vs. edge resources while keeping latency guarantees intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
