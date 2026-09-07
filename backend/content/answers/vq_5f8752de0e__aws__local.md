---
qid: vq_5f8752de0e__aws__local
question: Can a DIALOG WINDOW have scroll bar attached to it ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 376
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:53:43-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
I was tasked with adding a “Help” dialog in our internal tool that pulls long FAQ articles from DynamoDB. Users complained the text truncated and they couldn’t read beyond the window’s height.

**Action (Dive Deep, Bias for Action)**  
1. **Requirements:** The dialog must display arbitrary-length content, support pagination, be accessible, and not block the main UI thread.  
2. **Design:**  
   - Use a `WebView`/`HTMLelement` inside the dialog with CSS `overflow-y: auto; max-height: 70vh`.  
   - Fetch article fragments from DynamoDB via Lambda (API Gateway) to keep latency < 200 ms.  
   - Cache results in S3 + CloudFront for cold‑start cost savings.  
   - If content exceeds a threshold, load “Load More” button that streams next segment using async fetch—avoids large memory usage.  
3. **Scalability & Cost:** The Lambda scales with concurrency; DynamoDB throughput is provisioned per article size (~1 KB). CloudFront edge caching reduces repeat request costs by ~60%.  

**Result (Deliver Results)**  
Implemented the scrollable dialog in 4 days, reducing support tickets related to unread content by **82%** and improving user satisfaction scores from 3.2 → 4.6/5 within one sprint.

---

*Bar‑raiser notes:*  
- Demonstrated ownership: drove end‑to‑end solution.  
- Deep dive into AWS services & trade‑offs (Lambda vs EC2, caching).  
- Quantified impact and iterated quickly based on metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
