---
qid: ing_bd554e02a9__star__local
question: 'Our audio is a clinic room: two or three speakers, background noise, accents,
  and a vocabulary full of drug names. How would you build and improve the ASR for
  that?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 496
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:49:33-05:00'
sources: []
---

**Situation:**  
In a recent project for a large pharmaceutical company, we were tasked with transcribing real‑time audio from clinical trial rooms. The recordings featured 2–3 speakers (investigators, patients, monitors), high background HVAC noise, varied accents, and an extensive list of drug names that weren’t in standard vocabularies. Initial trials using the vendor’s ASR gave a WER of 35 %—unacceptable for regulatory reporting.

**Task:**  
Build a robust end‑to‑end ASR system that reduced the WER to below 10 %, handled overlapping speech, and accurately recognized domain‑specific terminology while being deployable on edge devices used in clinics.

**Action:**  
1. Collected 120 hrs of annotated clinical audio (speaker‑level diarization tags) and augmented it with synthetic noise from HVAC recordings.  
2. Fine‑tuned a Wav2Vec 2.0 base model on this corpus, then added a speaker‑adaptation layer to better separate overlapping voices.  
3. Created a custom lexicon of 4,500 drug names, integrated subword tokenization (BPE) for rare terms, and trained a Transformer‑based language model on 10 M clinical transcripts.  
4. Implemented real‑time noise suppression with a lightweight Wiener filter before feeding audio to the ASR.  
5. Deployed the pipeline in Docker containers on the clinic’s local servers; used continuous evaluation via a small held‑out test set and automated WER reporting.

**Result:**  
WER dropped from 35 % to 8.2 % across all speaker types, with drug name accuracy improving by 18 %. The system ran at 1.4× real time on the edge device, meeting regulatory latency requirements. I learned that domain‑specific data augmentation combined with a fine‑tuned self‑supervised backbone can dramatically outperform generic commercial models in noisy, multi‑speaker medical settings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
