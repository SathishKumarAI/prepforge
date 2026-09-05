---
qid: ing_1e1b42129b__star__local
question: 'Explain: What you''re actually expected to know — Mobile Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 342
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:30:05-05:00'
sources: []
---

**Situation:**  
At my last job, the product team wanted to add a real‑time speech‑to‑text feature for our Android fitness app so users could dictate workout notes while on the go.

**Task:**  
I had to deliver a lightweight, battery‑friendly model that ran locally on phones without pulling data to the cloud, and integrate it into the existing Kotlin codebase with minimal latency.

**Action:**  
First, I benchmarked several on‑device ASR libraries—TensorFlow Lite, Vosk, and Whisper Tiny—and chose TensorFlow Lite because of its quantization support. I converted a pre‑trained Whisper checkpoint to TFLite, pruned it by 70 % using post‑training quantization, and wrapped the inference in a coroutine‑based `SpeechRecognizer` class that streamed audio from the microphone buffer. To keep battery usage low, I throttled the model to process only every third frame and used Android’s Doze‑friendly `WorkManager` for background sessions. Finally, I added an adaptive confidence threshold UI overlay so users could see when the transcription might be fuzzy.

**Result:**  
The feature achieved 92 % accuracy on a 100‑sentence test set, dropped inference time to under 300 ms per sentence, and reduced battery drain by 15 % compared with our baseline. Users reported that the dictation felt “instant” and it increased daily active sessions by 18 %. I learned how to balance model size, latency, and energy consumption while keeping the user experience smooth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
