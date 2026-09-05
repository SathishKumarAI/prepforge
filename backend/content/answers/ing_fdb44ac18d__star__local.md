---
qid: ing_fdb44ac18d__star__local
question: 'Explain: Title: Robust Speech Recognition via Large-Scale Weak Supervision'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 348
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:56:16-05:00'
sources: []
---

**Situation:**  
At my last startup we were tasked with launching a real‑time transcription service for multilingual call centers. Our labeled dataset was only 200 hours of clean English audio, but the production traffic included noisy, accented speech from 30+ languages.  

**Task:**  
I had to build a model that achieved >90% WER on this diverse, unlabeled stream while keeping inference latency under 50 ms per utterance.

**Action:**  
I set up a weak‑supervision pipeline: first, I used a pre‑trained wav2vec 2.0 backbone and fine‑tuned it on the small clean corpus. Then I generated pseudo‑labels for 10 TB of raw call audio using an ensemble of confidence‑thresholded recognizers (Google ASR + Kaldi). Next, I trained a transformer‑based encoder–decoder with curriculum learning—starting from high‑confidence samples and gradually adding lower‑confidence ones. To control latency, I distilled the large model into a 3-layer ConvNet and quantized it to INT8.

**Result:**  
The final system dropped WER from 28% on noisy data to 12%, surpassing the target by 4 percentage points while maintaining <45 ms latency. I learned that careful weak‑label filtering plus model distillation can bridge the gap between scarce clean data and massive, noisy real‑world audio.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
