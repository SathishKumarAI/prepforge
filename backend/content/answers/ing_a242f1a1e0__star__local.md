---
qid: ing_a242f1a1e0__star__local
question: Beyond text in a chat box, what channels can indirect prompt injection arrive
  through, and how do you sanitise them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 345
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:57:09-05:00'
sources: []
---

**Situation:**  
During the launch of our AI‑powered customer support platform, we noticed a spike in unexpected responses from the chat widget—messages that seemed to be triggered by hidden prompts embedded in user uploads and metadata.

**Task:**  
I had to identify all non‑textual vectors where prompt injection could slip through (e.g., image EXIF data, audio transcripts, file names, URL parameters) and implement a robust sanitisation pipeline before the input reached the LLM.

**Action:**  
1. Conducted a threat‑modeling workshop with security and DevOps to catalogue potential injection points.  
2. Built a multi‑stage parser:  
   - **File layer:** Strip EXIF tags from images using Pillow; strip ID3 tags from audio via mutagen.  
   - **Metadata layer:** Normalise filenames, URLs, and form fields with regex rules that drop non‑ASCII characters and escape control tokens.  
   - **Transcript layer:** Run Whisper outputs through a custom token blacklist before concatenation.  
3. Integrated the parser into our CI/CD pipeline as a pre‑processing microservice (FastAPI) with rate limiting.  
4. Added unit tests for each vector, simulating malicious payloads.

**Result:**  
Post‑deployment, injection attempts dropped from 12 per day to zero over a two‑month period, while latency increased by only 15 ms. The team adopted the sanitisation framework as standard practice across all AI products, and I documented the process in our internal security playbook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
