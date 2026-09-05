---
qid: ing_1d28f17e76__star__local
question: 'Explain: Loss spikes mid-run on a large pretraining job. Walk me through
  your debugging process.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 309
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:27:44-05:00'
sources: []
---

**Situation**  
During a month‑long GPT‑style pretraining run on our new TPU cluster, the loss curve was smooth for the first two days but then started spiking from 0.23 up to 1.8 every few steps before gradually stabilizing again.

**Task**  
I had to identify whether this was a data issue, a numerical stability bug, or a hardware fault so we could keep the job on schedule and avoid wasting GPU hours.

**Action**  
First, I added per‑step tensor summaries for gradients, activations, and optimizer states. The histograms revealed that layer 12’s gradients were exploding while earlier layers stayed normal. I checked the floating‑point precision: the model was using mixed‑precision (FP16) but the AdamW implementation had a bug that only clipped in FP32. Switching to an FP32‑only AdamW for that layer and adding gradient clipping at 1.0 fixed the spikes. Next, I ran a small synthetic benchmark on the same TPU slice; it behaved normally, ruling out hardware. Finally, I added a sanity check that logs any NaNs or infs immediately.

**Result**  
The loss stabilized within an hour of applying the clip fix, and the overall training time stayed under 2 % longer than planned. The incident taught me to instrument mixed‑precision training early and to keep gradient clipping in sync with precision changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
