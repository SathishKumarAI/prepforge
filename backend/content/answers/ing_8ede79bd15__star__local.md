---
qid: ing_8ede79bd15__star__local
question: 'Explain: Round Trip Time (RTT) — Top 9 Website Performance Metrics You
  Cannot Ignore'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 352
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:18:41-05:00'
sources: []
---

**Situation:**  
At my previous role I was leading the revamp of an e‑commerce site that had been experiencing a 12 % drop in conversion during peak holiday traffic. Analytics showed a high page load time, especially on mobile, and customers were abandoning carts before checkout.

**Task:**  
I needed to reduce the average Round Trip Time (RTT) for critical resources—images, CSS, JavaScript—to bring overall latency below 200 ms while keeping bundle size under 1 MB so that our CDN budget stayed within limits.

**Action:**  
First I instrumented Lighthouse and WebPageTest to identify the top three RTT bottlenecks: large hero images, third‑party tracking scripts, and a monolithic JS bundle. I replaced static images with next‑gen `srcset` responsive variants, used Brotli compression on the CDN edge, and split the JS bundle via dynamic imports (`React.lazy`). I also implemented HTTP/2 multiplexing and prioritized critical CSS in the `<head>`. Finally, I set up a CI pipeline that automatically ran performance budgets and alerted when RTT exceeded thresholds.

**Result:**  
Page load time dropped from 3.8 s to 1.6 s on mobile, cutting cart abandonment by 27 %. The site’s average RTT for critical resources fell from 450 ms to 140 ms, meeting our target. I learned that focusing on RTT early in the build process prevents cascading performance issues and that continuous monitoring is key to sustaining gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
