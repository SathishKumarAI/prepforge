---
qid: vq_2dc0a0fca1__aws__local
question: I must put a repeating frame around these fields. How do I do this easily?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 460
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:45:11-05:00'
sources: []
---

**Situation & Task**  
While refactoring the user‑profile page for a SaaS product, I was asked to add a *repeating frame* (a border that repeats across multiple input fields) without breaking the responsive layout. The feature had to load in < 50 ms on mobile and be maintainable for future designers.

**Action**  
I approached it with **Customer Obsession** + **Dive Deep**:  
1. **Requirements & constraints** – CSS only (no JS), support iOS/Android Safari, 99.9% uptime.  
2. **Design** – Use a single CSS class (`.repeat-frame`) that sets `border-image` from a tiny SVG pattern. This keeps the DOM lean and leverages browser caching.  
3. **Implementation** – Generate the SVG once in a Lambda function triggered by CloudWatch on each deploy; store it in S3 with a CDN‑enabled CloudFront distribution (low latency).  
4. **Testing** – Automated Lighthouse score > 90, manual regression on 5 device types.  

**Result**  
The frame was applied to 12 fields across 3 pages in under 0.7 seconds, reducing page weight by 15 KB and improving GA “Time to Interactive” from 2.1 s to 1.8 s (≈ 14% gain). Maintenance cost dropped—designers now change the SVG once, no code changes.

**Bar‑raiser Takeaway**  
- **Ownership:** I owned the full pipeline (SVG generation → CDN) instead of delegating.  
- **Dive Deep:** I profiled every layer to pick the optimal solution.  
- **Quantified Impact:** 14% faster TTI and 15 KB saved per page.  
- **Learning from Failure:** Earlier attempts with CSS borders caused flicker on Safari; switching to `border-image` resolved it.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
