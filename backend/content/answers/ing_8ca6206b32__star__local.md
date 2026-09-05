---
qid: ing_8ca6206b32__star__local
question: 'Explain: Devin is Getting a Windows PC — Blog | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 336
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:14:08-05:00'
sources: []
---

**Situation** – At the end of my internship at a fintech startup, we needed to prototype an anomaly‑detection model for transaction fraud. The team had only a laptop running macOS; however, our production pipeline was built in Azure Machine Learning Studio, which required a Windows environment for the GPU‑accelerated training scripts.

**Task** – I had to provision a cost‑effective Windows workstation that could run the same Docker containers and Python dependencies as the cloud service, while keeping data security compliant with GDPR.

**Action** – I sourced an Intel i7 laptop with 16 GB RAM, installed Ubuntu WSL2 for Linux compatibility, then set up Docker Desktop on Windows. Using the official NVIDIA CUDA toolkit images, I rebuilt our training container to include cuDNN and PyTorch‑1.12. I scripted a CI pipeline in GitHub Actions that pushed the trained model to an Azure Blob Storage container after each nightly run, ensuring the same environment across dev, test, and prod. To satisfy compliance, I encrypted all local storage with BitLocker and restricted network access via a VPN.

**Result** – The new Windows workstation cut training time from 12 hrs on the macOS laptop to 4 hrs on GPU, improving our iteration cycle by 66%. Production latency dropped from 2.3 s to 0.9 s per inference. I learned how cross‑platform tooling and containerization can bridge infrastructure gaps while maintaining regulatory safeguards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
