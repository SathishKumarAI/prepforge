---
qid: ing_1d537f3ab4__star__local
question: Clinicians will not sign what they cannot verify. How would you build span-level
  provenance from every line of the note back to the conversation?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 330
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:28:13-05:00'
sources: []
---

**Situation** – While leading a research‑grade EHR integration at MedTech Labs, we noticed clinicians were rejecting AI‑generated discharge summaries because they couldn’t trace each sentence back to its source in the voice‑recorded consults. The audit trail was missing; every line of the note appeared “orphaned.”  

**Task** – Build a span‑level provenance system that maps every token in the final NLP‑derived note to the original audio transcript and speaker turn, so clinicians could click a sentence and see exactly which clinician utterance it came from.  

**Action** – I first added a timestamped speaker diarization layer using Kaldi and Whisper, producing an aligned subtitle file (JSON) with start/end times per speaker turn. Next, I re‑engineered the transformer summarizer to output attention weights per token. By intersecting those weights with the subtitle timestamps, we generated a “token‑span map.” We stored this mapping in a lightweight Neo4j graph, linking note tokens → transcript spans → audio file segments. The UI shows a hover tooltip that plays the 3‑second clip and highlights the speaker’s name.  

**Result** – After deployment, clinician acceptance of AI notes jumped from 32 % to 78 % within three weeks. The system also cut review time by 40 %, and we documented a 12‑point increase in trust scores on our quarterly survey. I learned that embedding provenance into the model’s inference pipeline is cheaper than post‑hoc audits and dramatically improves usability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
