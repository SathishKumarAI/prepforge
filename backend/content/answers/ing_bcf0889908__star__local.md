---
qid: ing_bcf0889908__star__local
question: 'Explain: Company context — Amazon'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 317
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:48:55-05:00'
sources: []
---

**Situation:**  
When I joined Amazon’s Alexa Product Team, the voice‑to‑text accuracy for our “Shopping List” feature was only 78 % in noisy environments, causing frequent user frustration and a spike in support tickets during holiday sales.

**Task:**  
I needed to raise real‑time transcription accuracy to at least 90 % while keeping inference latency below 200 ms so the app felt instant, all within our existing on‑device edge constraints.

**Action:**  
I led a cross‑functional squad that built a lightweight acoustic model using TensorFlow Lite. We first collected a proprietary noisy‑speech corpus (over 500 k utterances) from real user recordings and applied data augmentation (speed perturbation, background noise injection). Then we trained a hybrid TDNN–LSTM network with knowledge distillation from a larger server‑side Transformer baseline, reducing the model size to 12 MB. We integrated it into the Alexa Voice Service pipeline and performed A/B testing against the legacy model on a 5 % traffic split.

**Result:**  
Accuracy jumped from 78 % to 92 %, cutting support tickets by 35 % during the holiday season. Latency stayed under 190 ms, preserving the “instant” user experience. I learned how to balance model performance with edge deployment constraints and that real‑world data augmentation can close the gap between lab metrics and production quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
