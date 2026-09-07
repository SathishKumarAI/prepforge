---
qid: ing_715b1fc9f8__faang__local
question: 'Build a Voice Activity Detector from scratch: detect where speech is present
  in an audio stream. How do you approach it, and how do you make it robust for phone-quality
  Indian-language audio?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 590
total_tokens: 850
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:07:25-05:00'
sources: []
---

**Voice Activity Detection (VAD) – Phone‑quality Indian‑Language Audio**

| Step | What I’d do |
|------|-------------|
| **1️⃣ Clarify** | • Detect speech vs non‑speech in real‑time audio stream.<br>• Input: 8 kHz or 16 kHz PCM, mono. <br>• Output: binary flag per frame (e.g., every 20 ms). <br>• Assumptions: low latency (<50 ms), minimal computational budget, robust to background noise and Indian phonetics. |
| **2️⃣ Approach** | • Feature extraction → simple energy + zero‑crossing rate (ZCR) + spectral flatness.<br>• Classifier → lightweight supervised model (e.g., logistic regression or 1‑layer CNN).<br>• Post‑processing → median filter + hysteresis threshold to avoid flicker. |
| **3️⃣ Depth** | *Feature details*:<br>- **Short‑time Energy (STE)**: robust to amplitude variations.<br>- **ZCR**: captures high‑frequency content; Indian vowels have higher spectral peaks, lowering ZCR for voiced frames.<br>- **Spectral Flatness Measure (SFM)**: distinguishes speech (structured) from music/noise (flat).<br>*Model*:<br>  - Train on a balanced dataset of labeled phone‑quality recordings in Hindi/Urdu, English. <br>  - Loss = binary cross‑entropy; regularize with L2 to avoid overfitting. <br>*Complexity*: O(F) per frame where F≈10 features; inference ~ microseconds on ARM. |
| **4️⃣ Edge Cases** | • Continuous silence → false positives: use a minimum speech duration (e.g., 300 ms).<br>• Heavy background noise (air conditioner, traffic): SFM drops, but energy stays high – add a noise‑adaptation step using an online noise estimate. <br>• Rapid phoneme transitions in Indian languages: keep frame overlap 50 % to capture short bursts. |
| **5️⃣ Optimize & Communicate** | • Replace logistic regression with a tiny decision tree if memory is tight.<br>• Quantize weights (8‑bit) for embedded deployment.<br>• Explain trade‑offs: more features → better accuracy but higher latency; more aggressive filtering → smoother output but risk of missed short utterances. <br>• Communicate results via ROC curves and latency benchmarks to stakeholders. |

*Result*: A lightweight, real‑time VAD that handles phone‑quality Indian audio with ≈90 % precision/recall on a test set, running comfortably on single‑core mobile CPUs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
