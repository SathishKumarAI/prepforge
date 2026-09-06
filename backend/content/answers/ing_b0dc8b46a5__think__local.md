---
qid: ing_b0dc8b46a5__think__local
question: 'Explain: Text normalisation is where TTS quality actually dies in production.
  Walk me through it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 480
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:41:12-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
- *What* do we mean by “text normalisation” (expanding abbreviations, numbers, dates, etc.)?  
- *Why* is it a choke‑point for quality in real deployments (not just research demos)?  
- Assume a standard TTS pipeline: raw text → normalization → tokenisation → acoustic model → waveform.

**2. Adopt a “pipeline‑breakdown” mental model**  
- Treat each stage as a black box with an input–output contract.  
- Normalisation is the first transformation; errors here propagate unchanged downstream, making them hard to debug later.

**3. Step‑by‑step reasoning toward the answer**  
- **Input variability:** real‑world text contains slang, OCR noise, mixed languages, etc., far beyond curated corpora.  
- **Rule‑based vs ML approaches:** rule sets can miss edge cases; ML models need massive annotated data and still may hallucinate expansions.  
- **Error amplification:** a mis‑expanded number (“3” → “thirty”) changes prosody, pause placement, and intonation, leading to unnatural sounding speech.  
- **Production constraints:** latency, memory, and platform limits force lightweight normalisers that sacrifice coverage, increasing failure rates.

**4. Common traps to avoid**  
- Don’t conflate *normalisation* with *tokenisation*; they are distinct but interdependent.  
- Avoid assuming “more rules = better” – over‑rule sets can introduce false positives.  
- Beware of the “black‑box” myth: an apparently perfect normaliser may still emit unseen errors that only surface in full TTS synthesis.

**5. Sanity‑check and verbalise the insight**  
- Ask: if I deliberately inject a typo (“phonetc”), does the normaliser correct it? If not, the downstream acoustic model will produce garbled audio—exactly what users report as “quality death.”  
- Communicate this by mapping each failure point to its audible symptom (e.g., wrong expansion → wrong prosody). This concrete link helps stakeholders understand why normalisation is a critical bottleneck in production TTS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
