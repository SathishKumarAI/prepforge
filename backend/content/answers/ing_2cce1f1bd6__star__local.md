---
qid: ing_2cce1f1bd6__star__local
question: 'Explain: DSPy: Programming Language Models'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 347
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:57:43-05:00'
sources: []
---

**Situation:**  
At my previous startup we were building a voice‑to‑text transcription service for legal firms. Our internal QA score was only 78% on complex, multi‑speaker court hearings, and clients demanded an upgrade within six months to stay competitive.

**Task:**  
I needed to design an end‑to‑end pipeline that could parse raw audio, segment speakers, and output highly accurate transcripts with speaker tags—all while staying under the budget for GPU usage.

**Action:**  
I chose DSPy as our orchestration layer. First, I wrapped a pre‑trained Whisper model into a `DSPy` function to handle initial speech recognition. Next, I built a custom “speaker diarization” sub‑pipeline using a lightweight clustering algorithm and exposed it as another `DSPy` function. I then composed these two functions in a `Pipeline` that also applied a fine‑tuned BERT model for named‑entity extraction on the transcripts. To keep GPU load low, I used DSPy's built‑in caching so the Whisper inference ran only once per audio file, and I scheduled the diarization step to run on CPU. Finally, I integrated unit tests in the pipeline that automatically scored each transcript against a gold standard.

**Result:**  
Within four months we launched the new transcription service. Accuracy jumped from 78% to 92%, speaker‑tag precision hit 89%, and GPU cost dropped by 35%. The project also taught me how DSPy’s composable, declarative style can drastically reduce engineering time for multimodal AI workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
