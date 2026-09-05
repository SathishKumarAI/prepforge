---
qid: ing_561aabf512__star__local
question: 'Explain: Quantization — Inference And Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 331
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:20:04-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup we had built an NLP model to detect fraud in real‑time transaction streams. The model ran in Docker containers on AWS Fargate, but latency hit 120 ms per request and CPU usage was 35 %, driving up cost and risking SLA breaches.

**Task:**  
I needed to cut inference latency by at least 40 % while keeping the fraud‑detection accuracy above 98 %. The solution had to be deployable in our existing CI/CD pipeline without breaking any production services.

**Action:**  
I first profiled the model with PyTorch’s `torch.profiler` to identify bottlenecks – mainly dense matrix multiplications on float32 tensors. I then applied post‑training dynamic quantization (int8) using TorchScript, which reduced tensor sizes by 75 %. To preserve accuracy, I fine‑tuned a few layers with a small calibration dataset and re‑validated the model against our test set. After confirming that precision dropped only 0.3 %, I rebuilt the Docker image to use the quantized TorchScript runtime, updated the Kubernetes deployment config, and added automated smoke tests in GitHub Actions.

**Result:**  
Latency fell from 120 ms to 68 ms (43 % improvement) and CPU usage dropped to 18 %. Monthly compute costs decreased by ~$4,800. I learned that careful profiling plus selective quantization can deliver substantial performance gains without compromising business‑critical accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
