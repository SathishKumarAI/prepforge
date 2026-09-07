---
qid: ing_a6d30facc7__faang__local
question: Your agent reads screenshots and PDFs supplied by users. How do you defend
  against instructions hidden inside images?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 447
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:12:48-05:00'
sources: []
---

**Clarify**  
We need a system that processes user‑supplied images/PDFs, extracts text (OCR), and then runs LLM prompts. The risk: malicious users embed hidden instructions (e.g., steganography) that the model could inadvertently follow. I’ll assume we control the OCR pipeline, have access to image metadata, and can enforce policy rules on the extracted text.

**Approach**  
1. **Image‑level filtering** – detect anomalies (high entropy, unusual patterns).  
2. **Metadata sanitization** – strip EXIF/IPTC/ICC profiles that may carry hidden data.  
3. **OCR consistency check** – run multiple OCR engines and compare outputs; large divergences flag potential manipulation.  
4. **Content‑level policy enforcement** – run the extracted text through a lightweight classifier to catch suspicious commands before passing to the LLM.

**Depth**  
- Use OpenCV + Tesseract + Google Cloud Vision for redundancy; compare character‑by‑character diff, flag >30 % mismatch.  
- Strip metadata via Pillow’s `ImageFile.LOAD_TRUNCATED_IMAGES` and explicit deletion.  
- Train a BERT‑based “stego‑intent” classifier on synthetic steganographic examples (watermarks, hidden payloads) to score the extracted text; threshold set conservatively.  
- Complexity: OCR O(N) per image; diff O(M); classifier inference O(1). Trade‑off is added latency (~200 ms) but negligible for most user flows.

**Edge Cases**  
- Legitimate watermarks (e.g., “© 2024”) misclassified as hidden data.  
- Low‑resolution images where OCR is unreliable, leading to false negatives.  
- Users embedding instructions in non‑text layers (vector graphics); need layer extraction.

**Optimize & Communicate**  
Iterate thresholds based on false‑positive rates; expose a “safe mode” flag for developers. Document the pipeline flow diagram and share performance metrics. This layered defense balances user experience with robust security against hidden instructions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
