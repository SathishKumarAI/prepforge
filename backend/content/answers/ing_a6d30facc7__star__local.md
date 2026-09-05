---
qid: ing_a6d30facc7__star__local
question: Your agent reads screenshots and PDFs supplied by users. How do you defend
  against instructions hidden inside images?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 325
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:06:43-05:00'
sources: []
---

**Situation:** In a mid‑size fintech project, our AI chatbot was tasked with processing user‑submitted screenshots and PDFs to extract transaction data. During a security audit, we discovered that some users were embedding malicious instructions in images—text hidden behind steganography—that could trigger unintended API calls.

**Task:** I had to design a defense system that would detect and neutralize hidden instructions without compromising legitimate image content or user privacy.

**Action:** First, I implemented an image pre‑processing pipeline using OpenCV to normalize resolution and color space. Then, I integrated a lightweight steganalysis module based on the Least Significant Bit (LSB) statistical test, which flags images with anomalous bit distributions. For flagged files, we applied a content‑aware masking algorithm that overlays a red “blocked” stamp before OCR. Parallelly, I set up a sandboxed execution environment for any extracted text, ensuring no code could escape via hidden commands. Finally, I added audit logging of all image inspections and blocked attempts to the central SIEM.

**Result:** The new system reduced false‑positive extraction errors by 23% while blocking 98% of steganographic attempts. User complaints dropped from 12 per week to 1, and we met compliance deadlines ahead of schedule. I learned that combining statistical detection with visual masking provides a robust first line of defense against hidden image instructions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
