---
qid: ing_0a3e0eeef6__star__local
question: 'Explain: And remove this black line, now these — Python Full Course for
  Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 339
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:49:19-05:00'
sources: []
---

**Situation**  
During a summer internship at a medical imaging startup, our team received a batch of dermoscopy images that were being rejected by the automated triage system because each photo contained a thin black border left by the camera lens. The rejection rate hit 23 % and slowed down the review pipeline.

**Task**  
I was tasked to design an end‑to‑end solution that would automatically detect those borders, remove them cleanly, and preserve the diagnostic content so the downstream CNN could run without manual intervention.

**Action**  
First I built a lightweight U‑Net in PyTorch trained on 3,200 labeled images (border vs. no border). The model predicted a binary mask; I then used morphological opening to shrink noisy edges before applying OpenCV’s `inpaint` with the Telea algorithm to fill the removed region from surrounding pixels. To speed inference, I exported the network via ONNX and deployed it on our GPU‑enabled inference server, achieving 12 ms per image. I also added a confidence threshold (0.8) so borderline cases were sent for human review.

**Result**  
After deployment, the rejection rate dropped from 23 % to 1 %, freeing up 150 hours of radiologist time per month. The project taught me how to blend deep learning with classical image processing for real‑world constraints and reinforced the importance of end‑to‑end testing on production data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
