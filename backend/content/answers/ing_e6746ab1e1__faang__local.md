---
qid: ing_e6746ab1e1__faang__local
question: 'Explain: Time to First Byte (TTFB) — Top 9 Website Performance Metrics
  You Cannot Ignore'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 638
total_tokens: 881
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:34:24-05:00'
sources: []
---

**Clarify**  
You’re asking for an explanation of **Time to First Byte (TTFB)** and why it ranks among the nine critical web‑performance metrics that every product or engineering team must monitor. I’ll assume we’re talking about measuring user experience in a production browser environment and that TTFB is being tracked via real‑user monitoring (RUM) or synthetic tests.

**Approach**  
1. Define TTFB precisely.  
2. Explain its place in the “waterfall” of page load events.  
3. Highlight what it tells us about server, network, and edge infrastructure.  
4. Map it to one or two of the other top metrics (e.g., First Contentful Paint, LCP).  
5. Discuss how to surface alerts and drive optimization.

**Depth**  
TTFB is the elapsed time from when a client sends an HTTP request until the first byte of the response arrives back at the browser. It captures **DNS resolution, TCP handshake, TLS negotiation, server processing, and network latency** before any content can be rendered. In the waterfall chart, it sits between “request sent” and “response received.”  

Why it matters:  
- **Server health** – long TTFB often indicates CPU/memory contention or slow database queries.  
- **CDN & edge** – sub‑100 ms TTFB usually means a well‑provisioned edge; >300 ms can point to missing cache layers.  
- **User impact** – high TTFB delays First Contentful Paint (FCP) and Largest Contentful Paint (LCP), directly hurting perceived speed.

**Edge cases**  
- *Static assets served from CDN*: TTFB may be very low even if the overall page load is slow due to large JS bundles.  
- *Server‑side rendering (SSR)*: TTFB includes the time to generate HTML; a mis‑configured SSR can inflate it dramatically.  
- *Network throttling or 3G*: TTFB will increase, but this is expected and should be flagged as “network‑dependent” rather than a server bug.

**Optimize & communicate**  
1. **Instrumentation**: Use `performance.timing` (legacy) or `PerformanceNavigationTiming` to capture TTFB per request.  
2. **Alerting**: Thresholds—e.g., 200 ms for CDN, 400 ms for origin servers; trigger when >90th percentile exceeds threshold for >5 min.  
3. **Root‑cause analysis**: Correlate spikes with deployment events or traffic surges.  
4. **Actionable insights**: Cache warming, database query optimization, or moving heavy logic to a CDN worker.

By presenting TTFB in this structured way—definition, context, edge cases, and actionable steps—you demonstrate clear communication, depth of understanding, and a data‑driven mindset that FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
