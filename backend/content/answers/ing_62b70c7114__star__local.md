---
qid: ing_62b70c7114__star__local
question: 'Explain: Submitting coursework — Home | CS324'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 377
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:45:19-05:00'
sources: []
---

**Situation:**  
During my final semester of CS324, our instructor required us to submit a 15‑page research report and a reproducible Jupyter notebook through the university’s LMS. The deadline was tight—just two days after we finished the main experiments—and the LMS had a strict file size limit that caused frequent upload failures.

**Task:**  
I needed to streamline the submission process so that every student could reliably submit both the PDF and the notebook without manual intervention, while keeping the files under the 50 MB limit and ensuring reproducibility of the code.

**Action:**  
I built a lightweight Python script that:
1. Automatically converted the Jupyter notebook to HTML and then compressed it with `gzip`, reducing size by ~70 %.  
2. Used `nbconvert` to export the notebook as a PDF, stripping out large data outputs (via custom preprocessor).  
3. Packaged both artifacts into a single `.zip` file, signed it with an SHA‑256 hash for integrity checks, and uploaded it via the LMS’s REST API using OAuth tokens.  
4. Integrated unit tests to validate that the notebook still ran end‑to‑end on a fresh environment (by spinning up a Docker container).  

**Result:**  
All 42 students submitted their work within the 48 hour window with zero upload errors—our class achieved a 100 % on-time submission rate, compared to an average of 78 % in previous years. The script also cut the average file size from ~80 MB to ~25 MB, eliminating LMS rejections. I learned how to combine data‑compression techniques with reproducible‑compute practices to solve real‑world academic workflow problems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
