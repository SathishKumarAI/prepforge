---
qid: ing_ead0046553__star__local
question: 'Explain: What a 3 sounds like vs. what a 5 sounds like'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 348
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:17:48-05:00'
sources: []
---

**Situation** – In my senior year I worked on a campus project that built an AI tutor for music students. The tutor needed to give instant feedback when a student played scales on a digital piano, so we had to teach the model to distinguish subtle differences between notes like “B♭” (our label 3) and “C” (label 5).

**Task** – My goal was to create a reliable audio‑feature pipeline that could separate those two pitches in real time, even with background noise from other students.

**Action** – I first recorded thousands of clean notes for each pitch using a high‑fidelity microphone. Then I extracted Mel‑spectrograms and fed them into a lightweight CNN trained on 80% of the data. To handle noisy environments I added a Short‑Time Fourier Transform (STFT) denoising layer, and tuned the class weights so that misclassifying a “C” as a “B♭” would incur a higher penalty. During validation I used an early‑stopping criterion on cross‑entropy loss to avoid overfitting.

**Result** – The final model achieved 94 % accuracy on a held‑out test set, and in live trials it correctly identified 93 % of “C” notes versus 89 % for “B♭”. The tutor could now give instant feedback within 200 ms. I learned how to balance feature extraction, model complexity, and class‑specific penalties when working with close audio classes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
