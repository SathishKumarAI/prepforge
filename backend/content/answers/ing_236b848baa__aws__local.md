---
qid: ing_236b848baa__aws__local
question: A generation fails halfway through the stream. What does good error and
  retry UX look like?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 477
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:46:33-05:00'
sources: []
---

**Situation:**  
While launching a real‑time AI inference pipeline for a video‑streaming platform (≈ 10 M users/day), the GPU‑based model service would occasionally crash halfway through decoding, leaving half‑finished segments on user devices.

**Task:**  
Design an error & retry UX that keeps users in control, guarantees data integrity, and reduces support tickets by 30%.

**Action:**  
1. **Back‑end:**  
   * Wrap inference calls in a Step Functions state machine with a **Retry** policy (exponential backoff + jitter).  
   * Store partial results in S3; use **S3 Object Lock** to prevent accidental overwrite.  
   * Expose an idempotent API via API Gateway; each request carries a UUID so retries are safe.  

2. **Front‑end UX:**  
   * Show a progress bar that pauses at the failure point and displays “Processing interrupted – retrying automatically.”  
   * After 3 automatic attempts, reveal a “Retry Now” button and a toast explaining why it failed (e.g., “GPU overload”).  
   * Log every failure to CloudWatch Logs; trigger an SNS alert for ops if error rate > 5%.

**Result:**  
- Auto‑retry success rate rose from 68% to **95%**, cutting support tickets by **32%**.  
- Cost impact: Step Functions + Lambda added <$0.02 per request, negligible vs the $1.50 saved in reduced churn.

**Reflection (Bar‑raiser focus):**  
I owned the end‑to‑end flow, dove deep into failure logs to uncover root causes, quantified impact with clear metrics, and iterated after a failed first trial where we had no idempotency key—learning that a single point of failure can cascade. This aligns with **Customer Obsession**, **Ownership**, and **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
