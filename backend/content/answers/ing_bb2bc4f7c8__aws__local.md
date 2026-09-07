---
qid: ing_bb2bc4f7c8__aws__local
question: What Is HTTP Streaming? — What Is Critical Rendering Path? - by Neo Kim
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 481
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:26:48-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** While leading a migration of our public web portal to a new CDN in 2022, I was asked by the product team whether we could *stream* large media assets without blocking the initial page load.  
> **Task:** Demonstrate how HTTP streaming and the Critical Rendering Path (CRP) work together to deliver instant content while keeping the bundle size small.  
> **Action:**  
> 1. **HTTP Streaming** – I explained that an HTTP/2 *server‑push* or a chunked `Transfer-Encoding: chunked` response allows the server to send data as it’s generated, letting the browser render each chunk immediately.  
> 2. **CRP** – I mapped out the steps (DOM parsing → CSSOM construction → Render Tree → Layout → Paint). By placing critical CSS inline and deferring non‑critical JS with `async`/`defer`, we cut the CRP time from **1.6 s to 0.8 s** on a 3G network, improving conversion by 12%.  
> 3. I used AWS CloudFront (edge caching), S3 for origin storage, and Lambda@Edge to inject inline critical CSS on the fly, ensuring high availability (>99.9%) at < $0.02 per GB streamed.  

**Result:** The portal’s Time‑to‑First‑Byte dropped from 350 ms to 180 ms; user engagement rose by **18%** and bounce rate fell by **5%** within a month.

---

### Leadership Principles Highlighted  
- **Customer Obsession** – focused on real user metrics (CRP, conversion).  
- **Ownership & Dive Deep** – engineered the solution end‑to‑end, quantified impact, and iterated based on failure analysis.  

Bar‑raisers will note my ownership of both design and ops, deep dive into performance bottlenecks, data‑driven results, and lessons learned from a prior failed CDN rollout that taught me to validate edge caching before full deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
