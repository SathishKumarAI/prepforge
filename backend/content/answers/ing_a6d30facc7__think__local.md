---
qid: ing_a6d30facc7__think__local
question: Your agent reads screenshots and PDFs supplied by users. How do you defend
  against instructions hidden inside images?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 483
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:04:48-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - *What is “hidden inside images” meaning?*  Assume steganographic payloads or text embedded in OCR that could contain malicious instructions.  
   - *What data can we access?*  We have raw image bytes and any extracted text, but no external network for verification.

**2. Adopt a layered defensive framework**  
   - **Pre‑processing filter**: Detect abnormal patterns (e.g., high‑frequency noise, unusually large metadata).  
   - **Content validation**: Run OCR only after verifying that the image is benign.  
   - **Instruction sanitization**: Strip or neutralize any commands before execution.

**3. Step‑by‑step reasoning**  
   1. *Image sanity check*: Verify dimensions, color depth, and file format against expected ranges. Reject if anomalous.  
   2. *Metadata audit*: Strip EXIF/IPTC data that could carry hidden payloads.  
   3. *Steganography scan*: Run a lightweight detector (e.g., LSB analysis) to flag suspicious modifications.  
   4. *OCR extraction* only on clean images; run the output through a parser that flags disallowed tokens or patterns (e.g., “run”, “download”).  
   5. *Command gating*: Any extracted instruction must match a whitelist of safe actions before being passed to the agent.

**4. Common pitfalls to avoid**  
   - Assuming OCR is always safe; it can misinterpret noise as text.  
   - Over‑trusting file headers—malware often repurposes legitimate formats.  
   - Ignoring that steganography can be subtle; a single-bit flip may bypass simple checks.

**5. Sanity‑check & communicate**  
   - *Internal*: Log every step with severity tags (e.g., “INFO: OCR passed”, “WARN: stego flag”).  
   - *External*: Explain to the user that images are scanned for hidden instructions and only clean, approved content is processed. This transparency builds trust and lets users correct accidental flags.

By layering checks, sanitizing extracted text, and maintaining a strict whitelist of allowable actions, we robustly defend against hidden instructions embedded in images.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
