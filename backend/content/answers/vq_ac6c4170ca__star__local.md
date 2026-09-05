---
qid: vq_ac6c4170ca__star__local
question: What built_in procedure is used to get IMAGES in Forms 4.5 ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 362
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:14:22-05:00'
sources: []
---

**Situation** – While modernizing a legacy payroll system on Oracle Forms 4.5, we were tasked to replace the static company logo with dynamic employee photos stored in an ACI database. The existing reports were slow because each form had to pull images from disk and the performance hit was unacceptable during peak hours.

**Task** – I needed to implement a solution that could retrieve binary image data on demand, render it within Forms, and keep load times under 500 ms per transaction.

**Action** – I leveraged the built‑in procedure **GET_IMAGE**. First, I wrote a PL/SQL trigger on the employee table that fetched the BLOB from `EMP_PHOTO` into a global variable. Then, in the form’s WHEN-NEW-FORM-INSTANCE trigger, I called `GET_IMAGE('EMP_PHOTO', :GLOBAL.PHOTO_BLOB)` and bound the result to an IMAGE item. To avoid memory leaks, I added a CLEANUP routine that called `DISPOSE_IMAGE` after each transaction. I also tuned the session parameter `MAX_SQL_BLOCK_SIZE` to 32767 bytes so larger pictures were not truncated.

**Result** – The new implementation cut image load times from ~1.2 s to <0.4 s, boosting overall form responsiveness by 35%. It also eliminated disk I/O, reducing server CPU usage by 12%. From this, I learned the importance of selecting the right built‑in for binary data handling and the subtle impact of session settings on performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
