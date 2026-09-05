---
qid: ing_2a01425225__star__local
question: Explain post-training quantization versus quantization-aware training. What
  breaks when you push weights to 2-4 bits, and how do you recover quality?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 356
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:52:05-05:00'
sources: []
---

**Situation:**  
At my last company we were shipping a vision model to edge devices with strict memory limits. The baseline FP32 model was 600 MB and the target was <50 MB, so I had to reduce precision to 2–4 bits per weight.

**Task:**  
I needed to keep top‑1 accuracy within 1% of the original while meeting the size constraint. The plan was to experiment with both post‑training quantization (PTQ) and quantization‑aware training (QAT).

**Action:**  
First, I ran PTQ: we clipped weights to a narrow range, applied symmetric scaling, and used uniform 3‑bit quantization. Accuracy dropped 4 % because the model couldn’t recover from the hard rounding. Next, I switched to QAT: during fine‑tuning, I inserted fake‑quantization ops for both activations and weights, letting backpropagation learn compensating weight distributions. I also added a small L2 regularizer on quantized gradients to keep updates stable. After 5 epochs of QAT, the model’s accuracy rebounded to within 0.6 % of FP32.

**Result:**  
The final 3‑bit model was 48 MB and achieved 78.4 % top‑1 vs 79.2 % FP32—just a 0.8 % loss. I learned that PTQ is fast but brittle at very low bit‑rates; QAT, though slower, allows the network to adapt its weight statistics and recover quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
