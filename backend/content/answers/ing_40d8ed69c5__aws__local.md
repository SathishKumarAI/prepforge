---
qid: ing_40d8ed69c5__aws__local
question: What are the differences between promises and observables in Angular 8?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 390
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:52:39-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a recent sprint I had to explain the *promise vs observable* trade‑off to a new front‑end developer on our e‑commerce platform.  
**Situation:** The team was refactoring an order‑confirmation page that made three sequential HTTP calls. The original code used **Promises**, which caused “callback hell” and made unit testing brittle.  
**Task:** I needed to show why **Observables** (RxJS) were a better fit for our use case—multiple, cancelable requests, easy retry logic, and seamless integration with the AWS API Gateway back‑end that streams order status updates via WebSocket.  

**Action:**  
1. Created a small demo component that compared both approaches side‑by‑side, highlighting the *unsubscription* pattern to avoid memory leaks.  
2. Wrote unit tests using Jest; the observable version reduced test code by **35 %** and achieved 100 % coverage on async logic.  
3. Leveraged **Amazon EventBridge** for real‑time order updates, demonstrating how Observables can tap into a stream (`fromEventPattern`) with minimal latency (≤50 ms).  

**Result:** The refactor cut page load time from **1.8 s to 1.2 s**, improved developer velocity by **40 %**, and decreased memory usage in production by **20 %**.  
*Leadership Principles:* **Ownership** – I took full responsibility for the migration; **Dive Deep** – dissected the async patterns and measured impact; **Deliver Results** – quantifiable performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
